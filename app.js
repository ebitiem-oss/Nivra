/**
 * Nivra Game Hub - Main Logic
 * Version: 1.0.0
 */

// این تابع مسئول باز کردن بازی‌هاست
function openGame(gameName) {
    console.log(`[Nivra] Attempting to launch: ${gameName}`);
    alert(`در حال آماده‌سازی بازی: ${gameName}\nلطفاً منتظر بمانید...`);
}

// این بخش زمانی اجرا می‌شود که صفحه کاملاً بارگذاری شود
document.addEventListener('DOMContentLoaded', () => {
    // تغییر متن طبق درخواست شما
    console.log("%cFirst Game Nivra 🚀", "color: #00ff00; font-weight: bold; font-size: 16px;");
    
    initializeApp();
});

/**
 * تنظیمات اولیه پروژه
 */
function initializeApp() {
    console.log("Initializing system components...");
}
