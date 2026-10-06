const gameSettings = {
    "اونو": { players: [2, 3, 4, 5, 6, 7, 8, 9, 10], icon: "🃏", creator: "Ali_99", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ali" },
    "اتللو": { players: [2], icon: "⚪", creator: "Nivra_Master", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Nivra" },
    "حکم": { players: [2, 4], icon: "🎴", creator: "Sina_Dev", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sina" },
    "شلم": { players: [2, 4], icon: "🃏", creator: "Mani_G", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mani" },
    "فوتبال": { players: [2, 4], icon: "⚽", creator: "Gamer_X", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Gamer" },
    "بیلیارد": { players: [2, 4], icon: "🎱", creator: "Pro_Player", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Pro" },
    "منچ": { players: [2, 3, 4], icon: "🎲", creator: "Luck_Star", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Luck" }
};

// حالا این تابع را در فایل JS خودت پیدا کن و این تغییر کوچک را در قسمت ایجاد div اعمال کن
function loadGamesList() {
    const gamesListContainer = document.querySelector('.games-list');
    if (!gamesListContainer) return;

    gamesListContainer.innerHTML = '';

    Object.keys(gameSettings).forEach(gameName => {
        const game = gameSettings[gameName];
        const gameDiv = document.createElement('div');
        gameDiv.className = 'game-item';
        
        // تغییر اصلی اینجا است: اضافه کردن آیکون و نام بازی در دو خط
        gameDiv.innerHTML = `
            <div class="game-icon">${game.icon}</div>
            <div class="game-name">${gameName}</div>
        `;
        
        gameDiv.onclick = () => openPlayerSelect(gameName);
        gamesListContainer.appendChild(gameDiv);
    });
}
