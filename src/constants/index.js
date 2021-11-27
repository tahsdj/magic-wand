
export const ACTIONS = [
    {
        id: '1',
        name: '削直',
        type: 'action',
        description: '橫跨右三格，畫下材料。',
        image: 'https://i.imgur.com/IeaWm7b.png',
        actions: [{
            value: 2,
            operator: "+",
            target: 'attack'
        }]
    },
    {
        id: '2',
        name: '精煉',
        type: 'action',
        description: '在正中格內，畫下材料，之後把材料塗黑。',
        image: 'https://i.imgur.com/LZdajIp.png',
        actions: [{
            value: 3,
            operator: "+",
            target: 'attack'
        }]
    },
    {
        id: '3',
        name: '咒文加護',
        type: 'action',
        image: 'https://i.imgur.com/JYyosER.png',
        description: '在上中格內，重複寫下材料名稱文字，以形成加護。',
        actions: [{
            value: 2,
            operator: "+",
            target: 'attack'
        }]
    },
    {
        id: '4',
        name: '熔接',
        type: 'action',
        image: 'https://i.imgur.com/AjlyEuF.png',
        description: '在右三格之一，畫下材料。',
        actions: [{
            value: 1.5,
            operator: "*",
            target: 'attack'
        }]
    },
    {
        id: '5',
        name: '加冕',
        type: 'action',
        image: 'https://i.imgur.com/Zs2PbMr.png',
        description: '在任何位置，畫下任何動物的頭，並在該動物頭上畫下材料。',
        actions: [{
            value: 2,
            operator: "+",
            target: 'attack'
        }]
    },
    {
        id: '6',
        name: '抱佛腳',
        type: 'action',
        image: 'https://i.imgur.com/bVXyKNq.png',
        description: '在任何位置，畫下任何動物的腳，並在該腳上畫下材料。',
        actions: [{
            value: 1,
            operator: "+",
            target: 'attack'
        }]
    },
    {
        id: '7',
        name: '退火',
        type: 'action',
        image: ' https://i.imgur.com/YVPNyZU.png',
        description: '把整張紙揉皺後，在最皺的一格內，畫下材料。',
        actions: [{
            value: 0,
            operator: "+",
            target: 'attack'
        }]
    },
    {
        id: '8',
        name: '鑲嵌',
        type: 'action',
        image: 'https://i.imgur.com/WltOkfW.png',
        description: '在法杖最粗的那一格內，畫下材料。',
        actions: [{
            value: 2,
            operator: "+",
            target: 'attack'
        }]
    },
    {
        id: '9',
        name: '火焰附魔',
        type: 'action',
        image: 'https://imgur.com/C2ioMxR.png',
        description: '在任意位置，畫下以火焰包覆的材料',
        actions: [{
            value: 0,
            operator: "+",
            target: 'attack'
        }]
    },
    {
        id: '10',
        name: '雷電附魔',
        type: 'action',
        image: 'https://imgur.com/C2ioMxR.png',
        description: '在任意位置，畫下以閃電包覆的材料',
        actions: [{
            value: 0,
            operator: "+",
            target: 'attack'
        }]
    },
    {
        id: '11',
        name: '寒冰附魔',
        type: 'action',
        image: 'https://imgur.com/TBBdDi0.png',
        description: '在任意位置，畫下以寒冰包覆的材料',
        actions: [{
            value: 0,
            operator: "+",
            target: 'attack'
        }]
    },
    {
        id: '12',
        name: '花紋蝕刻',
        type: 'action',
        image: 'https://imgur.com/6xLnpXK.png',
        description: '把材料畫滿整枝魔杖',
        actions: [{
            value: 1.5,
            operator: "*",
            target: 'attack'
        }]
    },
    {
        id: '13',
        name: '咒文蝕刻',
        type: 'action',
        image: 'https://imgur.com/N9AzMPv.png',
        description: '把材料名稱寫滿整枝魔杖',
        actions: [{
            value: 1.5,
            operator: "*",
            target: 'attack'
        }]
    },
    {
        id: '14',
        name: '昇華',
        type: 'action',
        image: 'https://imgur.com/tn2J3w8.png',
        description: '在上排三格中，畫下雲及材料。',
        actions: [{
            value: 1.5,
            operator: "*",
            target: 'attack'
        }]
    },
    {
        id: '15',
        name: '祈禱',
        type: 'action',
        image: 'https://imgur.com/5leQ8uj.png',
        description: '眼睛閉上後，在紙上畫下材料。',
        actions: [{
            value: 2,
            operator: "+",
            target: 'attack'
        }]
    },
    {
        id: '16',
        name: '攝食變身',
        type: 'action',
        image: 'https://imgur.com/hO6ttgf.png',
        description: '在下中格中，畫下被材料吸引來的掠食者。',
        actions: [{
            value: 1.5,
            operator: "*",
            target: 'attack'
        }]
    },
    {
        id: '17',
        name: '找碴的魔手',
        type: 'action',
        image: 'https://imgur.com/jdJNPz8.png',
        description: '在任意位置，使用非慣用手畫下材料。',
        actions: [{
            value: 3,
            operator: "+",
            target: 'attack'
        }]
    }
]

export const MONSTERS = [
    {
        id: '1',
        name: '結晶巨魔',
        story: "很脆弱的生物，打太大力會剩粉",
        categroy: "結晶魔",
        type: 'monster',
        image: 'https://i.imgur.com/Kqbw4jp.png',
        description: '你來到一座隱蔽的山林，這裡據說有著珍貴的材料。\n你在數百公里外就看到了牠 -- 如一座山一般大的生物，\n牠似乎在沉睡著，四周的山林隨著他的哈欠吹出的落山風而變形，禮讓出了一個只屬於牠的溫柔睡床。\n隨後你注意到了牠身上漂浮著的大塊結晶，那就是散發著魔力的純化材料。\n你一心想著要得到他們，於是你往前邁進，但隨著你越來越靠近，牠發出的轟鳴使你腳邊的土地隨之震動，震動幅度越來越大。\n你開始猶豫：是否不該擾人清夢?',
        materials: [
            {
                name: '寶石粉',
                value: 0,
                criteria: ["attack_>=_0"],
                type: 'material',
                category: 'free',
                image: 'https://i.imgur.com/9Md3UyE.png',
            },
            {
                name: '寶石塊',
                value: 2,
                criteria: ["attack_<=_3"],
                type: 'material',
                category: 'reward',
                image: 'https://i.imgur.com/bsmEgMY.png',
                tooltip: '你發出的法力過大，驚嚇到了結晶巨魔，使它自發分解了'
            }
        ]
    },
    {
        id: '2',
        name: '湖抖女神',
        story: "考驗挑戰戰者是否誠實",
        image: 'https://i.imgur.com/tk1BZRY.png',
        description: '穿梭在重重的森林中，忽見一面清澈的湖。\n湖面中浮出一位美麗的女子，看起來就是傳說中的湖抖女神。\n她會考驗每個的挑戰者的誠信，任何的謊話都逃不過他的魔掌。\n用誘惑的言語在你心中掀起每個人心中貪婪的漣漪。',
        categroy: "湖抖女神",
        type: 'monster',
        materials: [
            {
                name: '銀杏',
                value: 1,
                criteria: ["attack_>=_0"],
                type: 'material',
                category: 'free',
                image: 'https://i.imgur.com/GfEctPz.png'
            },
            {
                name: '金珍菇',
                value: 3,
                criteria: ["attack_>=_15"],
                type: 'material',
                category: 'reward',
                image: 'https://i.imgur.com/F4txJEA.png',
                tooltip: '你的話中似乎有些謊言'
            }
        ]
    },
    {
        id: '3',
        name: '格鬥貓仔',
        type: 'monster',
        story: "跟他當朋友，他會把他的獵物送給你。如果比武贏了，他則會獻上他的零食。",
        image: 'https://i.imgur.com/afqxjJV.png',
        description: "你遇見了一隻橘色的貓。\n他臉上有疤痕，看起來凶狠無比，他擁有強健的體魄，以及蓄勢待發的眼神。\n聽說這城市中為格鬥而生的貓，更重視相遇的緣分，而你正考慮你要跟他來場世紀對決或是輕輕交手搏感情。",
        categroy: "貓",
        materials: [
            {
                name: '毛毛蟲',
                value: 3,
                criteria: ["attack_>=_0"],
                type: 'material',
                category: 'free',
                image: 'https://i.imgur.com/9EOgPjS.png',
            },
            {
                name: '貓頭餅乾',
                value: 3,
                criteria: ["attack_>=_6"],
                type: 'material',
                category: 'reward',
                image: 'https://i.imgur.com/YwnDGBr.png',
                tooltip: '貓仔技術高超，你的魔杖打不贏。'
            }
        ]
    },
    {
        id: '4',
        name: '灰色烏鴉',
        type: 'monster',
        story: "沒有那麼黑的烏鴉，飛過時留下羽毛，在對的時間偷窺看，能撿到巢裡的收藏",
        image: 'https://i.imgur.com/eveEFm1.png',
        description: '你走在森林小徑中，一只黑色羽毛翩然落下，\n你抬起頭，看見烏鴉掠過上空。\n光線穿過牠那沒那麼黑的羽毛，使牠爪上的寶石閃著熠熠光芒。\n若在對的時間窺看，或許能撿到收藏家巢裡的寶物。',
        categroy: "烏鴉",
        materials: [
            {
                name: '鴉羽',
                value: 1,
                criteria: ["attack_>=_0"],
                type: 'material',
                category: 'free',
                image: 'https://i.imgur.com/BqAUqdw.png',
            },
            {
                name: '鑽石',
                value: 3,
                criteria: ["attack_=_5"],
                type: 'material',
                category: 'reward',
                image: 'https://i.imgur.com/E5zAXZa.png',
                tooltip: '你在錯誤的時間到訪，烏鴉正看守著寶石。'
            }
        ]
    },
    {
        id: '5',
        name: '魔眼狼',
        type: 'monster',
        story: "寄生魔眼會寄生在五感中視力較不靈敏的生物上，特別喜歡寄生在狼的身上，因為他可以利用狼的嚎叫引出更多狼群。",
        image: 'https://i.imgur.com/wPTcGAP.png',
        description: '這裡有著只有在滿月的夜晚才能預見的生物，嚴格來說，是寄生生物，\n你會先聽見牠為了寄生更多同類而發出的嚎叫，\n接著，牠便會在皎潔的月光下現身。\n牠會利用牠的宿主全身上下能夠發出體味的腺體，讓被吸引而來的同類發狂似的撕咬牠，使得牠能夠寄生在更多的......\n噓！就在那裏，你只有一瞬間的機會，你必須要俐落的，趁著狼群張牙舞爪前，先下手為強。',
        categroy: "寄生生物",
        materials: [
            {
                name: '狼毫',
                value: 1,
                criteria: ["attack_>=_0"],
                type: 'material',
                category: 'free',
                image: 'https://i.imgur.com/Y8zuTHI.png',
            },
            {
                name: '寄生之眼',
                value: 3,
                criteria: ["attack_>=_2"],
                type: 'material',
                category: 'reward',
                image: 'https://i.imgur.com/VSrW6xZ.png',
                tooltip: '你的攻擊只能傷到它一毫'
            }
        ]
    },
    {
        id: '6',
        name: 'ATM魔人',
        story: "",
        categroy: "魔人",
        image: 'https://i.imgur.com/6OFbjC6.png',
        description: "你在某個夜晚來到了某個城鎮，長途跋涉耗光了全身的精力，\n只想好好吃個東西填飽肚子，然而發現身上卻沒剩半毛錢。\n你剛看到巷子旁的剛好有個ATM，就興高采烈地走去。\n正當插入提款卡時，你從後方感受被一股令人不安的視線給盯著，但回頭卻又不見蹤影。\n難到在這個小小的空間中還有其他人的存在？\n為了領出錢是否該面對這令人討厭的威脅。",
        type: 'monster',
        materials: [
            {
                name: '50元銅板',
                value: 2,
                criteria: ["attack_>=_0"],
                type: 'material',
                category: 'free',
                image: 'https://i.imgur.com/2Je0WHZ.png',
            },
            {
                name: '千元大鈔',
                value: 4,
                criteria: ["attack_>=_3"],
                type: 'material',
                category: 'reward',
                image: 'https://i.imgur.com/tlomktL.png',
                tooltip: '你攻擊不夠快，讓ATM魔人逃走了'
            }
        ]
    },
    {
        id: '7',
        name: '閃光壁虎',
        story: "",
        categroy: "壁虎",
        type: 'monster',
        image: 'https://i.imgur.com/7zhsm3t.png',
        description: "在隔壁鎮閒晃時，你巧遇了穿著閃亮西裝外套的壁虎先生，\n牠身上的閃光貼紙隨著晃悠著的大尾巴一閃一閃，手中抱著的紙袋是牠誓捍衛的午餐。",
        materials: [
            {
                name: '斷尾',
                value: 3,
                criteria: ["attack_>=_0"],
                type: 'material',
                category: 'free',
                image: 'https://i.imgur.com/VDbDaia.png',
            },
            {
                name: '蟑螂觸鬚',
                value: 5,
                criteria: ["attack_>=_4"],
                type: 'material',
                category: 'reward',
                image: 'https://i.imgur.com/BBSyHvI.png',
                tooltip: '壁虎過於膽小，你剛舉起法杖他就抱著午餐逃跑了。'
            }
        ]
    },
    {
        id: '8',
        name: '深海食人貝',
        story: "",
        categroy: "貝類",
        image: 'https://i.imgur.com/1Y5XGDA.png',
        description: "你遇見了一個房間大的貝類，大大的貝殼裡放著數以千萬金碧輝煌的寶藏。\n等等，你觀察了一陣子之後發現有些不對勁：那些金碧輝煌的寶藏似乎是誘惑你成為他食物的一種擬態。",
        type: 'monster',
        materials: [
            {
                name: '深海泡沫',
                value: 4,
                criteria: ["attack_>=_0"],
                type: 'material',
                category: 'free',
                image: 'https://i.imgur.com/tcTK7mQ.png',
            },
            {
                name: '淚之珍珠',
                value: 6,
                criteria: ["attack_>=_5"],
                type: 'material',
                category: 'reward',
                image: 'https://i.imgur.com/4YOwx9O.png',
                tooltip: '食人貝力大無窮，你的魔杖打不贏。'
            }
        ]
    }
]

export const MAX_ROUND = 7
export const STAGE = [
    {
        id: 'draw_material',
        name: '抽素材'
    },
    {
        id: 'draw_action',
        name: '抽執行動作'
    }
]


export const TITLES = [
    {
        id: '魔杖大師',
        name: '魔杖大師',
        criteria: [
            "attack_>_40",
        ],
        description: "你能打遍天下無敵手，史上最強非你莫屬"
    },
    {
        id: '魔杖前輩',
        name: '魔杖前輩',
        criteria: [
            "attack_<=_40",
            "attack_>=_35",
        ],
        description: '魔杖竟有頑強的法力，你正朝向大師之路'
    },
    {
        id: '魔杖學徒',
        name: '魔杖學徒',
        criteria: [
            "attack_<=_30"
        ],
        description: "你的魔杖還算不錯，多練習必定表現非凡"
    },
    {
        id: '可愛鼯鼠',
        name: '可愛鼯鼠',
        criteria: [
            "methods-num_>=_5"
        ],
        description: '你什麼都會，正如能飛天又能爬樹的鼯鼠般，什麼都難不倒可愛的你。'
    },
    {
        id: '職人精神',
        name: '職人精神',
        criteria: [
            "methods-num_<=_3"
        ],
        description: "堅持只用少數的材料來做出厲害的法杖"
    },
    {
        id: '賞金獵人',
        name: '賞金獵人',
        criteria: [
            "winner-rewards_>=_5"
        ],
        description: "對於採集，你幾乎不屑一顧 -- 只有親手奪來的才能證明，你是極少數的強者。"
    },
    {
        id: '魔法佛祖',
        name: '魔法佛祖',
        criteria: [
            "methods_include-one_{抱佛腳}"
        ],
        description: "佛祖的兩隻腳被你抱得太緊，只好也讓你成佛"
    },
    {
        id: '拓荒者',
        name: '拓荒者',
        criteria: [
            "free-rewards_=_7"
        ],
        description: "在採集的過程中從未揮動魔杖——你若不是極端和平主義者，就是超級膽小鬼。"
    },
    {
        id: '善心人士',
        name: '善心人士',
        criteria: [
            "free-rewards_=_7",
            "win-rounds_=_7"
        ],
        description: "你具有顆善良的心，即時獲勝也只撿取所需並不貪求"
    },
    {
        id: '超級有錢',
        name: '超級有錢',
        criteria: [
            "materials_include-one_{千元大鈔,寶石塊,鑽石}"
        ],
        description: "如果缺錢的話，你的魔杖在當鋪似乎能值不少。"
    },
    {
        id: '魔法首富',
        name: '超級有錢',
        criteria: [
            "materials_include-all_{千元大鈔,寶石塊,鑽石}"
        ],
        description: "你的魔杖閃閃發光，令人難以直視，分不清是魔法的力量還是金錢的力量。"
    },
    {
        id: '戰鬥大師',
        name: '戰鬥大師',
        criteria: [
            "win-rounds_=_7"
        ],
        description: "少數的強者才能像你一樣屢戰屢勝"
    },
    {
        id: '一級玩家',
        name: '一級玩家',
        criteria: [
            "materials_include-all_{毛毛蟲,蟑螂觸鬚,狼毫,鴉羽}"
        ],
        description: "你具備極大的潛力，多多練習朝著戰鬥大師前進"
    },
    {
        id: '生物學者',
        name: '生物學者',
        criteria: [
            "materials_include-all_{毛毛蟲,蟑螂觸鬚,鴉羽,狼毫}"
        ],
        description: "你致力於收集珍稀的生物，這使你的魔杖栩栩如生。等等..它剛剛是不是動了？"
    },
    {
        id: '奇幻生物學者',
        name: '奇幻生物學者',
        criteria: [
            "materials_include-all_{寄生之眼,淚之珍珠,斷尾}"
        ],
        description: "你致力於收集珍稀的生物，這使你的魔杖栩栩如生。等等..它剛剛是不是動了？"
    },
    {
        id: '貓咪好朋友',
        name: '貓咪好朋友',
        criteria: [
            "materials_include-one_{貓頭餅乾}"
        ],
        description: "你的魔杖上黏有「貓頭餅乾」"
    },
    {
        id: '魔法影印機',
        name: '魔法影印機',
        criteria: [
            "methods-[咒文加護]_>=_2"
        ],
        description: "一、二複印，你施展的咒文技法如火純青，猶如一台魔法影印機。"
    },
]