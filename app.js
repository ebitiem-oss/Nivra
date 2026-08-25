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
