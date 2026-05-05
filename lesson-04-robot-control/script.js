// ===== ДАННЫЕ =====
let angles = [90, 90, 90];
let logMessages = [];

// ===== ЛОГ =====
function addLog(text) {
    logMessages.unshift(text);
    if (logMessages.length > 8) logMessages.pop();
    const logDiv = document.getElementById('logList');
    logDiv.innerHTML = logMessages.map(msg => `<div>🤖 ${msg}</div>`).join('');
}

// ===== ОБНОВИТЬ ЭКРАН =====
function updateUI() {
    for (let i = 0; i < angles.length; i++) {
        document.getElementById(`angle${i+1}`).innerText = angles[i];
        document.getElementById(`servo${i+1}`).value = angles[i];
    }
}

// ===== КОМАНДЫ =====
function setServo(index, newAngle) {
    angles[index] = newAngle;
    updateUI();
    addLog(`Сервопривод ${index+1} → ${newAngle}°`);
}

function waveHand() {
    addLog(`МАХ РУКОЙ!`);
    setServo(0, 30);
    setServo(1, 30);
    setServo(2, 30);
    setTimeout(() => {
        setServo(0, 90);
        setServo(1, 90);
        setServo(2, 90);
        addLog(`Рука вернулась`);
    }, 800);
}

function resetArm() {
    for (let i = 0; i < angles.length; i++) setServo(i, 90);
    addLog(`Сброс до 90°`);
}

// ===== НАСТРОЙКА КНОПОК И СЛАЙДЕРОВ =====
function init() {
    for (let i = 1; i <= 3; i++) {
        const slider = document.getElementById(`servo${i}`);
        slider.oninput = (e) => setServo(i-1, parseInt(e.target.value));
    }
    document.getElementById('waveBtn').onclick = waveHand;
    document.getElementById('resetBtn').onclick = resetArm;
    updateUI();
    addLog(`Панель запущена`);
}

init();
