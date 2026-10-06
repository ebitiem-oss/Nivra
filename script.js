// ۱. تنظیمات بازی‌ها
const gameSettings = {
    "اونو": { players: [2, 3, 4, 5, 6, 7, 8, 9, 10], icon: "🃏" },
    "اتللو": { players: [2], icon: "⚪" },
    "حکم": { players: [2, 4], icon: "🎴" },
    "شلم": { players: [2, 4], icon: "🃏" },
    "فوتبال": { players: [2, 4], icon: "⚽" },
    "بیلیارد": { players: [2, 4], icon: "🎱" },
    "منچ": { players: [2, 3, 4], icon: "🎲" }
};

// ۲. تابع اصلی برای نمایش بازی‌ها در صفحه اول
function loadGamesList() {
    const gamesListContainer = document.querySelector('.games-list');
    if (!gamesListContainer) return;

    gamesListContainer.innerHTML = ''; // پاک کردن لیست قبلی

    Object.keys(gameSettings).forEach(gameName => {
        const game = gameSettings[gameName];
        const gameDiv = document.createElement('div');
        gameDiv.className = 'game-item';
        
        gameDiv.innerHTML = `
            <div class="game-icon">${game.icon}</div>
            <div class="game-name">${gameName}</div>
        `;
        
        // کلیک روی کارت
        gameDiv.onclick = () => openPlayerSelect(gameName);
        gamesListContainer.appendChild(gameDiv);
    });
}

// ۳. تابع انتخاب تعداد بازیکن
function openPlayerSelect(gameName) {
    const game = gameSettings[gameName];
    // ساخت لیست گزینه‌ها بر اساس ظرفیت هر بازی
    const options = game.players.map(p => `<option value="${p}">${p} نفر</option>`).join('');
    
    // استفاده از prompt ساده برای موبایل (در آینده می‌توانیم منوی شیک بسازیم)
    const selectedPlayers = prompt(
        `بازی ${gameName} را انتخاب کردید.\nتعداد بازیکنان را وارد کنید (${game.players.join(', ')}):`, 
        game.players[0]
    );

    if (selectedPlayers && game.players.includes(parseInt(selectedPlayers))) {
        goToLobby(gameName, selectedPlayers);
    } else {
        alert("تعداد بازیکنان نامعتبر است!");
    }
}

// ۴. تابع رفتن به لابی
function goToLobby(gameName, playerCount) {
    switchTab('lobby');
    const lobbyTitle = document.getElementById('lobby-title');
    if (lobbyTitle) lobbyTitle.innerText = "لابی " + gameName;
    
    loadRooms(gameName, playerCount);
}

// ۵. تابع نمایش اتاق‌ها در لابی
function loadRooms(gameName, playerCount) {
    const roomsList = document.getElementById('rooms-list');
    if (!roomsList) return;

    // برای تست، یک اتاق فرضی می‌سازیم
    roomsList.innerHTML = `
        <div class="room-card" style="display: flex; align-items: center; justify-content: space-between;">
            <div style="display: flex; align-items: center; gap: 12px;">
                <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Nivra" style="width: 40px; height: 40px; border-radius: 50%;">
                <div>
                    <h4 style="color: white; margin: 0;">اتاق تست ${gameName}</h4>
                    <p style="color: #ff9800; margin: 0; font-size: 0.7rem;">سازنده: @Admin</p>
                    <p style="color: #aaa; margin: 2px 0 0; font-size: 0.7rem;">👥 ${playerCount} از ${playerCount} نفر</p>
                </div>
            </div>
            <button class="join-btn" onclick="alert('در حال ورود...')">ورود</button>
        </div>
    `;
}

// ۶. مدیریت تغییر تب‌ها (صفحه اصلی به لابی و برعکس)
function switchTab(tabId) {
    const contents = document.querySelectorAll('.tab-content');
    contents.forEach(content => content.style.display = 'none');
    
    const selectedTab = document.getElementById('tab-' + tabId);
    if (selectedTab) selectedTab.style.display = 'block';
}

// ۷. اجرای اولیه سایت
document.addEventListener('DOMContentLoaded', () => {
    loadGamesList();
    switchTab('home');
});
