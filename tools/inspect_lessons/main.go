package main

import (
	"encoding/json"
	"fmt"
	"os"
	"os/exec"
	"strconv"
	"strings"
)

type LessonTOC struct {
	Number  int      `json:"number"`
	Section int      `json:"section"`
	Title   string   `json:"title"`
	Topics  []string `json:"topics"`
	Page    int      `json:"page"`
}

func main() {
	curricData, err := os.ReadFile("curriculum.json")
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error reading curriculum.json: %v\n", err)
		os.Exit(1)
	}

	var toc []LessonTOC
	if err := json.Unmarshal(curricData, &toc); err != nil {
		fmt.Fprintf(os.Stderr, "Error unmarshaling curriculum.json: %v\n", err)
		os.Exit(1)
	}

	sampleLessons := []int{1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 20, 25, 30, 40, 50}

	for _, lNum := range sampleLessons {
		var l LessonTOC
		for _, item := range toc {
			if item.Number == lNum {
				l = item
				break
			}
		}

		pdfStart := l.Page + 20
		pdfEnd := l.Page + 26
		if pdfEnd > 706 {
			pdfEnd = 706
		}

		cmd := exec.Command("pdftotext", "-f", strconv.Itoa(pdfStart), "-l", strconv.Itoa(pdfEnd), "Grade4-Student-eBook-Course-1.pdf", "-")
		out, err := cmd.Output()
		if err != nil {
			continue
		}

		text := string(out)
		fmt.Printf("\n========================================\nLESSON %d: %s\n========================================\n", l.Number, l.Title)

		psIdx := strings.Index(text, "Practice Set")
		if psIdx != -1 {
			psSnippet := text[psIdx : psIdx+min(1000, len(text)-psIdx)]
			fmt.Println("--- PRACTICE SET ---")
			lines := strings.Split(psSnippet, "\n")
			count := 0
			for _, line := range lines {
				line = strings.TrimSpace(line)
				if line != "" {
					fmt.Println("  ", line)
					count++
					if count > 12 {
						break
					}
				}
			}
		}

		wpIdx := strings.Index(text, "Written Practice")
		if wpIdx != -1 {
			wpSnippet := text[wpIdx : wpIdx+min(1200, len(text)-wpIdx)]
			fmt.Println("--- WRITTEN PRACTICE ---")
			lines := strings.Split(wpSnippet, "\n")
			count := 0
			for _, line := range lines {
				line = strings.TrimSpace(line)
				if line != "" {
					fmt.Println("  ", line)
					count++
					if count > 15 {
						break
					}
				}
			}
		}
	}
}

func min(a, b int) int {
	if a < b {
		return a
	}
	return b
}
