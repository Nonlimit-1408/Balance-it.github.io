// ==========================================
// 🎲 EVENT_DB_TH (ฐานข้อมูลภาษาไทย - กระชับสุด + เพิ่ม eventSummary)
// ==========================================
const EVENT_DB_TH = {
    "ของมันต้องมี!": [
        {
            desc: "ไถฟีดเจอคนปล่อย 'Art Toy' คอลเลกชันลับ!\nสภาพกริบ ราคาดี ขอคนพร้อมโอนทันที\nของแรร์แบบนี้จะปล่อยให้หลุดมือหรอ?",
            eventSummary: "เจอ Art Toy คอลเลกชันลับที่ตามหา",
            btn1: "ซื้อเลย", btn2: "ไว้ก่อน",
            shortChoice1: "ซื้อ Art Toy", shortChoice2: "ไม่ซื้อ",
            impact1: { money: [-1500, -1000], passion: [20, 30], energy: [-5, -10], social: [5, 10] },
            impact2: { money: [0, 0], passion: [-30, -40], energy: [5, 10], social: [0, 0] }
        },
        {
            desc: "เสื้อผ้าแบรนด์ไอจีร้านโปรดจัดโปรลดราคา\nดีไซน์เท่มาก ซื้อใส่ไปมอวันแรกต้องเกิดแน่\nจะเหมามาให้ครบเซตเลยดีไหมนะ?",
            eventSummary: "เสื้อผ้าแบรนด์ไอจีร้านโปรดจัดโปรลดราคา",
            btn1: "เหมา", btn2: "ใส่ชุดเก่า",
            shortChoice1: "เหมาเสื้อผ้า", shortChoice2: "ใส่ชุดเก่า",
            impact1: { money: [-500, -800], passion: [15, 25], energy: [-5, -10], social: [15, 20] },
            impact2: { money: [0, 0], passion: [-20, -30], energy: [5, 10], social: [-5, -10] }
        },
        {
            desc: "เพื่อนป้ายยาคีย์บอร์ดบลูทูธ เอาไว้พิมพ์งาน\nเสียงกดดังต๊อกๆ พิมพ์ลื่นปรี๊ด\nจะช่วยให้จดเลกเชอร์สนุกขึ้นเยอะเลย",
            eventSummary: "เพื่อนป้ายยาคีย์บอร์ดบลูทูธพิมพ์ลื่น",
            btn1: "ซื้อมาลอง", btn2: "ใช้ของเดิม",
            shortChoice1: "ซื้อคีย์บอร์ด", shortChoice2: "ทนพิมพ์จอ",
            impact1: { money: [-800, -1200], passion: [20, 30], energy: [-5, -10], social: [5, 10] },
            impact2: { money: [0, 0], passion: [-20, -30], energy: [5, 10], social: [0, 0] }
        },
        {
            desc: "กระเป๋าผ้าแบรนด์ฮิตที่เด็กมหาลัยเขาใช้กัน\nของมันต้องมีสักใบ จะได้ดูไม่เด๋อ\nกดสั่งตอนนี้เลยไหม ราคาแอบแรงแต่เท่ชัวร์",
            eventSummary: "เจอกระเป๋าผ้าแบรนด์ฮิตที่เด็กมหาลัยใช้กัน",
            btn1: "สั่งเลย", btn2: "ใช้เป้เก่า",
            shortChoice1: "ซื้อกระเป๋า", shortChoice2: "ใช้เป้เก่า",
            impact1: { money: [-600, -900], passion: [15, 25], energy: [-5, -10], social: [15, 20] },
            impact2: { money: [0, 0], passion: [-20, -30], energy: [5, 10], social: [-5, -10] }
        },
        {
            desc: "สติกเกอร์ไลน์คอลเลกชันใหม่ของคนโปรด\nเอาไว้ส่งคุยเมคเฟรนด์กับเพื่อนในคณะ\nยอมเปย์เพื่อสร้างมิตรภาพหน่อยไหม?",
            eventSummary: "ครีเอเตอร์คนโปรดออกสติกเกอร์ไลน์ใหม่",
            btn1: "กดซื้อ", btn2: "ใช้ของฟรี",
            shortChoice1: "เปย์สติกเกอร์", shortChoice2: "ใช้ของฟรี",
            impact1: { money: [-100, -200], passion: [10, 15], energy: [0, 0], social: [10, 15] },
            impact2: { money: [0, 0], passion: [-10, -15], energy: [0, 0], social: [-10, -15] }
        }
    ],

    "ภาษีสังคม": [
        {
            desc: "เพื่อนทักมา 'วันนี้วันเกิดไอ้แจ็ค ไปแดกหมูกระทะกัน!'\nร้านเปิดใหม่บุฟเฟ่ต์คุ้มๆ มึงไม่ไปมันงอนนะเว้ย\nไปร่วมวงฉลองให้เพื่อนหน่อยไหม?",
            eventSummary: "เพื่อนชวนไปกินหมูกระทะฉลองวันเกิด",
            btn1: "ไปดิ", btn2: "กูช็อต",
            shortChoice1: "ไปตี้วันเกิด", shortChoice2: "อ้างช็อต",
            impact1: { money: [-400, -500], passion: [10, 20], energy: [-15, -20], social: [25, 35] },
            impact2: { money: [0, 0], passion: [-10, -15], energy: [10, 15], social: [-30, -40] }
        },
        {
            desc: "รุ่นพี่ชวนไปเลี้ยงสายรหัสที่ร้านนั่งชิว\nพี่เลี้ยงค่าอาหารแต่เราต้องหารค่าเครื่องดื่มนะ!\nโอกาสดีที่จะได้รู้จักรุ่นพี่และเพื่อนๆ",
            eventSummary: "รุ่นพี่ชวนไปเลี้ยงสายรหัสที่ร้านนั่งชิว",
            btn1: "ไปเว้ย", btn2: "ขอผ่าน",
            shortChoice1: "ตี้สายรหัส", shortChoice2: "เทสายรหัส",
            impact1: { money: [-300, -600], passion: [15, 25], energy: [-20, -30], social: [30, 40] },
            impact2: { money: [0, 0], passion: [-10, -15], energy: [15, 20], social: [-30, -40] }
        },
        {
            desc: "เพื่อนมัธยมชวนหารค่าแอปดูหนังรายเดือน\nตี้เดิมคนขาด ถ้าไม่หารเพื่อนก็อดดูทั้งแก๊ง\nโอนเงินไปร่วมตี้เพื่อความบันเทิงไหม?",
            eventSummary: "เพื่อนมัธยมชวนหารค่าแอปดูหนังรายเดือน",
            btn1: "หารตี้", btn2: "ไม่หาร",
            shortChoice1: "หารค่าแอป", shortChoice2: "ไม่หาร",
            impact1: { money: [-100, -200], passion: [5, 10], energy: [0, 0], social: [15, 25] },
            impact2: { money: [0, 0], passion: [-10, -20], energy: [0, 0], social: [-25, -35] }
        },
        {
            desc: "คณะเปิดพรีออเดอร์เสื้อแจ็กเก็ตรุ่นอย่างตึง\nรุ่นพี่บอกใส่แล้วดูเป็นเด็กคณะเต็มตัว\nราคาแอบแพงแต่เพื่อความกลมเกลียวนะ",
            eventSummary: "คณะเปิดพรีออเดอร์เสื้อแจ็กเก็ตรุ่น",
            btn1: "สั่งไซส์ L", btn2: "ไม่สั่ง",
            shortChoice1: "ซื้อเสื้อคณะ", shortChoice2: "ไม่ซื้อ",
            impact1: { money: [-500, -800], passion: [10, 20], energy: [0, -5], social: [30, 40] },
            impact2: { money: [0, 0], passion: [-10, -20], energy: [5, 10], social: [-30, -40] }
        },
        {
            desc: "พรุ่งนี้วันเกิดเพื่อนสนิทตั้งแต่สมัยมัธยม\nอุตส่าห์สอบติดที่เดียวกัน ต้องเซอไพรส์หน่อย!\nเปย์ของขวัญหนักๆ ให้เพื่อนประทับใจเลยไหม?",
            eventSummary: "วันเกิดเพื่อนสนิทที่ติดมหาลัยเดียวกัน",
            btn1: "เปย์ของขวัญ", btn2: "เลี้ยงน้ำพอ",
            shortChoice1: "เปย์ของขวัญ", shortChoice2: "เลี้ยงน้ำ",
            impact1: { money: [-400, -700], passion: [15, 25], energy: [-5, -10], social: [25, 35] },
            impact2: { money: [-50, -100], passion: [-10, -20], energy: [5, 10], social: [-20, -30] }
        }
    ],

    "วัยรุ่นสร้างตัว": [
        {
            desc: "ลูกค้าทักมา 'งานด่วนพี่! ส่งพรุ่งนี้เช้าได้ไหม'\nให้ราคาพิเศษแต่ต้องอดนอนปั่นงานทั้งคืน\nคุณจะยอมแลกสุขภาพเพื่อเงินไหม?",
            eventSummary: "ลูกค้าจ้างงานด่วนให้ราคาพิเศษแต่อดนอน",
            btn1: "รับงาน", btn2: "ไม่ไหว",
            shortChoice1: "รับงานโต้รุ่ง", shortChoice2: "เทงานด่วน",
            impact1: { money: [800, 1500], passion: [5, 15], energy: [-35, -45], social: [10, 20] },
            impact2: { money: [0, 0], passion: [-5, -10], energy: [20, 30], social: [-5, -10] }
        },
        {
            desc: "รุ่นพี่จ้างให้ไปช่วยเป็นสตาฟฟ์แบกของค่ายรับน้อง\nเหนื่อยหน่อยแต่ได้เงินก้อนมาต่อชีวิต\nลุยงานกลางแดดเพื่อแลกค่าขนมไหวไหม?",
            eventSummary: "รุ่นพี่จ้างไปเป็นสตาฟฟ์แบกของค่ายรับน้อง",
            btn1: "ลุยสิ", btn2: "ขอนอน",
            shortChoice1: "รับจ๊อบค่าย", shortChoice2: "นอนอู้",
            impact1: { money: [500, 1000], passion: [5, 10], energy: [-35, -45], social: [20, 30] },
            impact2: { money: [0, 0], passion: [-5, -10], energy: [20, 30], social: [-5, -10] }
        },
        {
            desc: "เคลียร์ตู้เสื้อผ้าเตรียมย้ายหอ เจอของเก่าเพียบ\nลองเอามาไลฟ์ขายมือสองดูไหม\nเผื่อฟลุคมีคนเอฟ จะได้ทุนคืนมาหมุนเวียน",
            eventSummary: "เอาเสื้อผ้าเก่ามาไลฟ์ขายมือสองหาทุน",
            btn1: "ไลฟ์ขาย", btn2: "ปล่อยไว้",
            shortChoice1: "ไลฟ์ขายของ", shortChoice2: "ดองไว้",
            impact1: { money: [300, 800], passion: [10, 20], energy: [-20, -30], social: [15, 25] },
            impact2: { money: [0, 0], passion: [-5, -10], energy: [15, 20], social: [-5, -10] }
        },
        {
            desc: "รุ่นน้องมัธยมทักมาจ้างติววิชาก่อนสอบเข้า\nได้ทบทวนความรู้แถมได้ค่าขนมจัดเต็ม\nจะสละเวลาว่างไปเป็นติวเตอร์ไหม?",
            eventSummary: "รุ่นน้องมัธยมทักมาจ้างติววิชาก่อนสอบเข้า",
            btn1: "รับติว", btn2: "ขอพัก",
            shortChoice1: "รับจ๊อบติว", shortChoice2: "ขอพักผ่อน",
            impact1: { money: [600, 1200], passion: [10, 20], energy: [-25, -35], social: [15, 25] },
            impact2: { money: [0, 0], passion: [-5, -10], energy: [20, 25], social: [-5, -10] }
        },
        {
            desc: "มหาลัยจัดการประกวดออกแบบโลโก้ชมรม\nรางวัลคือเงินสดก้อนโต แต่ต้องปั่นงานยับ\nจะลองงัดฝีมือส่งประกวดดูสักตั้งไหม?",
            eventSummary: "มหาลัยจัดประกวดออกแบบโลโก้ชิงเงินรางวัล",
            btn1: "ลงแข่ง", btn2: "ไม่แข่ง",
            shortChoice1: "ส่งประกวด", shortChoice2: "ปล่อยเบลอ",
            impact1: { money: [1000, 2000], passion: [20, 30], energy: [-35, -45], social: [15, 25] },
            impact2: { money: [0, 0], passion: [-10, -15], energy: [20, 30], social: [0, -5] }
        }
    ],

    "สวมร่างเด็กติ๋ม": [
        {
            desc: "อาทิตย์หน้ามีสอบ! เพื่อนชวนไปติวที่คาเฟ่\n(ต้องสั่งน้ำสั่งขนมขั้นต่ำเพื่อเปิดบิล)\nจะยอมเปย์ค่าที่เพื่อบรรยากาศการเรียนไหม?",
            eventSummary: "เพื่อนชวนไปนั่งติวสอบที่คาเฟ่",
            btn1: "ยอมเปย์", btn2: "อ่านตึกคณะ",
            shortChoice1: "เปย์คาเฟ่", shortChoice2: "อ่านคณะ",
            impact1: { money: [-200, -350], passion: [10, 20], energy: [-10, -15], social: [15, 25] },
            impact2: { money: [0, 0], passion: [-10, -20], energy: [5, 10], social: [-15, -25] }
        },
        {
            desc: "คอร์สออนไลน์ปรับพื้นฐานก่อนเปิดเทอมจัดโปรลด\nสมัครไว้เตรียมตัวก่อนน่าจะอุ่นใจกว่า\nจะลงทุนเพื่ออนาคตหรือจะหาดูฟรีเอา?",
            eventSummary: "คอร์สออนไลน์ปรับพื้นฐานจัดโปรลดราคา",
            btn1: "ซื้อคอร์ส", btn2: "หาดูฟรี",
            shortChoice1: "ซื้อคอร์สติว", shortChoice2: "หาเรียนฟรี",
            impact1: { money: [-600, -1000], passion: [20, 30], energy: [-15, -25], social: [5, 10] },
            impact2: { money: [0, 0], passion: [-10, -20], energy: [10, 15], social: [-5, -10] }
        },
        {
            desc: "รุ่นพี่เอาชีทสรุปวิชามหาโหดมาเปิดขาย\nใครอ่านชีทนี้ผ่านชัวร์! แต่ราคาแอบตึง\nจะยอมควักกระเป๋าจ่ายเพื่อความชัวร์ไหม?",
            eventSummary: "รุ่นพี่เอาชีทสรุปวิชามหาโหดมาเปิดขาย",
            btn1: "ซื้อชีท", btn2: "จดเอง",
            shortChoice1: "ซื้อชีทสรุป", shortChoice2: "จดสรุปเอง",
            impact1: { money: [-200, -450], passion: [15, 25], energy: [5, 10], social: [10, 20] },
            impact2: { money: [0, 0], passion: [-10, -20], energy: [-15, -25], social: [-5, -10] }
        },
        {
            desc: "อาจารย์สั่งซื้อหนังสือแปลเล่มหนาอย่างแพง\nถ้าไม่ซื้อก็ไม่มีทำแบบฝึกหัดท้ายบท\nจะซื้อเล่มแท้หรือแอบปริ้นท์ขาวดำประหยัดงบ?",
            eventSummary: "อาจารย์สั่งซื้อหนังสือแปลเล่มหนาอย่างแพง",
            btn1: "ซื้อของแท้", btn2: "แอบปริ้นท์",
            shortChoice1: "ซื้อของแท้", shortChoice2: "ปริ้นท์เถื่อน",
            impact1: { money: [-700, -1200], passion: [10, 20], energy: [0, -5], social: [5, 10] },
            impact2: { money: [-100, -200], passion: [-15, -25], energy: [-10, -15], social: [-10, -15] }
        },
        {
            desc: "วิชานี้เรียนไม่รู้เรื่องเลย! เพื่อนชวนลงขัน\nจ้างรุ่นพี่เกียรตินิยมมาสอนตัวต่อตัวคืนนี้\nจะยอมหารตังค์จ้างติวหรือจะพึ่งสิ่งศักดิ์สิทธิ์?",
            eventSummary: "เพื่อนชวนลงขันจ้างรุ่นพี่เกียรตินิยมมาติว",
            btn1: "หารกับเพื่อน", btn2: "ไหว้พระเอา",
            shortChoice1: "จ้างติวเตอร์", shortChoice2: "พึ่งดวง",
            impact1: { money: [-300, -550], passion: [15, 25], energy: [-15, -25], social: [15, 25] },
            impact2: { money: [0, 0], passion: [-20, -30], energy: [0, 5], social: [-15, -25] }
        }
    ],

    "เกิดแต่กับกู!": [
        {
            desc: "ซวยจัด! นิ้วก้อยเท้าฟาดขอบเตียงอย่างจัง\nเลือดซิบแถมเล็บฉีก ต้องเดินกะเผลกไปร้านยา\nจะไปซื้อยาทำแผลหรือจะทนเอาเดี๋ยวก็หาย?",
            eventSummary: "นิ้วก้อยเท้าฟาดขอบเตียงเลือดซิบ",
            btn1: "ซื้อยา", btn2: "ทนเจ็บ",
            shortChoice1: "ซื้อยาทำแผล", shortChoice2: "ทนเจ็บเอา",
            impact1: { money: [-150, -250], passion: [-10, -20], energy: [0, 5], social: [0, 0] },
            impact2: { money: [0, 0], passion: [-30, -40], energy: [-25, -35], social: [0, 0] }
        },
        {
            desc: "ขี่มอเตอร์ไซค์ไปทำธุระ ยางดันแตกกลางทาง\nต้องจูงหาร้านปะยางแถมลุ้นว่าจะทันนัดไหม\nจะจ่ายค่าซ่อมหรือทิ้งรถไว้แล้วนั่งวินไป?",
            eventSummary: "ขี่มอเตอร์ไซค์ไปทำธุระแล้วยางแตกกลางทาง",
            btn1: "ซ่อมรถ", btn2: "นั่งวิน",
            shortChoice1: "ซ่อมยางรถ", shortChoice2: "นั่งวิน",
            impact1: { money: [-200, -400], passion: [-10, -20], energy: [-5, -10], social: [0, 0] },
            impact2: { money: [-100, -150], passion: [-25, -35], energy: [-20, -30], social: [0, -5] }
        },
        {
            desc: "มือถือร่วงจอแตกทัชไม่ติด! ไม่มีมือถือคือจบเห่\nติดต่อใครก็ไม่ได้ ต้องรีบเอาไปส่งซ่อมด่วน\nจะเสียค่าซ่อมแพงๆ หรือจะทนใช้จอแตกไปก่อน?",
            eventSummary: "ทำมือถือร่วงจอแตกทัชไม่ติด",
            btn1: "ซ่อมจอ", btn2: "ทนใช้",
            shortChoice1: "จ่ายค่าซ่อม", shortChoice2: "ทนจอแตก",
            impact1: { money: [-1000, -1800], passion: [-10, -20], energy: [-5, -10], social: [5, 10] },
            impact2: { money: [0, 0], passion: [-40, -50], energy: [-10, -20], social: [-25, -35] }
        },
        {
            desc: "สั่งเดลิเวอรี่มากิน ไรเดอร์ดันเกิดอุบัติเหตุ\nทำน้ำซุปหกใส่ข้าวเละเทะ สภาพดูไม่จืดเลย\nจะกดสั่งร้านใหม่หรือจะฝืนกินสภาพที่เหลืออยู่?",
            eventSummary: "สั่งเดลิเวอรี่แต่ไรเดอร์รถล้มข้าวเละเทะ",
            btn1: "สั่งใหม่", btn2: "ฝืนกิน",
            shortChoice1: "สั่งใหม่", shortChoice2: "กินข้าวเละ",
            impact1: { money: [-150, -300], passion: [-5, -15], energy: [5, 10], social: [0, 0] },
            impact2: { money: [0, 0], passion: [-30, -40], energy: [-15, -25], social: [0, 0] }
        },
        {
            desc: "อากาศเปลี่ยนกะทันหัน ตื่นมาไข้ขึ้นสูงปรี๊ด\nต้องไปหาหมอที่คลินิกให้ฉีดยาสักเข็มถึงจะเอาอยู่\nจะยอมเปย์ค่าหมอหรือจะนอนซมกินแค่ยาพารา?",
            eventSummary: "อากาศเปลี่ยนกะทันหันจนไข้ขึ้นสูงปรี๊ด",
            btn1: "หาหมอ", btn2: "กินพารา",
            shortChoice1: "ไปหาหมอ", shortChoice2: "กินพารา",
            impact1: { money: [-500, -850], passion: [-10, -20], energy: [25, 35], social: [0, 0] },
            impact2: { money: [-50, -100], passion: [-25, -35], energy: [-35, -45], social: [-5, -10] }
        }
    ],

    "เวลาปล่อยจอย": [
        {
            desc: "เกมฟอร์มยักษ์เพิ่งประกาศลดราคาพิเศษ\nวันนี้วันสุดท้าย! ถ้าไม่กดต้องรออีกทีปีหน้าเลย!\nจะยอมรูดบัตรซื้อความสุขในการเล่นเกมไหม?",
            eventSummary: "เกมฟอร์มยักษ์ประกาศลดราคาพิเศษวันสุดท้าย",
            btn1: "รูดเลย!", btn2: "ดูคนอื่นเล่น",
            shortChoice1: "เปย์เกมฮิต", shortChoice2: "ดูสตรีมเอา",
            impact1: { money: [-1000, -1500], passion: [35, 50], energy: [-15, -25], social: [10, 20] },
            impact2: { money: [0, 0], passion: [-25, -35], energy: [10, 15], social: [-10, -15] }
        },
        {
            desc: "ซีรีส์เรื่องโปรดอัปตอนจบแล้ว! ต้องเตรียมเสบียง\nน้ำอัดลม ป๊อปคอร์น พร้อมสแตนด์บายโต้รุ่ง\nจะจัดหนักขนมเซเว่นหรือจะดูเฉยๆ แบบแห้งแล้ง?",
            eventSummary: "ซีรีส์เรื่องโปรดอัปตอนจบต้องเตรียมเสบียง",
            btn1: "ตุนเสบียง", btn2: "ดูแห้งๆ",
            shortChoice1: "ซื้อขนม", shortChoice2: "ดูแห้งๆ",
            impact1: { money: [-250, -450], passion: [25, 40], energy: [-20, -30], social: [5, 10] },
            impact2: { money: [0, 0], passion: [-15, -25], energy: [10, 15], social: [0, -5] }
        },
        {
            desc: "เครียดเรื่องเรียน เพื่อนเลยชวนไปเปิดตี้\nร้องคาราโอเกะแหกปากให้คอแตกไปเลยเย็นนี้!\nจะไปเปิดตี้ปลดปล่อยความเครียดไหม?",
            eventSummary: "เครียดเรื่องเรียนเพื่อนเลยชวนเปิดตี้คาราโอเกะ",
            btn1: "เปิดตี้", btn2: "ร้องในห้อง",
            shortChoice1: "ตี้คาราโอเกะ", shortChoice2: "แหกปากคนเดียว",
            impact1: { money: [-350, -550], passion: [30, 45], energy: [-20, -30], social: [25, 40] },
            impact2: { money: [0, 0], passion: [-15, -25], energy: [10, 15], social: [-20, -30] }
        },
        {
            desc: "หนังฮีโร่ภาคต่อเข้าโรงวันแรก!\nต้องรีบจองตั๋วไปดูด่วนๆ จะได้ไม่โดนสปอยล์\nจะยอมเปย์ตั๋ว VIP หรือจะรอหนังลงสตรีมมิ่งเอา?",
            eventSummary: "หนังฮีโร่ภาคต่อเข้าโรงวันแรก",
            btn1: "ดูวันแรก", btn2: "รอดู",
            shortChoice1: "ดูหนังโรง", shortChoice2: "รอสตรีมมิ่ง",
            impact1: { money: [-250, -500], passion: [25, 40], energy: [-10, -15], social: [15, 25] },
            impact2: { money: [0, 0], passion: [-20, -30], energy: [5, 10], social: [-15, -25] }
        },
        {
            desc: "เห็นบอร์ดเกมกล่องใหม่ออกมา กติกาน่าเล่นมาก\nซื้อมาตั้งตี้ปั่นประสาทเพื่อนที่หอคืนนี้เลยดีกว่า\nจะถอยบอร์ดเกมใหม่หรือจะเล่นไพ่ Uno ไป?",
            eventSummary: "บอร์ดเกมกล่องใหม่ออกมาน่าเล่นมาก",
            btn1: "ซื้อใหม่", btn2: "เล่นของเดิม",
            shortChoice1: "ซื้อบอร์ดเกม", shortChoice2: "เล่นไพ่เก่า",
            impact1: { money: [-600, -950], passion: [25, 40], energy: [-10, -15], social: [25, 40] },
            impact2: { money: [0, 0], passion: [-10, -20], energy: [5, 10], social: [-10, -20] }
        }
    ],

    "จะพลาดได้หรอ?": [
        {
            desc: "ศิลปินคนโปรดประกาศจัดคอนเสิร์ตที่ไทย!\nวันนี้กดบัตรวันสุดท้าย มีเท่าไหร่ก็ต้องสู้\nจะยอมกดบัตรโซนหน้าไหม?",
            eventSummary: "ศิลปินคนโปรดจัดคอนเสิร์ตที่ไทยวันกดบัตร",
            btn1: "กดบัตร", btn2: "ฟัง Spotify",
            shortChoice1: "กดบัตรคอน", shortChoice2: "ฟังเพลงฟรี",
            impact1: { money: [-2500, -3000], passion: [50, 70], energy: [-25, -35], social: [25, 40] },
            impact2: { money: [0, 0], passion: [-40, -60], energy: [15, 25], social: [-25, -40] }
        },
        {
            desc: "เทศกาลดนตรีจัดขึ้นสุดสัปดาห์นี้\nไลน์อัปมีแต่คนโปรด บัตรแพงก็ต้องไป!\nยอมเปย์ค่าบัตรมิวสิคเฟสไหม?",
            eventSummary: "เทศกาลดนตรีระดับประเทศจัดขึ้นสุดสัปดาห์นี้",
            btn1: "ซื้อบัตร", btn2: "ดูคลิปเอา",
            shortChoice1: "กดบัตรเฟส", shortChoice2: "ดูคลิปเอา",
            impact1: { money: [-1800, -2500], passion: [45, 65], energy: [-30, -40], social: [30, 45] },
            impact2: { money: [0, 0], passion: [-35, -55], energy: [15, 25], social: [-25, -40] }
        },
        {
            desc: "เปิดตัวสมาร์ทวอทช์รุ่นใหม่ฟีเจอร์ล้ำสุดๆ\nเอาไว้ใส่เท่ๆ ตอนเปิดเทอม\nจะรูดซื้อหรือจะใช้เรือนเก่าต่อไป?",
            eventSummary: "แบรนด์ดังเปิดตัวสมาร์ทวอทช์รุ่นใหม่ฟีเจอร์ล้ำ",
            btn1: "ซื้อใหม่", btn2: "ใส่อันเก่า",
            shortChoice1: "ซื้อนาฬิกา", shortChoice2: "ใส่อันเก่า",
            impact1: { money: [-2000, -3000], passion: [40, 60], energy: [-5, -10], social: [20, 30] },
            impact2: { money: [0, 0], passion: [-25, -40], energy: [5, 10], social: [-15, -25] }
        },
        {
            desc: "งานแฟนมีตติ้งนักแสดงซีรีส์เรื่องโปรด\nบัตรวีไอพีได้ไฮทัชแถมถ่ายรูป โอกาสทองชัดๆ\nจะยอมทุ่มหมดหน้าตักไหม?",
            eventSummary: "งานแฟนมีตติ้งนักแสดงซีรีส์เรื่องโปรดเปิดขายบัตร",
            btn1: "กดบัตร", btn2: "ตามดูสื่อ",
            shortChoice1: "กดบัตรแฟนมีต", shortChoice2: "ตามโซเชียล",
            impact1: { money: [-2500, -3000], passion: [50, 70], energy: [-15, -25], social: [20, 30] },
            impact2: { money: [0, 0], passion: [-45, -65], energy: [10, 15], social: [-15, -25] }
        },
        {
            desc: "ทริปเที่ยวทิ้งทวนกับแก๊งเพื่อนมัธยม\nก่อนแยกย้ายไปเรียนมหาลัย ทริปนี้จัดเต็มงบ!\nจะโอนเงินร่วมทริป หรืออ้างว่าไม่ว่าง?",
            eventSummary: "จัดทริปเที่ยวทิ้งทวนกับแก๊งเพื่อนมัธยม",
            btn1: "ไปๆ", btn2: "ไม่ไป",
            shortChoice1: "ไปทริปเพื่อน", shortChoice2: "เททริปเพื่อน",
            impact1: { money: [-1500, -2500], passion: [40, 60], energy: [-25, -35], social: [40, 60] },
            impact2: { money: [0, 0], passion: [-35, -50], energy: [15, 25], social: [-40, -60] }
        }
    ]
};

// ==========================================
// 🌍 EVENT_DB_EN (English Database - Short & Crisp + eventSummary)
// ==========================================
const EVENT_DB_EN = {
    "Must-Haves!": [
        {
            desc: "Scrolling your feed, you found that rare\n'Art Toy' you've been hunting for!\nMint condition. Can you let it go?",
            eventSummary: "Found a rare Art Toy you've been hunting for",
            btn1: "Buy now", btn2: "Pass",
            shortChoice1: "Bought Art Toy", shortChoice2: "Passed",
            impact1: { money: [-1500, -1000], passion: [20, 30], energy: [-5, -10], social: [5, 10] },
            impact2: { money: [0, 0], passion: [-30, -40], energy: [5, 10], social: [0, 0] }
        },
        {
            desc: "Your favorite IG clothing brand is on sale!\nThe design is cool for your first day.\nShould you buy the whole set right now?",
            eventSummary: "Your favorite IG clothing brand is on sale",
            btn1: "Buy all", btn2: "Wear old",
            shortChoice1: "Bought clothes", shortChoice2: "Wore old clothes",
            impact1: { money: [-500, -800], passion: [15, 25], energy: [-5, -10], social: [15, 20] },
            impact2: { money: [0, 0], passion: [-20, -30], energy: [5, 10], social: [-5, -10] }
        },
        {
            desc: "A friend recommended a Bluetooth keyboard.\nThe typing sound is great and works smoothly.\nIt'll make taking notes much more fun!",
            eventSummary: "A friend recommended a great Bluetooth keyboard",
            btn1: "Buy it", btn2: "Use old",
            shortChoice1: "Bought keyboard", shortChoice2: "Used old one",
            impact1: { money: [-800, -1200], passion: [20, 30], energy: [-5, -10], social: [5, 10] },
            impact2: { money: [0, 0], passion: [-20, -30], energy: [5, 10], social: [0, 0] }
        },
        {
            desc: "A trendy tote bag every college student uses.\nYou kinda need one so you fit right in.\nShould you order it now despite the price?",
            eventSummary: "Saw a trendy tote bag every college student uses",
            btn1: "Order now", btn2: "Use backpack",
            shortChoice1: "Bought bag", shortChoice2: "Used backpack",
            impact1: { money: [-600, -900], passion: [15, 25], energy: [-5, -10], social: [15, 20] },
            impact2: { money: [0, 0], passion: [-20, -30], energy: [5, 10], social: [-5, -10] }
        },
        {
            desc: "Your favorite creator released new LINE stickers!\nGreat for making friends in the group chat.\nWill you pay a little to build friendships?",
            eventSummary: "Favorite creator released new LINE stickers",
            btn1: "Buy stickers", btn2: "Use free",
            shortChoice1: "Bought stickers", shortChoice2: "Used free ones",
            impact1: { money: [-100, -200], passion: [10, 15], energy: [0, 0], social: [10, 15] },
            impact2: { money: [0, 0], passion: [-10, -15], energy: [0, 0], social: [-10, -15] }
        }
    ],

    "Social Tax": [
        {
            desc: "Friends messaged: 'Let's hit the new buffet!\nIt's Jack's birthday, he'll be mad if you miss.'\nAre you going to join the celebration?",
            eventSummary: "Friends invited you to a birthday buffet",
            btn1: "Let's go!", btn2: "I'm broke",
            shortChoice1: "Joined birthday", shortChoice2: "Skipped party",
            impact1: { money: [-400, -500], passion: [10, 20], energy: [-15, -20], social: [25, 35] },
            impact2: { money: [0, 0], passion: [-10, -15], energy: [10, 15], social: [-30, -40] }
        },
        {
            desc: "Seniors invited you to a bar gathering tonight.\nThey pay for food, but you split the drinks!\nA great chance to know your seniors better.",
            eventSummary: "Seniors invited you to a bar gathering",
            btn1: "Cheers!", btn2: "Fake headache",
            shortChoice1: "Joined seniors", shortChoice2: "Skipped bar",
            impact1: { money: [-300, -600], passion: [15, 25], energy: [-20, -30], social: [30, 40] },
            impact2: { money: [0, 0], passion: [-10, -15], energy: [15, 20], social: [-30, -40] }
        },
        {
            desc: "High school friends want to share a streaming app.\nIf you don't pay, the whole group can't watch.\nWill you transfer money for the group?",
            eventSummary: "High school friends want to share a streaming app",
            btn1: "Transfer", btn2: "Refuse",
            shortChoice1: "Split app fee", shortChoice2: "Refused fee",
            impact1: { money: [-100, -200], passion: [5, 10], energy: [0, 0], social: [15, 25] },
            impact2: { money: [0, 0], passion: [-10, -20], energy: [0, 0], social: [-25, -35] }
        },
        {
            desc: "The faculty opened pre-orders for major jackets.\nWearing it makes you a true faculty member.\nIt's pricey, but it builds team spirit, right?",
            eventSummary: "Faculty opened pre-orders for major jackets",
            btn1: "Order size L", btn2: "Don't buy",
            shortChoice1: "Bought jacket", shortChoice2: "Skipped jacket",
            impact1: { money: [-500, -800], passion: [10, 20], energy: [0, -5], social: [30, 40] },
            impact2: { money: [0, 0], passion: [-10, -20], energy: [5, 10], social: [-30, -40] }
        },
        {
            desc: "Tomorrow is your best friend's birthday.\nYou both got into the same uni, gotta surprise them!\nWill you buy them a grand gift to impress?",
            eventSummary: "It's your best friend's birthday tomorrow",
            btn1: "Buy big gift", btn2: "Buy a drink",
            shortChoice1: "Bought gift", shortChoice2: "Bought a drink",
            impact1: { money: [-400, -700], passion: [15, 25], energy: [-5, -10], social: [25, 35] },
            impact2: { money: [-50, -100], passion: [-10, -20], energy: [5, 10], social: [-20, -30] }
        }
    ],

    "Hustle Hard": [
        {
            desc: "A client messages: 'Urgent job! Send it by tomorrow.'\nThe pay is great, but you must pull an all-nighter.\nWill you sacrifice health to hustle hard?",
            eventSummary: "Client offered an urgent overnight job",
            btn1: "Take job", btn2: "Need rest",
            shortChoice1: "Took urgent job", shortChoice2: "Refused job",
            impact1: { money: [800, 1500], passion: [5, 15], energy: [-35, -45], social: [10, 20] },
            impact2: { money: [0, 0], passion: [-5, -10], energy: [20, 30], social: [-5, -10] }
        },
        {
            desc: "Seniors hired you to carry equipment for the camp.\nIt's tiring, but the daily pay helps you survive.\nCan you handle the heavy lifting under the sun?",
            eventSummary: "Seniors hired you to carry camp equipment",
            btn1: "Let's do it", btn2: "Sleep in",
            shortChoice1: "Worked at camp", shortChoice2: "Slept in",
            impact1: { money: [500, 1000], passion: [5, 10], energy: [-35, -45], social: [20, 30] },
            impact2: { money: [0, 0], passion: [-5, -10], energy: [20, 30], social: [-5, -10] }
        },
        {
            desc: "Cleaning your closet before moving to the dorm.\nYou decide to live-stream and sell old clothes.\nMaybe you can earn some pocket money back?",
            eventSummary: "Decided to live-stream and sell old clothes",
            btn1: "Start stream", btn2: "Too lazy",
            shortChoice1: "Sold clothes", shortChoice2: "Kept clothes",
            impact1: { money: [300, 800], passion: [10, 20], energy: [-20, -30], social: [15, 25] },
            impact2: { money: [0, 0], passion: [-5, -10], energy: [15, 20], social: [-5, -10] }
        },
        {
            desc: "A high school junior wants you to tutor them.\nIt's a good review and the pay is quite solid.\nWill you sacrifice your free time to tutor?",
            eventSummary: "A high school junior wants you to tutor them",
            btn1: "Tutor them", btn2: "Need rest",
            shortChoice1: "Tutored junior", shortChoice2: "Rested instead",
            impact1: { money: [600, 1200], passion: [10, 20], energy: [-25, -35], social: [15, 25] },
            impact2: { money: [0, 0], passion: [-5, -10], energy: [20, 25], social: [-5, -10] }
        },
        {
            desc: "The university is hosting a logo design contest.\nThe prize is huge, but you must work fast!\nWill you test your skills and join?",
            eventSummary: "University is hosting a logo design contest",
            btn1: "Join contest", btn2: "Skip it",
            shortChoice1: "Joined contest", shortChoice2: "Skipped contest",
            impact1: { money: [1000, 2000], passion: [20, 30], energy: [-35, -45], social: [15, 25] },
            impact2: { money: [0, 0], passion: [-10, -15], energy: [20, 30], social: [0, -5] }
        }
    ],

    "Nerd Mode": [
        {
            desc: "Midterms are coming! Friends invite you to study\nat a cafe (requires buying drinks to stay).\nWill you pay for a good study environment?",
            eventSummary: "Friends invited you to study at a cafe",
            btn1: "Pay for cafe", btn2: "Study free",
            shortChoice1: "Paid for cafe", shortChoice2: "Studied at uni",
            impact1: { money: [-200, -350], passion: [10, 20], energy: [-10, -15], social: [15, 25] },
            impact2: { money: [0, 0], passion: [-10, -20], energy: [5, 10], social: [-15, -25] }
        },
        {
            desc: "An online prep course for freshmen is on sale!\nTaking it before the semester starts feels safe.\nInvest in your future or learn for free online?",
            eventSummary: "Online prep course for freshmen is on sale",
            btn1: "Buy course", btn2: "Find free clips",
            shortChoice1: "Bought course", shortChoice2: "Learned for free",
            impact1: { money: [-600, -1000], passion: [20, 30], energy: [-15, -25], social: [5, 10] },
            impact2: { money: [0, 0], passion: [-10, -20], energy: [10, 15], social: [-5, -10] }
        },
        {
            desc: "Legendary exam summary sheets are up for sale.\nReading this guarantees you'll pass the test!\nIt's a bit pricey, but are you willing to pay?",
            eventSummary: "Legendary exam summary sheets are up for sale",
            btn1: "Transfer now", btn2: "Write my own",
            shortChoice1: "Bought notes", shortChoice2: "Took own notes",
            impact1: { money: [-200, -450], passion: [15, 25], energy: [5, 10], social: [10, 20] },
            impact2: { money: [0, 0], passion: [-10, -20], energy: [-15, -25], social: [-5, -10] }
        },
        {
            desc: "The professor requires an expensive translated book.\nYou need it to complete the homework assignments.\nBuy the original book or print a cheap copy?",
            eventSummary: "Professor requires an expensive translated book",
            btn1: "Buy original", btn2: "Print copy",
            shortChoice1: "Bought book", shortChoice2: "Printed copy",
            impact1: { money: [-700, -1200], passion: [10, 20], energy: [0, -5], social: [5, 10] },
            impact2: { money: [-100, -200], passion: [-15, -25], energy: [-10, -15], social: [-10, -15] }
        },
        {
            desc: "You don't understand this subject at all!\nClassmates want to chip in for an honors tutor.\nWill you pay for the tutor or rely on your luck?",
            eventSummary: "Classmates want to chip in for an honors tutor",
            btn1: "Chip in", btn2: "Rely on luck",
            shortChoice1: "Paid for tutor", shortChoice2: "Relied on luck",
            impact1: { money: [-300, -550], passion: [15, 25], energy: [-15, -25], social: [15, 25] },
            impact2: { money: [0, 0], passion: [-20, -30], energy: [0, 5], social: [-15, -25] }
        }
    ],

    "Why Always Me!": [
        {
            desc: "So unlucky! You stubbed your toe on the bed.\nIt's bleeding and you have to limp to the pharmacy.\nWill you buy medicine or endure the pain?",
            eventSummary: "Stubbed your toe on the bed and it's bleeding",
            btn1: "Buy medicine", btn2: "Endure it",
            shortChoice1: "Bought medicine", shortChoice2: "Endured pain",
            impact1: { money: [-150, -250], passion: [-10, -20], energy: [0, 5], social: [0, 0] },
            impact2: { money: [0, 0], passion: [-30, -40], energy: [-25, -35], social: [0, 0] }
        },
        {
            desc: "Riding your motorcycle, the tire blows out!\nYou must push it to a shop and you're late.\nPay for the repair or leave it and take a taxi?",
            eventSummary: "Motorcycle tire blew out while running an errand",
            btn1: "Fix tire", btn2: "Take taxi",
            shortChoice1: "Fixed flat tire", shortChoice2: "Took a taxi",
            impact1: { money: [-200, -400], passion: [-10, -20], energy: [-5, -10], social: [0, 0] },
            impact2: { money: [-100, -150], passion: [-25, -35], energy: [-20, -30], social: [0, -5] }
        },
        {
            desc: "You dropped your phone and the screen shattered!\nYou can't live or communicate without it.\nWill you pay for an expensive fix or endure it?",
            eventSummary: "Dropped your phone and the screen shattered",
            btn1: "Fix screen", btn2: "Endure it",
            shortChoice1: "Fixed screen", shortChoice2: "Used broken phone",
            impact1: { money: [-1000, -1800], passion: [-10, -20], energy: [-5, -10], social: [5, 10] },
            impact2: { money: [0, 0], passion: [-40, -50], energy: [-10, -20], social: [-25, -35] }
        },
        {
            desc: "Starving! You ordered delivery but the rider crashed.\nThe soup spilled everywhere and ruined the meal.\nOrder a new one or force yourself to eat it?",
            eventSummary: "Delivery rider crashed and ruined your food",
            btn1: "Order new", btn2: "Eat the mess",
            shortChoice1: "Reordered food", shortChoice2: "Ate spilled food",
            impact1: { money: [-150, -300], passion: [-5, -15], energy: [5, 10], social: [0, 0] },
            impact2: { money: [0, 0], passion: [-30, -40], energy: [-15, -25], social: [0, 0] }
        },
        {
            desc: "The weather changed and you wake up with a fever.\nYou need to visit a clinic for a quick injection.\nWill you pay the doctor or just take some pills?",
            eventSummary: "Woke up with a sudden high fever",
            btn1: "Go to clinic", btn2: "Take pills",
            shortChoice1: "Went to clinic", shortChoice2: "Took basic pills",
            impact1: { money: [-500, -850], passion: [-10, -20], energy: [25, 35], social: [0, 0] },
            impact2: { money: [-50, -100], passion: [-25, -35], energy: [-35, -45], social: [-5, -10] }
        }
    ],

    "Chill Time": [
        {
            desc: "A blockbuster game you've waited for is on sale!\nToday is the last day, or you'll wait another year.\nWill you swipe your card for gaming happiness?",
            eventSummary: "A blockbuster game you've waited for is on sale",
            btn1: "Buy game", btn2: "Watch streams",
            shortChoice1: "Bought game", shortChoice2: "Watched streams",
            impact1: { money: [-1000, -1500], passion: [35, 50], energy: [-15, -25], social: [10, 20] },
            impact2: { money: [0, 0], passion: [-25, -35], energy: [10, 15], social: [-10, -15] }
        },
        {
            desc: "Your favorite series finale is up! Tonight requires\nsnacks, sodas, and popcorn for an all-nighter.\nWill you stock up at 7-Eleven or watch it dry?",
            eventSummary: "Favorite series finale is up and needs snacks",
            btn1: "Buy snacks", btn2: "Watch dry",
            shortChoice1: "Bought snacks", shortChoice2: "Watched dry",
            impact1: { money: [-250, -450], passion: [25, 40], energy: [-20, -30], social: [5, 10] },
            impact2: { money: [0, 0], passion: [-15, -25], energy: [10, 15], social: [0, -5] }
        },
        {
            desc: "Stressed about moving? Friends invite you to\nbook a karaoke room and scream your lungs out!\nWill you join the party to release your stress?",
            eventSummary: "Friends invited you to a karaoke room to destress",
            btn1: "Join party", btn2: "Sing at home",
            shortChoice1: "Joined karaoke", shortChoice2: "Sang in bathroom",
            impact1: { money: [-350, -550], passion: [30, 45], energy: [-20, -30], social: [25, 40] },
            impact2: { money: [0, 0], passion: [-15, -25], energy: [10, 15], social: [-20, -30] }
        },
        {
            desc: "A superhero movie sequel hits theaters today!\nYou must get good seats to avoid online spoilers.\nPay for VIP tickets or wait for streaming?",
            eventSummary: "Superhero movie sequel hits theaters today",
            btn1: "Watch today", btn2: "Later",
            shortChoice1: "Watched premiere", shortChoice2: "Waited for stream",
            impact1: { money: [-250, -500], passion: [25, 40], energy: [-10, -15], social: [15, 25] },
            impact2: { money: [0, 0], passion: [-20, -30], energy: [5, 10], social: [-15, -25] }
        },
        {
            desc: "A new board game just released with fun rules!\nBuying it to mess with friends tonight sounds great.\nBuy the new game or stick with old Uno cards?",
            eventSummary: "A new board game just released with fun rules",
            btn1: "Buy board game", btn2: "Play old cards",
            shortChoice1: "Bought board game", shortChoice2: "Played old cards",
            impact1: { money: [-600, -950], passion: [25, 40], energy: [-10, -15], social: [25, 40] },
            impact2: { money: [0, 0], passion: [-10, -20], energy: [5, 10], social: [-10, -20] }
        }
    ],

    "Can't Miss This!": [
        {
            desc: "Your favorite artist announced a concert in Thailand!\nToday is the last day for Early Bird tickets.\nWill you fight for the front zone tickets?",
            eventSummary: "Favorite artist announced a concert in Thailand",
            btn1: "Fight for it!", btn2: "Listen free",
            shortChoice1: "Bought VIP ticket", shortChoice2: "Listened for free",
            impact1: { money: [-3000, -2000], passion: [50, 70], energy: [-25, -35], social: [25, 40] },
            impact2: { money: [0, 0], passion: [-40, -60], energy: [15, 25], social: [-25, -40] }
        },
        {
            desc: "A national music festival is happening this weekend!\nThe lineup is perfect, you must go no matter what.\nWill you buy the festival ticket for the experience?",
            eventSummary: "National music festival is happening this weekend",
            btn1: "Buy ticket", btn2: "Watch clips",
            shortChoice1: "Bought fest ticket", shortChoice2: "Watched free clips",
            impact1: { money: [-2500, -1800], passion: [45, 65], energy: [-30, -40], social: [30, 45] },
            impact2: { money: [0, 0], passion: [-35, -55], energy: [15, 25], social: [-25, -40] }
        },
        {
            desc: "A new smartwatch just launched with amazing features.\nIt would look so cool on your first day of college.\nWill you swipe for it while it's on promotion?",
            eventSummary: "A new smartwatch launched with amazing features",
            btn1: "Swipe card", btn2: "Use old watch",
            shortChoice1: "Bought smartwatch", shortChoice2: "Used old watch",
            impact1: { money: [-3000, -2000], passion: [40, 60], energy: [-5, -10], social: [20, 30] },
            impact2: { money: [0, 0], passion: [-25, -40], energy: [5, 10], social: [-15, -25] }
        },
        {
            desc: "A fan meeting for your favorite series actors!\nVVIP gets a high-touch and photo. It's a rare chance.\nWill you go all-in and grab this golden opportunity?",
            eventSummary: "Fan meeting for your favorite series actors",
            btn1: "Buy VVIP", btn2: "Check Twitter",
            shortChoice1: "Bought VVIP ticket", shortChoice2: "Viewed free photos",
            impact1: { money: [-3000, -2500], passion: [50, 70], energy: [-15, -25], social: [20, 30] },
            impact2: { money: [0, 0], passion: [-45, -65], energy: [10, 15], social: [-15, -25] }
        },
        {
            desc: "A farewell provincial trip with your high school gang!\nOne last huge trip before separating for university.\nWill you transfer the money or fake being busy?",
            eventSummary: "Farewell provincial trip with your high school gang",
            btn1: "Join trip", btn2: "Fake busy",
            shortChoice1: "Joined farewell trip", shortChoice2: "Skipped the trip",
            impact1: { money: [-2500, -1500], passion: [40, 60], energy: [-25, -35], social: [40, 60] },
            impact2: { money: [0, 0], passion: [-35, -50], energy: [15, 25], social: [-40, -60] }
        }
    ]
};

// ==========================================
// 🌟 SPECIAL_DB_TH และ SPECIAL_DB_EN (ดึงของเดิมมาไม่ต้องแก้)
// ==========================================
const SPECIAL_DB_TH = [
    { 
        title: "วาสนาคนซักผ้า", 
        desc: "รื้อกางเกงตัวเก่งมาซักเตรียมเข้าหอ\nล้วงกระเป๋าไปเจอแบงก์พับไว้ยับๆ\nรวยแบบงงๆ เฉยเลยเรา!", 
        shortDesc: "เจอเงิน",
        stats: { money: [100, 300], passion: [5, 10], energy: [0, 0], social: [0, 0] } 
    },
    { 
        title: "ไปด้วยกัน", 
        desc: "ยืนรอรถร้อนๆ เพื่อนขี่มอเตอร์ไซค์ผ่านมา\nเลยเรียกให้ซ้อนท้ายไปส่งหน้ามหาลัย\nประหยัดค่ารถแถมไม่เหนื่อย!", 
        shortDesc: "ติดรถเพื่อน",
        stats: { money: [0, 0], passion: [5, 10], energy: [10, 20], social: [10, 20] } 
    },
    { 
        title: "ลาก่อนหมูปิ้ง", 
        desc: "ซื้อหมูปิ้งหน้าหอมากำลังจะกิน\nดันหลุดมือตกพื้น หมาคาบไปกินเฉยเลย!\nซวยจริงๆ เช้านี้", 
        shortDesc: "ทำหมูปิ้งตก",
        stats: { money: [-50, -100], passion: [-15, -25], energy: [-5, -10], social: [0, 0] } 
    },
    { 
        title: "งดคลาสเช้า!", 
        desc: "ตั้งนาฬิกาปลุกซะดิบดี\nพอเปิดไลน์กลุ่มบอกอาจารย์งดคลาสกะทันหัน\nได้นอนต่อแบบอิ่มๆ!", 
        shortDesc: "อาจารย์งดคลาส",
        stats: { money: [0, 0], passion: [10, 20], energy: [20, 40], social: [0, 0] } 
    },
    { 
        title: "ลืมกดยกเลิกแอป", 
        desc: "แอปทดลองใช้ฟรีครบกำหนดแล้วลืมยกเลิก\nโดนหักเงินในบัญชีไปแบบอัตโนมัติ\nน้ำตาไหลพราก", 
        shortDesc: "โดนหักค่าแอป",
        stats: { money: [-150, -300], passion: [-15, -25], energy: [0, 0], social: [0, 0] } 
    },
    { 
        title: "นกขี้ใส่หัว!", 
        desc: "เดินอยู่ดีๆ นกเจ้ากรรมดันปล่อยระเบิดลงหัวเป๊ะ!\nต้องวิ่งกลับหอไปอาบน้ำสระผมใหม่\nซวยอะไรขนาดนี้", 
        shortDesc: "นกขี้ใส่หัว",
        stats: { money: [0, 0], passion: [-20, -40], energy: [-10, -20], social: [-10, -20] } 
    },
    { 
        title: "ป้าใจดีแถมให้", 
        desc: "ไปซื้อน้ำปั่นร้านประจำ\nป้าใจดีแถมไข่มุกให้จุกๆ ไม่คิดเงินเพิ่มด้วย!\nใจฟูสุดๆ", 
        shortDesc: "ป้าแถมไข่มุก",
        stats: { money: [0, 0], passion: [15, 25], energy: [10, 15], social: [5, 10] } 
    },
    { 
        title: "หอไฟดับ!", 
        desc: "กำลังปั่นงานเพลินๆ ไฟหอดันดับพรึบ!\nร้อนจนเหงื่อแตกแถมไม่ได้เซฟงานอีก", 
        shortDesc: "หอไฟดับ",
        stats: { money: [0, 0], passion: [-20, -30], energy: [-15, -25], social: [0, 0] } 
    },
    { 
        title: "ถูกรางวัลเลขท้าย!", 
        desc: "นึกครึ้มใจซื้อลอตเตอรี่เลขที่ชอบไว้\nดันถูกรางวัลเลขท้าย ได้ค่าขนมมาต่อชีวิต!", 
        shortDesc: "ถูกหวย",
        stats: { money: [200, 500], passion: [20, 40], energy: [0, 0], social: [5, 10] } 
    },
    { 
        title: "แอปธนาคารล่ม!", 
        desc: "กินข้าวเสร็จกำลังจะสแกนจ่าย แอปธนาคารดันล่ม!\nต้องควานหาเศษเหรียญมาจ่ายแบบทุลักทุเล", 
        shortDesc: "แอปธนาคารล่ม",
        stats: { money: [0, 0], passion: [-10, -20], energy: [-5, -10], social: [-15, -25] } 
    }
];

const SPECIAL_DB_EN = [
    { 
        title: "Lucky Laundry", 
        desc: "Washing your old pants before moving to the dorm...\nYou find crumpled banknotes hidden in the pocket!\nWhat a lucky day to find free money!", 
        shortDesc: "Found money",
        stats: { money: [100, 400], passion: [5, 10], energy: [0, 0], social: [0, 0] } 
    },
    { 
        title: "Hitch a Ride", 
        desc: "Waiting for a bus in the scorching heat...\nA friend drives by and offers a ride to campus!\nSaved some travel money and energy today.", 
        shortDesc: "Got a free ride",
        stats: { money: [20, 60], passion: [5, 15], energy: [10, 25], social: [15, 25] } 
    },
    { 
        title: "Goodbye, Pork Skewers", 
        desc: "Just bought delicious grilled pork, but it slips!\nIt falls to the ground and a dog eats it instantly.\nThere goes your good mood and your breakfast.", 
        shortDesc: "Dropped food",
        stats: { money: [-50, -120], passion: [-20, -30], energy: [-10, -15], social: [0, 0] } 
    },
    { 
        title: "Class Cancelled!", 
        desc: "You set your alarm perfectly for the morning class...\nOnly to see a message that the professor cancelled it!\nTime to sleep in and enjoy your free morning.", 
        shortDesc: "Class cancelled",
        stats: { money: [0, 0], passion: [10, 25], energy: [25, 45], social: [0, 0] } 
    },
    { 
        title: "Forgot to Cancel", 
        desc: "Your app's free trial ended and you forgot to cancel.\nYour bank account just got auto-charged unexpectedly.\nTears are falling as you lose your lunch money.", 
        shortDesc: "Auto-charged app",
        stats: { money: [-150, -350], passion: [-20, -30], energy: [0, 0], social: [0, 0] } 
    },
    { 
        title: "Bird Poop Attack!", 
        desc: "Walking peacefully when a bird drops a bomb!\nIt hits your head and you have to run back to the dorm.\nTime to shower and wash your hair all over again.", 
        shortDesc: "Bird pooped on head",
        stats: { money: [0, 0], passion: [-25, -45], energy: [-15, -25], social: [-10, -20] } 
    },
    { 
        title: "Extra from Auntie", 
        desc: "Buying a sweet drink from your usual spot...\nThe kind vendor gives you extra toppings for free!\nShe saw you looking tired and wanted to help.", 
        shortDesc: "Got free toppings",
        stats: { money: [0, 0], passion: [20, 35], energy: [10, 20], social: [5, 15] } 
    },
    { 
        title: "Blackout!", 
        desc: "Working hard on an assignment and the power goes out!\nThe aircon dies and you haven't saved your file yet.\nSweat and tears are definitely falling tonight.", 
        shortDesc: "Dorm blackout",
        stats: { money: [0, 0], passion: [-25, -35], energy: [-20, -30], social: [0, 0] } 
    },
    { 
        title: "Won the Lottery!", 
        desc: "You bought a single lottery ticket just for fun...\nAnd you actually won a small prize! How lucky!\nNice extra pocket money to survive the week.", 
        shortDesc: "Won lottery",
        stats: { money: [200, 500], passion: [25, 45], energy: [0, 0], social: [10, 20] } 
    },
    { 
        title: "App Crash!", 
        desc: "You finish eating and try to scan the payment QR...\nBut the banking app is down! Total embarrassment.\nYou have to awkwardly dig for coins to pay.", 
        shortDesc: "Bank app crashed",
        stats: { money: [0, 0], passion: [-15, -25], energy: [-10, -15], social: [-20, -35] } 
    }
];

// ==========================================
// 📱 FAMILY_CALL_DB_TH และ FAMILY_CALL_DB_EN (ดึงของเดิมมาไม่ต้องแก้)
// ==========================================
const FAMILY_CALL_DB_TH = {
    "แม่": [
        { mood: "อารมณ์ดี", text: "'กินข้าวยังลูก? ขาดเหลืออะไรไหม\nเดี๋ยวแม่โอนค่าขนมไปให้เพิ่มนะ'", shortDesc: "แม่โอนเงินให้", stats: { money: [1200, 2000], passion: [10, 20], energy: [5, 10], social: [0, 0] } },
        { mood: "เป็นห่วง", text: "'เงินหมดแล้วเหรอ? ตั้งใจเรียนนะลูก\nอะแม่โอนให้แล้วนะ อย่าเที่ยวเยอะล่ะ'", shortDesc: "แม่บ่นแต่โอนให้", stats: { money: [800, 1500], passion: [5, 10], energy: [0, 5], social: [0, 0] } },
        { mood: "บ่นแต่ให้", text: "'ใช้เงินเปลืองจังเลยเราน่ะ!\nอะ โอนให้แค่นี้นะ หัดประหยัดๆ หน่อย!'", shortDesc: "แม่สวดยับแต่โอน", stats: { money: [500, 1000], passion: [-15, -10], energy: [0, 0], social: [0, 0] } },
        { mood: "ช็อตเหมือนกัน", text: "'โอ๊ย แม่ก็หมุนไม่ทันเหมือนกันเดือนนี้\nทนๆ กินมาม่าไปก่อนนะลูกนะ'", shortDesc: "แม่ช็อต", stats: { money: [0, 0], passion: [-20, -10], energy: [-10, -5], social: [0, 0] } }
    ],
    "พ่อ": [
        { mood: "สปอยล์", text: "'ฮัลโหลลูก พ่อแอบโอนให้ละนะ\nอย่าไปบอกแม่เขาล่ะเดี๋ยวพ่อโดนด่า ฮ่าๆ'", shortDesc: "พ่อแอบโอนเงิน", stats: { money: [1500, 2000], passion: [15, 25], energy: [0, 0], social: [5, 10] } },
        { mood: "อารมณ์ดี", text: "'เป็นไงบ้างลูก อะเอาค่าขนมไปกินนะ\nเลิกเรียนแล้วรีบกลับหอล่ะ'", shortDesc: "พ่อให้ค่าขนม", stats: { money: [1000, 1500], passion: [5, 15], energy: [5, 10], social: [0, 0] } },
        { mood: "บ่นแต่ให้", text: "'โตแล้วหัดหาเงินพิเศษทำบ้างสิ...\nอะ โอนให้ครึ่งนึงพอ'", shortDesc: "พ่อบ่นแต่โอนให้", stats: { money: [500, 800], passion: [-20, -10], energy: [0, 0], social: [0, 0] } },
        { mood: "ช็อตเหมือนกัน", text: "'พ่อเพิ่งเอาเงินไปจ่ายค่าซ่อมรถหมดเลยลูก\nตอนนี้กรอบ ยืมเพื่อนไปก่อนนะ'", shortDesc: "พ่อช็อต", stats: { money: [0, 0], passion: [-15, -5], energy: [-5, 0], social: [0, 0] } }
    ],
    "พี่": [
        { mood: "ป๋าจัด", text: "'เพิ่งเงินเดือนออกพอดี! ป๋าจัดให้ไอ้น้อง\nวันหลังมาเลี้ยงหมูกระทะกูด้วยละกัน'", shortDesc: "พี่เปย์ยับ", stats: { money: [1500, 2000], passion: [10, 20], energy: [0, 0], social: [10, 20] } },
        { mood: "อารมณ์ดี", text: "'เออๆ รู้ว่าช็อต เอานี่ไปก่อนละกัน\nกูมีให้แค่นี้แหละ ประหยัดๆ ด้วยล่ะ'", shortDesc: "พี่แบ่งเงินให้", stats: { money: [800, 1200], passion: [5, 10], energy: [0, 0], social: [5, 15] } },
        { mood: "บ่นแต่ให้", text: "'บ่นไรนักหนา กูก็ช็อตเหมือนกันเว้ย!\nอะ กูแบ่งให้แค่นี้พอ หาทางเอาเองละกัน'", shortDesc: "พี่ด่าแต่โอน", stats: { money: [300, 600], passion: [-10, -5], energy: [0, 0], social: [-5, 0] } },
        { mood: "ช็อตเหมือนกัน", text: "'โทรมาทำไม กูก็กินมาม่าอยู่เนี่ย!\nไม่มีเว้ย! แค่นี้นะเล่นเกมอยู่ อย่ากวน!'", shortDesc: "พี่ช็อต", stats: { money: [0, 0], passion: [-15, -10], energy: [-10, -5], social: [-15, -10] } }
    ]
};

const FAMILY_CALL_DB_EN = {
    "Mom": [
        { mood: "Happy", text: "'Have you eaten, honey? Do you need anything?\nI just transferred some extra pocket money for you.\nTake care of yourself and don't skip meals!'", shortDesc: "Mom sent money", stats: { money: [1200, 2000], passion: [10, 20], energy: [5, 10], social: [0, 0] } },
        { mood: "Caring", text: "'Out of money already? Focus on your studies,\ndon't just go out playing with friends all day.\nI sent you some money, use it wisely okay?'", shortDesc: "Mom sent money", stats: { money: [800, 1500], passion: [5, 10], energy: [0, 5], social: [0, 0] } },
        { mood: "Complaining", text: "'You spend way too much! I just gave you some!\nI'll transfer a little, but you need to save up.\nHad to cut my own budget just for this!'", shortDesc: "Mom complained but sent money", stats: { money: [500, 1000], passion: [-15, -25], energy: [0, 0], social: [0, 0] } },
        { mood: "Broke", text: "'Oh, I'm really tight on money this month too...\nI just paid the electric bills and house expenses.\nYou'll have to endure with instant noodles.'", shortDesc: "Mom is broke", stats: { money: [0, 0], passion: [-25, -15], energy: [-10, -5], social: [0, 0] } }
    ],
    "Dad": [
        { mood: "Spoiling", text: "'Hello! I secretly transferred you some money.\nGo buy yourself some nice snacks or a game...\nJust don't tell your mom or I'll get scolded!'", shortDesc: "Dad secretly sent money", stats: { money: [1500, 2000], passion: [20, 30], energy: [0, 0], social: [5, 10] } },
        { mood: "Happy", text: "'How are you doing, kid? Is uni life good?\nI sent you some pocket money for the week.\nDon't forget to visit us when you're free.'", shortDesc: "Dad sent money", stats: { money: [1000, 1500], passion: [5, 15], energy: [5, 10], social: [0, 0] } },
        { mood: "Complaining", text: "'You only call when you need money, don't you?\nYou're grown up now, learn to earn some yourself!\nFine, I'll transfer half of what you asked.'", shortDesc: "Dad complained but sent money", stats: { money: [500, 1000], passion: [-25, -15], energy: [0, 0], social: [0, 0] } },
        { mood: "Broke", text: "'I just spent everything fixing the car, kid!\nI'm completely broke right now, really sorry.\nMaybe borrow from a friend for a few days?'", shortDesc: "Dad is broke", stats: { money: [0, 0], passion: [-15, -5], energy: [-10, 0], social: [0, 0] } }
    ],
    "Sibling": [
        { mood: "Rich", text: "'Just got my paycheck and a bonus today!\nBig bro/sis got you covered. Check your app!\nTreat me to BBQ next time you're home.'", shortDesc: "Sibling sent lots of money", stats: { money: [1500, 2000], passion: [10, 20], energy: [0, 0], social: [10, 20] } },
        { mood: "Happy", text: "'Yeah, yeah, I know the freshman struggle.\nTake this for now, it's all I can share today.\nDon't go spending it all on Art Toys!'", shortDesc: "Sibling shared money", stats: { money: [800, 1200], passion: [5, 10], energy: [0, 0], social: [5, 15] } },
        { mood: "Complaining", text: "'Stop calling me for money! I'm struggling too!\nFine, I'll send a tiny bit so you don't starve.\nFigure out the rest of the week yourself!'", shortDesc: "Sibling complained but sent money", stats: { money: [300, 800], passion: [-15, -5], energy: [0, 0], social: [-5, 0] } },
        { mood: "Broke", text: "'Why are you calling?! I'm eating noodles too!\nNo money! Zero! I haven't even paid my rent.\nBye, I'm in the middle of an important game!'", shortDesc: "Sibling is broke", stats: { money: [0, 0], passion: [-20, -10], energy: [-15, -10], social: [-15, -10] } }
    ]
};
