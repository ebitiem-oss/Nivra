// تغییر تب‌ها
function switchTab(tabId) {
    document.querySelectorAll('.tab-content').forEach(el => el.classList.remove('active'));
    document.querySelectorAll('.bottom-nav .nav-item').forEach(el => el.classList.remove('active'));

    const targetTab = document.getElementById('tab-' + tabId);
    if (targetTab) {
        targetTab.classList.add('active');
    }

    // بستن منوی ۳ نقطه در صورت باز بودن
    document.getElementById('options-dropdown').classList.add('hidden');
}

// باز کردن لابی یک بازی مشخص
function openLobby(gameKey, gameTitle) {
    document.getElementById('current-game-title').innerText = 'اتاق‌های ' + gameTitle;
    switchTab('lobby');
}

// منوی ۳ نقطه
function toggleOptionsMenu(event) {
    event.stopPropagation();
    const menu = document.getElementById('options-dropdown');
    menu.classList.toggle('hidden');
}

// بستن منو با کلیک بیرون از آن
window.onclick = function() {
    const menu = document.getElementById('options-dropdown');
    if (menu && !menu.classList.contains('hidden')) {
        menu.classList.add('hidden');
    }
};

// کنترل مودال ساخت اتاق
function openCreateRoomModal() {
    document.getElementById('create-room-modal').classList.remove('hidden');
}

function closeCreateRoomModal() {
    document.getElementById('create-room-modal').classList.add('hidden');
}

function createRoom() {
    const name = document.getElementById('new-room-name').value || 'اتاق دوستانه';
    alert(`اتاق "${name}" ساخته شد. منتظر تایید و آماده‌سازی بازیکنان...`);
    closeCreateRoomModal();
}

function joinRoom(roomName) {
    alert(`ورود به "${roomName}" انجام شد.`);
}

function openSettings() { alert("بخش تنظیمات صدا و بازی"); }
function openRules() { alert("قوانین و آموزش بازی‌ها"); }
function logout() { alert("خروج از حساب انجام شد."); }
