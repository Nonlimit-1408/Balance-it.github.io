window.AudioManager = (() => {
    // 🛑 พาธไฟล์เสียง (เหมือนเดิม)
    const BGM_TRACKS = ['sound/bg/track1.mp3', 'sound/bg/track2.mp3', 'sound/bg/track3.mp3'];
    const SFX_PATH = 'sound/sfx/';
    
    // รายชื่อไฟล์ SFX ทั้งหมดที่ต้องใช้ (มึงเพิ่ม/ลดได้ตามสบาย แต่ต้องใส่ให้ครบนะ)
    const SFX_FILES = [
        'click', 'drop', 'tada', 'camera', 'game_over', 'win', 
        'pop', 'scramble', 'noti', 'phone_ring', 'phone_talk', 'phone_hangup', 'woosh',
        'ticking_1', 'ticking_2', 'ticking_3', 'ticking_4', 'ticking_5', 'ticking_6'
    ];

    // =========================================
    // 🎛️ 1. สร้างห้องอัดเสียงดิจิทัล (Web Audio API)
    // =========================================
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    const audioCtx = new AudioContext();

    // สร้าง Mixer วอลลุ่มแยก 2 ช่อง (BGM กับ SFX)
    const bgmGain = audioCtx.createGain();
    const sfxGain = audioCtx.createGain();
    
    // ต่อสาย Mixer เข้ากับลำโพง (Destination)
    bgmGain.connect(audioCtx.destination);
    sfxGain.connect(audioCtx.destination);

    // =========================================
    // 📦 2. ระบบโหลดไฟล์เสียงเก็บไว้ในแรม (Preload)
    // =========================================
    const audioBuffers = { sfx: {}, bgm: {} };
    let isUnlocked = false;

    // ฟังก์ชันโหลดไฟล์ MP3 แปลงเป็น Buffer
    const loadAudio = async (url) => {
        try {
            const response = await fetch(url);
            const arrayBuffer = await response.arrayBuffer();
            return await new Promise((resolve, reject) => {
                audioCtx.decodeAudioData(arrayBuffer, resolve, reject);
            });
        } catch (e) {
            console.warn(`[AudioManager] โหลดไฟล์ไม่สำเร็จ: ${url}`, e);
            return null;
        }
    };

    // สั่งโหลด SFX ทั้งหมดมารอไว้
    SFX_FILES.forEach(async (file) => {
        audioBuffers.sfx[file] = await loadAudio(`${SFX_PATH}${file}.MP3`); // 💡 แก้ .mp3 พิมพ์เล็ก/ใหญ่ ให้ตรงกับไฟล์จริงของมึงด้วยนะ
    });

    // โหลดเพลง BGM
    const loadAllBGM = async () => {
        for (let i = 0; i < BGM_TRACKS.length; i++) {
            audioBuffers.bgm[i] = await loadAudio(BGM_TRACKS[i]);
        }
    };
    loadAllBGM();

    // =========================================
    // 🔊 3. ระบบควบคุมความดัง (อัปเดตค่าจาก localStorage)
    // =========================================
    const updateVolumes = () => {
        const mVol = localStorage.getItem('musicVolume');
        const sVol = localStorage.getItem('sfxVolume');
        
        // ถ้าเพิ่งเปิดเกมครั้งแรก ตั้งค่าเริ่มต้น (BGM 30%, SFX 50%)
        const bgmVal = mVol !== null ? parseInt(mVol) / 100 : 0.3;
        const sfxVal = sVol !== null ? parseInt(sVol) / 100 : 0.5;

        // ปรับวอลลุ่มที่ Mixer ทันที (เนียนๆ ด้วย ramp)
        bgmGain.gain.setTargetAtTime(bgmVal, audioCtx.currentTime, 0.1);
        sfxGain.gain.setTargetAtTime(sfxVal, audioCtx.currentTime, 0.1);
    };
    updateVolumes(); // เซ็ตค่าตอนโหลดไฟล์

// =========================================
    // 🎵 4. ระบบเล่นเพลง (BGM)
    // =========================================
    
    // 🟢 บังคับเซ็ตค่าให้กลับมาแทร็ก 1 (index 0) เสมอตอนรีเฟรชหน้าเว็บ
    localStorage.setItem('currentSongIdx', 0);
    let currentBgmIndex = 0; 
    let activeBgmSource = null;

    const playBGM = () => {
        if (!isUnlocked) return;
        
        if (audioCtx.state === 'suspended') {
            audioCtx.resume().then(() => playBGM());
            return;
        }

        // ดึงค่าล่าสุดจาก localStorage เผื่อว่าโดนเปลี่ยนจาก settings
        currentBgmIndex = parseInt(localStorage.getItem('currentSongIdx')) || 0;

        const buffer = audioBuffers.bgm[currentBgmIndex];
        if (!buffer) {
            setTimeout(playBGM, 500); 
            return;
        }

        // ปิดเพลงเก่าก่อน (ถ้ามี)
        if (activeBgmSource) {
            activeBgmSource.onended = null; // 🟢 ปลดอีเวนต์เก่าออกก่อน ไม่งั้นมันจะสคิปเพลงมั่ว
            activeBgmSource.stop();
        }

        // สร้างเครื่องเล่นแผ่นเสียงใหม่
        activeBgmSource = audioCtx.createBufferSource();
        activeBgmSource.buffer = buffer;
        activeBgmSource.connect(bgmGain); 
        activeBgmSource.start();

        // เมื่อเล่นจบเพลง ให้เปลี่ยนเพลงถัดไปอัตโนมัติ
        activeBgmSource.onended = () => {
            currentBgmIndex = (currentBgmIndex + 1) % BGM_TRACKS.length;
            localStorage.setItem('currentSongIdx', currentBgmIndex);
            playBGM();
        };
    };

    // 🟢 สร้างฟังก์ชันเปลี่ยนเพลงโดยเฉพาะ
    const changeBGM = (index) => {
        currentBgmIndex = index;
        localStorage.setItem('currentSongIdx', index);
        if (isUnlocked) playBGM(); // สั่งเล่นเพลงใหม่ทันที
    };

    // =========================================
    // 💥 5. ระบบเล่นเอฟเฟกต์ (SFX)
    // =========================================
    let lastPlayed = {};
    let activeLoopSFX = {};
    let tickingBag = [];

    const getNextTicking = () => {
        if (tickingBag.length === 0) tickingBag = [1, 2, 3, 4, 5, 6].sort(() => Math.random() - 0.5);
        return `ticking_${tickingBag.pop()}`;
    };

    const playSFX = (fileName, loop = false, id = null) => {
        if (!isUnlocked || audioCtx.state === 'suspended') return null;

        const buffer = audioBuffers.sfx[fileName];
        if (!buffer) return null; // ไฟล์ยังไม่มา หรือไม่มีไฟล์นี้

        const now = audioCtx.currentTime;
        
        // 🟢 ระบบ Anti-Spam: บล็อกเสียงรัวๆ ใน 0.1 วิ
        if (!loop && lastPlayed[fileName] && (now - lastPlayed[fileName] < 0.1)) {
            return null; 
        }
        lastPlayed[fileName] = now;

        // สร้างเครื่องเล่นแผ่นเสียง
        const source = audioCtx.createBufferSource();
        source.buffer = buffer;
        source.loop = loop;
        source.connect(sfxGain); // ต่อสายเข้า Mixer SFX
        source.start();

        // ถ้าสั่ง Loop ให้จำเครื่องเล่นไว้ จะได้สั่งหยุดได้
        if (loop && id) {
            activeLoopSFX[id] = source;
        }

        return source;
    };

    // =========================================
    // 🔓 6. ปลดล็อกเสียงบน iOS (ตัวละครลับ)
    // =========================================
    // เบราว์เซอร์บังคับว่า ต้องให้ยูสเซอร์จิ้มจอก่อน ถึงจะยอมให้เล่นเสียง
    const unlockAudio = () => {
        if (isUnlocked) return;
        
        if (audioCtx.state === 'suspended') {
            audioCtx.resume();
        }

        // เล่นเสียงเงียบๆ เพื่อปลดล็อก Engine
        const buffer = audioCtx.createBuffer(1, 1, 22050);
        const source = audioCtx.createBufferSource();
        source.buffer = buffer;
        source.connect(audioCtx.destination);
        source.start();

        isUnlocked = true;
        
        // ปลดล็อกปุ๊บ สั่งเล่นเพลงหลักทันที
        playBGM(); 
    };

// =========================================
    // 🎮 7. โยนฟังก์ชันส่งออกไปให้ไฟล์อื่นเรียกใช้ (API เดิมเป๊ะ!)
    // =========================================
    return {
        unlockAudio: unlockAudio,
        play: playSFX,
        stop: (id) => { 
            if (activeLoopSFX[id]) { 
                activeLoopSFX[id].stop(); 
                delete activeLoopSFX[id]; 
            } 
        },
        playTicking: () => playSFX(getNextTicking()),
        playWoosh: (count) => {
            let i = 0;
            const playNext = () => { 
                if (i < count) { 
                    playSFX('woosh'); 
                    i++; 
                    setTimeout(playNext, 200); 
                } 
            };
            playNext();
        },
        stopBGM: () => { 
            if (activeBgmSource) {
                activeBgmSource.onended = null; 
                activeBgmSource.stop();
                activeBgmSource = null;
            }
        },
        updateVolumes: updateVolumes,
        
        // 🟢 เพิ่ม 2 ตัวนี้เข้ามาให้ settings.js ใช้งานได้!
        changeBGM: changeBGM,
        playBGM: playBGM
    };
})();