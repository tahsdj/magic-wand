
export const ACTIONS = [
    {
        id: '1',
        name: '削直',
        description: '選擇連續三格不轉彎的格子，材料的長度要延展到這三格中',
        actions: [{
            value: 2,
            operator: "+",
            target: 'attack'
        }]
    },
    {
        id: '2',
        name: '精煉',
        description: '將材料的剪影畫在中間的格子中',
        actions: [{
            value: 3,
            operator: "+",
            target: 'attack'
        }]
    },
    {
        id: '3',
        name: '咒文加護',
        description: '將材料名以重複文字方式繞圈，寫在上方格中',
        actions: [{
            value: 2,
            operator: "+",
            target: 'attack'
        }]
    },
    {
        id: '4',
        name: '熔接',
        description: '將材料焊接在右方三格之一，需與法仗串聯',
        actions: [{
            value: 1.5,
            operator: "*",
            target: 'attack'
        }]
    },
    {
        id: '5',
        name: '加冕',
        description: '把非生物屬性的素材畫在目前格子上有生物屬性的頭上',
        actions: [{
            value: 2,
            operator: "+",
            target: 'attack'
        }]
    },
    {
        id: '6',
        name: '抱佛腳',
        description: '在15秒內將素材畫在任一格內',
        actions: [{
            value: 1,
            operator: "+",
            target: 'attack'
        }]
    },
    {
        id: '7',
        name: '退火',
        description: '把整張紙揉皺後，將材料放在最皺的一格中',
        actions: [{
            value: 0,
            operator: "+",
            target: 'attack'
        }]
    },
    {
        id: '8',
        name: '鑲嵌',
        description: '把材料嵌入法杖最粗的那一格',
        actions: [{
            value: 2,
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
        materials: [
            {
                name: '寶石粉',
                value: 0,
                criteria: ["attack_>=_0"]
            },
            {
                name: '寶石塊',
                value: 2,
                criteria: ["attack_<=_3"]
            }
        ]
    },
    {
        id: '2',
        name: '湖抖女神',
        story: "考驗挑戰戰者是否誠實",
        categroy: "湖抖女神",
        materials: [
            {
                name: '銀杏',
                value: 1,
                criteria: ["attack_>=_0"]
            },
            {
                name: '金珍菇',
                value: 3,
                criteria: ["attack_>=_15"]
            }
        ]
    },
    {
        id: '3',
        name: '格鬥貓仔',
        story: "跟他當朋友，他會把他的獵物送給你。如果比武贏了，他則會獻上他的零食。",
        categroy: "貓",
        materials: [
            {
                name: '毛毛蟲',
                value: 3,
                criteria: ["attack_>=_0"]
            },
            {
                name: '貓頭餅乾',
                value: 3,
                criteria: ["attack_>=_6"]
            }
        ]
    },
    {
        id: '4',
        name: '灰色烏鴉',
        story: "沒有那麼黑的烏鴉，飛過時留下羽毛，在對的時間偷窺看，能撿到巢裡的收藏",
        categroy: "烏鴉",
        materials: [
            {
                name: '鴉羽',
                value: 1,
                criteria: ["attack_>=_0"]
            },
            {
                name: '鑽石',
                value: 3,
                criteria: ["attack_=_5"]
            }
        ]
    },
    {
        id: '5',
        name: '魔眼狼',
        story: "寄生魔眼會寄生在五感中視力較不靈敏的生物上，特別喜歡寄生在狼的身上，因為他可以利用狼的嚎叫引出更多狼群。",
        categroy: "寄生生物",
        materials: [
            {
                name: '狼毫',
                value: 1,
                criteria: ["attack_>=_0"]
            },
            {
                name: '寄生之眼',
                value: 3,
                criteria: ["attack_>=_2"]
            }
        ]
    },
    {
        id: '6',
        name: 'ATM魔人',
        story: "",
        categroy: "魔人",
        materials: [
            {
                name: '50元銅板',
                value: 2,
                criteria: ["attack_>=_0"]
            },
            {
                name: '千元大鈔',
                value: 4,
                criteria: ["attack_>=_3"]
            }
        ]
    },
    {
        id: '7',
        name: '閃光壁虎',
        story: "",
        categroy: "壁虎",
        materials: [
            {
                name: '斷尾',
                value: 3,
                criteria: ["attack_>=_0"]
            },
            {
                name: '蟑螂觸鬚',
                value: 5,
                criteria: ["attack_>=_4"]
            }
        ]
    },
    {
        id: '8',
        name: '深海食人貝',
        story: "",
        categroy: "貝類",
        materials: [
            {
                name: '深海泡沫',
                value: 4,
                criteria: ["attack_>=_0"]
            },
            {
                name: '淚之珍珠',
                value: 6,
                criteria: ["attack_>=_5"]
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