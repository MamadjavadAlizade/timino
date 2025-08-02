const time = new Date()

function timer(){
    const time = new Date()
    document.getElementById("timerSeconds").innerText = new Intl.DateTimeFormat("fa-IR", {second: '2-digit'}).format(time)
    document.getElementById("timerMinutes").innerText = new Intl.DateTimeFormat("fa-IR", {minute: '2-digit'}).format(time)
    document.getElementById("timerHours").innerText = new Intl.DateTimeFormat("fa-IR", {hour: '2-digit'}).format(time)
}
timer()
setInterval(timer, 1000)

function dateTime(){
    const datetimeOptions = {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
    }
    document.getElementById("timerShamsiTime").innerText = time.toLocaleDateString("fa-IR", datetimeOptions)
    document.getElementById("timerShamsiTimeDay").innerText = time.toLocaleDateString("fa-IR", {day: "numeric"})
    document.getElementById("timerShamsiTimeMonth").innerText = time.toLocaleDateString("fa-IR", {month: "numeric"})
    document.getElementById("timerShamsiTimeYear").innerText = time.toLocaleDateString("fa-IR", {year: "numeric"})

    document.getElementById("timerGhamariTime").innerText = time.toLocaleDateString("ar-EG", datetimeOptions)
    document.getElementById("timerGhamariTimeDay").innerText = time.toLocaleDateString("ar-EG", {day: "numeric"})
    document.getElementById("timerGhamariTimeMonth").innerText = time.toLocaleDateString("ar-EG", {month: "numeric"})
    document.getElementById("timerGhamariTimeYear").innerText = time.toLocaleDateString("ar-EG", {year: "numeric"})

    document.getElementById("timerMiladiTime").innerText = time.toLocaleDateString("en-GB", datetimeOptions)
    document.getElementById("timerMiladiTimeDay").innerText = time.toLocaleDateString("en-GB", {day: "numeric"})
    document.getElementById("timerMiladiTimeMonth").innerText = time.toLocaleDateString("en-GB", {month: "numeric"})
    document.getElementById("timerMiladiTimeYear").innerText = time.toLocaleDateString("en-GB", {year: "numeric"})
}
dateTime()

function nextDay(){
    dateTime(time.setDate(time.getDate() + 1))
}
function prevDay(){
    dateTime(time.setDate(time.getDate() - 1))
}