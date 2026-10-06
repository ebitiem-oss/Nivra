const gameSettings = {
    "اونو": { players: [2, 3, 4, 5, 6, 7, 8, 9, 10], icon: "🃏" },
    "اتللو": { players: [2], icon: "⚪" },
    "حکم": { players: [2, 4], icon: "🎴" },
    "شلم": { players: [2, 4], icon: "🃏" },
    "فوتبال": { players: [2, 4], icon: "⚽" },
    "بیلیارد": { players: [2, 4], icon: "🎱" },
    "منچ": { players: [2, 3, 4], icon: "🎲" }
};

function loadGamesList() {
    const gamesListContainer = document.querySelector('.games-list');
    if (!gamesListContainer) return;

    gamesListContainer.innerHTML = '';

    Object.keys(gameSettings).forEach(gameName => {
        const game = gameSettings[gameName];
        const gameDiv = document.createElement('div');
        gameDiv.className = 'game-item';
        
        gameDiv.innerHTML = `
            <div class="game-icon">${game.icon}</div>
            <div class="game-name">${gameName}</div>
        `;
        
        gameDiv.onclick = () => openPlayerSelect(gameName);
        gamesListContainer.appendChild(gameDiv);
    });
}

function openPlayerSelect(gameName) {
    const game = gameSettings[gameName];
    const options = game.players.map(p => `<option value="${p}">${p} نفر</option>`).join('');
    
    const selectedPlayers = prompt(
        `بازی ${gameName} را انتخاب کردید.\nتعداد بازیکنان را وارد کنید (${game.players.join(', ')}):`, 
        game.players[0]
    );

    if (selectedPlayers && game.players.includes(parseInt(selectedPlayers))) {
        goToLobby(gameName, selectedPlayers);
    } else if (selectedPlayers !== null) {
        alert("تعداد بازیکنان نامعتبر است!");
    }
}

function goToLobby(gameName, playerCount) {
    switchTab('lobby');
    const lobbyTitle = document.getElementById('lobby-title');
    if (lobbyTitle) lobbyTitle.innerText = "لابی " + gameName;
    loadRooms(gameName, playerCount);
}

function loadRooms(gameName, playerCount) {
    const roomsList = document.getElementById('rooms-list');
    if 
