// ۱. لیست کامل بازی‌ها با آیکون و ظرفیت
const gameSettings = {
    "اونو": { players: [2, 3, 4, 5, 6, 7, 8, 9, 10], icon: "🎴" },
    "اتللو": { players: [2], icon: "⚪" },
    "حکم": { players: [2, 4], icon: "♠️" },
    "شلم": { players: [2, 4], icon: "🃏" },
    "فوتبال": { players: [2, 4], icon: "⚽" },
    "بیلیارد": { players: [2, 4], icon: "🎱" },
    "منچ": { players: [2, 3, 4], icon: "🎲" }
};

// ۲. تابع برای ساختن لیست بازی‌ها در صفحه اصلی
function loadGamesList() {
    const gamesListContainer = document.querySelector('.games-list');
    if (!gamesListContainer) return;

    gamesListContainer.innerHTML = '';

    Object.keys(gameSettings).forEach(gameName => {
        const game = gameSettings[gameName];
        const gameDiv = document.createElement('div');
        gameDiv.className = 'game-item';
        
        // ساخت ساختار هر کارت بازی
        gameDiv.innerHTML = `
            <div class="game-icon">${game.icon}</div>
            <div class="game-name">${gameName}</div>
        `;
        
        // وقتی روی بازی کلیک شد، منوی انتخاب ظرفیت باز شود
        gameDiv.onclick = () => openPlayerSelect(gameName);
        gamesListContainer.appendChild(gameDiv);
    });
}

// ۳. تابع باز کردن منوی انتخاب تعداد نفرات
function openPlayerSelect(gameName) {
    const game = gameSettings[gameName];
    let options = game.players.map(p => `<option value="${p}">${p} نفر</option>`).join('');
    
    // ایجاد یک پنجره ساده برای انتخاب (در مراحل بعد این را زیبا می‌کنیم)
    const selectedPlayers = prompt(
        `بازی ${gameName} را انتخاب کردید.\nتعداد بازیکنان را انتخاب کنید:\n${game.players.join(', ')}`, 
        game.players[0]
    );

    if (selectedPlayers && game.players.includes(parseInt(selectedPlayers))) {
        goToLobby(gameName, selectedPlayers);
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

    const game = gameSettings[gameName];
    // ساخت یک اتاق فرضی برای تست
    roomsList.innerHTML = `
        <div class="room-card" style="display: flex; align-items: center; justify-content: space-between; padding: 15px; margin-bottom: 10px; background: rgba(255,255,255,0.05); border-radius: 12px;">
            <div style="display: flex; align-items: center; gap: 12px;">
                <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Nivra" style="width: 40px; height: 40px; border-radius: 50%;">
                <div>
                    <h4 style="color: white; margin: 0;">اتاق اصلی ${gameName}</h4>
                    <p style="color: #ff9800; margin: 0; font-size: 0.75rem;">سازنده: @Admin</p>
                    <p style="color: #aaa; margin: 2px 0 0; font-size: 0.7rem;">👥 ${playerCount} از ${playerCount} نفر</p>
                </div>
            </div>
            <button class="join-btn" onclick="alert('در حال ورود...')">ورود</button>
        </div>
    `;
}

// مدیریت تغییر تب‌ها
function switchTab(tabId) {
    const contents = document.querySelectorAll('.tab-content');
    contents.forEach(content => content.style.display = 'none');
    const selectedTab = document.getElementById('tab-' + tabId);
    if (selectedTab) selectedTab.style.display = 'block';
}

// شروع به کار سایت
document.addEventListener('DOMContentLoaded', () => {
    switchTab('home');
    loadGamesList(); 
});
                        
