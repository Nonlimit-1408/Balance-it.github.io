

const totalItems = 6;
let current = { bg: 1, body: 1, face: 1, hair: 1 };
let lang = localStorage.getItem('currentLang') || 'th';
let ui = UI_LANG[lang];

document.addEventListener('DOMContentLoaded', () => {
    if (typeof AudioManager !== 'undefined') AudioManager.play('pop');
    
    const logoImg = document.getElementById('game-logo');
    if (logoImg) logoImg.src = lang === 'en' ? '../asset/logo-en.svg' : '../asset/logo.svg';
    document.getElementById('ui-title').innerText = ui.title;
    document.getElementById('btn-confirm').innerText = ui.btn_confirm;

    updateDisplay();

    const confirmBtn = document.getElementById('btn-confirm');
    confirmBtn.addEventListener('click', async () => {
        confirmBtn.disabled = true;
        confirmBtn.classList.add('loading');
        confirmBtn.innerText = ui.loading;

        localStorage.setItem('custom_bg', current.bg);
        localStorage.setItem('custom_body', current.body);
        localStorage.setItem('custom_face', current.face);
        localStorage.setItem('custom_hair', current.hair);

        const mergedBase64 = await combineToBase64();
        localStorage.setItem('saved_avatar_base64', mergedBase64);

        const wrapper = document.getElementById('mainWrapper');
        wrapper.classList.remove('pop-in');
        wrapper.classList.add('fade-exit');

        // 🧹 จัดระเบียบการย้ายหน้า: หดการ์ด -> จอดำ -> ย้ายหน้า
        setTimeout(() => {
            document.body.style.transition = 'opacity 0.3s ease';
            document.body.style.opacity = '0';
            setTimeout(() => { window.location.href = '../page-4/index.html'; }, 300);
        }, 300);
    });
});

window.cycleItem = (type) => {
    current[type]++;
    if (current[type] > totalItems) current[type] = 1;
    updateDisplay();
};

function updateDisplay() {
    if (typeof ASSETS_BG === 'undefined' || typeof ASSETS_BD === 'undefined' ||
        typeof ASSETS_FACE === 'undefined' || typeof ASSETS_HAIR === 'undefined') return;

    const bgKey = current.bg < 10 ? `0${current.bg}` : current.bg;
    document.getElementById('preview-bg').src = ASSETS_BG[bgKey];
    document.getElementById('preview-body').src = ASSETS_BD[current.body];
    document.getElementById('preview-face').src = ASSETS_FACE[current.face];
    document.getElementById('preview-hair').src = ASSETS_HAIR[current.hair];

    document.getElementById('btn-bg').innerText = `${ui.bg} ${current.bg}/${totalItems}`;
    document.getElementById('btn-body').innerText = `${ui.body} ${current.body}/${totalItems}`;
    document.getElementById('btn-face').innerText = `${ui.face} ${current.face}/${totalItems}`;
    document.getElementById('btn-hair').innerText = `${ui.hair} ${current.hair}/${totalItems}`;
}

async function combineToBase64() {
    return new Promise(async (resolve) => {
        const canvas = document.createElement('canvas');
        canvas.width = 1000; canvas.height = 1000;
        const ctx = canvas.getContext('2d');
        const bgKey = current.bg < 10 ? `0${current.bg}` : current.bg;
        const sources = [ ASSETS_BG[bgKey], ASSETS_BD[current.body], ASSETS_FACE[current.face], ASSETS_HAIR[current.hair] ];

        const loadImg = (b64) => new Promise((res) => { const img = new Image(); img.onload = () => res(img); img.src = b64; });

        try {
            const images = await Promise.all(sources.map(loadImg));
            images.forEach(img => ctx.drawImage(img, 0, 0, canvas.width, canvas.height));
            resolve(canvas.toDataURL('image/png'));
        } catch (error) { resolve(""); }
    });
}

document.addEventListener('langChanged', (e) => {
    lang = e.detail; 
    if (typeof UI_LANG !== 'undefined' && UI_LANG[lang]) {
        ui = UI_LANG[lang]; 
        updateDisplay();    
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

window.onload = function () {
    if (typeof resizeGame === 'function') resizeGame();
    
    const playLang = localStorage.getItem('currentLang') || 'th';
    const ui = typeof UI_LANG !== 'undefined' ? UI_LANG[playLang] : null;

    document.fonts.ready.then(() => {
        if (typeof applyPageLanguage === 'function') applyPageLanguage(playLang);
        if (typeof applyTranslations === 'function') applyTranslations();
        
        // 🎨 สั่งวาด Canvas ให้เสร็จก่อน
        if (typeof updateAvatar === 'function') updateAvatar(); 
        if (typeof setupGameScene === 'function') setupGameScene();
        if (typeof updateMainBars === 'function') updateMainBars();

        // ⏱️ เคล็ดวิชาซ่อนความน่าเกลียดแบบ "ทั้งหน้าจอ"
        setTimeout(() => {
            // 🎯 เปลี่ยนเป้าหมายเป็น body 
            document.body.classList.add('show-scene'); 

            // (สำหรับหน้า 4) ระบบเริ่มวันใหม่
            const fade = document.getElementById('fadeScreen');
            if (fade && ui && typeof startNewDay === 'function') {
                const fadeDayText = document.getElementById('fadeDayText');
                if(fadeDayText) fadeDayText.innerText = `${ui.day_prefix} ${currentDay || 1}`;
                
                setTimeout(() => {
                    fade.classList.add('hidden-fade');
                    startNewDay();
                    if (typeof checkGameOver === 'function') setTimeout(() => checkGameOver(), 200);
                }, 500);
            } else if (typeof startNewDay === 'function') {
                startNewDay();
            }
        }, 400); // ถ่วงเวลา 400ms เหมือนเดิม
    });
};