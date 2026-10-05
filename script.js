// ایجاد اتاق‌های نمونه برای تست
function loadRooms() {
    const roomsList = document.getElementById('rooms-list');
    const sampleRooms = [
        { name: "اتاق دوستانه ۱", players: "۲/۴" },
        { name: "قهرمانان نیورا", players: "۴/۴" },
        { name: "بازی سریع", players: "۱/۴" }
    ];

    roomsList.innerHTML = ''; // پاک کردن لیست قبلی

    sampleRooms.forEach(room => {
        const roomHTML = `
            <div class="room-card">
                <div class="room-info">
                    <h4>${room.name}</h4>
                    <p><span class="status-dot"></span> نفرات: ${room.players}</p>
                </div>
                <button class="join-btn" onclick="alert('در حال اتصال به ${room.name}...')">ورود</button>
            </div>
        `;
        roomsList.innerHTML += roomHTML;
    });
}

// اصلاح تابع switchTab برای لود کردن اتاق‌ها
const originalSwitchTab = window.switchTab; // ذخیره تابع قبلی
window.switchTab = function(tabId) {
    // اجرای تابع اصلی برای تغییر تب‌ها
    if (typeof originalSwitchTab === 'function') {
        // این بخش بستگی به کد فعلی تو دارد، اگر تابع switchTab را خودت نوشته‌ای
        // فقط مطمئن شو که وقتی tabId برابر 'lobby' است، تابع loadRooms() صدا زده شود.
    }
    
    // اگر کاربر روی لابی کلیک کرد، اتاق‌ها را بساز
    if (tabId === 'lobby') {
        loadRooms();
    }
    
    // کد اصلی تو برای عوض کردن تب‌ها (فرض می‌کنیم در script.js هست)
    // من اینجا فقط منطق لود کردن را اضافه کردم.
};

// نکته: اگر تابع switchTab در فایل تو وجود دارد، 
// فقط کافیست داخل آن بنویسی: if(tabId === 'lobby') { loadRooms(); }
