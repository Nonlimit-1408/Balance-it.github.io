// ส่งคำสั่งเสียงทะลุกรอบ iframe ไปที่หน้าแม่
const AudioManager = window.parent.AudioManager;

// 1. ปลดล็อกเพลงตอนผู้เล่นคลิกจอครั้งแรก
document.addEventListener('click', () => {
    if(AudioManager) AudioManager.unlockAudio();
}, { once: true });

// 2. ดักเสียงปุ่มกดอัตโนมัติ (ไม่ต้องไปนั่งใส่ทีละปุ่ม)
document.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON' || e.target.closest('button') || e.target.classList.contains('btn-choice')) {
        if(AudioManager) AudioManager.play('click');
    }
});

// 3. ดักเสียงหน้าสรุปอัตโนมัติ
window.addEventListener('DOMContentLoaded', () => {
    // หน้า 1: เสียงของหล่น
    if (window.location.pathname.includes('page-1')) {
        setTimeout(() => AudioManager.play('drop'), 300);
    }
    
    // หน้า 6: หน้าสรุปผล
    if (window.location.pathname.includes('page-6')) {
        // เล่นเสียงทาดา! ก่อน
        setTimeout(() => AudioManager.play('tada'), 500);
        
        // 🟢 สั่งให้ BGM กลับมาเล่นต่อ หลังจากเสียงทาดาจบ (หน่วงเวลาสัก 1.5 วิ)
        setTimeout(() => {
            if (AudioManager && typeof AudioManager.playBGM === 'function') {
                AudioManager.playBGM();
            }
        }, 1500); // 1500 มิลลิวินาที = 1.5 วินาที (ปรับความช้าเร็วได้ตามใจชอบ)

        // ดักเสียงปุ่มกดถ่ายรูป
        const saveBtn = document.getElementById('btn-save'); 
        if (saveBtn) {
            saveBtn.addEventListener('click', () => AudioManager.play('camera'));
        }
    }
});