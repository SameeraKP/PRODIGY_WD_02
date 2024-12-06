let startTime, timerInterval, running = false, lapCount = 0;
const display = document.getElementById("display");
const laps = document.getElementById("laps");
function startTimer() {
    if (!running) {
        startTime = Date.now() - (startTime || 0);
        timerInterval = setInterval(updateDisplay, 10);
        running = true;
    }
}
function pauseTimer() {
    clearInterval(timerInterval);
    running = false;
}
function resetTimer() {
    clearInterval(timerInterval);
    running = false;
    startTime = 0;
    display.textContent = "00:00:00";
    laps.innerHTML = "";
    lapCount = 0;
}
function lapTimer() {
    if (running) {
        lapCount++;
        const lapTime = formatTime(Date.now() - startTime);
        const lapItem = document.createElement("li");
        lapItem.textContent = `Lap ${lapCount}: ${lapTime}`;
        laps.appendChild(lapItem);
    }
}
function updateDisplay() {
    display.textContent = formatTime(Date.now() - startTime);
}
function formatTime(ms) {
    const totalSeconds = Math.floor(ms / 1000);
    const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, '0');
    const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, '0');
    const seconds = String(totalSeconds % 60).padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
}
document.getElementById("start").addEventListener("click", startTimer);
document.getElementById("pause").addEventListener("click", pauseTimer);
document.getElementById("reset").addEventListener("click", resetTimer);
document.getElementById("lap").addEventListener("click", lapTimer);