// shared/settings.js

document.addEventListener('DOMContentLoaded', () => {
    // =========================================
    // 🎨 1. เสก CSS
    // =========================================
    const style = document.createElement('style');
    style.innerHTML = `
        /* 🛑 บังคับฟอนต์ Mitr ทุกจุด */
        .set-popup-overlay, .set-master-popup, .set-popup-content, 
        .set-title-h2, .set-item-block label, .set-item-row label, 
        .set-home-btn, .arrow-selector span, .set-close-btn, .set-tooltip {
            font-family: 'Mitr', sans-serif !important;
        }

        .set-popup-overlay {
            position: absolute !important; top: 0 !important; left: 0 !important; 
            width: 100% !important; height: 100% !important;
            background-color: rgba(0, 0, 0, 0.7) !important; z-index: 999999 !important;
            display: none; justify-content: center !important; align-items: center !important;
            border-radius: 40px !important; overflow: hidden !important;
        }

        .set-master-popup {
            width: 330px !important; max-width: 88% !important;
            background-color: #FCE34D !important; border-radius: 20px !important; padding: 12px !important;
            position: relative !important; box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3) !important;
            display: flex !important; flex-direction: column !important;
        }

        .set-popup-content {
            background-color: #ffffff !important; border-radius: 12px !important; 
            width: 100% !important; padding: 25px 20px 20px 20px !important; 
            display: flex !important; flex-direction: column !important; text-align: center !important;
        }

        /* ✨ ระบบ Tooltip ✨ */
        .set-slider-container { position: relative !important; width: 100% !important; margin-top: 15px !important; }
        
        .set-tooltip {
            position: absolute !important; 
            top: -28px !important;
            background-color: #ffffff !important; 
            color: #000000 !important; 
            border: 2px solid #FCE34D !important; 
            padding: 2px 8px !important; border-radius: 6px !important;
            font-size: 0.85rem !important; font-weight: 600 !important;
            pointer-events: none !important; opacity: 0 !important; 
            transition: opacity 0.2s ease !important;
            transform: translateX(-50%) !important; z-index: 10 !important;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1) !important;
        }
        .set-slider-container:hover .set-tooltip { opacity: 1 !important; }

        .set-slider { 
            width: 100% !important; accent-color: #ffde59 !important; 
            height: 10px !important; cursor: pointer !important; margin: 5px 0 !important; 
            touch-action: manipulation !important;
            -webkit-user-select: auto !important;
        }

        .set-slider::-webkit-slider-thumb {
            touch-action: manipulation !important;
            -webkit-appearance: none !important;
            appearance: none !important;
            width: 20px !important;
            height: 20px !important;
            background: #ffde59 !important;
            border-radius: 50% !important;
            border: 2px solid #e0c040 !important;
        }
        .set-slider::-moz-range-thumb {
            width: 20px !important;
            height: 20px !important;
            background: #ffde59 !important;
            border-radius: 50% !important;
            border: 2px solid #e0c040 !important;
        }

        .set-close-btn {
            position: absolute !important; top: -15px !important; right: -15px !important;
            width: 45px !important; height: 45px !important;
            background-color: #ef4444 !important; color: white !important;
            border: 4px solid #ef4444 !important; border-radius: 50% !important;
            font-size: 28px !important; font-weight: bold !important; cursor: pointer !important;
            display: flex !important; justify-content: center !important; align-items: center !important;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2) !important; padding-bottom: 4px !important;
        }

        .set-title-h2 { font-size: 1.4rem !important; font-weight: 500 !important; color: #111 !important; margin: 0 0 10px 0 !important; }
        .set-item-block { margin-bottom: 12px !important; text-align: left !important; width: 100% !important; }
        .set-item-block label { display: block !important; font-size: 1rem !important; font-weight: 600 !important; color: #222 !important; margin-bottom: 2px !important; }
        
        .set-item-row { display: flex !important; justify-content: space-between !important; align-items: center !important; margin-bottom: 12px !important; background: #f8f9fa !important; border-radius: 12px !important; padding: 8px 12px !important; border: 1px solid #eee !important; width: 100% !important; box-sizing: border-box !important;}
        .set-item-row label { font-size: 0.95rem !important; font-weight: 600 !important; color: #222 !important; margin: 0 !important; }
        
        .arrow-selector { display: flex !important; align-items: center !important; gap: 5px !important; }
        .arrow-btn { background: #ffde59 !important; border: 2px solid #e0c040 !important; border-radius: 50% !important; width: 28px !important; height: 28px !important; display: flex !important; justify-content: center !important; align-items: center !important; font-size: 0.9rem !important; font-weight: bold !important; cursor: pointer !important; padding: 0 !important; }
        .arrow-selector span { width: 80px !important; text-align: center !important; font-size: 0.9rem !important; font-weight: 600 !important; color: #1800ad !important; }

        .set-home-btn {
            background-color: #ED4C4C !important; border: 6px solid #A80000 !important; 
            color: white !important; border-radius: 50px !important; padding: 8px 30px !important;
            font-size: 1.2rem !important; font-weight: 500 !important; cursor: pointer !important; margin-top: 10px !important;
        }

        .set-gear-icon-btn {
            position: absolute !important; top: 25px !important; right: 25px !important; 
            width: 48px !important; height: 48px !important;
            background-color: #ffde59 !important; border: 3px solid #ffcc53 !important; border-radius: 15px !important; 
            cursor: pointer !important; z-index: 999990 !important; display: flex !important; justify-content: center !important; align-items: center !important;
            box-shadow: 0 4px 0 rgba(0,0,0,0.15) !important;
        }
        .set-gear-icon-btn::after {
            content: '' !important; width: 65% !important; height: 65% !important;
            background-size: contain !important; background-repeat: no-repeat !important; background-position: center !important;
            
            /* 🛑 แปะ BASE64 ฟันเฟืองของมึงตรงนี้ 🛑 */
            background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwMCIgem9vbUFuZFBhbj0ibWFnbmlmeSIgdmlld0JveD0iMCAwIDE1MDAgMTQ5OS45OTk5MzMiIGhlaWdodD0iMjAwMCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pZFlNaWQgbWVldCIgdmVyc2lvbj0iMS4wIj48ZGVmcz48Y2xpcFBhdGggaWQ9IjgzYzNlYjRkYmUiPjxwYXRoIGQ9Ik0gMTguMjA3MDMxIDE2LjM3NSBMIDE0ODEuNDU3MDMxIDE2LjM3NSBMIDE0ODEuNDU3MDMxIDE0ODMuMzc1IEwgMTguMjA3MDMxIDE0ODMuMzc1IFogTSAxOC4yMDcwMzEgMTYuMzc1ICIgY2xpcC1ydWxlPSJub256ZXJvIi8+PC9jbGlwUGF0aD48L2RlZnM+PGcgY2xpcC1wYXRoPSJ1cmwoIzgzYzNlYjRkYmUpIj48cGF0aCBmaWxsPSIjZmZhYjAwIiBkPSJNIDc1MC40NDUzMTIgMTYuNSBDIDgxNS4wMTE3MTkgMTYuNTcwMzEyIDg0OC45NzY1NjIgMTYuNTcwMzEyIDg1Mi4zMzU5MzggMTYuNSBDIDg1Ny4wNTQ2ODggMTYuMjUgODYxLjIyMjY1NiAxOS41MzUxNTYgODYyLjA3ODEyNSAyNC4xNzk2ODggTCA4OTAuMTY0MDYyIDE4Mi4yMzgyODEgQyA4OTAuODU5Mzc1IDE4Ni4xNzE4NzUgODkzLjcyNjU2MiAxODkuMzk4NDM4IDg5Ny42MTcxODggMTkwLjYwMTU2MiBDIDk0Ni40NDUzMTIgMjA0LjgxMjUgOTkzLjEzMjgxMiAyMjQuNjQwNjI1IDEwMzcuNjc5Njg4IDI1MC4wODk4NDQgQyAxMDQwLjI2OTUzMSAyNTEuNjI1IDEwNDMuNTQyOTY5IDI1MS40OTIxODggMTA0Ni4wNTA3ODEgMjQ5Ljc0NjA5NCBMIDExODAuMjY1NjI1IDE1NC45NTcwMzEgQyAxMTgzLjEyODkwNiAxNTIuOTM3NSAxMTg3LjAxNTYyNSAxNTMuMjMwNDY5IDExODkuNTU0Njg4IDE1NS42NDQ1MzEgTCAxMzQzLjAyNzM0NCAyOTkuOTQ5MjE5IEMgMTM0NS43NDIxODggMzAyLjUzMTI1IDEzNDYuMTc1NzgxIDMwNi42NzU3ODEgMTM0NC4wNjI1IDMwOS42OTE0MDYgTCAxMjQ2LjI5Mjk2OSA0NDkuNDEwMTU2IEMgMTI0NC44OTA2MjUgNDUxLjM5MDYyNSAxMjQ0Ljc1NzgxMiA0NTQuMDE1NjI1IDEyNDUuOTQ5MjE5IDQ1Ni4xNzE4NzUgQyAxMjcxLjE2NDA2MiA1MDIuNDA2MjUgMTI5MC41NzQyMTkgNTUxLjYwOTM3NSAxMzA0LjE3NTc4MSA2MDMuODAwNzgxIEMgMTMwNS4yODkwNjIgNjA4LjAzNTE1NiAxMzA4Ljg1NTQ2OSA2MTEuMTk1MzEyIDEzMTMuMjMwNDY5IDYxMS44MjQyMTkgTCAxNDc3LjI0NjA5NCA2MzQuMjg5MDYyIEMgMTQ3OS41NjI1IDYzNC42MzI4MTIgMTQ4MS4yNzM0MzggNjM2LjU4NTkzOCAxNDgxLjI1NzgxMiA2MzguODc1IEwgMTQ4MS4yNTc4MTIgODU0LjAxNTYyNSBDIDE0ODEuMjUgODU3Ljc2NTYyNSAxNDc4LjUzNTE1NiA4NjAuOTY0ODQ0IDE0NzQuODM5ODQ0IDg2MS41ODIwMzEgTCAxMzEzLjgwMDc4MSA4ODcuNjAxNTYyIEMgMTMwOS42NzE4NzUgODg4LjMwODU5NCAxMzA2LjM1NTQ2OSA4OTEuMzA4NTk0IDEzMDUuMzIwMzEyIDg5NS4yODUxNTYgQyAxMjkwLjk1NzAzMSA5NDkuNDYwOTM4IDEyNzEuMDg5ODQ0IDk5OS44NTU0NjkgMTI0NS43MTg3NSAxMDQ2LjQ2ODc1IEMgMTI0NC40NTcwMzEgMTA0OC43OTI5NjkgMTI0NC41OTc2NTYgMTA1MS41ODk4NDQgMTI0Ni4wNjY0MDYgMTA1My42ODc1IEwgMTM0NC41MjM0MzggMTE5My4xNzk2ODggQyAxMzQ2LjAyMzQzOCAxMTk1LjI3NzM0NCAxMzQ1LjY3NTc4MSAxMTk4LjIxMDkzOCAxMzQzLjcyNjU2MiAxMjAwLjA1MDc4MSBMIDExOTIuNzczNDM4IDEzNDAuOTE0MDYyIEMgMTE4OC45MTAxNTYgMTM0NC41NDY4NzUgMTE4My4wMzEyNSAxMzQ0Ljk3MjY1NiAxMTc4LjY3NTc4MSAxMzQxLjk0OTIxOSBMIDEwNTAuNTMxMjUgMTI1Mi4yMDcwMzEgQyAxMDQ2Ljg4NjcxOSAxMjQ5LjY2Nzk2OSAxMDQyLjEwNTQ2OSAxMjQ5LjQwMjM0NCAxMDM4LjE1NjI1IDEyNTEuNTE1NjI1IEMgOTkzLjY4MzU5NCAxMjc1Ljc0MjE4OCA5NDYuMDQyOTY5IDEyOTUuNDUzMTI1IDg5NS4yMjY1NjIgMTMxMC42NjAxNTYgQyA4OTEuMTYwMTU2IDEzMTEuODQzNzUgODg4LjEyODkwNiAxMzE1LjI3MzQzOCA4ODcuNDMzNTk0IDEzMTkuNDg0Mzc1IEwgODU5LjU3ODEyNSAxNDc5LjM3ODkwNiBDIDg1OS4xNTIzNDQgMTQ4MS42NzU3ODEgODU3LjIwNzAzMSAxNDgzLjM4NjcxOSA4NTQuODc1IDE0ODMuNTAzOTA2IEMgODUyLjk2ODc1IDE0ODMuNTc0MjE5IDgxNy44OTQ1MzEgMTQ4My42MjEwOTQgNzQ5LjY2MDE1NiAxNDgzLjYyMTA5NCBDIDY4MS41IDE0ODMuNTQ2ODc1IDY0Ni40Njg3NSAxNDgzLjQ2NDg0NCA2NDQuNTU0Njg4IDE0ODMuMzkwNjI1IEMgNjQyLjIxODc1IDE0ODMuMjY1NjI1IDY0MC4yNzczNDQgMTQ4MS41NjY0MDYgNjM5Ljg1MTU2MiAxNDc5LjI2OTUzMSBMIDYxMi4xMTMyODEgMTMxOS4zNzUgQyA2MTEuNDA2MjUgMTMxNS4xNjQwNjIgNjA4LjM3ODkwNiAxMzExLjczMDQ2OSA2MDQuMzIwMzEyIDEzMTAuNTUwNzgxIEMgNTUzLjUwMzkwNiAxMjk1LjI2OTUzMSA1MDUuODk4NDM4IDEyNzUuNDc2NTYyIDQ2MS41MDc4MTIgMTI1MS4xNzk2ODggQyA0NTcuNTU4NTk0IDEyNDkuMDY2NDA2IDQ1Mi43NzczNDQgMTI0OS4zMjgxMjUgNDQ5LjEyODkwNiAxMjUxLjg2NzE4OCBMIDMyMC44NzEwOTQgMTM0MS41MDM5MDYgQyAzMTYuNTE5NTMxIDEzNDQuNTMxMjUgMzEwLjYzNjcxOSAxMzQ0LjA5NzY1NiAzMDYuNzY5NTMxIDEzNDAuNDY4NzUgTCAxNTUuOTI5Njg4IDExOTkuNDg4MjgxIEMgMTUzLjk4MDQ2OSAxMTk3LjY0MDYyNSAxNTMuNjM2NzE5IDExOTQuNzAzMTI1IDE1NS4xMzI4MTIgMTE5Mi42MTMyODEgTCAyNTMuODIwMzEyIDEwNTMuMTIxMDk0IEMgMjU1LjI4NTE1NiAxMDUxLjAxNTYyNSAyNTUuNDE3OTY5IDEwNDguMjIyNjU2IDI1NC4xNjQwNjIgMTA0NS45MDIzNDQgQyAyMjguNzkyOTY5IDk5OS4yODkwNjIgMjA4Ljk2NDg0NCA5NDguODk4NDM4IDE5NC42NzE4NzUgODk0LjcxODc1IEMgMTkzLjY0MDYyNSA4OTAuNzUgMTkwLjMxNjQwNiA4ODcuNzQyMTg4IDE4Ni4xOTE0MDYgODg3LjAzOTA2MiBMIDI1LjE0MDYyNSA4NjAuNzgxMjUgQyAyMS40NDE0MDYgODYwLjE2NDA2MiAxOC43MzA0NjkgODU2Ljk2NDg0NCAxOC43MjI2NTYgODUzLjIxODc1IEwgMTguOTQ5MjE5IDYzOC4wNzQyMTkgQyAxOC45MzM1OTQgNjM1Ljc4NTE1NiAyMC42NDQ1MzEgNjMzLjgzNTkzOCAyMi45NjA5MzggNjMzLjQ4ODI4MSBMIDE4Ny4wOTM3NSA2MTEuMjUzOTA2IEMgMTkxLjQ2ODc1IDYxMC42MjEwOTQgMTk1LjAzOTA2MiA2MDcuNDYwOTM4IDE5Ni4xNDg0MzggNjAzLjIyNjU2MiBDIDIwOS43NSA1NTEuMDM5MDYyIDIyOS4xOTkyMTkgNTAxLjgyODEyNSAyNTQuNDg0Mzc1IDQ1NS42MDE1NjIgQyAyNTUuNjgzNTk0IDQ1My40NDUzMTIgMjU1LjU0Mjk2OSA0NTAuODE2NDA2IDI1NC4xNDA2MjUgNDQ4LjgzNTkzOCBMIDE1Ni40OTYwOTQgMzA5LjEyNSBDIDE1NC40MDYyNSAzMDYuMDgyMDMxIDE1NC44OTg0MzggMzAxLjkzNzUgMTU3LjY0MDYyNSAyOTkuMzgyODEyIEwgMzExLjIzMDQ2OSAxNTUuMTkxNDA2IEMgMzEzLjc2MTcxOSAxNTIuNzc3MzQ0IDMxNy42NTIzNDQgMTUyLjQ4ODI4MSAzMjAuNTE5NTMxIDE1NC41IEwgNDU0LjYyNSAyNDkuNDAyMzQ0IEMgNDU3LjEyODkwNiAyNTEuMTQ4NDM4IDQ2MC4zOTg0MzggMjUxLjI4MTI1IDQ2Mi45ODgyODEgMjQ5Ljc0NjA5NCBDIDUwNy41MzUxNTYgMjI0LjM3ODkwNiA1NTQuMjY1NjI1IDIwNC42MjEwOTQgNjAzLjE2Nzk2OSAxOTAuNDkyMTg4IEMgNjA3LjA1MDc4MSAxODkuMjgxMjUgNjA5LjkyNTc4MSAxODYuMDU0Njg4IDYxMC42MTcxODggMTgyLjEyMTA5NCBMIDYzOC44MDg1OTQgMjQuMDYyNSBDIDYzOS42Njc5NjkgMTkuNDE3OTY5IDY0My44MzU5MzggMTYuMTMyODEyIDY0OC41NTA3ODEgMTYuMzgyODEyIEMgNjUxLjkxMDE1NiAxNi40NjA5MzggNjg1Ljg3ODkwNiAxNi41IDc1MC40NDUzMTIgMTYuNSBaIE0gMTA4OS43MTQ4NDQgNzUxLjc4MTI1IEMgMTA4OS43MTQ4NDQgNTY0LjI4MTI1IDkzNy43MTQ4NDQgNDEyLjI4MTI1IDc1MC4yMTg3NSA0MTIuMjgxMjUgQyA1NjIuNzE4NzUgNDEyLjI4MTI1IDQxMC43MTg3NSA1NjQuMjgxMjUgNDEwLjcxODc1IDc1MS43ODEyNSBDIDQxMC43MTg3NSA5MzkuMjc3MzQ0IDU2Mi43MTg3NSAxMDkxLjI3NzM0NCA3NTAuMjE4NzUgMTA5MS4yNzczNDQgQyA5MzcuNzE0ODQ0IDEwOTEuMjc3MzQ0IDEwODkuNzE0ODQ0IDkzOS4yNzczNDQgMTA4OS43MTQ4NDQgNzUxLjc4MTI1IFogTSAxMDg5LjcxNDg0NCA3NTEuNzgxMjUgIiBmaWxsLW9wYWNpdHk9IjEiIGZpbGwtcnVsZT0ibm9uemVybyIvPjwvZz48L3N2Zz4=') !important;         
            transition: transform 0.4s ease-out !important; transform-origin: center !important; 
        }
        .set-gear-icon-btn:hover::after { transform: rotate(180deg) !important; }
    `;
    document.head.appendChild(style);

    // =========================================
    // 🧱 2. เสก HTML ป๊อปอัพ
    // =========================================
    const settingsHTML = `
    <div id="settings-module-overlay" class="set-popup-overlay">
        <div class="set-master-popup">
            <button class="set-close-btn" id="closeSettingsModule">&times;</button>
            <div class="set-popup-content">
                <div class="set-inner-header"><h2 class="set-title-h2" id="set-ui-title-1">ตั้งค่า</h2></div>
                <div class="set-inner-body">
                    <div class="set-item-block">
                        <label id="set-ui-music">เสียงเพลง</label>
                        <div class="set-slider-container">
                            <span id="musicTooltip" class="set-tooltip">70</span>
                            <input type="range" id="musicVolumeSlider" min="0" max="100" class="set-slider">
                        </div>
                    </div>
                    <div class="set-item-block">
                        <label id="set-ui-sfx">เสียงเอฟเฟกต์</label>
                        <div class="set-slider-container">
                            <span id="sfxTooltip" class="set-tooltip">80</span>
                            <input type="range" id="sfxVolumeSlider" min="0" max="100" class="set-slider">
                        </div>
                    </div>
                    <div class="set-item-row">
                        <label id="set-ui-song">เพลง</label>
                        <div class="arrow-selector">
                            <button id="prevSong" class="arrow-btn">◀</button>
                            <span id="currentSongDisplay">Track 1</span>
                            <button id="nextSong" class="arrow-btn">▶</button>
                        </div>
                    </div>
                    <div class="set-item-row">
                        <label id="set-ui-lang">ภาษา</label>
                        <div class="arrow-selector">
                            <button id="prevLang" class="arrow-btn">◀</button>
                            <span id="currentLangDisplay">ภาษาไทย</span>
                            <button id="nextLang" class="arrow-btn">▶</button>
                        </div>
                    </div>
                </div>
                <div class="set-inner-footer">
                    <button class="set-home-btn" id="set-btn-home" onclick="goToMainMenu()">กลับหน้าหลัก</button>
                    <div style="margin-top: 15px;">
                        <a href="https://drive.google.com/file/d/1YqOS0qjUM57ujnITE_IbUVpaBJeTqnfn/view?usp=sharing" target="_blank" id="set-ui-about" style="color: #666; font-size: 0.9rem; text-decoration: underline; font-weight: 500;">เกี่ยวกับโปรเจกต์</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `;

    const appContainer = document.querySelector('.app-container');
    if (appContainer) appContainer.insertAdjacentHTML('beforeend', settingsHTML);

    const currentPath = window.location.pathname;
    if (!currentPath.includes('page-0') && !currentPath.includes('page-1')) {
        if (appContainer) appContainer.insertAdjacentHTML('afterbegin', `<button class="set-gear-icon-btn" onclick="openSettingsModule()"></button>`);
    }

    // =========================================
    // 🧠 3. ระบบ Persistence + Tooltip Logic
    // =========================================
    const songs = ['Track 1', 'Track 2', 'Track 3'];
    const langs = [{ code: 'th', text: 'ภาษาไทย' }, { code: 'en', text: 'English' }];

    let musicVol = localStorage.getItem('musicVolume') || 30;
    let sfxVol = localStorage.getItem('sfxVolume') || 50;
    let songIdx = parseInt(localStorage.getItem('currentSongIdx')) || 0;
    let langCode = localStorage.getItem('currentLang') || 'th';
    let langIdx = langs.findIndex(l => l.code === langCode);
    if (langIdx === -1) langIdx = 0;

    const musicSlider = document.getElementById('musicVolumeSlider');
    const sfxSlider = document.getElementById('sfxVolumeSlider');
    const musicTooltip = document.getElementById('musicTooltip');
    const sfxTooltip = document.getElementById('sfxTooltip');
    const songDisplay = document.getElementById('currentSongDisplay');
    const langDisplay = document.getElementById('currentLangDisplay');

    const updateTooltip = (slider, tooltip) => {
        const val = slider.value;
        tooltip.innerText = val;
        tooltip.style.left = `calc(${val}% + (${15 - val * 0.3}px))`;
    };

    musicSlider.value = musicVol;
    sfxSlider.value = sfxVol;
    updateTooltip(musicSlider, musicTooltip);
    updateTooltip(sfxSlider, sfxTooltip);
    songDisplay.innerText = songs[songIdx];
    langDisplay.innerText = langs[langIdx].text;

    // 🟢 อัปเดต Dictionary ให้รองรับคำว่า About Project
    const applySetLangUI = (code) => {
        const dict = {
            th: { t1: "ตั้งค่า", music: "เสียงเพลง", sfx: "เสียงเอฟเฟกต์", song: "เพลง", lang: "ภาษา", home: "กลับหน้าหลัก", about: "เกี่ยวกับโปรเจกต์"},
            en: { t1: "SETTINGS", music: "Music", sfx: "SFX", song: "Song", lang: "Lang", home: "Home", about: "About Project"}
        };
        const ui = dict[code] || dict.th;
        const ids = { 'set-ui-title-1': ui.t1, 'set-ui-music': ui.music, 'set-ui-sfx': ui.sfx, 'set-ui-song': ui.song, 'set-ui-lang': ui.lang, 'set-btn-home': ui.home, 'set-ui-about': ui.about };
        for (let id in ids) { if (document.getElementById(id)) document.getElementById(id).innerText = ids[id]; }
    };
    applySetLangUI(langCode);

    // =========================================
    // 🟢 4. ควบคุมเสียงด้วยระบบใหม่ (Web Audio API)
    // =========================================
    musicSlider.addEventListener('input', (e) => {
        localStorage.setItem('musicVolume', e.target.value);
        updateTooltip(musicSlider, musicTooltip);
        
        if (window.parent && window.parent.AudioManager) {
            if (typeof window.parent.AudioManager.updateVolumes === 'function') {
                window.parent.AudioManager.updateVolumes();
            } else if (typeof window.parent.AudioManager.syncVolume === 'function') {
                window.parent.AudioManager.syncVolume();
            }
        }
    });

    sfxSlider.addEventListener('input', (e) => {
        localStorage.setItem('sfxVolume', e.target.value);
        updateTooltip(sfxSlider, sfxTooltip);
        
        if(window.parent && window.parent.AudioManager) {
            if (typeof window.parent.AudioManager.updateVolumes === 'function') {
                window.parent.AudioManager.updateVolumes();
            } else if (typeof window.parent.AudioManager.syncVolume === 'function') {
                window.parent.AudioManager.syncVolume();
            }
            window.parent.AudioManager.play('click'); 
        }
    });

    document.getElementById('prevSong').onclick = () => {
        songIdx = (songIdx - 1 + songs.length) % songs.length;
        songDisplay.innerText = songs[songIdx];
        localStorage.setItem('currentSongIdx', songIdx);
        
        if(window.parent && window.parent.AudioManager) {
            if (typeof window.parent.AudioManager.changeBGM === 'function') {
                window.parent.AudioManager.changeBGM(songIdx);
            } else if (typeof window.parent.AudioManager.playBGM === 'function') {
                window.parent.AudioManager.playBGM();
            }
        }
    };

    document.getElementById('nextSong').onclick = () => {
        songIdx = (songIdx + 1) % songs.length;
        songDisplay.innerText = songs[songIdx];
        localStorage.setItem('currentSongIdx', songIdx);
        
        if(window.parent && window.parent.AudioManager) {
            if (typeof window.parent.AudioManager.changeBGM === 'function') {
                window.parent.AudioManager.changeBGM(songIdx);
            } else if (typeof window.parent.AudioManager.playBGM === 'function') {
                window.parent.AudioManager.playBGM();
            }
        }
    };

    const updateLang = (idx) => {
        langIdx = (idx + langs.length) % langs.length;
        const newLang = langs[langIdx];
        langDisplay.innerText = newLang.text;
        localStorage.setItem('currentLang', newLang.code);
        applySetLangUI(newLang.code);
        if (typeof window.applyPageLanguage === 'function') window.applyPageLanguage(newLang.code);
    };
    document.getElementById('prevLang').onclick = () => updateLang(langIdx - 1);
    document.getElementById('nextLang').onclick = () => updateLang(langIdx + 1);

    const overlay = document.getElementById('settings-module-overlay');
    
    window.openSettingsModule = () => { 
        if (overlay) overlay.style.display = 'flex'; 
        if (window.parent && window.parent.AudioManager) window.parent.AudioManager.play('pop');
    };
    
    window.goToMainMenu = function () { window.location.href = '../page-1/index.html'; };

    const closePopup = () => { if (overlay) overlay.style.display = 'none'; };
    if (document.getElementById('closeSettingsModule')) document.getElementById('closeSettingsModule').onclick = closePopup;
    if (overlay) overlay.onclick = (e) => { if (e.target === overlay) closePopup(); };

    if (currentPath.includes('page-0') || currentPath.includes('page-1')) {
        if (document.getElementById('set-btn-home')) document.getElementById('set-btn-home').style.display = 'none';
    };

    window.applyPageLanguage = function (langCode) {
        if (typeof UI_LANG !== 'undefined') {
            const uiPage = UI_LANG[langCode];
            if (uiPage) {
                for (let key in uiPage) {
                    const possibleIds = [key, key.replace(/_/g, '-'), 'ui-' + key.replace(/_/g, '-'), key.replace('btn_', '') + 'Btn', 'startGameBtn'];
                    for (let pid of possibleIds) {
                        const el = document.getElementById(pid);
                        if (el) el.innerHTML = uiPage[key];
                    }
                }
                const logoImg = document.querySelector('.logo-small') || document.querySelector('.logo');
                if (logoImg) logoImg.src = langCode === 'en' ? '../asset/logo-en.svg' : '../asset/logo.svg';
            }
        }
        document.dispatchEvent(new CustomEvent('langChanged', { detail: langCode }));
    };

});