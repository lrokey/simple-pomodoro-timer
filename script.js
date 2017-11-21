function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

    
    document.querySelector('#pomodoro').addEventListener('click', function () {
         var twentyFiveMinutes = 60 * 25,
         display = document.querySelector('#pomo-time');
         startTimer(twentyFiveMinutes, display);
    });

    document.querySelector('#short-break').addEventListener('click', function () {
         var fiveMinutes = 60 * 5,
         display = document.querySelector('#short-break-time');
         startTimer(fiveMinutes, display);
    });
