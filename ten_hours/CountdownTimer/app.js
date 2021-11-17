const days = document.getElementById("days");
const hours = document.getElementById("hrs");
const minutes = document.getElementById("mins");
const seconds = document.getElementById("secs");


function countDownTimer(){
    const resumption_date = new Date("1 Jan 2022")
    const current_date = new Date()

    const time_left = resumption_date - current_date


    const days_left = Math.floor(time_left / 1000 / 3600 / 24)
    days.innerText = days_left

    const hours_left = Math.floor((time_left / 1000 / 3600) % 24)
    hours.innerText = formatTime(hours_left)

    const minutes_left = Math.floor((time_left / 1000 / 60) % 60)
    minutes.innerText = formatTime(minutes_left)

    const seconds_left = Math.floor((time_left / 1000) % 60)
    seconds.innerText = formatTime(seconds_left)

    function formatTime(time){
        return time < 10 ? (`0${time}`) : time
    }
}

setInterval(countDownTimer, 1000)