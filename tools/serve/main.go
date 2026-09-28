package main

import (
	"flag"
	"fmt"
	"log"
	"net/http"
	"os"
	"strings"
)

func main() {
	defaultPort := "8080"
	if p := os.Getenv("PORT"); p != "" {
		defaultPort = p
	}

	port := flag.String("port", defaultPort, "HTTP server port")
	flag.Parse()

	cleanPort := strings.TrimPrefix(*port, ":")

	fs := http.FileServer(http.Dir("."))
	http.Handle("/", fs)

	fmt.Printf("[PASS] Local quiz server running at: http://localhost:%s\n", cleanPort)
	fmt.Println("Open your browser and navigate to: http://localhost:" + cleanPort)
	fmt.Println("Press Ctrl+C to stop.")
	if err := http.ListenAndServe(":"+cleanPort, nil); err != nil {
		log.Fatalf("Server error: %v", err)
	}
}
