package main

import (
	"fmt"
	"os"
	"strconv"
	"strings"
)

func readFile() string {
	var buffer, err = os.ReadFile("../input.txt")
	if err != nil {
		fmt.Printf("Error: %s", err)
	}
	return string(buffer)
}

func main() {
	var content string = readFile()
	var split []string = strings.Split(content, "\n\n")

	var max int = 0
	for _, v := range split {
		sum := 0
		var line []string = strings.Split(v, "\n")
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
