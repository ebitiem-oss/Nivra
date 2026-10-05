// ۱. مدیریت جابجایی بین صفحات (Tabs)
function switchTab(tabId) {
    // مخفی کردن همه بخش‌ها
    const contents = document.querySelectorAll('.tab-content');
    contents.forEach(content => {
        content.classList.remove('active');
        content.style.display = 'none'; // اطمینان از مخفی شدن
    });

    // نمایش بخش انتخاب شده
    const selectedTab = document.getElementById('tab-' + tabId);
    if (selectedTab) {
        selectedTab.classList.add('active');
        selectedTab.style.display = 'block'; // نمایش بخش انتخاب شده
    }

    // اگر رفتیم به لابی، اتاق‌ها را بساز
    if (tabId === 'lobby') {
        loadRooms();
    }
}

// ۲. تابع رفتن از صفحه بازی به لابی
function goToLobby(gameName) {
    // تغییر تیتر لابی
    const lobbyTitle = document.getElementById('lobby-title');
    if (lobbyTitle) {
        lobbyTitle.innerText = "اتاق‌های " + gameName;
    }
    
    // رفتن به تب لابی
    switchTab('lobby');
}

// ۳. تابع ساخت لیست اتاق‌ها
function loadRooms(gameName) {
    const roomsList = document.getElementById('rooms-list');
    if (!roomsList) return;

    // ایجاد لیست اتاق‌های فرضی
    const sampleRooms = [
        { name: "اتاق عمومی " + (gameName || "بازی"), players: "۲/۴" },
        { name: "اتاق حرفه‌ای " + (gameName || "بازی"), players: "۱/۴" },
        { name: "بازی با دوستان", players: "۰/۴" }
    ];

    roomsList.innerHTML = ''; 

    sampleRooms.forEach(room => {
        const roomHTML = `
            <div class="room-card">
                <div class="room-info">
                    <h4 style="color: white; margin:0;">${room.name}</h4>
                    <p style="color: #aaa; margin: 5px 0 0; font-size: 0.8rem;">
                        <span class="status-dot" style="background-color: #4caf50; display: inline-block; width: 8px; height: 8px; border-radius: 50%; margin-right: 5px;"></span>
                        نفرات: ${room.players}
                    </p>
                </div>
                <button class="join-btn" onclick="alert('در حال ورود به ${room.name}...')">ورود</button>
            </div>
        `;
        roomsList.innerHTML += roomHTML;
    });
}

// ۴. اجرای اولیه برای نمایش صفحه اصلی هنگام لود شدن سایت
document.addEventListener('DOMContentLoaded', () => {
    // نمایش صفحه خانه در ابتدا
    switchTab('home');
    
    // فعال کردن آواتار (اگر در HTML کدش را داری)
    const avatarInput = document.getElementById('avatar-uploader');
    if(avatarInput) {
        avatarInput.addEventListener('change', function() {
            alert('آواتار تغییر کرد!');
        });
    }
});
