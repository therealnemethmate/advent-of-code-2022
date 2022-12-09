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

func sumStingNumbers(arr []string) int {
	sum := 0
	for _, amount := range arr {
		var converted, _ = strconv.Atoi(amount)
		sum += converted
	}
	return sum

}

func sum(arr []int) int {
	sum := 0
	for _, amount := range arr { sum += amount }
	return sum
}

func getMaxCalories(content string) int {
	var max int = 0
	var splitContent = strings.Split(content, "\n\n")
	for _, v := range splitContent {
		var line []string = strings.Split(v, "\n")
		var lineSum = sumStingNumbers(line)
		if lineSum > max { max = lineSum }
	}
	return max
}

func getSumOfTop3(content string) int {
	var splitContent = strings.Split(content, "\n\n")
	var top3 = []int{ 0, 0, 0 }
	for _, v := range splitContent {
		var line []string = strings.Split(v, "\n")
		var lineSum = sumStingNumbers(line)
		if top3[0] < lineSum {
			/* linked list would be nice */
			top3[2] = top3[1]
			top3[1] = top3[0]
			top3[0] = lineSum
		} else if top3[1] < lineSum {
			top3[2] = top3[1]
			top3[1] = lineSum
		} else if top3[2] < lineSum {
			top3[2] = lineSum
		}
	}
	return sum(top3)
}

func main() {
	var content string = readFile()
	var max int = getMaxCalories(content)
	var sumOfTop3 int = getSumOfTop3(content)
	fmt.Printf("Max is %v\n", max)
	fmt.Printf("Sum of top3 is %v\n", sumOfTop3)
}
