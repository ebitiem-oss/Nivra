// تغییر تب‌ها
function switchTab(tabId) {
    document.querySelectorAll('.tab-content').forEach(el => el.classList.remove('active'));
    document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
    
    document.getElementById('tab-' + tabId).classList.add('active');
    event.currentTarget.classList.add('active');
}

// آپلود عکس پروفایل
function triggerAvatarUpload() {
    document.getElementById('avatar-uploader').c}

document.getElementById('avatar-uploader').addEventListener('change', function(e) {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById('user-avatar').style.backgroundImage = `url(${e.target.result})`;
        }
        reader.readAsDataURL(file);
    }
});

// پر کردن جدول رده‌بندی
const players = [
    { name: "بازیکن ۱", score: 5000 },
    { name: "ابی (Ebi)", score: 4200 },
    { name: "بازیکن ۳", score: 3800 }
];

function initLeaderboard() {
    const container = document.getElementById('leaderboard-container');
    container.innerHTML = players.map((p, i) => `
        <div class="rank-item">
            <span>${i+1}. ${p.name}</span>
            <span>${p.score} امتیاز</span>
        </div>
    `).join('');
}

window.onload = initLeaderboard;
