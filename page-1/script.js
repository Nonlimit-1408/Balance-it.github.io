// page-1/script.js

// =========================================
// 🌐 1. ฟังก์ชันแปลภาษาของหน้า 1 (สร้างเป็นฟังก์ชันกลาง)
// =========================================
window.applyPageLanguage = function(lang) {
    const startBtn = document.getElementById('startBtn');
    const settingsBtn = document.getElementById('settingsBtn'); 
    const logo = document.querySelector('.logo');

    // ✨ เปลี่ยนโลโก้ตามภาษา
    if (logo) {
        logo.src = lang === 'en' ? '../asset/logo-en.svg' : '../asset/logo.svg';
    }

    // ✨ เปลี่ยนข้อความบนปุ่ม (อิงจากตัวแปร UI_LANG ในไฟล์ lang.js ของมึง)
    if (typeof UI_LANG !== 'undefined') {
        const ui = UI_LANG[lang];
        if (ui) {
            if (startBtn && ui.btn_start) {
                startBtn.innerText = ui.btn_start;
            }
            if (settingsBtn && ui.btn_settings) {
                settingsBtn.innerText = ui.btn_settings;
            }
        }
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const startBtn = document.getElementById('startBtn');
    const settingsBtn = document.getElementById('settingsBtn');
    
    // ดึง Element อื่นๆ มาเตรียมไว้
    const logo = document.querySelector('.logo');
    const graph = document.querySelector('.graph');
    const gameContent = document.querySelector('.game-content');

    // ✨ 2. ดึงค่าภาษาจาก localStorage แล้วสั่งแปลภาษาทันทีตอนเปิดหน้า
    const currentLang = localStorage.getItem('currentLang') || 'th';
    window.applyPageLanguage(currentLang);

    // ===============================================
    // โค้ดเดิมของมึง: แอนิเมชันเวลากดปุ่มเริ่มต้น
    // ===============================================
    if (startBtn) {
        startBtn.addEventListener('click', () => {
            // ป้องกันการกดเบิ้ล
            startBtn.style.pointerEvents = 'none';
            if(settingsBtn) settingsBtn.style.pointerEvents = 'none'; // ป้องกันกดตั้งค่าตอนหน้ากำลังเปลี่ยน

            // 1. สั่งให้แต่ละชิ้นเล่นท่า Exit ของตัวเอง
            if(logo) logo.classList.add('logo-exit');
            if(graph) graph.classList.add('graph-exit');
            if(gameContent) gameContent.classList.add('btn-exit');

            setTimeout(() => {
                document.body.style.transition = 'opacity 0.3s ease';
                document.body.style.opacity = '0';
            setTimeout(() => {
                window.location.href = '../page-2/index.html'; }, 300)
            }, 1600);
        });
    }
});

// =========================================
// RESPONSIVE SCALE WRAPPER (Manual Nudge)
// =========================================
function resizeGame() {
    const wrapper = document.getElementById('scale-wrapper');
    if (!wrapper) return;
    
    const baseWidth = 430;  
    const baseHeight = 900; 

    // คำนวณ Scale พร้อมเว้นขอบ (คูณ 0.9)
    let scale = Math.min(window.innerWidth / baseWidth, window.innerHeight / baseHeight) * 0.9;
    if (scale > 1.2) scale = 1.2;

    // ✨ ท่าแก้ปัญหา: เปลี่ยนแกน X จาก -50% เป็น -51% เพื่อชดเชยให้มันขยับซ้ายนิดนึง!
    wrapper.style.transform = `translate(-51%, -50%) scale(${scale})`;
}

window.addEventListener('resize', resizeGame);
resizeGame();