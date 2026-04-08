const MBTI_DB = {
    // ==========================================
    // 💰 หมวด W (Wealthy - มั่งคั่ง)
    // ==========================================
    "WFAE": {
        nickname: { th: "ตำนานเดินได้แห่งมหาวิทยาลัย ✨", en: "The Campus Legend ✨" },
        meaning: { th: "มั่งคั่ง • ไฟแรง • สดใสแข็งแรง • ตัวตึง", en: "Wealthy • Fire • Alive • Extrovert" },
        desc: { 
            th: "ที่สุดของความสมบูรณ์แบบ! เงินเต็มกระเป๋า ไฟแรงไม่มีตก\nแถมร่างกายยังฟิตเปรี๊ยะ ไปตี้กับเพื่อนได้ทุกคืน\nคุณคือไอดอลที่ทุกคนในคณะใฝ่ฝัน!", 
            en: "The absolute perfection! Full pockets, burning passion,\nand a body ready for every party.\nYou're the campus idol everyone dreams of being!" 
        }
    },
    "WFAI": {
        nickname: { th: "ยอดคนซุ่มรวย 🏆", en: "The Hidden Elite 🏆" },
        meaning: { th: "มั่งคั่ง • ไฟแรง • สดใสแข็งแรง • อินดี้มีสไตล์", en: "Wealthy • Fire • Alive • Introvert" },
        desc: { 
            th: "มหาเศรษฐีสายเงียบที่เก่งรอบด้าน มีพลังทำงาน\nอย่างบ้าคลั่งในพื้นที่ส่วนตัว แม้ไม่ค่อยปรากฏตัว\nตามงานสังคม แต่ทุกคนรู้ว่าคุณคือตัวจริง!", 
            en: "A silent tycoon who excels in everything, working\nfiercely in private. Though rarely seen at social events,\neveryone knows you're the real deal!" 
        }
    },
    "WFZE": {
        nickname: { th: "เศรษฐีใจสู้แต่ร่างพัง 🚑", en: "The Rich Zombie 🚑" },
        meaning: { th: "มั่งคั่ง • ไฟแรง • ร่างกรอบ • ตัวตึง", en: "Wealthy • Fire • Zapped • Extrovert" },
        desc: { 
            th: "ใจสู้และทุนหนา พร้อมลุยทุกกิจกรรมกับเพื่อนฝูง\nแต่ร่างกายกลับร้องขอการ พักผ่อน อย่างหนัก\nอย่าลืมดูแลตัวเองบ้างนะเศรษฐี!", 
            en: "Driven and wealthy, ready for any social event.\nBut your body is screaming for rest.\nDon't forget to take care of yourself, millionaire!" 
        }
    },
    "WFZI": {
        nickname: { th: "นักปั่นงานทุนหนา ☕", en: "The Wealthy Grinder ☕" },
        meaning: { th: "มั่งคั่ง • ไฟแรง • ร่างกรอบ • อินดี้มีสไตล์", en: "Wealthy • Fire • Zapped • Introvert" },
        desc: { 
            th: "คุณมีเป้าหมายชัดเจนและเงินพร้อมเปย์ให้ความสำเร็จ\nแต่การโหมงานหนักในห้องคนเดียวทำให้ร่างแทบแหลก\nหาเวลา พักผ่อน ซะบ้างนะ!", 
            en: "Clear goals and money ready to fund your success.\nBut working intensely alone is breaking your body.\nFind some time to rest!" 
        }
    },
    "WDAE": {
        nickname: { th: "ปาร์ตี้แอนิมอลสายเปย์ 🥳", en: "The Wealthy Party Goer 🥳" },
        meaning: { th: "มั่งคั่ง • ไฟตก • สดใสแข็งแรง • ตัวตึง", en: "Wealthy • Dimmed • Alive • Extrovert" },
        desc: { 
            th: "แม้ไฟในการเรียนจะมอดดับ แต่เงินและแรงยังเหลือล้น\nคุณจึงเน้นใช้เงินแก้ปัญหา และออกไปเฮฮากับเพื่อน\nเพื่อเติมเต็มช่องว่างในใจ!", 
            en: "Study passion may fade, but money and energy abound.\nYou use money to solve problems and party with friends\nto fill the void in your heart!" 
        }
    },
    "WDAI": {
        nickname: { th: "เศรษฐีจำศีล 🛌", en: "The Hibernating Millionaire 🛌" },
        meaning: { th: "มั่งคั่ง • ไฟตก • สดใสแข็งแรง • อินดี้มีสไตล์", en: "Wealthy • Dimmed • Alive • Introvert" },
        desc: { 
            th: "ร่างกายแข็งแรงและเงินถุงเงินถัง แต่ใจกลับไร้เรี่ยวแรง\nคุณเลือกที่จะนอนเปื่อยอยู่ห้องและใช้ชีวิตสโลว์ไลฟ์\nรอวันที่แพสชันจะกลับมาอีกครั้ง!", 
            en: "Healthy body and deep pockets, but a weary soul.\nYou choose to chill in your room living a slow life,\nwaiting for the passion to return!" 
        }
    },
    "WDZE": {
        nickname: { th: "สายปาร์ตี้หนีความจริง 🍻", en: "The Escaping Partyer 🍻" },
        meaning: { th: "มั่งคั่ง • ไฟตก • ร่างกรอบ • ตัวตึง", en: "Wealthy • Dimmed • Zapped • Extrovert" },
        desc: { 
            th: "หมดไฟแถมร่างกรอบ แต่ขอเอาเงินที่มีไปซื้อความสุข\nออกไปเจอเพื่อนฝูงเพื่อลืมความเหนื่อยล้า\nระวังร่างกายจะพังไปกว่านี้นะ!", 
            en: "Burnt out and exhausted, using money to buy happiness.\nYou meet friends to forget the tiredness.\nCareful not to break your body further!" 
        }
    },
    "WDZI": {
        nickname: { th: "คนรวยขี้เกียจ 🦥", en: "The Lazy Rich 🦥" },
        meaning: { th: "มั่งคั่ง • ไฟตก • ร่างกรอบ • อินดี้มีสไตล์", en: "Wealthy • Dimmed • Zapped • Introvert" },
        desc: { 
            th: "เงินเยอะแต่ไร้แรงจูงใจ ร่างกายเหนื่อยล้าเกินจะทำอะไร\nการนอนโง่ๆ ในห้องแอร์เย็นฉ่ำคือความสุขที่สุดของคุณ\nพักผ่อน ให้เต็มอิ่มเถอะ!", 
            en: "Plenty of money but zero motivation and exhausted.\nDoing absolutely nothing in a cool room is your bliss.\nRest up to the fullest!" 
        }
    },

    // ==========================================
    // 🛡️ หมวด S (Stable - มั่นคง)
    // ==========================================
    "SFAE": {
        nickname: { th: "มนุษย์บาลานซ์สุดเพอร์เฟกต์ ⚖️", en: "The Perfect Balancer ⚖️" },
        meaning: { th: "มั่นคง • ไฟแรง • สดใสแข็งแรง • ตัวตึง", en: "Stable • Fire • Alive • Extrovert" },
        desc: { 
            th: "คุณคือมนุษย์บาลานซ์ที่แท้จริง! จัดการเงินได้ดี มีไฟเรียน\nแถมยังแบ่งเวลาไปเข้าสังคมได้อย่างยอดเยี่ยม\nชีวิต มหาวิทยาลัย ของคุณคือเพอร์เฟกต์!", 
            en: "A true master of balance! Great with money and studies,\nplus excellent time management for social life.\nYour university life is perfect!" 
        }
    },
    "SFAI": {
        nickname: { th: "คนเก่งสายซุ่ม 🦉", en: "The Silent Achiever 🦉" },
        meaning: { th: "มั่นคง • ไฟแรง • สดใสแข็งแรง • อินดี้มีสไตล์", en: "Stable • Fire • Alive • Introvert" },
        desc: { 
            th: "คุณจัดสรรชีวิตได้อย่างลงตัว มีเป้าหมายที่ชัดเจน\nและมุ่งมั่นทำมันให้สำเร็จในพื้นที่ส่วนตัว\nเป็นคนเก่งที่เติบโตอย่างมั่นคงเงียบๆ", 
            en: "Perfectly organized with clear life goals.\nYou quietly strive for success in your personal space.\nA brilliant person growing steadily." 
        }
    },
    "SFZE": {
        nickname: { th: "คนขยันร่างพัง ⏳", en: "The Diligent Zombie ⏳" },
        meaning: { th: "มั่นคง • ไฟแรง • ร่างกรอบ • ตัวตึง", en: "Stable • Fire • Zapped • Extrovert" },
        desc: { 
            th: "การเงินมั่นคงและมีไฟพร้อมบวกกับทุกกิจกรรม\nแต่การทุ่มเทให้สังคมมากไปทำให้ร่างกายเริ่มประท้วง\nควรหาเวลา พักผ่อน เพื่อชาร์จแบตบ้างนะ", 
            en: "Financially stable and fired up for all activities.\nBut giving too much to socializing is taking a toll.\nFind some time to recharge your batteries!" 
        }
    },
    "SFZI": {
        nickname: { th: "นักสู้ไร้สังคม 🛡️", en: "The Solo Warrior 🛡️" },
        meaning: { th: "มั่นคง • ไฟแรง • ร่างกรอบ • อินดี้มีสไตล์", en: "Stable • Fire • Zapped • Introvert" },
        desc: { 
            th: "คุณมุ่งมั่นสร้างความมั่นคงและทำงานหนักเพื่อเป้าหมาย\nจนลืมดูแลสุขภาพของตัวเองไปซะสนิท\nอย่าลืมทานอาหารดีๆ และ พักผ่อน ให้พอนะ", 
            en: "Determined to build stability and work hard for your goals,\ncompletely forgetting your own health.\nDon't forget to eat well and rest up!" 
        }
    },
    "SDAE": {
        nickname: { th: "ผู้รอดชีวิตสายชิล 🏄", en: "The Chill Survivor 🏄" },
        meaning: { th: "มั่นคง • ไฟตก • สดใสแข็งแรง • ตัวตึง", en: "Stable • Dimmed • Alive • Extrovert" },
        desc: { 
            th: "แม้แพสชันจะเริ่มหายไป แต่ความรับผิดชอบยังอยู่\nการมีเงินติดตัวและการได้เจอเพื่อนฝูง\nคือสิ่งที่ช่วยฮีลใจให้คุณเดินหน้าต่อได้", 
            en: "Passion may be fading, but responsibility remains.\nHaving savings and hanging out with friends\nis what heals your heart to keep going." 
        }
    },
    "SDAI": {
        nickname: { th: "หมีโคอาล่าจำศีล 🐨", en: "The Hibernating Koala 🐨" },
        meaning: { th: "มั่นคง • ไฟตก • สดใสแข็งแรง • อินดี้มีสไตล์", en: "Stable • Dimmed • Alive • Introvert" },
        desc: { 
            th: "ชีวิตอยู่ในโหมดเซฟพลังงานขั้นสุด มีพร้อมทุกอย่าง\nแต่ขาดแค่แรงบันดาลใจในการขับเคลื่อนชีวิต\nลองหาความท้าทายใหม่ๆ ดูบ้างนะ!", 
            en: "Living in ultimate power-saving mode. You have everything\nbut the inspiration to drive your life forward.\nTry finding some new challenges!" 
        }
    },
    "SDZE": {
        nickname: { th: "สายเฮฮาร่างกรอบ 🎭", en: "The Exhausted Joker 🎭" },
        meaning: { th: "มั่นคง • ไฟตก • ร่างกรอบ • ตัวตึง", en: "Stable • Dimmed • Zapped • Extrovert" },
        desc: { 
            th: "สถานะการเงินยังโอเค แต่ทั้งร่างกายและจิตใจเริ่มอ่อนล้า\nยังดีที่มีเพื่อนฝูงคอยดึงคุณออกไปรับพลังบวก\nอย่าลืมดูแลตัวเองให้มากขึ้นด้วยล่ะ", 
            en: "Finances are okay, but body and mind are wearing out.\nGood thing friends pull you out for positive energy.\nDon't forget to take better care of yourself." 
        }
    },
    "SDZI": {
        nickname: { th: "ผู้ก้าวข้ามความวุ่นวาย 🧘", en: "The Chaos Ascendant 🧘" },
        meaning: { th: "มั่นคง • ไฟตก • ร่างกรอบ • อินดี้มีสไตล์", en: "Stable • Dimmed • Zapped • Introvert" },
        desc: { 
            th: "คุณกำลังเข้าสู่โหมดจำศีลเต็มรูปแบบ\nบริหารเงินได้รอด แต่ปล่อยให้ร่างกายและจิตใจโรยรา\nถึงเวลาต้องลุกขึ้นมาปฏิวัติชีวิตตัวเองแล้ว!", 
            en: "Entering full hibernation mode. Managing money fine,\nbut letting your body and mind wither away.\nIt's time to rise and revolutionize your life!" 
        }
    },

    // ==========================================
    // 🌱 หมวด P (Prudent/Poor - สายประหยัด)
    // ==========================================
    "PFAE": {
        nickname: { th: "นักผจญภัยกระเป๋าแฟบ 🎒", en: "The Broke Adventurer 🎒" },
        meaning: { th: "สายประหยัด • ไฟแรง • สดใสแข็งแรง • ตัวตึง", en: "Prudent • Fire • Alive • Extrovert" },
        desc: { 
            th: "ถึงเงินจะน้อย แต่แพสชันและพลังงานคุณเกินร้อย!\nความกล้าแสดงออกและรอยยิ้มของคุณ\nคือเสน่ห์ที่ทำให้ใครๆ ก็อยากอยู่ใกล้", 
            en: "Short on cash, but overflowing with passion and energy!\nYour boldness and bright smile\nare the charms that draw everyone to you." 
        }
    },
    "PFAI": {
        nickname: { th: "นักปราชญ์ผู้สันโดษ 🕯️", en: "The Solitary Scholar 🕯️" },
        meaning: { th: "สายประหยัด • ไฟแรง • สดใสแข็งแรง • อินดี้มีสไตล์", en: "Prudent • Fire • Alive • Introvert" },
        desc: { 
            th: "แม้จะขัดสนเรื่องเงิน แต่คุณมีเป้าหมายที่ยิ่งใหญ่\nอาศัยความมุ่งมั่นและความเงียบสงบ\nเป็นแรงผลักดันให้ก้าวไปข้างหน้าอย่างช้าๆ แต่ชัวร์", 
            en: "Though tight on money, you hold grand goals.\nRelying on determination and quiet peace\nas the driving force to move forward slowly but surely." 
        }
    },
    "PFZE": {
        nickname: { th: "นักสู้ชีวิต(แต่ชีวิตสู้กลับ) 🥊", en: "The Hard Knocks Fighter 🥊" },
        meaning: { th: "สายประหยัด • ไฟแรง • ร่างกรอบ • ตัวตึง", en: "Prudent • Fire • Zapped • Extrovert" },
        desc: { 
            th: "คุณสู้ชีวิตมาก! ทั้งทำงานหนักและเข้าสังคมจนร่างพัง\nแม้กระเป๋าจะแบน แต่ใจคุณสู้ไม่ถอย\nระวังสุขภาพด้วยนะ เดี๋ยวจะขิตก่อนเรียนจบ", 
            en: "Fighting hard! Working and socializing till you drop.\nYour wallet is flat, but your spirit is unyielding.\nMind your health before you crash out!" 
        }
    },
    "PFZI": {
        nickname: { th: "หมาป่าเดียวดาย 🐺", en: "The Lone Wolf 🐺" },
        meaning: { th: "สายประหยัด • ไฟแรง • ร่างกรอบ • อินดี้มีสไตล์", en: "Prudent • Fire • Zapped • Introvert" },
        desc: { 
            th: "นักสู้ผู้โดดเดี่ยว! ทุ่มเทแรงกายและใจเพื่อเป้าหมาย\nจนร่างกายทรุดโทรมและไร้คนรอบข้าง\nแบ่งเวลาไป พักผ่อน และรีแลกซ์บ้างเถอะ", 
            en: "A solitary fighter! Pouring heart and soul into goals\nuntil your body is frail and you're all alone.\nMake time to rest and relax!" 
        }
    },
    "PDAE": {
        nickname: { th: "สายยิ้มกลบเกลื่อน 🤡", en: "The Smiling Mask 🤡" },
        meaning: { th: "สายประหยัด • ไฟตก • สดใสแข็งแรง • ตัวตึง", en: "Prudent • Dimmed • Alive • Extrovert" },
        desc: { 
            th: "เงินก็ใกล้หมด ไฟก็มอด แต่ยังฝืนยิ้มไปเฮฮากับเพื่อน\nการเข้าสังคมคือวิธีหนีความเครียดของคุณ\nระวังจะเครียดกว่าเดิมตอนสิ้นเดือนนะ!", 
            en: "Funds running low, fire fading, yet forcing a smile with friends.\nSocializing is your way of escaping stress.\nCareful not to get more stressed at month's end!" 
        }
    },
    "PDAI": {
        nickname: { th: "ผู้รักษ์พลังงาน 🔋", en: "The Energy Saver 🔋" },
        meaning: { th: "สายประหยัด • ไฟตก • สดใสแข็งแรง • อินดี้มีสไตล์", en: "Prudent • Dimmed • Alive • Introvert" },
        desc: { 
            th: "คุณประหยัดพลังงานในทุกด้าน ทั้งการเงินและการใช้ชีวิต\nเลือกที่จะอยู่เงียบๆ เพื่อฮีลใจและร่างกาย\nเป็นช่วงเวลาแห่งการ พักผ่อน อย่างแท้จริง", 
            en: "Saving energy in all aspects, finances and life.\nChoosing to stay quiet to heal mind and body.\nThis is a true period of rest." 
        }
    },
    "PDZE": {
        nickname: { th: "ผู้รอดตายปางตาย 🧟", en: "The Barely Survivor 🧟" },
        meaning: { th: "สายประหยัด • ไฟตก • ร่างกรอบ • ตัวตึง", en: "Prudent • Dimmed • Zapped • Extrovert" },
        desc: { 
            th: "วิกฤตหนัก! ทั้งช็อต ทั้งหมดไฟ แถมร่างยังกรอบ\nแต่คุณยังฝืนสังขารไปเจอเพื่อนเพื่อรับกำลังใจ\nพักบ้างเถอะ ร่างกายไม่ไหวแล้ว!", 
            en: "Major crisis! Broke, burnt out, and exhausted.\nYet you force yourself to meet friends for support.\nTake a break, your body can't handle it!" 
        }
    },
    "PDZI": {
        nickname: { th: "ฤาษีหนีโลก 🏚️", en: "The World Escapist 🏚️" },
        meaning: { th: "สายประหยัด • ไฟตก • ร่างกรอบ • อินดี้มีสไตล์", en: "Prudent • Dimmed • Zapped • Introvert" },
        desc: { 
            th: "สายประหยัดผู้ปลีกวิเวก สภาพตอนนี้คือโรยราขั้นสุด\nทำได้แค่นอนประหยัดพลังงานในห้องสี่เหลี่ยม\nรอคอยให้พายุลูกนี้ผ่านพ้นไป", 
            en: "A frugal hermit. Currently in extreme wither mode.\nAll you can do is sleep and save energy in your room,\nwaiting for this storm to pass." 
        }
    },

    // ==========================================
    // 💔 หมวด B (Broke - เปย์จนหมด / ถังแตก)
    // ==========================================
    "BFAE": {
        nickname: { th: "ตัวตึงถังแตก 🎸", en: "The Broke Legend 🎸" },
        meaning: { th: "เปย์จนหมด • ไฟแรง • สดใสแข็งแรง • ตัวตึง", en: "Broke • Fire • Alive • Extrovert" },
        desc: { 
            th: "ถังแตกแต่ใจยังสู้! คุณมีพลังล้นเหลือและเพื่อนฝูงมากมาย\nความจนไม่อาจหยุดยั้งความสนุกของคุณได้\nแค่ต้องหาคนเลี้ยงข้าวให้รอดไปวันๆ!", 
            en: "Broke but fighting! Overflowing with energy and friends.\nPoverty can't stop your fun.\nJust need to find someone to buy you meals!" 
        }
    },
    "BFAI": {
        nickname: { th: "ศิลปินไส้แห้ง 🎨", en: "The Starving Artist 🎨" },
        meaning: { th: "เปย์จนหมด • ไฟแรง • สดใสแข็งแรง • อินดี้มีสไตล์", en: "Broke • Fire • Alive • Introvert" },
        desc: { 
            th: "แม้จะไม่มีเงิน แต่คุณยังมีไฟและความคิดสร้างสรรค์\nหมกตัวอยู่ในห้องเพื่อสร้างสรรค์ผลงาน\nความ พยายาม ของคุณจะส่งผลในไม่ช้า!", 
            en: "Penniless, but full of fire and creativity.\nLocking yourself in to create masterpieces.\nYour efforts will soon pay off!" 
        }
    },
    "BFZE": {
        nickname: { th: "นักบุญทุนสูญ 🕊️", en: "The Bankrupt Saint 🕊️" },
        meaning: { th: "เปย์จนหมด • ไฟแรง • ร่างกรอบ • ตัวตึง", en: "Broke • Fire • Zapped • Extrovert" },
        desc: { 
            th: "ใจสู้แต่สังขารและกระเป๋าตังค์ไม่ปังตาม\nคุณทุ่มเททุกอย่างเพื่อเพื่อนและกิจกรรมจนหมดตัว\nถึงเวลาต้องถอยมารักษาตัวเองแล้วล่ะ", 
            en: "Fighting spirit but body and wallet disagree.\nYou gave everything for friends and events till broke.\nTime to step back and heal." 
        }
    },
    "BFZI": {
        nickname: { th: "คนช่างฝันผู้ร่วงหล่น 🍂", en: "The Fallen Dreamer 🍂" },
        meaning: { th: "เปย์จนหมด • ไฟแรง • ร่างกรอบ • อินดี้มีสไตล์", en: "Broke • Fire • Zapped • Introvert" },
        desc: { 
            th: "นักฝันผู้ยากไร้และเหนื่อยล้า ทุ่มเทจนหมดตัวและหมดแรง\nแต่ลึกๆ แล้วคุณยังมีความหวังซ่อนอยู่\nพักผ่อน ให้เต็มอิ่ม แล้วค่อยเริ่มใหม่นะ", 
            en: "A poor and exhausted dreamer. Gave it all till drained.\nBut deep down, hope is still hidden.\nRest fully, then start anew." 
        }
    },
    "BDAE": {
        nickname: { th: "ตัวฮาหน้าเศร้า 🥲", en: "The Sad Clown 🥲" },
        meaning: { th: "เปย์จนหมด • ไฟตก • สดใสแข็งแรง • ตัวตึง", en: "Broke • Dimmed • Alive • Extrovert" },
        desc: { 
            th: "ไม่มีเงิน หมดไฟ แต่ร่างกายยังไหวและเพื่อนยังรออยู่\nคุณใช้ความสนุกสนานกลบเกลื่อนความว่างเปล่า\nระวังจะเหนื่อยฟรีนะ หาเวลาทบทวนตัวเองบ้าง", 
            en: "No money, no fire, but body is capable and friends await.\nYou use fun to cover up the emptiness.\nCareful not to exhaust yourself for nothing." 
        }
    },
    "BDAI": {
        nickname: { th: "นักเดินทางผู้หลงทาง 🐌", en: "The Brave Wanderer 🐌" },
        meaning: { th: "เปย์จนหมด • ไฟตก • สดใสแข็งแรง • อินดี้มีสไตล์", en: "Broke • Dimmed • Alive • Introvert" },
        desc: { 
            th: "แม้จะเหนื่อยและหลงทางไปบ้างในวันที่กระเป๋าแห้ง\nแต่ร่างกายที่ยังไหวจะพามึงไปเจอที่ที่ปลอดภัย\nเพื่อเริ่มใหม่ในวันพรุ่งนี้", 
            en: "Though tired and lost while broke,\nyour capable body will lead you to a safe harbor\nto start anew tomorrow." 
        }
    },
    "BDZE": {
        nickname: { th: "ดาวจรัสแสงในคืนมืด 🌊", en: "The Star in the Dark 🌊" },
        meaning: { th: "เปย์จนหมด • ไฟตก • ร่างกรอบ • ตัวตึง", en: "Broke • Dimmed • Zapped • Extrovert" },
        desc: { 
            th: "ในวันที่ไม่มีอะไรเหลือแถมร่างยังกรอบ\nแต่มึงยังมีรอยยิ้มให้เพื่อนเสมอ\nความใจเย็นของมึงคือแสงสว่างที่แท้จริง!", 
            en: "With nothing left and a zapped body,\nyou still have a smile for friends.\nYour calmness is the true light!" 
        }
    },
    "BDZI": {
        nickname: { th: "ผู้แสวงหาแสงสว่าง 🌙", en: "The Light Seeker 🌙" },
        meaning: { th: "เปย์จนหมด • ไฟตก • ร่างกรอบ • อินดี้มีสไตล์", en: "Broke • Dimmed • Zapped • Introvert" },
        desc: { 
            th: "ล้มละลายทั้งการเงิน สุขภาพ และแพสชัน\nการอยู่คนเดียวเงียบๆ คือทางออกเดียวในตอนนี้\nอนุญาตให้ตัวเองอ่อนแอได้ แล้วค่อยลุกขึ้นใหม่นะ", 
            en: "Bankrupt in finances, health, and passion.\nStaying alone quietly is the only way out now.\nAllow yourself to be weak, then rise again." 
        }
    }
};