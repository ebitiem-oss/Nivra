// ۱. تعریف دقیق مشخصات بازی‌ها و ظرفیت‌های آن‌ها
const gameSettings = {
    "اونو": { players: [2, 3, 4, 5, 6, 7, 8, 9, 10], creator: "Ali_99", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ali" },
    "اتللو": { players: [2], creator: "Nivra_Master", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Nivra" },
    "حکم": { players: [2, 4], creator: "Sina_Dev", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sina" },
    "شلم": { players: [2, 4], creator: "Mani_G", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mani" },
    "فوتبال": { players: [2, 4], creator: "Gamer_X", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Gamer" },
    "بیلیارد": { players: [2, 4], creator: "Pro_Player", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Pro" },
    "منچ": { players: [2, 3, 4], creator: "Luck_Star", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Luck" }
};

// ۲. تابع اصلی برای نمایش لیست بازی‌ها در صفحه اصلی
// این تابع را در فایل index.html جایی که بازی‌ها هستند صدا بزن
function loadGamesList() {
    const gamesListContainer = document.querySelector('.games-list');
    if (!gamesListContainer) return;

    gamesListContainer.innerHTML = '';

    // تبدیل آبجکت بازی‌ها به لیست قابل نمایش
    Object.keys(gameSettings).forEach(gameName => {
        const game = gameSettings[gameName];
        const gameDiv = document.createElement('div');
        gameDiv.className = 'game-item';
        gameDiv.innerHTML = gameName;
        // وقتی روی بازی کلیک شد، منوی انتخاب ظرفیت باز شود
        gameDiv.onclick = () => openPlayerSelect(gameName);
        gamesListContainer.appendChild(gameDiv);
    });
}

// ۳. تابع باز کردن منوی کشویی انتخاب تعداد نفرات
function openPlayerSelect(gameName) {
    const game = gameSettings[gameName];
    
    // ایجاد یک منوی کوچک (Prompt یا Select) برای انتخاب ظرفیت
    // در پروژه‌های پیشرفته‌تر این را با یک Modal زیبا می‌سازیم
    let options = game.players.map(p => `<option value="${p}">${p} نفر</option>`).join('');
    
    const selectedPlayers = prompt(
        `بازی ${gameName} را انتخاب کردید.\nتعداد بازیکنان را انتخاب کنید:\n\n${game.players.join(', ')} نفر`, 
        game.players[0]
    );

    if (selectedPlayers && game.players.includes(parseInt(selectedPlayers))) {
        // اگر بازیکن انتخاب شد، برو به لابی
        goToLobby(gameName, selectedPlayers);
    } else if (selectedPlayers !== null) {
        alert("تعداد بازیکن نامعتبر است!");
    }
}

// ۴. تابع رفتن به لابی (با نمایش ظرفیت انتخاب شده)
function goToLobby(gameName, playerCount) {
    switchTab('lobby');
    
    const lobbyTitle = document.getElementById('lobby-title');
    if (lobbyTitle) {
        lobbyTitle.innerText = "لابی " + gameName;
    }

    loadRooms(gameName, playerCount);
}

// ۵. تابع نمایش اتاق‌ها در لابی
function loadRooms(gameName, playerCount) {
    const roomsList = document.getElementById('rooms-list');
    if (!roomsList) return;

    const game = gameSettings[gameName];
    
    // ساخت یک اتاق فرضی بر اساس انتخاب کاربر
    const roomHTML = `
        <div class="room-card" style="display: flex; align-items: center; justify-content: space-between; padding: 15px; margin-bottom: 10px; background: rgba(255,255,255,0.05); border-radius: 12px;">
            <div style="display: flex; align-items: center; gap: 12px;">
                <img src="${game.avatar}" style="width: 40px; height: 40px; border-radius: 50%; border: 2px solid #ff9800;">
                <div>
                    <h4 style="color: white; margin: 0;">اتاق اصلی ${gameName}</h4>
                    <p style="color: #ff9800; margin: 0; font-size: 0.75rem;">سازنده: @${game.creator}</p>
                    <p style="color: #aaa; margin: 2px 0 0; font-size: 0.7rem;">👥 ${playerCount} از ${playerCount} نفر</p>
                </div>
            </div>
            <button class="join-btn" onclick="alert('در حال ورود...')">ورود</button>
        </div>
    `;
    
    roomsList.innerHTML = roomHTML;
}

// ۶. مدیریت تب‌ها (همان کد قبلی با کمی اصلاح)
function switchTab(tabId) {
    const contents = document.querySelectorAll('.tab-content');
    contents.forEach(content => {
        content.style.display = 'none';
    });
    const selectedTab = document.getElementById('tab-' + tabId);
    if (selectedTab) {
        selectedTab.style.display = 'block';
    }
}

// اجرای اولیه
document.addEventListener('DOMContentLoaded', () => {
    switchTab('home');
    loadGamesList(); // لیست بازی‌ها را در صفحه اصلی می‌سازد
});
