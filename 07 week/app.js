function createTimerHtml() {
    const timerHtml = document.createElement('div');
    timerHtml.innerHTML = '<span id="hours">00 </span> :' +
        ' <span id="minutes">00 </span> :' +
        ' <span id="seconds">00</span> '

    return timerHtml;
}

function addZero(value) {
    if (value < 10) {
        return "0" + value
    }
    return value;
}


function createTimer() {
    const timer2Html = createTimerHtml();
    const hoursHtml = timer2Html.querySelector('#hours')
    const minutesHtml = timer2Html.querySelector('#minutes')
    const secondsHtml = timer2Html.querySelector('#seconds')
    const stopButton = document.body.querySelector('#stop-button')
    const startButton = document.body.querySelector('#start-button')
    const resetButton = document.body.querySelector('#reset-button')
    const saveButton = document.body.querySelector('#save-button')

    let myInterval = 0;
    let seconds = 0
    let minutes = 0
    let hours = 0

    startButton.onclick = function (event) {
        myInterval = setInterval(function () {
            seconds = seconds + 1;
            if (seconds == 60) {
                minutes = minutes + 1;
                seconds = 0;
            }

            if (minutes == 60) {
                hours = hours + 1;
                minutes = 0;
            }

            secondsHtml.innerHTML = addZero(seconds);
            minutesHtml.innerHTML = addZero(minutes);
            hoursHtml.innerHTML = addZero(hours);
        }, 1000
        )
    }

    stopButton.onclick = function(event) {
        clearInterval(myInterval)
    }

    resetButton.onclick = function(event) {
        seconds = 0;
        minutes = 0;
        hours = 0;
        secondsHtml.innerHTML = addZero(seconds);
        minutesHtml.innerHTML = addZero(minutes);
        hoursHtml.innerHTML = addZero(hours);
        clearInterval(myInterval)
    }
    saveButton.onclick = function(event){
      const savedTimer = document.createElement('div')
      savedTimer.innerText = addZero(hours) + ':' + addZero(minutes) + ':' + addZero(seconds) 
      document.body.appendChild(savedTimer)
    }

    document.body.appendChild(timer2Html)
    
}


createTimer()
