
# Countdown Timer Project 🕒

## Description 📝
This is a simple countdown timer project built using HTML, CSS, and JavaScript. The timer allows users to input the desired duration in hours, minutes, and seconds, and it counts down to zero. The project includes features such as starting, restarting, and stopping the countdown.

## Features 🚀
- Input Validation: Ensures that only valid positive integers are accepted for hours, minutes, and seconds.
- Dynamic Display: The countdown is displayed dynamically, updating every second.
- Start, Restart, Stop Buttons: Users can start, restart, and stop the countdown using the corresponding buttons.
- Consistent Time Format: The time is formatted to always display two digits for hours, minutes, and seconds.

## How to Use 🛠️
- Open the HTML file in a web browser.
- Enter the desired countdown duration in the input fields for hours, minutes, and seconds.
- Click the "Start" button to begin the countdown.
- Use the "Restart" button to reset the countdown, and the "Stop" button to halt it.
- Enjoy your countdown experience! 😊

## Code Explanation 💻
- DOMContentLoaded: Ensures the script runs after the HTML document is fully loaded.
- Event Listeners: Listen for button clicks (start, restart, stop) and execute corresponding functions.
- setInterval: Used to repeatedly update the countdown every second.
- clearInterval: Stops the repetition of setInterval.
- Input Validation: Ensures valid input for hours, minutes, and seconds.
- Formatting Time: The formatTime function ensures consistent display with two digits.

## Challenges & Solutions 🧠
- Input Validation: Used parseInt to convert input to numbers and provided default values.
- Consistent Time Format: Implemented the formatTime function to ensure two-digit display.
