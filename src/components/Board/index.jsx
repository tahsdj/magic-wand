import React, { useEffect, useState } from 'react'

import { MAX_ROUND, STAGE, MONSTERS, ACTIONS, TITLES } from '../../constants'

import GridTemplate1 from '../../images/template-grid.png'
import GridTemplate2 from '../../images/template-grid-wand.png'
import TitleBg from '../../images/title.png'
import PageBg from '../../images/page.svg'
import BagIcon from '../../images/bag.png'
import Logo from '../../images/logo.png'


import MessageLines from './MessageLines'
import Upload from './upload'
import ResultPage from './ResultPage'
import Book, { Page } from './Book'

const NUM_OF_MONSTERCARD_PER_ROUND = 1;
const NUM_OF_ACTIONCARD_PER_ROUND = 2;

const introPages = [
    {
        id: 1,
        bgColor: 'black',
        type: 'introduction',
        logo: '🧙',
        messages: [
            {
                text: '有一群製作魔杖的人',
                type: 'text',
                marginTop: 100
            },
            {
                text: '他們為了這個世界',
                type: 'text'
            },
            {
                text: '製造出能使用魔法的媒介',
                type: 'text'
            },
            {
                text: '他們是製作魔杖的「魔杖師」',
                type: 'text'
            },
            {
                button: '>下一頁',
                type: 'button',
                action: 'next_page'
            }
        ]
    },
    {
        id: 2,
        type: 'introduction',
        logo: '📖🗺',
        bgColor: 'black',
        messages: [
            {
                text: '你來到這間魔杖製作坊',
                type: 'text',
                marginTop: 100
            },
            {
                text: '桌上散亂著前屋主遺留下的草圖和一本攤開的古老書籍',
                type: 'text'
            },
            {
                text: '翻開的那頁上寫著...',
                type: 'text'
            },
            {
                button: '>下一頁',
                type: 'button',
                action: 'next_page'
            }
        ]
    },
    {
        id: 3,
        type: 'introduction',
        logo: '📖🗺',
        bgColor: 'black',
        messages: [
            {
                text: '「製作一根好魔杖，好的素材和精湛的手藝不可或缺。」',
                type: 'text',
                marginTop: 50,
                textAlign: 'left'
            },
            {
                text: '「從魔物身上取得素材，但一隻魔物只能取得一種材料。」',
                type: 'text',
                textAlign: 'left'
            },
            {
                text: '「謹慎選擇一種製作方式，將材料融入魔杖中。」',
                type: 'text',
                textAlign: 'left'
            },
            {
                text: '「經過七道工法後，你的魔杖將面臨考驗。」',
                type: 'text',
                textAlign: 'left'
            },
            {
                button: '>下一頁',
                type: 'button',
                action: 'next_page'
            }
        ]
    },
    {
        id: 4,
        type: 'introduction',
        logo: '',
        bgColor: '#DAC9A6',
        messages: [
            {
                text: '開始設計魔杖',
                type: 'title',
                placement: 'left'
            },
            {
                text: '第一堂課:準備魔杖設計圖紙',
                type: 'text',
                placement: 'left'
            },
            {
                text: '拿一張空白的方形紙，折出九宮格的格線後攤平',
                type: 'text',
                marginTop: 50
            },
            {
                image: GridTemplate1,
                type: 'image'
            },
            {
                button: '>完成準備，下個步驟',
                type: 'button',
                action: 'next_page'
            }
        ]
    },
    {
        id: 5,
        type: 'introduction',
        logo: '',
        bgColor: '#DAC9A6',
        messages: [
            {
                text: '開始設計魔杖',
                type: 'title',
                placement: 'left'
            },
            {
                text: '第二堂課:繪製魔杖雛型',
                type: 'text',
                placement: 'left'
            },
            {
                text: '將魔杖雛形繪製於空白紙上',
                type: 'text',
                marginTop: 60
            },
            {
                image: GridTemplate2,
                type: 'image'
            },
            {
                button: '>完成準備，下個步驟',
                type: 'button',
                action: 'next_page'
            }
        ]
    },
    {
        id: 6,
        type: 'introduction',
        logo: '',
        bgColor: '#DAC9A6',
        messages: [
            {
                text: '開始設計魔杖',
                type: 'title',
                placement: 'left'
            },
            {
                text: '第三堂課:學習加工',
                type: 'text',
                placement: 'left'
            },
            {
                text: '你必須從生物身上取得材料，並以特定的製作方法加工到魔杖上\n每一次加工會改變魔杖形狀和素質',
                type: 'text'
            },
            {
                items: [
                    {
                        title: '材料',
                        bg: 'white'
                    },
                    {
                        title: '製作方法',
                        bg: '#81C7D4'
                    }
                ],
                type: 'list'
            },
            {
                text: '尋找材料時，你可憐的小包包只夠帶回一樣材料加工',
                type: 'text'
            },
            {
                text: '從你感應到的製作方式中選擇一種,將材料加工到魔杖上',
                type: 'text'
            },
            {
                button: '>開始加工魔杖',
                type: 'button',
                action: 'next_page'
            }
        ]
    }
]

const templates = {

    'round_0': {
        type: 'monster_intro',
        logo: '',
        bgColor: 'black',
        messages: [
        ]
    },
    'round_1': {
        type: 'making',
        logo: '',
        bgColor: 'black',
        messages: [
            {
                text: '開始設計魔杖',
                type: 'title',
                placement: 'left'
            },
            {
                text: '七道工法中的第{{round}}道工法',
                type: 'text',
                placement: 'left'
            },
            {
                text: '你遇到了 {{monster_name}}，',
                type: 'text',
                placement: 'left'
            },
            {
                text: '如果你悄悄接近，可以獲得 {{material_1}}',
                type: 'text',
                placement: 'left'
            },
            {
                text: '或著成功揮動魔杖，可以獲得 {{material_2}}',
                type: 'text',
                placement: 'left'
            },
            {
                title: '你選擇:',
                type: 'selection',
                items: []
            },
            {
                button: (
                    <div className="flex flex-row items-center underline">
                        {">開始行動"}
                    </div>
                ),
                type: 'button',
                action: 'next_page'
            }
        ]
    },
    'round_2': {
        type: 'making',
        logo: '',
        bgColor: '#DAC9A6',
        messages: [
            {
                text: '開始設計魔杖',
                type: 'title',
                placement: 'left'
            },
            {
                text: '七道工法中的第 {{round}} 道工法',
                type: 'text',
                placement: 'left'
            },
            {
                text: '你順利打贏，並獲得了獎勵',
                type: 'text',
                placement: 'left'
            },
            {
                text: '你帶著 {{selected_material}} 回到製作坊',
                type: 'text',
                placement: 'left'
            },
            {
                text: '突然靈光乍現想到以下製作方式',
                type: 'text',
                placement: 'left'
            },
            {
                title: '你選擇:(請決定要用哪一種製作方式)',
                type: 'selection',
                items: []
            },
            {
                button: '>確定用這種製作方式，開始加工',
                type: 'button',
                action: 'next_page'
            }
        ]
    },
    'round_3': {
        type: 'making',
        logo: '',
        bgColor: '#DAC9A6',
        messages: [
            {
                text: '開始設計魔杖',
                type: 'title',
                placement: 'left'
            },
            {
                text: '七道工法中的第 {{round}} 道工法',
                type: 'text',
                placement: 'left'
            },
            {
                text: '(請依指示開始在紙上繪製魔杖)',
                type: 'text',
                placement: 'left'
            },
            {
                title: '你選擇:(請決定要用哪一種製作方式)',
                type: 'list',
                items: [
                    {
                        image: "{{selected_material_image}}",
                        bg: '#BDC0BA'
                    },
                    {
                        text: "{{selected_method_description}}",
                        image: "{{selected_action_image}}",
                        bg: '#81C7D4'
                    }
                ],
            },
            {
                text: '你將 {{material}} 以 {{method}} 加工到魔杖上',
                type: 'text'
            },
            {
                text: '魔杖發生了變化',
                type: 'text'
            },
            {
                text: '魔杖的基礎攻擊力增加了 {{attack_increment}}',
                type: 'text'
            },
            {
                button: '>加工完成,尋找下一個材料',
                type: 'button',
                action: 'next_page'
            }
        ]
    }
}


const finalPages = [
    {
        id: 'final-1',
        bgColor: 'black',
        type: 'introduction',
        mode: 'final',
        next: '>將魔杖交給委員會'
    },
    {
        id: 'final-2',
        bgColor: 'black',
        type: 'introduction',
        mode: 'final',
        next: '>打開評等結果'
    },
    {
        id: 'final-3',
        bgColor: '#006284',
        type: 'introduction',
        mode: 'final',
        title: '你的魔杖評等結果',
        messages: [
            {
                component: (
                    <div className="border border-solid border-white text-[32px] text-white rounded-[28px] p-1 px-2 mb-4">
                        你的魔杖評等結果
                    </div>
                ),
                type: 'component'
            },
            {
                text: '你完成了魔杖!',
                type: 'text'
            },
            {
                text: '你的魔杖使用了{{num_methods}}種工法，使用了{{num_materials}}種材料，總有{{total_attack}}點攻擊力。',
                type: 'text'
            },
            {
                text: '根據精密的評等過程，恭喜你獲得以下稱號',
                type: 'text'
            },
            {
                type: 'titles',
                list: [ 
                ]
            },
            {
                button: '>離開魔杖評等委員會，前往街上',
                type: 'button',
                action: 'next_page'
            }
        ]
    },
]

const stories = [
    {
        id: 'story-1',
        type: 'story',
        bgColor: 'black',
        messages: [
            // {
            //     text: '',
            //     type: 'text',
            //     placement: 'left',
            // },
            {
                text: '你收起評等結果走出委員會的大門，\n\n因為忙著製作魔杖而饑腸轆轆的你\n被委員會旁的便當店吸引住目光\n\n在踏進便當店前，\n突然想起魔杖師間廣傳的流言：\n\n「人們似乎根據杖師們的魔杖而改變對你的態度。」\n\n你決定帶著剛做好的魔杖驗證一下這個流言...',
                type: 'text',
                placement: 'right',
                marginTop: 20
            },
            {
                button: '>前往便當店',
                type: 'button',
                action: 'next_page',
                placement: 'right',
            }
        ]
    },
    {
        id: 'story-2',
        type: 'story',
        bgColor: 'black',
        messages: [
            {
                text: '你走進便當店，\n看完外單決定點餐後，\n走向便當店阿姨。\n\n阿姨看著你的魔杖說：\n',
                type: 'text',
                placement: 'left',
                marginTop: 100
            },
            {
                type: 'text',
                conditions: [
                    {
                        text: '唉唷! 同學你這把法杖，怎麼都金光??\n來給我瞧瞧... 哇～夭壽喔！來阿姨請你吃我們店內最豪華的便當。不要客氣！',
                        criteria: [
                            "materials_include-one_{千元大鈔,鑽石,淚之珍珠}",
                        ]
                    },
                    {
                        text: '同學，最近物價上漲，店租也漲，你用法杖黏著50元...也不是說不行啦...但是你還有錢吃飯嗎?\n我們店裡不能只買白飯喔!',
                        criteria: [
                            "materials_include-one_{50元銅板}",
                        ]
                    },
                    {
                        text: '夭壽喔，這是什麼？你真thái-ko! 這虼蚻ka-tsua̍h 呢? 這你也敢拿來做法杖？真的是... 這便當給你，快閃閃去！',
                        criteria: [
                            "materials_include-one_{蟑螂觸鬚}",
                        ]
                    },
                    {
                        text: '同學，要好好吃才能當個偉大的魔法師喔！',
                        criteria: [
                        ]
                    }
                ],
                placement: 'left',
            },
            {
                button: '上一頁',
                type: 'button',
                action: 'prev_page',
                placement: 'left',
            },
            {
                button: '>離開便當店',
                type: 'button',
                action: 'next_page',
                placement: 'right',
            }
        ]
    },
    {
        id: 'story-3',
        type: 'story',
        bgColor: 'black',
        messages: [
            {
                text: '．．．不管怎樣還是得到便當了，\n雖然便當店阿姨怪怪的，\n但阿姨的便當很好吃，\n你很快就吃完了。\n\n你決定去找住在隔壁村的好友分享魔杖成果，\n卻發現口袋裡的錢在買完便當後所剩無幾，\n眼看再一分鐘就下午三點，\n銀行的鐵門正準備拉下，\n「等等！我要領錢！」\n你邊大喊邊跑進銀行',
                type: 'text',
                placement: 'left',
                marginTop: 30
            },
            {
                type: 'text',
                conditions: [
                    {
                        text: '快要下班的銀行行員大罵你把紙鈔弄髒，覺得怎麼可以把紙鈔用成這樣。旁邊一位剛辦完儲匯手續的客人走來安慰你，他說他欣賞你那充滿藝術感的設計，那位銀行行員並不瞭解你的魔杖是如此有價值（粉絲+1）。',
                        criteria: [
                            "materials_include-one_{千元大鈔}",
                            "methods_include-one_{退火}"
                        ]
                    },
                    {
                        text: '快要下班的銀行行員眼睛閃亮亮的，滿懷感謝的心，稱讚你是一個為錢錢用心的錢之勇者，最喜歡你這樣的顧客了。你滿頭問號的收下這份誇讚。',
                        criteria: [
                            "materials_include-one_{千元大鈔}",
                            "methods_not-include-one_{退火}"
                        ]
                    },
                    {
                        text: '銀行行員忙著手邊的工作，頭都來不及抬起來就說：「要辦理借貸了話，請去隔壁櫃台喔！」你去了借貸櫃台之後，發現前面有大排長龍的杖師正準備籌措開業基金。但你知道你還不打算開店，於是直接離開。',
                        criteria: [
                        ]
                    }
                ],
                marginTop: 30,
                placement: 'right',
            },
            {
                button: '上一頁',
                type: 'button',
                action: 'prev_page',
                placement: 'left',
            },
            {
                button: '>離開銀行',
                type: 'button',
                action: 'next_page',
                placement: 'right',
            }
        ]
    },
    {
        id: 'story-4',
        type: 'story',
        bgColor: 'black',
        messages: [
            {
                text: '從銀行離開後，眼看太陽快要下山，\n雖然聽說樹林裡有著危險的生物，\n但是你現在有著全新的強力法杖，\n抄點近路應該沒關係，你心想。\n\n才剛走進樹林五分鐘，\n突然有一片黑影掠過，\n你拿起魔杖壯膽，\n抬起頭\n',
                type: 'text',
                placement: 'left',
                marginTop: 30
            },
            {
                type: 'text',
                conditions: [
                    {
                        text: '有一隻烏鴉正眼紅的看著你的法杖，作勢要搶奪你法杖上的物品，法杖上的每個閃光，成為了烏鴉怒氣的催化劑，你與它展開了一番纏鬥',
                        criteria: [
                                (userInfo) => {
                                    if (userInfo.history.filter(data => data.type === "material").some(m => ["鑽石","淚之珍珠", "寶石塊", "寶石粉", "50元銅板"].includes(m.name)).length > 0) {
                                        return userInfo.attack < 35*1.1
                                    }
                                    return userInfo.attack < 35
                                }
                        ]
                    },
                    {
                        text: '發現有一直烏鴉，悵然地看著你的法杖。烏鴉意識到自己有可能成為收集品的瞬間，心中頓時充滿著狂喜與恐懼，複雜的情緒使他落下了所有的羽毛，急速老化而死。',
                        criteria: [
                            "materials_include-one_{鑽石,淚之珍珠,寶石塊,寶石粉,50元銅板}",
                            "attack_>=_35",
                            "materials_include-one_{鴉羽}"
                        ]
                    },
                    {
                        text: '但你沒有看到任何東西，但你總感覺有股視線在盯著你 -- 牠暫時還不想奪取，但牠會一直跟著你，等待你毫無防備的時候。',
                        criteria: [
                            (userInfo) => {
                                if (userInfo.history.filter(data => data.type === "material").some(m => ["鑽石","淚之珍珠", "寶石塊", "寶石粉", "50元銅板"].includes(m.name)).length > 0) {
                                    return userInfo.attack >= 35*1.1
                                }
                                return userInfo.attack >= 35
                            }
                        ]
                    },
                    {
                        text: '你發現了一隻烏鴉，你隱約覺得牠好像在訕笑。你的魔杖對於這個偏執狂而言毫無吸引力，牠開始發出「鴉、鴉、鴉」的叫聲，並向你展現出他的戰利品，爾後，便拍拍翅膀走鴉了。',
                        criteria: []
                    }
                ],
                placement: 'left',
            },
            {
                button: '上一頁',
                type: 'button',
                action: 'prev_page',
                placement: 'left',
            },
            {
                button: '>離開樹林',
                type: 'button',
                action: 'next_page',
                placement: 'right',
            }
        ]
    },
    {
        id: 'story-5',
        type: 'story',
        bgColor: 'black',
        messages: [
            {
                text: '你總算走出樹林，\n深深感受到欲速則不達。\n\n在前往朋友家的路上，\n一隻長相奇異且巨大的貓突然擋在你眼前，\n它的身後是一座村莊，\n眼看著它即將要破壞了村莊，\n於是你掏出法杖施法，\n結果',
                type: 'text',
                placement: 'left',
                marginTop: 30
            },
            {
                type: 'text',
                conditions: [
                    {
                        text: '魔貓直接倒在村落裡露出肚皮給你摸，但是村落因此全滅。',
                        criteria: [
                            "materials_include-one_{貓頭餅乾}",
                        ]
                    },
                    {
                        text: '魔貓摀住耳朵痛苦不堪，慢慢的縮小變成一隻平凡的小貓。你被村落的人們膜拜為勇者。',
                        criteria: [
                            "methods-[咒文加護]_>=_2"
                        ]
                    },
                    {
                        text: '魔貓發現你的戰利品比他還多，簡直是獵物殺手，他決定拜你為師，從此你有了一隻超巨大的夥伴了。',
                        criteria: [
                            "materials_include-one_{有毛毛蟲,蟑螂觸鬚,鴉羽,狼毫,斷尾}",
                        ]
                    },
                    {
                        text: '你你在魔貓的胃裡，以為得搭著帳篷度過餘生。但魔貓肚裡簡直是一座神奇的冒險之塔，你將開啟了全新的冒險篇章（本作未收錄）。',
                        criteria: [
                        ]
                    }
                ],
                placement: 'left',
            },
            {
                button: '上一頁',
                type: 'button',
                action: 'prev_page',
                placement: 'left',
            },
            {
                button: '>下一頁',
                type: 'button',
                action: 'next_page',
                placement: 'right',
            }
        ]
    },
    {
        id: 'story-6',
        type: 'story',
        bgColor: 'black',
        messages: [
            {
                text: '統籌 什麼什麼工作坊\n\n遊戲設計\n\n劇本、角色設計\n\n介面設計\n程式設計\n美術設計　廠\n平衡測試　\n感謝名單\n',
                type: 'text',
                placement: 'left',
                marginTop: 50,
                textAlign: 'left'
            },
            {
                text: '測試員的魔杖們',
                marginTop: 50,
                type: 'text',
                placement: 'right',
            },
            {
                button: '上一頁',
                type: 'button',
                action: 'prev_page',
                placement: 'left',
            },
            {
                button: '>闔上書本',
                type: 'button',
                action: 'next_page',
                placement: 'right',
            }
        ]
    },
    {
        id: 'story-7',
        type: 'end',
        bgColor: 'black',
        messages: [
            {
                image: Logo,
                type: 'image',
                placement: 'left',
                marginTop: 335
            },
            {
                text: '> 製作新的魔杖 <',
                type: 'text',
                placement: 'right',
                action: 'reset'
            },
            {
                button: '上一頁',
                type: 'button',
                action: 'prev_page',
                placement: 'left',
            }
        ]
    }
]

const streetPages = [
    {
        id: 'street-1',
        bgColor: '#A8D8B9',
        type: 'introduction',
        logo: '',
        messages: [
            {
                text: '你帶著魔杖回到街上，要去哪裡呢？',
                type: 'text'
            },
            {
                type: 'places',
                items: [
                    {
                        name: '樹林',
                        icon: '🌳',
                        owner: '忌妒的收集狂烏鴉',
                        ownerImage: '',
                        results: [
                            {
                                description: '烏鴉陷入狂怒瘋狂，把你法杖上所有亮晶晶的部位叼走了',
                                criteria: [
                                        (userInfo) => {
                                            if (userInfo.history.filter(data => data.type === "material").some(m => ["鑽石","淚之珍珠", "寶石塊", "寶石粉", "50元銅板"].includes(m.name)).length > 0) {
                                                return userInfo.attack < 35*1.1
                                            }
                                            return userInfo.attack < 35
                                        }
                                ]
                            },
                            {
                                description: '烏鴉意識到自己有可能成為收集品的瞬間，心中頓時充滿著狂喜與恐懼，複雜的情緒使他落下了所有的羽毛，急速老化而死。',
                                criteria: [
                                    "materials_include-one_{鑽石,淚之珍珠,寶石塊,寶石粉,50元銅板}",
                                    "attack_>=_35",
                                    "materials_include-one_{鴉羽}"
                                ]
                            },
                            {
                                description: '烏鴉暫時還不想奪取你的物品，但他會一直跟著你，趁你毫無防備時下手。',
                                criteria: [
                                    (userInfo) => {
                                        if (userInfo.history.filter(data => data.type === "material").some(m => ["鑽石","淚之珍珠", "寶石塊", "寶石粉", "50元銅板"].includes(m.name)).length > 0) {
                                            return userInfo.attack >= 35*1.1
                                        }
                                        return userInfo.attack >= 35
                                    }
                                ]
                            },
                            {
                                description: '你的魔杖對於這個偏執狂而言毫無吸引力，牠開始發出「鴉、鴉、鴉」的叫聲，並向你展現出他的戰利品，爾後，便拍拍翅膀走鴉了。',
                                criteria: []
                            }
                        ]

                    },
                    {
                        name: '銀行',
                        icon: '🏣',
                        owner: '快要下班的銀行行員',
                        ownerImage: '',
                        results: [
                            {
                                description: '快要下班的銀行行員大罵你把紙鈔弄髒，他還得加班把紙鈔處理乾淨。旁邊一位剛辦完儲匯手續的客人走來安慰你，他說他欣賞你那充滿藝術感的設計，那位銀行行員並不瞭解你的魔杖是如此有價值。粉絲+1。',
                                criteria: [
                                    "materials_include-one_{千元大鈔}",
                                    "methods_include-one_{退火}"
                                ]
                            },
                            {
                                description: '快要下班的銀行行員眼睛閃亮亮的，滿懷感謝的心，稱讚你是一個為錢錢用心的錢之勇者，最喜歡你這樣的顧客了。你滿頭問號的收下這份誇讚。',
                                criteria: [
                                    "materials_include-one_{千元大鈔}",
                                    "methods_not-include-one_{退火}"
                                ]
                            },
                            {
                                description: '銀行行員忙著手邊的工作，頭都來不及抬起來就說：「要辦理借貸了話，請去隔壁櫃台喔！」你去了借貸櫃台之後，發現前面有大排長龍的杖師正準備籌措開業基金。但你知道你還不打算開店。',
                                criteria: [
                                ]
                            }
                        ],
                        placement: 'right'
                    },
                    {
                        name: '便當店',
                        icon: '🏪',
                        owner: '便當店阿姨',
                        ownerImage: '',
                        results: [
                            {
                                description: "使用貴重的材料勢必是把好魔杖 頒發便當給你",
                                criteria: [
                                    "materials_include-one_{千元大鈔,鑽石,淚之珍珠}",
                                ]
                            },
                            {
                                description: '同學，最近物價上漲，店租也漲，只有50塊實在是．．．',
                                criteria: [
                                    "materials_include-one_{50元銅板}",
                                ]
                            },
                            {
                                description: '我們可是很注重衛生的 麻煩重新檢視你的法杖',
                                criteria: [
                                    "materials_include-one_{蟑螂觸鬚}",
                                ]
                            },
                            {
                                description: '同學，要好好吃才能當個偉大的魔法師',
                                criteria: []
                            }
                        ]
                    },
                    {
                        name: '隔壁村',
                        icon: '🏞',
                        owner: '在隔壁村落大肆破壞的巨大魔貓',
                        ownerImage: '',
                        results: [
                            {
                                description: '魔貓直接倒在村落裡露出肚皮給你摸，但是村落因此全滅。',
                                criteria: [
                                    "materials_include-one_{貓頭餅乾}",
                                ]
                            },
                            {
                                description: '魔貓摀住耳朵痛苦不堪，慢慢的縮小變成一隻平凡的小貓。你被村落的人們膜拜為勇者。',
                                criteria: [
                                    "methods-[咒文加護]_>=_2"
                                ]
                            },
                            {
                                description: '魔貓發現你的戰利品比他還多，簡直是獵物殺手，他決定拜你為師，從此你有了一隻超巨大的夥伴了。',
                                criteria: [
                                    "materials_include-one_{有毛毛蟲,蟑螂觸鬚,鴉羽,狼毫,斷尾}",
                                ]
                            },
                            {
                                description: '你在魔貓的胃裡，以為得搭著帳篷度過餘生。但魔貓肚裡簡直是一座神奇的冒險之塔，你將開啟了全新的冒險篇章（本作未收錄）。',
                                criteria: [
                                ]
                            }
                        ]
                    },
                    {
                        name: '魔杖評等委員會',
                        icon: '🏛',
                        owner: '',
                    },
                    {
                        name: '魔杖製作坊',
                        icon: '🔮',
                        owner: '',
                    }
                ]
            }
        ]
    },
    {
        id: 'street-2',
        bgColor: '#A8D8B9',
        type: 'introduction',
        logo: '',
        messages: [
        ]
    }
]

const initPages = () => {
    const pages = Array(7).fill([0, 1, 2, 3]).reduce((acc, steps, index) => {
        return acc.concat(steps.map(step => {
            return {
                ...templates[`round_${step}`],
                round: `${index}_${step}`
            }
        }))
    }, [])
    return introPages.concat(pages).concat(finalPages).concat(stories)
}


const Board = () => {

    const [round, setRound] = useState(0)
    const [pageIndex, setPageIndex] = useState(0)
    const [pages, setPages] = useState(initPages())
    const [orderOfMonsters, setOrderOfMonsters] = useState(MONSTERS.sort(() => Math.random() - 0.5).map(m => m.id)) 
    const [currentMonsters, setCurrentMonsters] = useState([])
    const [orderOfActions, setOrderOfActions] = useState((()=>{
        const queue = []
        for (let i = 0; i <= 7 ; i++) {
            const sorted = ACTIONS.sort(() => Math.random() - 0.5).map(m => m.id)
            const [first, second, ...res] = sorted
            queue.push(first, second)
        }
       return queue
    })()) 
    const [currentActions, setCurrentActions] = useState([])
    const [stageIndex, setStageIndex] = useState(0)
    const [userInfo, setUserInfo] = useState({
        attack: 0,
        name: '',
        history: []
    })
    const [currentSelectedMaterial, setSelectedMaterial] = useState()
    const [currentSelectedAction, setSelectedAction] = useState()
    const [showNextButton, setShowNextButton] = useState(false)
    const [showConfirmModal, setShowConfirmModal] = useState(false)
    const [imageUrl, setImageUrl] = useState('')

    const reset = () => {
        setRound(0)
        setPageIndex(0)
        setPages(initPages())
        setOrderOfMonsters(MONSTERS.sort(() => Math.random() - 0.5).map(m => m.id))
        setOrderOfActions([...ACTIONS, ...ACTIONS].sort(() => Math.random() - 0.5).map(m => m.id))
        setUserInfo({
            attack: 0,
            name: '',
            history: []
        })
        setStageIndex(0)
        setSelectedMaterial(null)
        setSelectedAction(null)
        setShowNextButton(false)
        setImageUrl('')
    }

    const getMaterials = (currentRound, numPerRound) => {
        return Array(numPerRound).fill().map((_, index) => {
            const monsterId = orderOfMonsters[currentRound*numPerRound + index]
            return MONSTERS.find(m => m.id === monsterId) || {}
        })
    }

    const getActions = (currentRound, numPerRound) => {
        return Array(numPerRound).fill().map((_, index) => {
            const monsterId = orderOfActions[currentRound*numPerRound + index]
            
            return ACTIONS.find(m => m.id === monsterId) || {}
        })
    }

    const selectMaterial = (material) => {
        setSelectedMaterial(material)
    }

    const selectAction = (action) => {
        setSelectedAction(action)
    }

    const getCurrentRecord = () => {
        switch(STAGE[stageIndex]?.id) {
            case 'draw_material':
                return currentSelectedMaterial
            case 'draw_action':
                return currentSelectedAction
            default:
                return null
        }
    }

    const handleConfirm = () => {
        const record = getCurrentRecord()
        if (stageIndex + 1 < STAGE.length) {
            setStageIndex(index => index + 1)
        } else {
            setStageIndex(0)
            setSelectedMaterial(null)
            setSelectedAction(null)
            setRound(r => r + 1)
        }
        setUserInfo(info => ({
            ...info,
            history: [...info.history, record]
        }))
    }

    const updateUserAttack = () => {
        if (userInfo.history.length >= STAGE.length) {
            const historyLength = userInfo.history.length
            const [material, action] = [userInfo.history[historyLength-2], userInfo.history[historyLength-1]]
            const valueOfAttackThisRound = (()=>{
                return action.actions.reduce((total, effect) => {
                    switch(effect.operator) {
                        case "+":
                            return total + Number(effect.value)
                        case "-":
                            return total - Number(effect.value)
                        case "*":
                            return total * Number(effect.value)
                        case "/":
                            return total / Number(effect.value)
                        default:
                            return total
                    }
                }, Number(material?.value))
            })()
            const userAttack = userInfo.attack + valueOfAttackThisRound
            setUserInfo({
                ...userInfo,
                attack: userAttack
            })
        }
    }

    useEffect(() => {
        setCurrentMonsters(getMaterials(round, NUM_OF_MONSTERCARD_PER_ROUND))
        setCurrentActions(getActions(round, NUM_OF_ACTIONCARD_PER_ROUND))
        setStageIndex(0)
        updateUserAttack()
    }, [round])

    const canGetMaterialFromMonster = (m) => {
        return m.criteria.every(c => {
            const [target, operator, value] = c.split("_")
            switch(operator) {
                case "=":
                    return userInfo[target] === Number(value)
                case ">=":
                    return userInfo[target] >= Number(value)
                case "<=":
                    return userInfo[target] <= Number(value)
                case "<":
                    return userInfo[target] < Number(value)
                case ">":
                    return userInfo[target] > Number(value)
                default:
                    return false
            }
        })
    }

    const getResult = (results) => {
        return results.filter(({criteria}) => criteria.every(c => {
            if (typeof c === "function") return c(userInfo)
            const [target, operator, value] = c.split("_")
            const tagertValue = (() => {
                switch(target) {
                    case "methods-num": {
                        const methods = (()=>{
                            const dict = {}
                            return userInfo.history.filter(data => data.type === "action").reduce((prev, curr)=>{
                                if (dict[curr.id]) return prev
                                dict[curr.id] = true
                                return prev + 1
                            }, 0)
                        })()
                        return methods
                    }
                    case "winner-rewards": {
                        const count = (() => {
                            return userInfo.history.filter(data => {
                                return data.type === "material" && data.category === "reward"
                            }).length
                        })()
                        return count
                    }
                    case "methods": {
                        return userInfo.history.filter(data => data.type === "action").map(action => action.name)
                    }
                    case "materials": {
                        return userInfo.history.filter(data => data.type === "material").map(action => action.name)
                    }
                    case "free-rewards": {
                        const count = (() => {
                            return userInfo.history.filter(data => {
                                return data.type === "material" && data.category === "free"
                            }).length
                        })()
                        return count
                    }
                    case "win-rounds": {
                        const count = (() => {
                            return userInfo.history.filter(data => {
                                return data.type === "material" && data.win
                            }).length
                        })()
                        return count
                    }
                    case "methods-": {
                        const methodName = target.split('-')[1]
                        const count = (() => {
                            return userInfo.history.filter(data => {
                                return data.type === "action" && data.name === methodName
                            }).length
                        })()
                        return count
                    }
                    default:
                        return userInfo[target]
                }
            })()
            switch(operator) {
                case "=":
                    return tagertValue === Number(value)
                case ">=":
                    return tagertValue >= Number(value)
                case "<=":
                    return tagertValue <= Number(value)
                case "<":
                    return tagertValue < Number(value)
                case ">":
                    return tagertValue > Number(value)
                case "include-one": {
                    const values = value.replace("{", "").replace("}", "").split(",")
                    return values.some(val => tagertValue.includes(val))
                }
                case "include-all": {
                    const values = value.replace("{", "").replace("}", "").split(",")
                    return values.every(val => tagertValue.includes(val))
                }
                case "not-include-one": {
                    const values = value.replace("{", "").replace("}", "").split(",")
                    return !values.some(val => tagertValue.includes(val))
                }
                default:
                    return false
            }
        }))
    }

    const canGetTitle = (title) => {
        return title.criteria.every(c => {
            const [target, operator, value] = c.split("_")
            const tagertValue = (() => {
                switch(target) {
                    case "methods-num": {
                        const methods = (()=>{
                            const dict = {}
                            return userInfo.history.filter(data => data.type === "action").reduce((prev, curr)=>{
                                if (dict[curr.id]) return prev
                                dict[curr.id] = true
                                return prev + 1
                            }, 0)
                        })()
                        return methods
                    }
                    case "winner-rewards": {
                        const count = (() => {
                            return userInfo.history.filter(data => {
                                return data.type === "material" && data.category === "reward"
                            }).length
                        })()
                        return count
                    }
                    case "methods": {
                        return userInfo.history.filter(data => data.type === "action").map(action => action.name)
                    }
                    case "materials": {
                        return userInfo.history.filter(data => data.type === "material").map(action => action.name)
                    }
                    case "free-rewards": {
                        const count = (() => {
                            return userInfo.history.filter(data => {
                                return data.type === "material" && data.category === "free"
                            }).length
                        })()
                        return count
                    }
                    case "win-rounds": {
                        const count = (() => {
                            return userInfo.history.filter(data => {
                                return data.type === "material" && data.win
                            }).length
                        })()
                        return count
                    }
                    case "methods-": {
                        const methodName = target.split('-')[1]
                        const count = (() => {
                            return userInfo.history.filter(data => {
                                return data.type === "action" && data.name === methodName
                            }).length
                        })()
                        return count
                    }
                    default:
                        return userInfo[target]
                }
            })()
            switch(operator) {
                case "=":
                    return tagertValue === Number(value)
                case ">=":
                    return tagertValue >= Number(value)
                case "<=":
                    return tagertValue <= Number(value)
                case "<":
                    return tagertValue < Number(value)
                case ">":
                    return tagertValue > Number(value)
                case "include-one": {
                    const values = value.replace("{", "").replace("}", "").split(",")
                    return values.some(val => tagertValue.includes(val))
                }
                case "include-all": {
                    const values = value.replace("{", "").replace("}", "").split(",")
                    return values.every(val => tagertValue.includes(val))
                }
                default:
                    return false
            }
        })
    }

    const renderMessageContent = (message) => {
        const currentPage = pages[pageIndex]
        const monster = currentMonsters[0]
        switch(message.type) {
            case 'title': {
                return (
                    <div 
                        className="flex px-4 py-2 text-[20px] rounded-[20px] items-center justify-center mb-4 border-[2px] border-solid border-black"
                        style={{
                            borderColor: currentPage.bgColor === "black" || currentPage.bgColor === '#006284' ? "white" : "black",
                            color: currentPage.bgColor === "black" || currentPage.bgColor === '#006284' ? "white" : "black", 
                        }}
                    >
                        {message.text}
                    </div>
                )     
            }
            case 'text': {
                const materials = monster?.materials || []
                const valueOfAttackThisRound = (()=>{
                    if (!currentSelectedMaterial || !currentSelectedAction) return 0

                    return currentSelectedAction.actions.reduce((total, effect) => {
                        switch(effect.operator) {
                            case "+":
                                return total + Number(effect.value)
                            case "-":
                                return total - Number(effect.value)
                            case "*":
                                return total * Number(effect.value)
                            case "/":
                                return total / Number(effect.value)
                            default:
                                return total
                        }
                    }, Number(currentSelectedMaterial?.value))
                })()
                const conditionText = message.conditions ? getResult(message.conditions)?.[0]?.text || '': ''
                return (
                    <p 
                        className={`text-[18px] text-center max-w-[370px] whitespace-pre-line ${message.action ? "cursor-pointer" : ""}`}
                        style={{
                            color: currentPage.bgColor === "black" || currentPage.bgColor === '#006284' ? "white" : "black", lineHeight: 2,
                            marginTop: message.marginTop,
                            textAlign: message.textAlign
                        }}
                        onClick={()=>{
                            if (message.action) {
                                switch(message.action) {
                                    case 'reset':
                                        reset()
                                        break;
                                    default:
                                        break;
                                }
                            }
                        }}
                    >
                        {conditionText}
                        {(message?.text || '')
                            .replace('{{round}}', round + 1)
                            .replace('{{monster_name}}', monster?.name)
                            .replace('{{monster_description}}', monster?.story)
                            .replace('{{material_1}}', materials?.[0]?.name)
                            .replace('{{material_2}}', materials?.[1]?.name)
                            .replace('{{selected_material}}', currentSelectedMaterial?.name)
                            .replace('{{material}}', currentSelectedMaterial?.name)
                            .replace('{{method}}', currentSelectedAction?.name)
                            .replace('{{attack_increment}}', valueOfAttackThisRound)
                            .replace('{{num_methods}}', (()=>{
                                const dict = {}
                                return userInfo.history.filter(data => data.type === "action").reduce((prev, curr)=>{
                                    if (dict[curr.id]) return prev
                                    dict[curr.id] = true
                                    return prev + 1
                                }, 0)
                            })())
                            .replace('{{num_materials}}', (()=>{
                                const dict = {}
                                return userInfo.history.filter(data => data.type === "material").reduce((prev, curr)=>{
                                    if (dict[curr.name]) return prev
                                    dict[curr.name] = true
                                    return prev + 1
                                }, 0)
                            })())
                            .replace('{{total_attack}}', userInfo.attack)
                        }
                    </p>
                )
            }
            case 'button':
                return (
                    <div 
                        className={`cursor-pointer text-[16px] mt-auto ${message.placement === "left" ? "mr-auto" : "ml-auto"} underline`}
                        style={{
                            color: currentPage.bgColor === "black" || currentPage.bgColor === '#006284' ? "white" : "black",
                            cursor: (() => {
                                if (currentPage?.round?.split('_')[1] === "1" &&  !currentSelectedMaterial) return "not-allowed"
                                if (currentPage?.round?.split('_')[1] === "2" &&  !currentSelectedAction) return "not-allowed"
                                return "pointer"
                            })()
                        }}
                        onClick={()=>{
                            if (currentPage?.round?.split('_')[1] === "1" &&  !currentSelectedMaterial) return false
                            if (currentPage?.round?.split('_')[1] === "2" &&  !currentSelectedAction) return false
                            switch(message.action) {
                                case 'next_page': {
                                    if (currentPage.round && currentPage.round.split('_')[1] !== '2') handleConfirm() 
                                    setPageIndex(index => index + 1)
                                    break;
                                }
                                case 'prev_page': {
                                    setPageIndex(index => index - 1)
                                    break;
                                }
                                default: {
                                    const targetPageIndex = pages.findIndex(page => page.id === message.action)
                                    if (targetPageIndex >= 0) setPageIndex(targetPageIndex)
                                    break
                                }
                            }
                        }}
                    >
                        {message.button}
                    </div>
                )
            case 'list':
                return (
                    <div className="flex flex-row items-start gap-10 mt-5 mb-3">
                        {message.items.map(item => {
                            return (
                                <div className="flex flex-col items-center">
                                    <div className="group relative flex items-center p-5 justify-center w-[115px] h-[180px] rounded-[15px] border border-solid border-[#707070]" style={{backgroundColor: item.bg}}>
                                        {item.image && (() => {
                                            if (item.image === "{{selected_material_image}}") return <img className="w-[75px] h-[75px]" src={currentSelectedMaterial?.image} />
                                            if (item.image === "{{selected_action_image}}") return (
                                                <div className="opacity-0 group-hover:opacity-100 absolute rounded-[15px] top-0 left-0 w-full h-full flex items-center justify-center bg-[rgba(255,255,255,.8)]">
                                                    <img className="w-[75px] h-[75px]" src={currentSelectedAction.image}/>
                                                </div>
                                            )
                                            return (
                                                <span className="text-[75px]">{item.image}</span>
                                            )
                                        })()}
                                        {item.title &&(<span className="text-[18px]">{item.title}</span>)}
                                        {item.text && (
                                            <p className="text-[16px] text-center">
                                                {item.text.replace("{{selected_method_description}}", currentSelectedAction.description)}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                )
            case 'image':
                return (
                    <img 
                        className="mt-5 w-[200px]" src={message.image}
                        style={{
                            marginTop: message.marginTop,
                        }}
                    />
                )
            case 'selection': {
                const step = currentPage.round ?  currentPage.round.split('_')[1] : null
                switch(step) {
                    // select material
                    case '1': {
                        const materials = monster?.materials || []
                        const beatMonster = materials.length >= 1  ? canGetMaterialFromMonster(materials[1]) : false
                        return (
                            <>
                                <div 
                                    className="flex px-4 py-2 text-[20px] rounded-[20px] items-center justify-center mt-15 mb-4"
                                    style={{
                                        color: currentPage.bgColor === "black" || currentPage.bgColor === '#006284' ? "white" : "black", 
                                    }}
                                >
                                    {message.title}
                                </div>
                                <div className="flex flex-row items-start gap-10 mt-5 mb-3">
                                    {materials.map((m) => (
                                        <div 
                                            className={`group relative bg-white flex flex-col items-center justify-center w-[145px] h-[200px] rounded-[15px] border border-solid border-[#707070] cusror-pointer`}
                                            style={{
                                                border: currentSelectedMaterial?.name === m.name ? "3px solid #2fad88fa" : "3px solid transparent",
                                                cursor: canGetMaterialFromMonster(m) ? 'pointer' : 'not-allowed',
                                                backgroundColor: canGetMaterialFromMonster(m) ? 'white' : '#e0e0e0'
                                            }}
                                            onClick={()=>{
                                                if (canGetMaterialFromMonster(m)) selectMaterial({
                                                    ...m,
                                                    win: beatMonster
                                                })
                                            }}
                                        >
                                            <h3>{m.name}</h3>
                                            {m.image && <img className="w-[75px] h-[75px] mt-1 mb-2"  src={m.image} />}
                                            <p>{`攻擊＋ ${m.value}`}</p>
                                            {(m.tooltip && !canGetMaterialFromMonster(m)) && (
                                                <div className="opacity-0 group-hover:opacity-100 absolute text-sm rounded-[15px] top-0 left-0 w-full h-full flex px-1 items-center justify-center bg-[rgba(255,255,255,.8)]">
                                                    {m.tooltip}
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </>
                        )
                    }
                    case '2': {
                        return (
                            <>
                            <div 
                                className="flex px-4 py-2 text-[20px] rounded-[20px] items-center justify-center mt-15 mb-4"
                                style={{
                                    color: currentPage.bgColor === "black" || currentPage.bgColor === '#006284' ? "white" : "black", 
                                }}
                            >
                                {message.title}
                            </div>
                            <div className="flex flex-row items-start gap-10 mt-5 mb-3">
                                {currentActions.map(action => (
                                    <div 
                                        className={`group relative bg-white flex flex-col p-2 items-center w-[145px] h-[200px] rounded-[15px] border border-solid border-[#707070] cursor-pointer`}
                                        style={{
                                            border: currentSelectedAction?.name === action.name ? "3px solid #2fad88fa" : "3px solid rgb(218, 201, 166)",
                                        }}
                                        onClick={()=>{
                                            selectAction(action)
                                        }}
                                    >
                                        <h2 className="mb-2">{action.name}</h2>
                                        <p className="text-sm">{action.description}</p>
                                        <div className="flex flex-col items-start w-full">
                                            <h3>獲得效果:</h3>
                                            {action.actions.map(e => (
                                                <p className="text-sm">
                                                    {`選取素材攻擊力  ${e.operator} ${e.value}`}
                                                </p>
                                            ))}
                                        </div>
                                        <div className="opacity-0 group-hover:opacity-100 absolute rounded-[15px] top-0 left-0 w-full h-full flex items-center justify-center bg-[rgba(255,255,255,.8)]">
                                            {action.image && <img className="w-[75px] h-75px" src={action.image}/>}
                                        </div>
                                    </div>
                                ))}
                            </div>
                            </>
                        )
                    }
                    default:
                        return null
                }
            }
            case 'component':
                return message.component
            case 'places':
                return (
                    <div className="flex flex-row items-start w-[700px] gap-10 flex-wrap justify-center">
                        {message.items.map(item => (
                            <div 
                                className={`h-full bg-white flex flex-col p-5 items-center w-[145px] h-[200px] rounded-[15px] border border-solid border-[#707070] cursor-pointer`}
                                onClick={()=>{
                                    // selectAction(action)
                                    if (item.name === "魔杖評等委員會") {
                                        const targetPageIndex = pages.findIndex(page => page.id === "final-2")
                                        setPageIndex(targetPageIndex)
                                    } else if (item.name === "魔杖製作坊") {
                                        setShowConfirmModal(true)
                                    } else {
                                        const targetPageIndex = pages.findIndex(page => page.id === "street-2")
                                        setPages(ps => {
                                            return ps.map((p, index) => {
                                                if (index === targetPageIndex) {
                                                    const result = getResult(item.results)?.[0]
                                                    return {
                                                        ...p,
                                                        messages: [
                                                            {
                                                                text: `你來到 ${item.name}，遇到 ${item.owner}`,
                                                                type: 'text'
                                                            },
                                                            {
                                                                text: result?.description || "",
                                                                type: 'text'
                                                            },
                                                            {
                                                                button: '>回到街上',
                                                                action: 'street-1',
                                                                type: 'button'
                                                            }
                                                        ]
                                                    }
                                                }
                                                return p
                                            })
                                        })
                                        setPageIndex(targetPageIndex)
                                    }
                                }}
                            >
                                {<span className="mt-5 mb-1 text-[60px]">{item.icon}</span>}
                                <span className="text-[24px] mt-auto text-center">{item.name}</span>
                            </div>
                        ))}
                    </div>
                )
            case 'titles': {
                const fitTitles = TITLES.filter(t => {
                    return canGetTitle(t)
                })
                return (
                    <div className="flex flex-row items-center justify-center mt-5 max-w-[700px] gap-10 flex-wrap">
                        {fitTitles.map(title => (
                            <div 
                                className="flex py-4 px-2 relative items-center justify-center w-[200px]"
                                // style={{
                                //     backgroundImage: `url(${TitleBg})`,
                                //     backgroundRepeat: 'no-repeat',
                                //     backgroundAttachment: 'fixed',
                                //     backgroundPosition: 'center',
                                //     backgroundSize: 'contain'
                                // }}
                            >
                                <img className="absolute w-full left-1/2 top-1/2 transform -translate-y-1/2 -translate-x-1/2" src={TitleBg}/>
                                <span className="text-white text-[24px]">{title.name}</span>
                            </div>
                        ))}
                    </div>
                )
            }
            default:
                return null
        }
    }

    const renderPage = () => {
        const currentPage = pages[pageIndex]
        const monster = currentMonsters[0]
        if (currentPage.type === 'monster_intro') {
            const messages = monster.description.split('\n')
            return (
                <div 
                    className={`flex flex-col items-center w-full min-h-screen pt-[80px]`}
                    style={{
                        backgroundColor: currentPage.bgColor
                    }}
                >
                    <Book>
                        <Page>
                            <div className="flex flex-col w-[350px] items-center mr-5">
                                <span className="text-white text-[24px] text-left w-full mb-1">你遇到了...</span>
                                <img key={monster.name} className="w-[350px] h-[350px]" src={monster.image}/>
                                <h2 className="text-white text-[32px] mt-4">{monster.name}</h2>
                            </div>
                        </Page>
                        <Page>
                            <div 
                                className="flex mt-5 px-4 py-2 text-[20px] rounded-[20px] items-center justify-center mb-4 border-[2px] border-solid border-black"
                                style={{
                                    borderColor: currentPage.bgColor === "black" || currentPage.bgColor === '#006284' ? "white" : "black",
                                    color: currentPage.bgColor === "black" || currentPage.bgColor === '#006284' ? "white" : "black", 
                                }}
                            >
                                開始加工魔杖
                            </div>
                            <p className={`text-[24px] text-center text-white mb-5`}>
                                {`七道工法中的第 ${round + 1} 道工法`}
                            </p>
                            <div className="flex flex-row items-start">
                                <div className="flex flex-col w-[370px] mt-5 min-h-[380px]">
                                    <MessageLines 
                                        description={monster.description}
                                        messages={messages} 
                                        onEnd={() => setShowNextButton(true)}
                                    />

                                    {showNextButton && (
                                        <div
                                            className="cursor-pointer text-[16px] mt-auto text-white ml-auto"
                                            onClick={()=>{
                                                setPageIndex(index => index + 1)
                                                setShowNextButton(false)
                                            }}
                                        >
                                            {"> NEXT <"}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </Page>
                    </Book>
                </div>
            )
        }

        if (currentPage.mode === "final") {
            return (
                <div 
                    className={`flex flex-col items-center w-full min-h-screen pt-[80px]`}
                    style={{
                        backgroundColor: currentPage.bgColor
                    }}
                >
                    <ResultPage 
                        currentPage={currentPage} 
                        goto={setPageIndex} 
                        onChangeImageUrl={url => setImageUrl(url)}
                        uploadedImageUrl={imageUrl}
                        fitTitles={TITLES.filter(t => canGetTitle(t))}
                        personalResult={{
                            attack: userInfo.attack,
                            totalMethods: (()=>{
                                const dict = {}
                                return userInfo.history.filter(data => data.type === "action").reduce((prev, curr)=>{
                                    if (dict[curr.id]) return prev
                                    dict[curr.id] = true
                                    return prev + 1
                                }, 0)
                            })(),
                            totalMaterials: (()=>{
                                const dict = {}
                                return userInfo.history.filter(data => data.type === "material").reduce((prev, curr)=>{
                                    if (dict[curr.name]) return prev
                                    dict[curr.name] = true
                                    return prev + 1
                                }, 0)
                            })()
                        }}
                    />
                </div>
            )
        }
        return (
            <div 
                className={`flex flex-col items-center w-full min-h-screen`}
                style={{
                    backgroundColor: currentPage.bgColor
                }}
            >
                <Book 
                    isStart={pageIndex === 0}
                    isEnd={pageIndex === pages.length - 1}
                >
                    {currentPage.type === "story" && (
                        <div 
                            className="absolute left-15 top-13 text-white text-base cursor-pointer"
                            onClick={()=>{
                                const index = pages.findIndex(p => p.id === "final-3")
                                setPageIndex(index)
                            }}
                        >
                            查看評等結果
                        </div>
                    )}
                {/* <div className={`flex flex-col items-center h-screen pb-[50px] px-[20px] max-w-[800px]`} style={{paddingTop: currentPage.logo ? 130 : 80}}> */}
                    <Page>
                        {currentPage.messages.filter(m => m.placement === "left").map(message => {
                            return renderMessageContent(message)
                        })}
                    </Page>
                    <Page>
                        <>
                        {currentPage.messages.filter(m => m.placement !== "left").map(message => {  
                            return renderMessageContent(message)
                        })}
                        </>
                    </Page>
                </Book>
            </div>
        )


    }
    return (
        <>
            {renderPage()}
            {/* <Book></Book> */}
            {showConfirmModal && (
                <div className="fixed top-0 left-0 w-screen h-screen bg-[rgba(0,0,0,0.6)] z-99">
                    <div className="flex flex-col items-center py-5 px-10 w-[350px] h-[200px] rounded-[10px] bg-white absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                        <p className="text-[24px] p-5 text-center">
                            <span className="text-red-500 leading-normal">! 注意 ！</span><br/>
                            即將離開製作新魔杖
                        </p>
                        <div className="flex flex-row w-full items-center justify-between mt-auto">
                            <div 
                                className="px-5 py-2 text-sm rounded-[5px] bg-[rgba(0,0,0,.3)] cursor-pointer"
                                onClick={()=>setShowConfirmModal(false)}
                            >
                                取消
                            </div>
                            <div 
                                className="px-5 py-2 text-sm rounded-[5px] bg-black text-white cursor-pointer"
                                onClick={()=>{
                                    reset()
                                    setShowConfirmModal(false)
                                }}
                            >
                                確認
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}


export default Board