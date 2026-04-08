document.addEventListener('DOMContentLoaded', () => {
    const btns = document.querySelectorAll('.lang-btn');
    const mainBox = document.getElementById('mainBox');

    // เคลียร์ข้อมูลเก่าทิ้งเพื่อให้เริ่มใหม่สะอาดๆ
    localStorage.clear();

    btns.forEach(btn => {
        btn.addEventListener('click', () => {
            // ป้องกันกดซ้ำ
            btns.forEach(b => b.style.pointerEvents = 'none');

            const lang = btn.getAttribute('data-lang');

            // บันทึกภาษาที่เลือก
            localStorage.setItem('currentLang', lang);

            // เล่นท่า Exit
            mainBox.classList.remove('pop-in');
            mainBox.classList.add('fade-exit');

            // เปลี่ยนไปหน้า 1 (เช็ค Path ให้ดีนะมึง)
            setTimeout(() => {
                document.body.style.transition = 'opacity 0.3s ease';
                document.body.style.opacity = '0';
                setTimeout(() => { window.location.href = '../page-1/index.html'; }, 300);
            }, 700);
        });
    });
});

// =========================================
// RESPONSIVE SCALE WRAPPER (Manual Nudge)
// =========================================
function resizeGame() {
    const wrapper = document.getElementById('scale-wrapper');
    if (!wrapper) return;

    const baseWidth = 430;
    const baseHeight = 900;

    // คูณ 0.9 เพื่อเว้นขอบหน้าจอให้เห็นฉากหลัง
    let scale = Math.min(window.innerWidth / baseWidth, window.innerHeight / baseHeight) * 0.9;
    if (scale > 1.2) scale = 1.2;

    // ชดเชยพิกัดซ้ายด้วย -51%
    wrapper.style.transform = `translate(-51%, -50%) scale(${scale})`;
}

window.addEventListener('resize', resizeGame);
resizeGame();