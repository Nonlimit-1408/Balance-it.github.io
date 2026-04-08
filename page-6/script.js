
// page-6/script.js

let lang = localStorage.getItem('currentLang') || 'th';
let ui = (typeof UI_LANG !== 'undefined') ? UI_LANG[lang] : {};
let isSaving = false; // ล็อคสถานะ ป้องกันคนสลับภาษาตอนกำลังแคปรูป!

const getBarPercent = (key, val) => {
    if (key === 'money') return Math.max(0, Math.min(100, (val / 3000) * 100));
    return Math.max(0, Math.min(100, val));
};

// 2. ฟังก์ชันวาด UI
function renderResultUI() {
    if (!ui) return;

    // --- สลับ Logo และ Watermark ---
    const logoImg = document.querySelector('.logo-small');
    if (logoImg) logoImg.src = lang === 'en' ? '../asset/logo-en.svg' : '../asset/logo.svg';

    const watermarkEl = document.getElementById('watermark-logo');
    if (watermarkEl && typeof ASSETS_B64 !== 'undefined') {
        watermarkEl.src = lang === 'en' ? ASSETS_B64.logo_en : ASSETS_B64.logo_th;
    }

    // --- แปลข้อความ Static ---
    const ids = ['ui-header-you-are', 'ui-status-title', 'ui-event-title', 'btn-save', 'btn-home'];
    ids.forEach(id => {
        const el = document.getElementById(id);
        if (el) {
            const key = id.replace('ui-', '').replace(/-/g, '_');
            el.innerText = ui[key] || el.innerText;
        }
    });

    // --- MBTI Calculation ---
    const savedStats = JSON.parse(localStorage.getItem('finalStats')) || { money: 0, passion: 50, energy: 50, social: 50 };
    let codeM = savedStats.money > 2500 ? 'W' : (savedStats.money >= 1000 ? 'S' : (savedStats.money > 0 ? 'P' : 'B'));
    let codeP = savedStats.passion > 50 ? 'F' : 'D';
    let codeH = savedStats.energy > 50 ? 'A' : 'Z';
    let codeS = savedStats.social > 50 ? 'E' : 'I';
    const finalMBTI = `${codeM}${codeP}${codeH}${codeS}`;

    if (typeof MBTI_DB !== 'undefined' && MBTI_DB[finalMBTI]) {
        const mbtiData = MBTI_DB[finalMBTI];
        document.getElementById('mbti-title').innerText = finalMBTI;
        document.getElementById('mbti-nickname').innerText = mbtiData.nickname[lang];
        document.getElementById('mbti-meaning').innerText = mbtiData.meaning[lang];
        document.getElementById('mbti-desc').innerText = mbtiData.desc[lang];
    }

    const letterDict = {
        'W': 'Wealthy', 'S': 'Stable', 'P': 'Prudent', 'B': 'Broke',
        'F': 'Fire', 'D': 'Dimmed',
        'A': 'Alive', 'Z': 'Zapped',
        'E': 'Extrovert', 'I': 'Introvert'
    };
const explainEl = document.getElementById('mbti-letters-explain');
const descEl = document.getElementById('mbti-desc'); // ดึงตัว desc มาด้วยเผื่อจูนระยะ

if (explainEl) {
    explainEl.innerText = `${codeM} = ${letterDict[codeM]} | ${codeP} = ${letterDict[codeP]} | ${codeH} = ${letterDict[codeH]} | ${codeS} = ${letterDict[codeS]}`;

    if (lang === 'th') {
        explainEl.style.display = 'block'; 
        explainEl.style.marginBottom = '6px'; 
        explainEl.style.marginTop = '-5px';
    } else {
        explainEl.style.display = 'none'; 
    }
}

    // --- Stamp ---
    const rawStatus = localStorage.getItem('endStatus') || localStorage.getItem('gameOverType') || 'Win';
    const stampEl = document.getElementById('result-stamp');
    if (stampEl) {
        let cause = rawStatus.toLowerCase();
        if (cause === 'health') cause = 'energy';
        let stampKey = (cause === 'win') ? `stamp_win_${lang}` : `stamp_${cause}_${lang}`;
        if (typeof ASSETS_B64 !== 'undefined' && ASSETS_B64[stampKey]) {
            stampEl.src = ASSETS_B64[stampKey];
        }
    }

    // --- 🟢 Timestamp (ระบบ 2 ภาษา) ---
    const timestampRaw = localStorage.getItem('playTimestamp') || "";
    const timestampEl = document.getElementById('play-timestamp');
    if (timestampEl && timestampRaw) {
        try {
            // ลองแปลงเป็น JSON เผื่อว่าเป็นระบบแพ็คคู่ที่หน้า 4 เพิ่งเซฟมา
            const tsData = JSON.parse(timestampRaw);
            timestampEl.innerText = tsData[lang] || tsData.th;
        } catch (e) {
            // สำรองไว้เผื่อประวัติเก่าที่ยังเป็น String ธรรมดา
            let clean = timestampRaw.split('(')[0].replace('undefined', '').trim();
            let formatted = clean.replace(/\b(\d)\b/g, "0$1");
            timestampEl.innerText = formatted;
        }
    }

    // --- 🟢 History Log (ระบบ 2 ภาษา) ---
    const history = JSON.parse(localStorage.getItem('gameHistory')) || [];
    const eventListEl = document.getElementById('event-list');
    if (history.length > 0) {
        eventListEl.innerHTML = '';
        history.forEach(item => {
            const li = document.createElement('li');
            li.style.marginBottom = '6px';

            // 🟢 ดึงข้อความให้ตรงกับภาษาปัจจุบัน
            let logText = "";
            if (typeof item.mainEvent === 'object' && item.mainEvent !== null) {
                logText = item.mainEvent[lang] || item.mainEvent.th;
            } else {
                logText = item.mainEvent; // กันเหนียวเผื่อไฟล์เซฟเก่า
            }

            let parts = logText.split('<br>');
            let htmlContent = '';
            parts.forEach((part, index) => {
                let cleanText = part.replace(/^↳\s*/, '').replace(/<[^>]*>?/gm, '').trim();
                if (!cleanText) return;

                let match = cleanText.match(/^(.*?)\s*\(([^)]+)\)$/);
                if (match) {
                    let text = match[1].trim();
                    let stats = match[2].trim();
                    if (index === 0) {
                        htmlContent += `<div><span style="font-weight: 500;">• ${ui.day_prefix} ${item.day} :</span> ${text}</div>`;
                        htmlContent += `<div class="sub-event">↳ (${stats})</div>`;
                    } else {
                        htmlContent += `<div class="sub-event">↳ ${text} (${stats})</div>`;
                    }
                } else {
                    if (index === 0) {
                        htmlContent += `<div><span style="font-weight: 500;">• ${ui.day_prefix} ${item.day} :</span> ${cleanText}</div>`;
                    } else {
                        htmlContent += `<div class="sub-event">↳ ${cleanText}</div>`;
                    }
                }
            });
            li.innerHTML = htmlContent;
            eventListEl.appendChild(li);
        });
    } else {
        eventListEl.innerHTML = `<li>${lang === 'en' ? 'No History' : 'ไม่มีประวัติการเล่น'}</li>`;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    renderResultUI();

    const savedStats = JSON.parse(localStorage.getItem('finalStats')) || { money: 0, passion: 50, energy: 50, social: 50 };
    setTimeout(() => {
        const stats = ['money', 'passion', 'energy', 'social'];
        stats.forEach(key => {
            const barEl = document.getElementById(`sum-${key}`);
            const valEl = document.getElementById(`val-sum-${key}`);
            if (barEl) barEl.style.width = getBarPercent(key, savedStats[key]) + '%';
            if (valEl) valEl.innerText = savedStats[key];
        });
    }, 300);

    const savedAvatar = localStorage.getItem('saved_avatar_base64');
    const profileImg = document.getElementById('summary-avatar');
    if (profileImg) profileImg.src = savedAvatar || "../asset/BG/BG-01.svg";

    // --- ระบบ Save รูป ( แยก iOS กับ Chrome ) ---
    // --- ระบบ Save รูป ( กลับมาใช้ html2canvas ตัวตึง พร้อมแก้รูปแหว่ง+สระลอย ) ---
    const btnSave = document.getElementById('btn-save');
    btnSave.onclick = () => {
        if (isSaving) return;
        isSaving = true;

        const originalText = btnSave.innerText;
        btnSave.innerText = ui.saving || "Saving...";
        btnSave.disabled = true;
        btnSave.style.opacity = "0.7";

        if (typeof AudioManager !== 'undefined') AudioManager.play('camera');

        const cardToCapture = document.getElementById('summaryCard');
        const wrapper = document.getElementById('scale-wrapper');

        // 🟢 1. เก็บค่าเดิมเอาไว้ให้ครบทุกกระเบียดนิ้ว
        const oldTransform = wrapper.style.transform;
        const oldPosition = wrapper.style.position || '';
        const oldTop = wrapper.style.top;
        const oldLeft = wrapper.style.left;

        const oldWidth = cardToCapture.style.width;
        const oldHeight = cardToCapture.style.height;

        // 🟢 2. ล้างสไตล์ที่รบกวนการแคปรูป
        cardToCapture.classList.remove('pop-in');
        cardToCapture.style.opacity = "1";
        cardToCapture.style.filter = "none";

        // 🎯 บังคับขนาดการ์ดให้เป๊ะ
        cardToCapture.style.width = "380px";
        cardToCapture.style.height = "643px";

        // 🟢 3. ทริคแก้รูปขาด/แหว่ง (ลากหน้าจอและกล่องไปที่พิกัด 0,0 ชั่วคราว)
        window.scrollTo(0, 0); // รีเซ็ต Scroll หน้าจอ
        wrapper.style.transform = 'none';
        wrapper.style.position = 'absolute';
        wrapper.style.top = '0px';
        wrapper.style.left = '0px';

        const flash = document.getElementById('camera-flash');
        if (flash) {
            flash.classList.remove('hidden', 'fade-out');
            flash.classList.add('show-flash');
        }

        setTimeout(() => {
            html2canvas(cardToCapture, {
                scale: 3,
                useCORS: true,
                backgroundColor: null,
                width: 380,
                height: 643,
                // 🎯 บังคับจุดเริ่มต้นแคปที่ 0,0 เพื่อไม่ให้เหลือขอบขาวซ้ายบนหรือแหว่งขวาล่าง
                x: 0,
                y: 0,
                scrollX: 0,
                scrollY: 0,
                onclone: function (clonedDoc) {
                    const style = clonedDoc.createElement('style');

                    style.innerHTML = `
                        #summaryCard, #summaryCard * {
                            /* 1. 🎯 คืนค่าการเรนเดอร์ให้เป็นธรรมชาติ (auto) ปล่อยให้เอนจินของ Safari จัดการภาษาไทยเอง */
                            text-rendering: auto !important;
                            -webkit-font-smoothing: antialiased !important;
                            
                            /* 2. 🔴 หัวใจสำคัญ! เปิดระบบ Ligature และ Mark Positioning กลับมา 
                               (ccmp, mark, mkmk คือรหัสที่สั่งให้ Safari คำนวณตำแหน่งสระบน/ล่างและวรรณยุกต์ของไทยให้ตรงเป๊ะ) */
                            font-variant-ligatures: normal !important;
                            font-feature-settings: "kern" 1, "ccmp" 1, "mark" 1, "mkmk" 1, "liga" 1, "calt" 1 !important;
                            
                            /* 3. ล็อกระยะห่างไม่ให้ยืด/หดเอง */
                            letter-spacing: normal !important; 
                            word-spacing: normal !important;
                            
                            /* 4. 🎯 แก้บัคช่องว่างประหลาด (เช่น 'ค่า ซ่อม') ป้องกันการฉีกคำภาษาไทยมั่วซั่ว */
                            word-break: keep-all !important;
                            overflow-wrap: break-word !important;
                            
                            /* 5. ทริคหลอกตา: Stroke ช่วยดันระยะให้ฟอนต์ดูมีน้ำหนักและอ่านง่ายขึ้น */
                            -webkit-text-stroke: 0.15px rgba(0, 0, 0, 0.15) !important;
                        }
                    `;
                    clonedDoc.head.appendChild(style);
                    clonedDoc.body.style.webkitTextSizeAdjust = 'none';
                }
            }).then(canvas => {
                const link = document.createElement('a');
                link.download = 'BalanceIt_Result.png';
                link.href = canvas.toDataURL('image/png');
                link.click();

                // 🟢 4. คืนค่าให้ UI กลับมาจุดเดิม
                setTimeout(() => {
                    wrapper.style.position = oldPosition;
                    wrapper.style.top = oldTop;
                    wrapper.style.left = oldLeft;
                    wrapper.style.transform = oldTransform;

                    cardToCapture.style.width = oldWidth;
                    cardToCapture.style.height = oldHeight;

                    if (flash) {
                        flash.classList.add('fade-out');
                        setTimeout(() => flash.classList.add('hidden'), 500);
                    }

                    btnSave.innerText = originalText;
                    btnSave.disabled = false;
                    btnSave.style.opacity = "1";
                    cardToCapture.classList.add('pop-in');

                    isSaving = false;
                    if (typeof AudioManager !== 'undefined') AudioManager.play('pop');
                }, 700);
            }).catch(err => {
                console.error('Canvas Save Error:', err);

                // คืนค่ากรณี Error
                wrapper.style.position = oldPosition;
                wrapper.style.top = oldTop;
                wrapper.style.left = oldLeft;
                wrapper.style.transform = oldTransform;
                cardToCapture.style.width = oldWidth;
                cardToCapture.style.height = oldHeight;
                isSaving = false;
                btnSave.innerText = originalText;
                btnSave.disabled = false;
            });
        }, 150);
    };

    const btnHome = document.getElementById('btn-home');
    if (btnHome) {
        btnHome.onclick = () => {
            const wrapper = document.getElementById('pageWrapper');
            if (wrapper) wrapper.classList.add('pop-out');

            const backup = {
                lang: localStorage.getItem('currentLang'),
                mVol: localStorage.getItem('musicVolume'),
                sVol: localStorage.getItem('sfxVolume'),
                sIdx: localStorage.getItem('currentSongIdx')
            };

            localStorage.clear();

            if (backup.lang) localStorage.setItem('currentLang', backup.lang);
            if (backup.mVol) localStorage.setItem('musicVolume', backup.mVol);
            if (backup.sVol) localStorage.setItem('sfxVolume', backup.sVol);
            if (backup.sIdx) localStorage.setItem('currentSongIdx', backup.sIdx);

            setTimeout(() => {
                document.body.style.transition = 'opacity 0.3s ease';
                document.body.style.opacity = '0';
                setTimeout(() => { window.location.href = '../page-1/index.html'; }, 300);
            }, 300);
        };
    }
});

// 🟢 ตัวดักฟังคำสั่งเปลี่ยนภาษา
document.addEventListener('langChanged', (e) => {
    if (isSaving) return; // 🛑 คำสั่งไม้ตาย! ถ้ากำลังแคปรูปอยู่ ห้ามสลับภาษาเด็ดขาด!
    lang = e.detail;
    if (typeof UI_LANG !== 'undefined' && UI_LANG[lang]) {
        ui = UI_LANG[lang];
        renderResultUI(); // พอสั่งเปลี่ยนภาษา มันก็จะวาด UI ใหม่ พร้อมดึง History ก้อนภาษาที่ถูกต้องมาแสดง!
    }
});

// =========================================
// RESPONSIVE SCALE & SMART FADE-IN
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
                if (fadeDayText) fadeDayText.innerText = `${ui.day_prefix} ${currentDay || 1}`;

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