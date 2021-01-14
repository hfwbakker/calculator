# calculator

Goal: make a completely functional calculator as per Odin Project guidelines found here: https://www.theodinproject.com/courses/foundations/lessons/calculator

example: https://mrbuddh4.github.io/calculator/

LOG:
--- Saturday January 9th ---
At step 4, visuals have been created, event listeners have been added for all buttons (console.logs upon click), operate function has been written and works more or less.

--- Sunday January 10th ---
Calculator is functional up to point 5, meaning that all calculations (e.g. a + b = c) work, except that I can't string numbers yet. (point 6). There is some issue with floats turning to strings and strings turning to floats in the functions that are run.

The plan: backup current script.js and refactor a new one: 
    1) make a specific function applied to numbers (and decimal) only that updates to display as a string. 
    2) Then make a function specifically for operators that takes the value from the display, parses it into a float ( parseFloat() ), and adds/subtracts/we
    3) somehow need to have a way that automatically keeps current and last value, and moves them "down the line" every time a new value is added. (perhaps append values to an array that gets reset upon pressing C and adress them with arr[arr.length -1] and arr[arr.length -2]?) -> checked and it works (in "add" function) so yes lets make it a function that automatically adds it to a string.

--- Monday January 11th ---
So that worked, more or less. runningValue now works properly so a string of calculations actually works (e.g. 10 + 5 - 3 = 12). Somehow need to figure out how to update display properly

--- Tuesday January 12th ---
Well that was a struggle. However, display updates properly now (including when a writing a string of numbers and operators is entered). Only one decimal can be in the display value at a time, and you get an error message when you try to divide by 0.

Everything works now, except that limiting output to total (e.g.) 10 digits is not working yet. If I add 0.3333333(7 digits behind decimal) to 1000 i get 1000.3333333 (total 12 digits/symbols if include decimal). Input has been succesfully capped.

Also, got rid of the ridiculous names and renamed script-test.js (main script file) to script.js and renamed the original script.js file to script-old.js.

--- Thursday January 14th ---
Pretty much finished. Styled it a bit, number input has been limited, etc etc. All that remains is making it look a bit better, adding keyboard support, and adding a backspace button.


Next up:
- backspace button
- keyboard support
- stylin' yo
