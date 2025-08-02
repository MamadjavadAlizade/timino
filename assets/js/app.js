function timer(){
    const time = new Date()
    document.getElementById("timerSeconds").innerText = new Intl.DateTimeFormat("fa-IR", {second: '2-digit'}).format(time)
    document.getElementById("timerMinutes").innerText = new Intl.DateTimeFormat("fa-IR", {minute: '2-digit'}).format(time)
    document.getElementById("timerHours").innerText = new Intl.DateTimeFormat("fa-IR", {hour: '2-digit'}).format(time)
}
timer()
setInterval(timer, 1000)