// 🟢 1. สั่งจอดำทันทีที่สคริปต์เริ่มทำงาน (ซ่อนการ์ดก่อนจัดทรง)
if (document.body) {
    document.body.style.opacity = '0';
    document.body.style.transition = 'none';
}

document.addEventListener('DOMContentLoaded', () => {
    if (typeof AudioManager !== 'undefined') AudioManager.play('pop');

    const lang = localStorage.getItem('currentLang') || 'th';
    const ui = typeof UI_LANG !== 'undefined' ? UI_LANG[lang] : null;

    const logoImg = document.querySelector('.logo-small');
    if (logoImg) logoImg.src = lang === 'en' ? '../asset/logo-en.svg' : '../asset/logo.svg';

    const textEl = document.getElementById('ui-loading-text');
    if (textEl && ui && ui.loading_text) textEl.innerHTML = ui.loading_text;

    const card = document.getElementById('loadingCard');

    // 🧹 จัดระเบียบการย้ายหน้า: โชว์ 3 วิ -> หดการ์ด -> จอดำ -> ย้ายหน้า
    setTimeout(() => {
        if (card) {
            card.classList.remove('pop-in');
            card.classList.add('pop-out');
        }

        setTimeout(() => {
            document.body.style.transition = 'opacity 0.3s ease';
            document.body.style.opacity = '0';
            setTimeout(() => { window.location.href = '../page-6/index.html'; }, 300);
        }, 300);

    }, 3000);
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