package main

import (
	"encoding/json"
	"fmt"
	"os"
	"os/exec"
	"regexp"
	"strconv"
	"strings"
)

type Lesson struct {
	Number   int      `json:"number"`
	Section  int      `json:"section"`
	Title    string   `json:"title"`
	Topics   []string `json:"topics"`
	PageNum  int      `json:"page"`
}

func main() {
	cmd := exec.Command("pdftotext", "-f", "5", "-l", "22", "Grade4-Student-eBook-Course-1.pdf", "-")
	out, err := cmd.Output()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error running pdftotext: %v\n", err)
		os.Exit(1)
	}

	lines := strings.Split(string(out), "\n")
	var lessons []Lesson

	currentLesson := -1
	currentLessonPage := 0
	var currentTopics []string

	lessonRegex := regexp.MustCompile(`^Lesson\s+(\d+)\s+[\.\s]+(\d+)`)
	investigationRegex := regexp.MustCompile(`^Investigation\s+(\d+)`)

	flushLesson := func() {
		if currentLesson > 0 {
			title := strings.Join(currentTopics, " • ")
			if title == "" {
				title = fmt.Sprintf("Lesson %d", currentLesson)
			}
			sec := (currentLesson-1)/10 + 1
			lessons = append(lessons, Lesson{
				Number:  currentLesson,
				Section: sec,
				Title:   title,
				Topics:  currentTopics,
				PageNum: currentLessonPage,
			})
			currentTopics = nil
			currentLesson = -1
		}
	}

	for _, line := range lines {
		line = strings.TrimSpace(line)
		if line == "" {
			continue
		}

		if m := lessonRegex.FindStringSubmatch(line); m != nil {
			flushLesson()
			lNum, _ := strconv.Atoi(m[1])
			pNum, _ := strconv.Atoi(m[2])
			currentLesson = lNum
			currentLessonPage = pNum
			continue
		}

		if m := investigationRegex.FindStringSubmatch(line); m != nil {
			flushLesson()
			continue
		}

		if strings.HasPrefix(line, "•") {
			topic := strings.TrimSpace(strings.TrimPrefix(line, "•"))
			if topic != "" && currentLesson > 0 {
				currentTopics = append(currentTopics, topic)
			}
		}
	}
	flushLesson()

	fmt.Printf("Parsed %d lessons across 12 sections\n", len(lessons))

	data, err := json.MarshalIndent(lessons, "", "  ")
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error marshaling JSON: %v\n", err)
		os.Exit(1)
	}

	err = os.WriteFile("curriculum.json", data, 0644)
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error writing curriculum.json: %v\n", err)
		os.Exit(1)
	}
	fmt.Println("Saved curriculum.json successfully.")
}
