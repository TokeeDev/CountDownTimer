//DOMContentLoaded - Allows the function to start when all the html loads
//Set the DOM Attributes like the users input for hours,minutes, and seconds
//set countdownInterval variable and used let so the value can get changed 
document.addEventListener('DOMContentLoaded', function () {
    // Set initial values
    let hoursInput = document.getElementById('hours');
    let minutesInput = document.getElementById('minutes');
    let secondsInput = document.getElementById('seconds');

    let hourTime = document.getElementById('hourTime');
    let minuteTime = document.getElementById('minuteTime');
    let secondTime = document.getElementById('secondTime');

    let startButton = document.getElementById('start');
    let restartButton = document.getElementById('restart');
    let stopButton = document.getElementById('stop');

    let countdownInterval;

    //Listens when someone clicks on the start button and executes a function
    startButton.addEventListener('click', function () {
        //parseInt- Converts the users value from a string to a number
        let hours = parseInt(hoursInput.value) || 0;
        let minutes = parseInt(minutesInput.value) || 0;
        let seconds = parseInt(secondsInput.value) || 0;

        // Calculate total seconds
        //total number of seconds in hours(3600) and minutes(60) 
        let totalSeconds = hours * 3600 + minutes * 60 + seconds;
        
        //if statement that checks if seconds is greater than 0 
        if (totalSeconds > 0) {
            //sets countdownInterval to setInterval and function
            //setInterval- makes functino repeat every given amount of miliseconds 
            //1000 miliseconds in a second
            countdownInterval = setInterval(function () {
                //uses an if state to see if totalSeconds is less than or equal to 0
                if (totalSeconds <= 0) {
                    //if its 0 then it uses clearInterval to let it stay at 0 so it wont iterate anymore and alert with a message that its done
                    //clearInterval- Stops the repitition of setInterval
                    clearInterval(countdownInterval);
                    alert('Countdown timer is complete!');
                } else {
                    //if its not equal to or less than 0 it goes to an else statement and sets 3 variables for remaning time using math floor to set it to the nearest 0 down
                    //Hours gets divided by 3600 seconds to see exactly how much hours are left
                    //minutes uses modulous to see whats left over then divides it by 60 to get an exact number of remainding minutes
                    //secons gets a modulous to get divded and get a remainder of whats left
                    let remainingHours = Math.floor(totalSeconds / 3600);
                    let remainingMinutes = Math.floor((totalSeconds % 3600) / 60);
                    let remainingSeconds = totalSeconds % 60;

                    //hour and minutes use template literals for the remainding time and display it dynamicially with : after it
                    // second stays the same using formatTime a function that i will describe later
                    hourTime.textContent = `${formatTime(remainingHours)}:`;
                    minuteTime.textContent = `${formatTime(remainingMinutes)}:`;
                    secondTime.textContent = formatTime(remainingSeconds);
                    //after all this code executes it makes the totalSeconds go down one time using --
                    totalSeconds--;
                }//miliseconds for the setInterval which is 1000 = 1 second
            }, 1000);
        }
    });
    //restart button uses an event listener to listen for a click and executes a function
    restartButton.addEventListener('click', function () {
        //uses clear interval to stop the setInterval repition
        clearInterval(countdownInterval);
        //sets all the values of the variables and the text content back to nothing and 00 to restart the process
        hourTime.textContent = '00:';
        minuteTime.textContent = '00:';
        secondTime.textContent = '00';
        hoursInput.value = '';
        minutesInput.value = '';
        secondsInput.value = '';
    });
    //listens for stopButton to be clicked to execute a function
    stopButton.addEventListener('click', function () {
        //clears the setInerval
        clearInterval(countdownInterval);
    });
    // this function formats the time to make sure there is always a 0 before a number if its less than 0 or else it just leaves it untouched
    function formatTime(time) {
        return time < 10 ? '0' + time : time;
    }
});