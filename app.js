/**
 * Nivra Game Hub - Main Logic
 * Version: 1.1.0
 */

// تابع اصلی برای باز کردن بازی‌ها
function openGame(gameName) {
    console.log(`[Nivra] Attempting to launch: ${gameName}`);
    
    // نمایش پیام به کاربر
    alert(`در حال آماده‌سازی بازی: ${gameName}\nلطفاً منتظر بمانید...`);
}

// اجرای کدها به محض بارگذاری صفحه
document.addEventListener('DOMContentLoaded', () => {
    // پیام مورد نظر شما در کنسول
    console.log("%cFirst Game Nivra 🚀", "color: #00ff00; font-weight: bold; font-size: 18px;");
    
    initializeApp();
});

function initializeApp() {
    console.log("System components initialized...");
}
