// 🟢 1. สั่งจอดำทันทีที่สคริปต์เริ่มทำงาน (ซ่อนการ์ดก่อนจัดทรง)
if (document.body) {
    document.body.style.opacity = '0';
    document.body.style.transition = 'none';
}

document.addEventListener('DOMContentLoaded', () => {
    if (typeof AudioManager !== 'undefined') AudioManager.play('pop');

    const backup = {
        lang: localStorage.getItem('currentLang') || 'th',
        mVol: localStorage.getItem('musicVolume'),
        sVol: localStorage.getItem('sfxVolume'),
        sIdx: localStorage.getItem('currentSongIdx')
    }
    localStorage.clear();

    localStorage.setItem('currentLang', backup.lang);
    if (backup.mVol) localStorage.setItem('musicVolume', backup.mVol);
    if (backup.sVol) localStorage.setItem('sfxVolume', backup.sVol);
    if (backup.sIdx) localStorage.setItem('currentSongIdx', backup.sIdx);

    // 🟢 ประกาศ savedLang ตรงนี้เลย เพื่อให้โค้ดรันต่อได้จนจบไฟล์!
    const savedLang = backup.lang; 
    console.log("🧹 ล้างข้อมูลการเล่นเก่าเรียบร้อย พร้อมเริ่มเกมใหม่! (โหมดภาษา: " + savedLang + ")");

    const ui = UI_LANG[savedLang];
    const logoImg = document.querySelector('.logo-small');
    if (logoImg) logoImg.src = savedLang === 'en' ? '../asset/logo-en.svg' : '../asset/logo.svg';

    const ids = [
        'ui-story-title', 'ui-story-text', 'ui-rules-title',
        'ui-rule-1', 'ui-rule-2', 'ui-rule-3', 'ui-rule-4', 'ui-rule-5',
        'ui-note-1', 'ui-note-2', 'ui-ready-text'
    ];
    ids.forEach(id => {
        const el = document.getElementById(id);
        if (el) {
            const key = id.replace('ui-', '').replace(/-/g, '_');
            el.innerHTML = ui[key] || el.innerHTML;
        }
    });

    const startGameBtn = document.getElementById('startGameBtn');
    if (startGameBtn && ui && ui.btn_start) startGameBtn.innerText = ui.btn_start;

    const wrapper = document.getElementById('pageWrapper');
    if (startGameBtn && wrapper) {
        startGameBtn.addEventListener('click', () => {
            startGameBtn.style.pointerEvents = 'none';

            // ตัวหนังสือเด้งออกไปก่อน
            const textElements = document.querySelectorAll('.section-title, .story-text, .rules-list, .notes-text, .ready-text, .btn-container');
            textElements.forEach(el => el.classList.add('text-pop-out'));

            // 🧹 จัดระเบียบการย้ายหน้า: รอ 1 วิ -> หดการ์ด -> จอดำ -> ย้ายหน้า
            setTimeout(() => {
                wrapper.classList.remove('pop-in');
                wrapper.classList.add('pop-out');

                setTimeout(() => {
                    document.body.style.transition = 'opacity 0.3s ease';
                    document.body.style.opacity = '0';
                    setTimeout(() => { window.location.href = '../page-3/index.html'; }, 300);
                }, 300);
            }, 1000);
        });
    }
});

// =========================================
// 🟢 2. RESPONSIVE SCALE & SMART FADE-IN
// =========================================
function resizeGame() {
    const wrapper = document.getElementById('scale-wrapper');
    if (!wrapper) return;
    const baseWidth = 430; const baseHeight = 900;
    let scale = Math.min(window.innerWidth / baseWidth, window.innerHeight / baseHeight) * 0.9;
    if (scale > 1.2) scale = 1.2;
    wrapper.style.transform = `translate(-51%, -50%) scale(${scale})`;
}
window.addEventListener('resize', resizeGame);

window.addEventListener('load', () => {
    resizeGame();
    requestAnimationFrame(() => {
        setTimeout(() => {
            document.body.style.transition = 'opacity 0.4s ease';
            document.body.style.opacity = '1';
        }, 50);
    });
});

setTimeout(() => {
    if (document.body.style.opacity === '0') {
        resizeGame();
        document.body.style.transition = 'opacity 0.4s ease';
        document.body.style.opacity = '1';
    }
}, 1000);
