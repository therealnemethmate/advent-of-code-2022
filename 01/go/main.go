package main

import (
	"fmt"
	"os"
	"strconv"
	"strings"
)

func readFile() string {
	buffer, err := os.ReadFile("../input-test.txt")
	if err != nil {
		fmt.Printf("Error: %s", err)
	}
	return string(buffer)
}

func main() {
	content := readFile()
	split := strings.Split(content, "\n\n")

	var max int = 0
	for _, v := range split {
		sum := 0
		line := strings.Split(v, "\n")
		for _, amount := range line {
			converted, _ := strconv.Atoi(amount)
			sum += converted
		}
		if sum > max {
			max = sum
		}
	}

	fmt.Printf("Max is %v", max)
}
