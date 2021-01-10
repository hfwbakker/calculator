# calculator

Goal: make a completely functional calculator as per Odin Project guidelines found here: https://www.theodinproject.com/courses/foundations/lessons/calculator

Current status:
At step 4, visuals have been created, event listeners have been added for all buttons (console.logs upon click), operate function has been written and works more or less.

Calculator is functional up to point 5, meaning that all calculations (e.g. a + b = c) work, except that I can't string numbers yet. (point 6). There is some issue with floats turning to strings and strings turning to floats in the functions that are run.

The plan: backup current script.js and refactor a new one: 
    1) make a specific function applied to numbers (and decimal) only that updates to display as a string. 
    2) Then make a function specifically for operators that takes the value from the display, parses it into a float ( parseFloat() ), and adds/subtracts/we
    3) somehow need to have a way that automatically keeps current and last value, and moves them "down the line" every time a new value is added. (perhaps append values to an array that gets reset upon pressing C and adress them with arr[arr.length -1] and arr[arr.length -2]?) -> checked and it works (in "add" function) so yes lets make it a function that automatically adds it to a string.


example: https://mrbuddh4.github.io/calculator/

Next up:
Make display reactive (e.g. click a number and it shows up in display). After that step 5 - 10.