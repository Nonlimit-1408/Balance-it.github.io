

// ==========================================
// 1. GLOBAL STATE & DATABASES
// ==========================================
let currentLang = localStorage.getItem('currentLang') || 'th';
let ui = typeof UI_LANG !== 'undefined' ? UI_LANG[currentLang] : UI_LANG['th'];

let EVENT_DB, SPECIAL_DB, FAMILY_CALL_DB, availableHeadings, availableSpecialPool;

// จำ State ไว้แปลภาษา
let _activeDailyOriginalIndex = -1, _activeDailyEventIndex = -1, _activeSpOriginalIndex = -1;
let _currentR1 = null, _currentR2 = null, _currentSpImpact = null;
let _selectedDailyChoiceNum = 0, _activeCallWhoIndex = -1, _activeCallResultIndex = -1;

function refreshDatabases() {
    let oldKeys = EVENT_DB ? Object.keys(EVENT_DB) : null;
    let oldSp = SPECIAL_DB;

    EVENT_DB = currentLang === 'en' ? structuredClone(EVENT_DB_EN) : structuredClone(EVENT_DB_TH);
    SPECIAL_DB = currentLang === 'en' ? structuredClone(SPECIAL_DB_EN) : structuredClone(SPECIAL_DB_TH);
    FAMILY_CALL_DB = currentLang === 'en' ? structuredClone(FAMILY_CALL_DB_EN) : structuredClone(FAMILY_CALL_DB_TH);

    let newKeys = Object.keys(EVENT_DB);

    if (!availableHeadings || !oldKeys) {
        availableHeadings = [...newKeys];
    } else {
        availableHeadings = availableHeadings.map(k => newKeys[oldKeys.indexOf(k)]).filter(Boolean);
        if (eventTitle) {
            let tIdx = oldKeys.indexOf(eventTitle);
            if (tIdx !== -1) eventTitle = newKeys[tIdx];
        }
    }

    if (!availableSpecialPool || !oldSp) {
        availableSpecialPool = [...SPECIAL_DB];
    } else {
        availableSpecialPool = availableSpecialPool.map(sp => SPECIAL_DB[oldSp.findIndex(o => o.title === sp.title)]).filter(Boolean);
    }
}
refreshDatabases();

if (currentLang === 'en') document.body.classList.add('lang-en');
else document.body.classList.remove('lang-en');

let currentDay = 1;
let playerStats = { money: 2000, passion: 100, energy: 100, social: 100 };
let statsBeforeDay = {};
let gameHistory = [];

let isGameOverState = false;
let popupState = 0;
let hasSpecialEvent = false;
let eventTitle = "";
let todayMainLog = { choice: "", impactText: "", eventSummary: "" };
let todaySpLog = { choice: "", impactText: "" };
let hasCalledFamily = false;
let todayCallLog = null;
let callShortDesc = "";

// 🚀 [Optimize] Cache DOM Elements
const DOM = {};
document.addEventListener('DOMContentLoaded', () => {
    ['moneyBar', 'passionBar', 'energyBar', 'socialBar',
        'text-moneyBar', 'text-passionBar', 'text-energyBar', 'text-socialBar',
        'callFamilyBtn', 'event-btn', 'eventBadge', 'popupOverlay'].forEach(id => {
            DOM[id] = document.getElementById(id);
        });
});

// ==========================================
// 2. CORE FUNCTIONS & DUAL-LOG SAVER ✨
// ==========================================
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));
const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const getBarPercent = (key, val) => key === 'money' ? Math.max(0, Math.min(100, (val / 3000) * 100)) : Math.max(0, Math.min(100, val));

function updateMainBars() {
    ['money', 'passion', 'energy', 'social'].forEach(key => {
        const bar = DOM[`${key}Bar`] || document.getElementById(`${key}Bar`);
        const text = DOM[`text-${key}Bar`] || document.getElementById(`text-${key}Bar`);
        const percent = getBarPercent(key, playerStats[key]);
        if (bar) bar.style.setProperty('--p', percent + '%');
        if (text) text.innerText = playerStats[key];
    });

    const familyBtn = DOM.callFamilyBtn || document.getElementById('callFamilyBtn');
    if (familyBtn) {
        if (playerStats.money <= 500 && !hasCalledFamily) {
            familyBtn.classList.remove('hidden');
            familyBtn.innerText = ui.btn_call_family;
        } else {
            familyBtn.classList.add('hidden');
        }
    }
}

// 🟢 บันทึกเวลาแบบ 2 ภาษา
const saveTimestamp = () => {
    const now = new Date();
    const thTime = `เล่นเมื่อ: ${now.toLocaleDateString('th-TH')} เวลา: ${now.toLocaleTimeString('th-TH', { hour: '2-digit', minute: '2-digit' })}`;
    const enTime = `Played at: ${now.toLocaleDateString('en-GB')} Time: ${now.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' })}`;
    localStorage.setItem('playTimestamp', JSON.stringify({ th: thTime, en: enTime }));
};

// 🟢 สร้าง Log 2 ภาษา เพื่อส่งไปให้หน้า 6 อ่านได้ทันที
const buildDualLog = (type = 'normal') => {
    let th = "", en = "";

    if (type === 'call_only') {
        if (_activeCallWhoIndex !== -1 && _activeCallResultIndex !== -1 && todayCallLog) {
            let callWhoTh = Object.keys(FAMILY_CALL_DB_TH)[_activeCallWhoIndex];
            let callWhoEn = Object.keys(FAMILY_CALL_DB_EN)[_activeCallWhoIndex];
            let callResTh = FAMILY_CALL_DB_TH[callWhoTh][_activeCallResultIndex];
            let callResEn = FAMILY_CALL_DB_EN[callWhoEn][_activeCallResultIndex];
            th = `📱 โทรหา${callWhoTh}: ${callResTh.shortDesc} (${todayCallLog.impactText})`;
            en = `📱 Called ${callWhoEn}: ${callResEn.shortDesc} (${todayCallLog.impactText})`;
        }
        return { th, en };
    }

    if (_activeDailyOriginalIndex !== -1 && todayMainLog.choice !== "") {
        let mainHeadTh = Object.keys(EVENT_DB_TH)[_activeDailyOriginalIndex];
        let mainHeadEn = Object.keys(EVENT_DB_EN)[_activeDailyOriginalIndex];
        let evTh = EVENT_DB_TH[mainHeadTh][_activeDailyEventIndex];
        let evEn = EVENT_DB_EN[mainHeadEn][_activeDailyEventIndex];

        let choiceTh = _selectedDailyChoiceNum === 1 ? evTh.shortChoice1 : evTh.shortChoice2;
        let choiceEn = _selectedDailyChoiceNum === 1 ? evEn.shortChoice1 : evEn.shortChoice2;

        th = `${mainHeadTh} - ${evTh.eventSummary} ตัดสินใจ "${choiceTh}" (${todayMainLog.impactText})`;
        en = `${mainHeadEn} - ${evEn.eventSummary} decided to "${choiceEn}" (${todayMainLog.impactText})`;

        if (hasSpecialEvent && _activeSpOriginalIndex !== -1 && todaySpLog.choice !== "") {
            let spTh = SPECIAL_DB_TH[_activeSpOriginalIndex];
            let spEn = SPECIAL_DB_EN[_activeSpOriginalIndex];
            th += `<br><span class="sub-event">↳ 🌟 ${spTh.shortDesc} (${todaySpLog.impactText})</span>`;
            en += `<br><span class="sub-event">↳ 🌟 ${spEn.shortDesc} (${todaySpLog.impactText})</span>`;
        }

        if (todayCallLog && _activeCallWhoIndex !== -1 && _activeCallResultIndex !== -1) {
            let callWhoTh = Object.keys(FAMILY_CALL_DB_TH)[_activeCallWhoIndex];
            let callWhoEn = Object.keys(FAMILY_CALL_DB_EN)[_activeCallWhoIndex];
            let callResTh = FAMILY_CALL_DB_TH[callWhoTh][_activeCallResultIndex];
            let callResEn = FAMILY_CALL_DB_EN[callWhoEn][_activeCallResultIndex];

            let appendTh = `📱 โทรหา${callWhoTh}: ${callResTh.shortDesc} (${todayCallLog.impactText})`;
            let appendEn = `📱 Called ${callWhoEn}: ${callResEn.shortDesc} (${todayCallLog.impactText})`;

            if (type === 'gameover') {
                th = appendTh + `<br>` + th;
                en = appendEn + `<br>` + en;
            } else {
                th += `<br><span class="sub-event">↳ ${appendTh}</span>`;
                en += `<br><span class="sub-event">↳ ${appendEn}</span>`;
            }
        }

        // 🛠️ แก้ไข: ลบ (ไปต่อไม่ไหวแล้ว) ออก
        if (type === 'gameover') {
            th += `<br><span class="sub-event" style="color:#dc2626; font-weight:500;">↳ 💥 เกมโอเวอร์</span>`;
            en += `<br><span class="sub-event" style="color:#dc2626; font-weight:500;">↳ 💥 Game Over</span>`;
        }
    }
    else if (type === 'gameover') {
        if (todayCallLog && _activeCallWhoIndex !== -1 && _activeCallResultIndex !== -1) {
            let callWhoTh = Object.keys(FAMILY_CALL_DB_TH)[_activeCallWhoIndex];
            let callWhoEn = Object.keys(FAMILY_CALL_DB_EN)[_activeCallWhoIndex];
            let callResTh = FAMILY_CALL_DB_TH[callWhoTh][_activeCallResultIndex];
            let callResEn = FAMILY_CALL_DB_EN[callWhoEn][_activeCallResultIndex];

            // 🛠️ แก้ไข: ลบ (ไปต่อไม่ไหวแล้ว) ออก
            th = `📱 โทรหา${callWhoTh}: ${callResTh.shortDesc} (${todayCallLog.impactText})<br><span class="sub-event" style="color:#dc2626; font-weight:500;">↳ 💥 เกมโอเวอร์</span>`;
            en = `📱 Called ${callWhoEn}: ${callResEn.shortDesc} (${todayCallLog.impactText})<br><span class="sub-event" style="color:#dc2626; font-weight:500;">↳ 💥 Game Over</span>`;
        } else {
            // 🛠️ แก้ไข: ลบ (ไปต่อไม่ไหวแล้ว) ออก
            th = `<span class="sub-event" style="color:#dc2626; font-weight:500;">💥 เกมโอเวอร์</span>`;
            en = `<span class="sub-event" style="color:#dc2626; font-weight:500;">💥 Game Over</span>`;
        }
    }

    return { th, en };
};

// =========================================
// 🚩 เช็ค Game Over
// =========================================
function checkGameOver() {
    if (isGameOverState) return true;
    let variant = "";

    // ใช้ Logic ของคุณเป๊ะๆ
    if (playerStats.money <= 0 && hasCalledFamily) {
        variant = "Money";
    }
    else if (playerStats.passion <= 0) variant = "Passion";
    else if (playerStats.energy <= 0) variant = "Health";
    else if (playerStats.social <= 0) variant = "Social";

    if (!variant) return false;

    AudioManager.stopBGM();
    AudioManager.play('game_over');

    const isTodaySaved = gameHistory.some(log => log.day === currentDay);
    if (!isTodaySaved) {
        // 🟢 เรียกใช้ฟังก์ชันเซฟ 2 ภาษา
        gameHistory.push({ day: currentDay, mainEvent: buildDualLog('gameover') });
    }

    const goScreen = document.getElementById('gameOverScreen');
    const goImg = document.getElementById('go-svg-display');
    const countdownText = document.getElementById('go-countdown-text');

    goImg.src = currentLang === 'en' ? `../asset/gameOver-${variant}-en.svg` : `../asset/gameOver-${variant}.svg`;
    goScreen.classList.remove('hidden');
    setTimeout(() => document.getElementById('go-content-wrapper')?.classList.add('content-pop-in'), 10);

    let timeLeft = 5;
    countdownText.innerText = `${ui.game_over_countdown} ${timeLeft}...`;

    const timerInterval = setInterval(() => {
        timeLeft--;
        countdownText.innerText = `${ui.game_over_countdown} ${timeLeft}...`;
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            localStorage.setItem('finalStats', JSON.stringify(playerStats));
            localStorage.setItem('gameHistory', JSON.stringify(gameHistory));
            localStorage.setItem('endStatus', variant);

            // 🟢 บันทึกเวลาแบบ 2 ภาษา
            saveTimestamp();

            document.body.style.transition = 'opacity 0.3s ease';
            document.body.style.opacity = '0';
            setTimeout(() => { window.location.href = "../page-5/index.html"; }, 300);
        }
    }, 1000);

    return true;
}

// ==========================================
// 3. UI FORMATTING & ANIMATION
// ==========================================
const formatStatText = (imp) => {
    const fmt = (val) => val > 0 ? `+${val}` : `${val}`;
    return `${ui.stat_money} ${fmt(imp.money)}\n${ui.stat_passion} ${fmt(imp.passion)}\n${ui.stat_energy} ${fmt(imp.energy)}\n${ui.stat_social} ${fmt(imp.social)}`;
};

const createLogImpactText = (imp) => {
    let parts = [];
    if (imp.money) parts.push(`💵${imp.money > 0 ? '+' : ''}${imp.money}`);
    if (imp.passion) parts.push(`🔥${imp.passion > 0 ? '+' : ''}${imp.passion}`);
    if (imp.energy) parts.push(`💪${imp.energy > 0 ? '+' : ''}${imp.energy}`);
    if (imp.social) parts.push(`🤝${imp.social > 0 ? '+' : ''}${imp.social}`);
    return parts.length > 0 ? parts.join(' | ') : "-";
};

function scrambleText(el, targetText, type, duration = 1000) {
    return new Promise(resolve => {
        AudioManager.play('scramble', true, 'scrambleLoop');
        el.classList.remove('fade-hide');
        el.classList.add('fade-show');
        let startTimestamp = null, lastTick = 0;
        const tickInterval = duration / 20;

        const animate = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            if (timestamp - startTimestamp >= duration) {
                el.innerText = targetText;
                AudioManager.stop('scrambleLoop');
                resolve();
                return;
            }
            if (timestamp - lastTick >= tickInterval) {
                const randHead = availableHeadings[Math.floor(Math.random() * availableHeadings.length)];
                el.innerText = type === 'title' ? randHead : EVENT_DB[randHead][0].desc;
                lastTick = timestamp;
            }
            requestAnimationFrame(animate);
        };
        requestAnimationFrame(animate);
    });
}

function showPopupInner(id) {
    ['popup-daily', 'popup-special', 'popup-summary', 'decisionPopup', 'phonePopup', 'callSummaryPopup'].forEach(pid => {
        document.getElementById(pid)?.classList.add('hidden-popup');
    });
    document.getElementById(id)?.classList.remove('hidden-popup');
    AudioManager.play('pop');
}

window.closeOverlay = function () {
    (DOM.popupOverlay || document.getElementById('popupOverlay')).classList.add('hidden');
    const badge = DOM.eventBadge || document.getElementById('eventBadge');
    if (popupState > 1 && hasSpecialEvent) badge.innerText = "1";
    if (popupState === 3) badge.innerText = "0";
};

// =========================================
// 4. DAY MANAGEMENT
// =========================================
function startNewDay() {
    document.getElementById('currentDayText').innerText = `${ui.day_prefix} ${currentDay}`;
    const eventBtn = DOM['event-btn'] || document.getElementById('event-btn');
    eventBtn.innerText = ui.btn_today_event;

    if (playerStats.money <= 0) {
        eventBtn.disabled = true;
        eventBtn.style.filter = "grayscale(1)";
    } else {
        eventBtn.disabled = false;
        eventBtn.style.filter = "none";
    }

    updateMainBars();
    const badge = DOM.eventBadge || document.getElementById('eventBadge');
    badge.classList.remove('hidden');
    hasSpecialEvent = Math.random() <= 0.3;
    badge.innerText = hasSpecialEvent ? "2" : "1";

    AudioManager.playTicking();
    setTimeout(() => {
        AudioManager.play('noti');
        if (hasSpecialEvent) setTimeout(() => AudioManager.play('noti'), 200);
    }, 1000);

    popupState = 0;
    isGachaLocked = false;
    todayCallLog = null;
    eventTitle = "";
    todayMainLog = { choice: "", impactText: "", eventSummary: "" };
    todaySpLog = { choice: "", impactText: "" };
    _selectedDailyChoiceNum = 0;
    _activeCallWhoIndex = -1;
    _activeCallResultIndex = -1;

    // 🛠️ สิ่งที่เพิ่มมา: ล้างความจำอีเวนท์ของเมื่อวาน
    _activeDailyOriginalIndex = -1;
    _activeDailyEventIndex = -1;
    _activeSpOriginalIndex = -1;
}

document.getElementById('event-btn').addEventListener('click', () => {
    (DOM.popupOverlay || document.getElementById('popupOverlay')).classList.remove('hidden');
    if (popupState === 0) initDailyEvent();
    else if (popupState === 1) showPopupInner('popup-daily');
    else if (popupState === 2) showPopupInner('popup-special');
    else if (popupState === 3) showPopupInner('popup-summary');
});

// =========================================
// 5. FLOW 1: DAILY EVENT
// =========================================
async function initDailyEvent() {
    popupState = 1;
    showPopupInner('popup-daily');
    statsBeforeDay = { ...playerStats };

    if (availableHeadings.length === 0) { alert("Played all events!"); return; }

    const uiEls = {
        title: document.getElementById('event-title-text'),
        desc: document.getElementById('event-desc-text'),
        q: document.getElementById('ui-daily-question'),
        btn1: document.getElementById('btn-choice-1'),
        btn2: document.getElementById('btn-choice-2'),
        st1: document.getElementById('stat-impact-1'),
        st2: document.getElementById('stat-impact-2'),
        nxt: document.getElementById('btn-daily-next')
    };

    Object.values(uiEls).forEach(el => {
        el.classList.add('fade-hide');
        el.classList.remove('fade-show', 'selected', 'unselected');
    });
    uiEls.nxt.disabled = true;

    const selectedHeading = availableHeadings[Math.floor(Math.random() * availableHeadings.length)];
    const eventList = EVENT_DB[selectedHeading];

    _activeDailyOriginalIndex = Object.keys(EVENT_DB).indexOf(selectedHeading);
    _activeDailyEventIndex = Math.floor(Math.random() * eventList.length);
    const eventData = eventList[_activeDailyEventIndex];

    eventTitle = selectedHeading;
    todayMainLog.eventSummary = eventData.eventSummary || "";

    const r1 = {
        money: getRandomInt(eventData.impact1.money[0], eventData.impact1.money[1]),
        passion: getRandomInt(eventData.impact1.passion[0], eventData.impact1.passion[1]),
        energy: getRandomInt(eventData.impact1.energy[0], eventData.impact1.energy[1]),
        social: getRandomInt(eventData.impact1.social[0], eventData.impact1.social[1])
    };
    const r2 = {
        money: getRandomInt(eventData.impact2.money[0], eventData.impact2.money[1]),
        passion: getRandomInt(eventData.impact2.passion[0], eventData.impact2.passion[1]),
        energy: getRandomInt(eventData.impact2.energy[0], eventData.impact2.energy[1]),
        social: getRandomInt(eventData.impact2.social[0], eventData.impact2.social[1])
    };

    _currentR1 = r1; _currentR2 = r2;

    uiEls.btn1.innerText = eventData.btn1; uiEls.btn2.innerText = eventData.btn2;
    uiEls.st1.innerText = formatStatText(r1); uiEls.st2.innerText = formatStatText(r2);
    uiEls.st1.style.pointerEvents = 'none';
    uiEls.st2.style.pointerEvents = 'none';

    let savedDecision = null;
    const selectChoice = (sel, unsel, data, shortDesc, num) => {
        sel.classList.add('selected'); sel.classList.remove('unselected');
        unsel.classList.add('unselected'); unsel.classList.remove('selected');
        savedDecision = data;
        todayMainLog.choice = shortDesc;
        todayMainLog.impactText = createLogImpactText(data);
        uiEls.nxt.disabled = false;
        uiEls.nxt.classList.replace('fade-hide', 'fade-show');
        _selectedDailyChoiceNum = num;
    };

    uiEls.btn1.onclick = () => selectChoice(uiEls.btn1, uiEls.btn2, r1, eventData.shortChoice1, 1);
    uiEls.btn2.onclick = () => selectChoice(uiEls.btn2, uiEls.btn1, r2, eventData.shortChoice2, 2);

    uiEls.nxt.onclick = (e) => {
        if (e) e.stopPropagation();
        ['money', 'passion', 'energy', 'social'].forEach(k => playerStats[k] += savedDecision[k]);
        ['passion', 'energy', 'social'].forEach(k => playerStats[k] = Math.max(0, Math.min(100, playerStats[k])));
        if (hasSpecialEvent) initSpecialEvent();
        else initSummary();
    };

    await scrambleText(uiEls.title, selectedHeading, 'title', 800);
    await scrambleText(uiEls.desc, eventData.desc, 'desc', 1200);
    uiEls.q.classList.replace('fade-hide', 'fade-show'); await sleep(300);
    uiEls.btn1.classList.replace('fade-hide', 'fade-show'); uiEls.btn2.classList.replace('fade-hide', 'fade-show');
    if (typeof AudioManager !== 'undefined') AudioManager.play('pop');
    await sleep(300);
    uiEls.st1.classList.replace('fade-hide', 'fade-show'); uiEls.st2.classList.replace('fade-hide', 'fade-show');
}

// =========================================
// 6. FLOW 2: SPECIAL EVENT
// =========================================
async function initSpecialEvent() {
    popupState = 2;
    document.getElementById('eventBadge').innerText = "1";
    showPopupInner('popup-special');

    if (availableSpecialPool.length === 0) availableSpecialPool = [...SPECIAL_DB];

    const spEvent = availableSpecialPool[Math.floor(Math.random() * availableSpecialPool.length)];
    _activeSpOriginalIndex = SPECIAL_DB.findIndex(e => e.title === spEvent.title || e.desc === spEvent.desc);

    const spImpact = {
        money: getRandomInt(spEvent.stats.money[0], spEvent.stats.money[1]),
        passion: getRandomInt(spEvent.stats.passion[0], spEvent.stats.passion[1]),
        energy: getRandomInt(spEvent.stats.energy[0], spEvent.stats.energy[1]),
        social: getRandomInt(spEvent.stats.social[0], spEvent.stats.social[1])
    };
    _currentSpImpact = spImpact;

    const titleEl = document.getElementById('sp-event-title');
    const descEl = document.getElementById('sp-event-desc');
    const statsListEl = document.getElementById('sp-stats-list');
    const btnNext = document.getElementById('btn-sp-next');

    [titleEl, descEl, statsListEl].forEach(el => { el.classList.add('fade-hide'); el.classList.remove('fade-show'); });
    btnNext.disabled = true;

    todaySpLog.choice = spEvent.shortDesc;
    todaySpLog.impactText = createLogImpactText(spImpact);

    titleEl.classList.remove('fade-hide'); titleEl.classList.add('fade-show');
    AudioManager.play('scramble', true, 'spScrambleLoop');
    for (let i = 0; i < 15; i++) {
        titleEl.innerText = SPECIAL_DB[Math.floor(Math.random() * SPECIAL_DB.length)].title;
        await sleep(50);
    }
    AudioManager.stop('spScrambleLoop');

    titleEl.innerText = spEvent.title;

    descEl.innerText = spEvent.desc; descEl.classList.replace('fade-hide', 'fade-show'); await sleep(500);

    statsListEl.innerHTML = '';
    const labels = { money: ui.stat_money, passion: ui.stat_passion, energy: ui.stat_energy, social: ui.stat_social };
    for (let k in spImpact) {
        if (spImpact[k] !== 0) statsListEl.innerHTML += `<div class="stat-item">${labels[k]} ${spImpact[k] > 0 ? '+' : ''}${spImpact[k]}</div>`;
    }
    statsListEl.classList.replace('fade-hide', 'fade-show');
    if (typeof AudioManager !== 'undefined') AudioManager.play('pop');
    await sleep(400);
    btnNext.disabled = false;

    btnNext.onclick = () => {
        ['money', 'passion', 'energy', 'social'].forEach(k => playerStats[k] += spImpact[k]);
        ['passion', 'energy', 'social'].forEach(k => playerStats[k] = Math.max(0, Math.min(100, playerStats[k])));
        availableSpecialPool.splice(availableSpecialPool.indexOf(spEvent), 1);
        initSummary();
    };
}

// =========================================
// 7. FLOW 3: SUMMARY & END DAY
// =========================================
function initSummary() {
    popupState = 3;
    document.getElementById('eventBadge').innerText = "0";
    showPopupInner('popup-summary');
    document.getElementById('display-day').innerText = currentDay.toString().padStart(2, '0');

    document.getElementById('log-main-choice').innerText = todayMainLog.choice;
    document.getElementById('log-main-impact').innerText = todayMainLog.impactText;

    if (hasSpecialEvent) {
        document.getElementById('sp-event-content').classList.remove('hidden');
        document.getElementById('sp-empty-msg').classList.add('hidden');
        document.getElementById('log-special-choice').innerText = todaySpLog.choice;
        document.getElementById('log-special-impact').innerText = todaySpLog.impactText;
    } else {
        document.getElementById('sp-event-content').classList.add('hidden');
        document.getElementById('sp-empty-msg').classList.remove('hidden');
    }
    setTimeout(() => {
        let changedCount = 0;
        ['money', 'energy', 'passion', 'social'].forEach(k => {
            const beforeBar = document.getElementById(`before-${k}`);
            const afterBar = document.getElementById(`bar-${k}`);
            const valLabel = document.getElementById(`val-${k}`);

            // 1. 🟢 จำกัดค่า (Clamp) ให้ไม่เกิน 100 ก่อนทำอย่างอื่น (ยกเว้นเงิน)
            if (k !== 'money') {
                playerStats[k] = Math.max(0, Math.min(100, playerStats[k]));
            }

            // 2. คำนวณส่วนต่าง (ใช้ค่าที่โดนตบให้นิ่งแล้ว เพื่อให้เลข Change ตรงกับแถบพลังจริง)
            const diff = playerStats[k] - statsBeforeDay[k];

            // 3. อัปเดต UI ด้วยค่าที่ถูกต้อง
            if (beforeBar) beforeBar.style.width = getBarPercent(k, statsBeforeDay[k]) + "%";
            if (afterBar) afterBar.style.width = getBarPercent(k, playerStats[k]) + "%";
            if (valLabel) valLabel.innerText = playerStats[k];

            if (diff !== 0) changedCount++;
            const changeEl = document.getElementById(`change-${k}`);
            if (changeEl) {
                changeEl.innerText = `${diff >= 0 ? '+' : ''}${diff}`;
                changeEl.className = "change-text " + (diff > 0 ? "increase" : diff < 0 ? "decrease" : "");
            }
        });

        if (changedCount > 0) {
            AudioManager.playWoosh(changedCount);
        }
    }, 400);

    const btnEnd = document.getElementById('btn-end-day');
    btnEnd.disabled = false;
    btnEnd.style.opacity = "1";

    btnEnd.onclick = () => {
        btnEnd.disabled = true;

        // 🟢 เรียกใช้ฟังก์ชันเซฟ 2 ภาษา (จบวันปกติ)
        gameHistory.push({ day: currentDay, mainEvent: buildDualLog('normal') });

        if (currentDay === 7) {
            if (playerStats.money <= 0 || playerStats.passion <= 0 || playerStats.energy <= 0 || playerStats.social <= 0) {
                (DOM.popupOverlay || document.getElementById('popupOverlay')).classList.add('hidden');
                if (playerStats.money <= 0) {
                    hasCalledFamily = true;
                }
                if (checkGameOver()) return;
            }
            AudioManager.stopBGM();
            AudioManager.play('win');
            localStorage.setItem('finalStats', JSON.stringify(playerStats));
            localStorage.setItem('gameHistory', JSON.stringify(gameHistory));
            localStorage.setItem('endStatus', 'Win');
            (DOM.popupOverlay || document.getElementById('popupOverlay')).classList.add('hidden');

            const fade = document.getElementById('fadeScreen');
            if (fade) {
                document.getElementById('fadeDayText').innerText = "";
                fade.classList.remove('hidden');
                setTimeout(() => fade.style.opacity = 1, 50);
            }

            setTimeout(() => {
                const goScreen = document.getElementById('gameOverScreen');
                const goImg = document.getElementById('go-svg-display');
                if (goImg) goImg.src = currentLang === 'en' ? `../asset/youWin-en.svg` : `../asset/youWin.svg`;
                if (goScreen) goScreen.classList.remove('hidden');
                if (fade) fade.style.opacity = 0;

                setTimeout(() => {
                    document.getElementById('go-content-wrapper')?.classList.add('content-pop-in');
                    if (fade) fade.classList.add('hidden');
                }, 100);

                let timeLeft = 5;
                const countdownText = document.getElementById('go-countdown-text');
                const timerInterval = setInterval(() => {
                    timeLeft--;
                    if (countdownText) countdownText.innerText = `${ui.game_over_countdown} ${timeLeft}...`;
                    if (timeLeft <= 0) {
                        clearInterval(timerInterval);

                        // 🟢 บันทึกเวลาแบบ 2 ภาษา (ชนะเกม)
                        saveTimestamp();

                        document.body.style.transition = 'opacity 0.3s ease';
                        document.body.style.opacity = '0';
                        setTimeout(() => { window.location.href = "../page-5/index.html"; }, 300);
                    }
                }, 1000);
            }, 1200);
            return;
        }

        (DOM.popupOverlay || document.getElementById('popupOverlay')).classList.add('hidden');
        updateMainBars();

        const fade = document.getElementById('fadeScreen');
        if (fade) {
            document.getElementById('fadeDayText').innerText = `${ui.day_prefix} ${currentDay + 1}`;
            fade.classList.remove('hidden');
            setTimeout(() => fade.style.opacity = 1, 50);
        }

        setTimeout(() => {
            currentDay++;
            startNewDay();
            if (fade) fade.style.opacity = 0;
            setTimeout(() => {
                if (fade) fade.classList.add('hidden');
                checkGameOver();
            }, 500);
        }, 1200);
    };
}

// =========================================
// 8. FAMILY GACHA SYSTEM
// =========================================
let callingTimeout, timerInterval, endTimeout, switchTimeout;
let callWho = "", callActionText = "", callStatsImpact = {};
let isGachaLocked = false;

document.getElementById('callFamilyBtn').addEventListener('click', () => {
    (DOM.popupOverlay || document.getElementById('popupOverlay')).classList.remove('hidden');
    showPopupInner('decisionPopup');
    const alertContainer = document.getElementById('ui-call-alert-container');
    if (alertContainer) alertContainer.innerHTML = `${ui.call_alert_prefix}${playerStats.money}${ui.call_alert_suffix}`;
});

window.closeCallPopup = () => {
    (DOM.popupOverlay || document.getElementById('popupOverlay')).classList.add('hidden');
    document.getElementById('decisionPopup').classList.add('hidden-popup');
};
document.getElementById('btn-no-call').addEventListener('click', closeCallPopup);
document.getElementById('closeDecisionBtn').addEventListener('click', closeCallPopup);

document.getElementById('btn-do-call').addEventListener('click', () => {
    (DOM.callFamilyBtn || document.getElementById('callFamilyBtn')).classList.add('hidden');
    showPopupInner('phonePopup');

    if (!isGachaLocked) {
        const familyMembers = Object.keys(FAMILY_CALL_DB);
        _activeCallWhoIndex = Math.floor(Math.random() * familyMembers.length);
        callWho = familyMembers[_activeCallWhoIndex];
        const callOptions = FAMILY_CALL_DB[callWho];

        _activeCallResultIndex = Math.floor(Math.random() * callOptions.length);
        const callResult = callOptions[_activeCallResultIndex];

        callStatsImpact = {
            money: getRandomInt(callResult.stats.money[0], callResult.stats.money[1]),
            passion: getRandomInt(callResult.stats.passion[0], callResult.stats.passion[1]),
            energy: getRandomInt(callResult.stats.energy[0], callResult.stats.energy[1]),
            social: getRandomInt(callResult.stats.social[0], callResult.stats.social[1])
        };
        callActionText = callResult.text;
        callShortDesc = callResult.shortDesc;
        isGachaLocked = true;
    }

    document.getElementById('call-name').innerText = callWho;
    const statusEl = document.getElementById('call-status');
    statusEl.innerText = "Calling...";
    AudioManager.play('phone_ring', true, 'ringLoop');

    callingTimeout = setTimeout(() => {
        AudioManager.stop('ringLoop');
        AudioManager.play('phone_talk', true, 'talkLoop');
        let timeCount = 1;
        statusEl.innerText = `00:0${timeCount}`;
        timerInterval = setInterval(() => {
            timeCount++;
            statusEl.innerText = timeCount < 10 ? `00:0${timeCount}` : `00:${timeCount}`;
            if (timeCount >= 10) {
                clearInterval(timerInterval);
                AudioManager.stop('talkLoop');
                AudioManager.play('phone_hangup');
                endTimeout = setTimeout(() => {
                    statusEl.innerText = "End";
                    switchTimeout = setTimeout(goToCallSummary, 500);
                }, 300);
            }
        }, 200);
    }, 1000);
});

const goToCallSummary = () => {
    AudioManager.stop('ringLoop');
    AudioManager.stop('talkLoop');
    AudioManager.play('phone_hangup');
    clearTimeout(callingTimeout); clearInterval(timerInterval); clearTimeout(endTimeout); clearTimeout(switchTimeout);
    showPopupInner('callSummaryPopup');
    document.getElementById('summaryName').innerText = " " + callWho;
    document.getElementById('summaryAction').innerText = callActionText;

    let statsHtml = "";
    const labels = { money: ui.stat_money, passion: ui.stat_passion, energy: ui.stat_energy, social: ui.stat_social };
    for (let k in callStatsImpact) {
        if (callStatsImpact[k] !== 0) statsHtml += `<p>${labels[k]} ${callStatsImpact[k] > 0 ? '+' : ''}${callStatsImpact[k]}</p>`;
    }
    document.getElementById('call-stats-box').innerHTML = statsHtml || ui.summary_no_change;
};
document.getElementById('btn-skip-call').addEventListener('click', goToCallSummary);

const cancelCall = () => {
    clearTimeout(callingTimeout); clearInterval(timerInterval); clearTimeout(endTimeout); clearTimeout(switchTimeout);
    (DOM.popupOverlay || document.getElementById('popupOverlay')).classList.add('hidden');
    document.getElementById('phonePopup').classList.add('hidden-popup');
    (DOM.callFamilyBtn || document.getElementById('callFamilyBtn')).classList.remove('hidden');
};
document.getElementById('closePhoneBtn').addEventListener('click', cancelCall);

window.finishCallSummary = () => {
    hasCalledFamily = true;
    todayCallLog = { choice: callWho, action: callActionText, shortDesc: callShortDesc, impactText: createLogImpactText(callStatsImpact) };

    let callChangedCount = 0;
    if (callStatsImpact.money !== 0) callChangedCount++;
    if (callStatsImpact.passion !== 0) callChangedCount++;
    if (callStatsImpact.energy !== 0) callChangedCount++;
    if (callStatsImpact.social !== 0) callChangedCount++;

    if (callChangedCount > 0) {
        setTimeout(() => AudioManager.playWoosh(callChangedCount), 200);
    }

    playerStats.money += callStatsImpact.money || 0;
    playerStats.passion += callStatsImpact.passion || 0;
    playerStats.energy += callStatsImpact.energy || 0;
    playerStats.social += callStatsImpact.social || 0;

    ['energy', 'passion', 'social'].forEach(k => playerStats[k] = Math.max(0, Math.min(100, playerStats[k])));

    (DOM.popupOverlay || document.getElementById('popupOverlay')).classList.add('hidden');
    document.getElementById('callSummaryPopup').classList.add('hidden-popup');
    updateMainBars();

    const isDead = playerStats.money <= 0 || playerStats.passion <= 0 || playerStats.energy <= 0 || playerStats.social <= 0;
    if (isDead && currentDay === 7) {
        if (!gameHistory.some(h => h.day === 7)) {
            // 🟢 เรียกใช้ฟังก์ชันเซฟ 2 ภาษา (กรณีตายจากการโทรในวันที่ 7)
            gameHistory.push({ day: 7, mainEvent: buildDualLog('call_only') });
        }
    }

    if (checkGameOver()) return;

    if (playerStats.money > 0) {
        const eventBtn = DOM['event-btn'] || document.getElementById('event-btn');
        eventBtn.disabled = false;
        eventBtn.style.filter = "none";
    }
};
document.getElementById('btn-done-call').addEventListener('click', finishCallSummary);
document.getElementById('closeCallSummaryBtn').addEventListener('click', finishCallSummary);

// =========================================
// TRANSLATION INJECTOR
// =========================================
function applyTranslations() {
    const logoImg = document.querySelector('.logo-small');
    if (logoImg) logoImg.src = currentLang === 'en' ? '../asset/logo-en.svg' : '../asset/logo.svg';

    const ids = [
        'ui-popup-daily-title', 'ui-daily-question', 'ui-popup-special-title',
        'ui-popup-summary-title', 'ui-sum-header-day', 'ui-sum-log-title-1',
        'ui-sum-log-title-2', 'ui-log-you-1', 'ui-log-you-2', 'ui-log-cause-1',
        'ui-log-cause-2', 'ui-call-title', 'ui-call-body', 'ui-call-sum-title-1',
        'ui-call-sum-title-2', 'ui-summary-called'
    ];
    ids.forEach(id => {
        const el = document.getElementById(id);
        if (el) {
            let key = id.replace(/-/g, '_');
            el.innerHTML = ui[key] || ui[key.replace('ui_', '')] || el.innerHTML;
        }
    });

    const setText = (id, text) => { const el = document.getElementById(id); if (el) el.innerText = text; };
    setText('btn-daily-next', ui.btn_next); setText('btn-sp-next', ui.btn_next);
    setText('btn-end-day', ui.btn_end_day); setText('btn-do-call', ui.btn_call);
    setText('btn-no-call', ui.btn_no_call); setText('btn-skip-call', ui.btn_skip);
    setText('btn-done-call', ui.btn_done); setText('ui-log-you-1', ui.log_you);
    setText('ui-log-cause-1', ui.log_cause); setText('ui-log-you-2', ui.log_you);
    setText('ui-log-cause-2', ui.log_cause); setText('sp-empty-msg', ui.no_special_event);

    if (DOM['event-btn']) DOM['event-btn'].innerText = ui.btn_today_event;
}

function setupGameScene() {
    const combinedImg = localStorage.getItem('saved_avatar_base64');
    const sceneEl = document.getElementById('main-game-scene');
    if (sceneEl) sceneEl.src = combinedImg || "../asset/BG/BG-01.svg";
}

// =========================================
// BOOT GAME
// =========================================
window.onload = () => {
    applyTranslations();
    setupGameScene();
    updateMainBars();

    const fade = document.getElementById('fadeScreen');
    if (fade) {
        document.getElementById('fadeDayText').innerText = `${ui.day_prefix} ${currentDay}`;
        setTimeout(() => {
            fade.classList.add('hidden-fade');
            startNewDay();
            setTimeout(() => checkGameOver(), 200);
        }, 500);
    } else {
        startNewDay();
    }
};

// =========================================
// 🧠 ตัวดักฟังการเปลี่ยนภาษา
// =========================================
document.addEventListener('langChanged', (e) => {
    currentLang = e.detail;
    if (typeof UI_LANG !== 'undefined' && UI_LANG[currentLang]) {
        ui = UI_LANG[currentLang];

        refreshDatabases();

        if (_activeDailyOriginalIndex !== -1) {
            let newHeading = Object.keys(EVENT_DB)[_activeDailyOriginalIndex];
            let newEv = EVENT_DB[newHeading][_activeDailyEventIndex];

            if (newEv) {
                eventTitle = newHeading;
                todayMainLog.eventSummary = newEv.eventSummary || "";
                if (_selectedDailyChoiceNum === 1) todayMainLog.choice = newEv.shortChoice1;
                else if (_selectedDailyChoiceNum === 2) todayMainLog.choice = newEv.shortChoice2;

                if (popupState === 1) {
                    document.getElementById('event-title-text').innerText = newHeading;
                    document.getElementById('event-desc-text').innerText = newEv.desc;
                    document.getElementById('btn-choice-1').innerText = newEv.btn1;
                    document.getElementById('btn-choice-2').innerText = newEv.btn2;
                    if (_currentR1) document.getElementById('stat-impact-1').innerText = formatStatText(_currentR1);
                    if (_currentR2) document.getElementById('stat-impact-2').innerText = formatStatText(_currentR2);
                }
            }
        }

        if (_activeSpOriginalIndex !== -1) {
            let newSp = SPECIAL_DB[_activeSpOriginalIndex];
            if (newSp) {
                todaySpLog.choice = newSp.shortDesc;
                if (popupState === 2) {
                    document.getElementById('sp-event-title').innerText = newSp.title;
                    document.getElementById('sp-event-desc').innerText = newSp.desc;
                    if (_currentSpImpact) {
                        let spStatsListEl = document.getElementById('sp-stats-list');
                        if (spStatsListEl) {
                            spStatsListEl.innerHTML = '';
                            const labels = { money: ui.stat_money, passion: ui.stat_passion, energy: ui.stat_energy, social: ui.stat_social };
                            for (let k in _currentSpImpact) {
                                if (_currentSpImpact[k] !== 0) spStatsListEl.innerHTML += `<div class="stat-item">${labels[k]} ${_currentSpImpact[k] > 0 ? '+' : ''}${_currentSpImpact[k]}</div>`;
                            }
                        }
                    }
                }
            }
        }

        if (popupState === 3) {
            document.getElementById('log-main-choice').innerText = todayMainLog.choice;
            if (hasSpecialEvent) document.getElementById('log-special-choice').innerText = todaySpLog.choice;
        }

        const decisionPopup = document.getElementById('decisionPopup');
        if (decisionPopup && !decisionPopup.classList.contains('hidden-popup')) {
            const alertContainer = document.getElementById('ui-call-alert-container');
            if (alertContainer) alertContainer.innerHTML = `${ui.call_alert_prefix}${playerStats.money}${ui.call_alert_suffix}`;
        }

        if (_activeCallWhoIndex !== -1 && _activeCallResultIndex !== -1) {
            const familyMembers = Object.keys(FAMILY_CALL_DB);
            callWho = familyMembers[_activeCallWhoIndex];
            callActionText = FAMILY_CALL_DB[callWho][_activeCallResultIndex].text;
            callShortDesc = FAMILY_CALL_DB[callWho][_activeCallResultIndex].shortDesc;

            const phonePopup = document.getElementById('phonePopup');
            if (phonePopup && !phonePopup.classList.contains('hidden-popup')) {
                document.getElementById('call-name').innerText = callWho;
            }

            const callSummaryPopup = document.getElementById('callSummaryPopup');
            if (callSummaryPopup && !callSummaryPopup.classList.contains('hidden-popup')) {
                document.getElementById('summaryName').innerText = " " + callWho;
                document.getElementById('summaryAction').innerText = callActionText;

                let statsHtml = "";
                const labels = { money: ui.stat_money, passion: ui.stat_passion, energy: ui.stat_energy, social: ui.stat_social };
                for (let k in callStatsImpact) {
                    if (callStatsImpact[k] !== 0) statsHtml += `<p>${labels[k]} ${callStatsImpact[k] > 0 ? '+' : ''}${callStatsImpact[k]}</p>`;
                }
                document.getElementById('call-stats-box').innerHTML = statsHtml || ui.summary_no_change;
            }

            if (todayCallLog) {
                todayCallLog.choice = callWho;
                todayCallLog.action = callActionText;
                todayCallLog.shortDesc = callShortDesc;
                todayCallLog.impactText = createLogImpactText(callStatsImpact);
            }
        }

        applyTranslations();
        updateMainBars();
        document.getElementById('currentDayText').innerText = `${ui.day_prefix} ${currentDay}`;

        if (currentLang === 'en') document.body.classList.add('lang-en');
        else document.body.classList.remove('lang-en');
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