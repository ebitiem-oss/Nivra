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
