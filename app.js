/**
 * Nivra Game Hub - Main Logic
 */

function openGame(gameName) {
    // این قسمت باعث می‌شود وقتی روی منچ کلیک می‌کنید، همان نام درست نمایش داده شود
    console.log(`[Nivra] Attempting to launch: ${gameName}`);
    alert(`در حال آماده‌سازی بازی: ${gameName}\nلطفاً منتظر بمانید...`);
}

document.addEventListener('DOMContentLoaded', () => {
    console.log("%cFirst Game Nivra 🚀", "color: #00ff00; font-weight: bold; font-size: 16px;");
    initializeApp();
});

function initializeApp() {
    console.log("Initializing system components...");
}
body {
    margin: 0;
    font-family: Arial, sans-serif;
    background-color: #1a1a2e;
    color: white;
}

.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 20px;
    background-color: #16213e;
    border-bottom: 2px solid #00d2ff;
    position: relative;
}

.profile-box {
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
}

#avatar-preview {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 2px solid #00d2ff;
}

.logo {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    font-weight: bold;
    font-size: 1.2rem;
    color: #00d2ff;
}
<script>
    // تابع ورود به اتاق با دریافت نام اتاق و نام بازی
    function enterRoom(roomName, gameName) {
        document.getElementById('lobby-view').style.display = 'none';
        document.getElementById('room-view').style.display = 'flex';
        
        // این خط می‌تواند نام بازی را در هدر اتاق نمایش دهد (اختیاری)
        document.querySelector('.header span').innerText = roomName + " (" + gameName + ")";
    }

    // ... بقیه کدهای قبلی
</script>
}

function enterRoom(name, game) {
    document.getElementById('lobby-view').style.display = 'none';
    document.getElementById('room-view').style.display = 'flex';
    document.getElementById('room-title').innerText = name + " (" + game + ")";
}

function exitRoom() {
    document.getElementById('lobby-view').style.display = 'block';
    document.getElementById('room-view').style.display = 'none';
}

function startTalk() {
    document.getElementById('mic-btn').classList.add('active-mic');
    console.log("صدا باز شد...");
}

function stopTalk() {
    document.getElementById('mic-btn').classList.remove('active-mic');
    console.log("صدا قطع شد.");
}

function createRoom() {
    alert("اتاق جدید ساخته شد!");
}
