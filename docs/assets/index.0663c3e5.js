var e=Object.defineProperty,t=Object.defineProperties,a=Object.getOwnPropertyDescriptors,r=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,o=(t,a,r)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[a]=r,s=(e,t)=>{for(var a in t||(t={}))i.call(t,a)&&o(e,a,t[a]);if(r)for(var a of r(t))n.call(t,a)&&o(e,a,t[a]);return e},l=(e,r)=>t(e,a(r));import{r as c,R as m,a as p}from"./vendor.35e0f08f.js";const u=[{id:"1",name:"削直",type:"action",description:"選擇連續三格不轉彎的格子，材料的長度要延展到這三格中",image:"https://i.imgur.com/IeaWm7b.png",actions:[{value:2,operator:"+",target:"attack"}]},{id:"2",name:"精煉",type:"action",description:"將材料的剪影畫在中間的格子中",image:"https://i.imgur.com/LZdajIp.png",actions:[{value:3,operator:"+",target:"attack"}]},{id:"3",name:"咒文加護",type:"action",image:"https://i.imgur.com/JYyosER.png",description:"將材料名以重複文字方式繞圈，寫在上方格中",actions:[{value:2,operator:"+",target:"attack"}]},{id:"4",name:"熔接",type:"action",image:"https://i.imgur.com/Zs2PbMr.png",description:"將材料焊接在右方三格之一，需與法仗串聯",actions:[{value:1.5,operator:"*",target:"attack"}]},{id:"5",name:"加冕",type:"action",image:"https://i.imgur.com/Zs2PbMr.png",description:"把非生物屬性的素材畫在目前格子上有\b生物屬性的頭上",actions:[{value:2,operator:"+",target:"attack"}]},{id:"6",name:"抱佛腳",type:"action",image:"https://i.imgur.com/bVXyKNq.png",description:"在15秒內將素材畫在任一格內",actions:[{value:1,operator:"+",target:"attack"}]},{id:"7",name:"退火",type:"action",image:" https://i.imgur.com/YVPNyZU.png",description:"把整張紙揉皺後，將材料放在最皺的一格中",actions:[{value:0,operator:"+",target:"attack"}]},{id:"8",name:"鑲嵌",type:"action",image:"https://i.imgur.com/WltOkfW.png",description:"把材料嵌入法杖最粗的那一格",actions:[{value:2,operator:"+",target:"attack"}]}],d=[{id:"1",name:"結晶巨魔",story:"很脆弱的生物，打太大力會剩粉",categroy:"結晶魔",type:"monster",image:"https://i.imgur.com/Kqbw4jp.png",description:"你來到一座隱蔽的山林，這裡據說有著珍貴的材料。\n你在數百公里外就看到了牠 -- 如一座山一般大的生物，\n牠似乎在沉睡著，四周的山林隨著他的哈欠吹出的落山風而變形，禮讓出了一個只屬於牠的溫柔睡床。\n隨後你注意到了牠身上漂浮著的大塊結晶，那就是散發著魔力的純化材料。\n你一心想著要得到他們，於是你往前邁進，但隨著你越來越靠近，牠發出的轟鳴使你腳邊的土地隨之震動，震動幅度越來越大。\n你開始猶豫：是否不該擾人清夢?",materials:[{name:"寶石粉",value:0,criteria:["attack_>=_0"],type:"material",category:"free",image:"https://i.imgur.com/9Md3UyE.png"},{name:"寶石塊",value:2,criteria:["attack_<=_3"],type:"material",category:"reward",image:"https://i.imgur.com/bsmEgMY.png"}]},{id:"2",name:"湖抖女神",story:"考驗挑戰戰者是否誠實",image:"https://i.imgur.com/tk1BZRY.png",description:"穿梭在重重的森林中，忽見一面清澈的湖。\n湖面中浮出一位美麗的女子，\b看起來就是傳說中的湖抖女神。\n她會考驗每個的挑戰者的誠信，任何的謊話都逃不過他的魔掌。\n用誘惑的言語在你心中掀起每個人心中貪婪的漣漪。",categroy:"湖抖女神",type:"monster",materials:[{name:"銀杏",value:1,criteria:["attack_>=_0"],type:"material",category:"free",image:"https://i.imgur.com/GfEctPz.png"},{name:"金珍菇",value:3,criteria:["attack_>=_15"],type:"material",category:"reward",image:"https://i.imgur.com/F4txJEA.png"}]},{id:"3",name:"格鬥貓仔",type:"monster",story:"跟他當朋友，他會把他的獵物送給你。如果比武贏了，他則會獻上他的零食。",image:"https://i.imgur.com/afqxjJV.png",description:"你遇見了一隻橘色的貓。\n他臉上有疤痕，看起來凶狠無比，他擁有強健的體魄，以及蓄勢待發的眼神。\n聽說這城市中為格鬥而生的貓，更重視相遇的緣分，而你正考慮你要跟他來場世紀對決或是輕輕交手搏感情。",categroy:"貓",materials:[{name:"毛毛蟲",value:3,criteria:["attack_>=_0"],type:"material",category:"free",image:"https://i.imgur.com/9EOgPjS.png"},{name:"貓頭餅乾",value:3,criteria:["attack_>=_6"],type:"material",category:"reward",image:"https://i.imgur.com/YwnDGBr.png"}]},{id:"4",name:"灰色烏鴉",type:"monster",story:"沒有那麼黑的烏鴉，飛過時留下羽毛，在對的時間偷窺看，能撿到巢裡的收藏",image:"https://i.imgur.com/eveEFm1.png",description:"你走在森林小徑中，一只黑色羽毛翩然落下，\n你抬起頭，看見烏鴉掠過上空。\n光線穿過牠那沒那麼黑的羽毛，使牠爪上的寶石閃著熠熠光芒。\n若在對的時間窺看，或許能撿到收藏家巢裡的寶物。",categroy:"烏鴉",materials:[{name:"鴉羽",value:1,criteria:["attack_>=_0"],type:"material",category:"free",image:"https://i.imgur.com/BqAUqdw.png"},{name:"鑽石",value:3,criteria:["attack_=_5"],type:"material",category:"reward",image:"https://i.imgur.com/E5zAXZa.png"}]},{id:"5",name:"魔眼狼",type:"monster",story:"寄生魔眼會寄生在五感中視力較不靈敏的生物上，特別喜歡寄生在狼的身上，因為他可以利用狼的嚎叫引出更多狼群。",image:"https://i.imgur.com/wPTcGAP.png",description:"這裡有著只有在滿月的夜晚才能預見的生物，嚴格來說，是寄生生物，\n你會先聽見牠為了寄生更多同類而發出的嚎叫，\n接著，牠便會在皎潔的月光下現身。\n牠會利用牠的宿主全身上下能夠發出體味的腺體，讓被吸引而來的同類發狂似的撕咬牠，使得牠能夠寄生在更多的......\n噓！就在那裏，你只有一瞬間的機會，你必須要俐落的，趁著狼群張牙舞爪前，先下手為強。",categroy:"寄生生物",materials:[{name:"狼毫",value:1,criteria:["attack_>=_0"],type:"material",category:"free",image:"https://i.imgur.com/Y8zuTHI.png"},{name:"寄生之眼",value:3,criteria:["attack_>=_2"],type:"material",category:"reward",image:"https://i.imgur.com/VSrW6xZ.png"}]},{id:"6",name:"ATM魔人",story:"",categroy:"魔人",image:"https://i.imgur.com/6OFbjC6.png",description:"你在某個夜晚來到了某個城鎮，長途跋涉耗光了全身的精力，\n只想好好吃個東西填飽肚子，然而發現身上卻沒剩半毛錢。\n你剛看到巷子旁的剛好有個ATM，就興高采烈地走去。\n正當插入提款卡時，你從後方感受被一股令人不安的視線給盯著，但回頭卻又不見蹤影。\n難到在這個小小的空間中還有其他人的存在？\n為了領出錢是否該面對這令人討厭的威脅。",type:"monster",materials:[{name:"50元銅板",value:2,criteria:["attack_>=_0"],type:"material",category:"free",image:"https://i.imgur.com/2Je0WHZ.png"},{name:"千元大鈔",value:4,criteria:["attack_>=_3"],type:"material",category:"reward",image:"https://i.imgur.com/tlomktL.png"}]},{id:"7",name:"閃光壁虎",story:"",categroy:"壁虎",type:"monster",image:"https://i.imgur.com/7zhsm3t.png",description:"在隔壁鎮閒晃時，你巧遇了穿著閃亮西裝外套的壁虎先生，\n牠身上的閃光貼紙隨著晃悠著的大尾巴一閃一閃，手中抱著的紙袋是牠誓捍衛的午餐。",materials:[{name:"斷尾",value:3,criteria:["attack_>=_0"],type:"material",category:"free",image:"https://i.imgur.com/VDbDaia.png"},{name:"蟑螂觸鬚",value:5,criteria:["attack_>=_4"],type:"material",category:"reward",image:"https://i.imgur.com/BBSyHvI.png"}]},{id:"8",name:"深海食人貝",story:"",categroy:"貝類",image:"https://i.imgur.com/1Y5XGDA.png",description:"你遇見了一個房間大的貝類，大大的貝殼裡放著數以千萬金碧輝煌的寶藏。\n等等，你觀察了一陣子之後發現有些不對勁：那些金碧輝煌的寶藏似乎是誘惑你成為他食物的一種擬態。",type:"monster",materials:[{name:"深海泡沫",value:4,criteria:["attack_>=_0"],type:"material",category:"free",image:"https://i.imgur.com/tcTK7mQ.png"},{name:"淚之珍珠",value:6,criteria:["attack_>=_5"],type:"material",category:"reward",image:"https://i.imgur.com/4YOwx9O.png"}]}],g=[{id:"draw_material",name:"抽素材"},{id:"draw_action",name:"抽執行動作"}],x=[{id:"魔杖大師",name:"魔杖大師",criteria:["attack_>_40"]},{id:"魔杖前輩",name:"魔杖前輩",criteria:["attack_<=_40","attack_>=_35"]},{id:"魔杖學徒",name:"魔杖學徒",criteria:["attack_<=_30"]},{id:"可愛鼯鼠",name:"可愛鼯鼠",criteria:["methods-num_>=_5"]},{id:"職人精神",name:"職人精神",criteria:["methods-num_<=_3"]},{id:"賞金獵人",name:"賞金獵人",criteria:["winner-rewards_>=_5"]},{id:"魔法佛祖",name:"魔法佛祖",criteria:["methods_include-one_{抱佛腳}"]},{id:"拓荒者",name:"拓荒者",criteria:["free-rewards_=_7"]},{id:"善心人士",name:"善心人士",criteria:["free-rewards_=_7","win-rounds_=_7"]},{id:"超級有錢",name:"超級有錢",criteria:["materials_include-one_{千元大鈔,寶石塊,鑽石}"]},{id:"魔法首富",name:"超級有錢",criteria:["materials_include-all_{千元大鈔,寶石塊,鑽石}"]},{id:"戰鬥大師",name:"戰鬥大師",criteria:["win-rounds_=_7"]},{id:"一級玩家",name:"一級玩家",criteria:["materials_include-all_{毛毛蟲,蟑螂觸鬚,狼毫,鴉羽}"]},{id:"奇幻生物學者",name:"奇幻生物學者",criteria:["materials_include-all_{寄生之眼,淚之珍珠,斷尾}"]},{id:"貓咪好朋友",name:"貓咪好朋友",criteria:["materials_include-one_{貓頭餅乾}"]},{id:"魔法影印機",name:"魔法影印機",criteria:["methods-[咒文加護]_>=_2"]}];const y=({messages:e=[],onEnd:t,description:a=""})=>{const[r,i]=c.exports.useState(e.map((()=>""))),[n,o]=c.exports.useState(0);return c.exports.useEffect((()=>{const t=r[n],a=e[n];let s=null;if(a&&n<e.length){const e=a.replace(t,"")[0],l=r.map(((t,a)=>a===n?`${t}${e}`:t));s=setTimeout((()=>{`${t}${e}`===a&&o((e=>e+1)),i(l)}),60)}return()=>{clearTimeout(s)}}),[r,n]),c.exports.useEffect((()=>{i(a.split("\n").map((()=>"")))}),[a]),c.exports.useEffect((()=>{n>=e.length&&"function"==typeof t&&setTimeout((()=>{t()}),200)}),[n]),m.createElement("div",{className:"flex flex-col w-full items-start"},r.map((e=>m.createElement("p",{className:"text-[18px] text-white text-left",style:{lineHeight:1.5}},e))))},f=[{id:1,bgColor:"black",type:"introduction",logo:"🧙",messages:[{text:"有一群製作魔杖的人",type:"text"},{text:"他們為了這個世界",type:"text"},{text:"製造出能使用魔法的媒介",type:"text"},{text:"他們是製作魔杖的「魔杖師」",type:"text"},{button:">下一頁",type:"button",action:"next_page"}]},{id:2,type:"introduction",logo:"📖🗺",bgColor:"black",messages:[{text:"你來到這間魔杖製作坊",type:"text"},{text:"桌上散亂著前屋主遺留下的草圖和一本攤開的古老書籍",type:"text"},{text:"翻開的那頁上寫著...",type:"text"},{button:">下一頁",type:"button",action:"next_page"}]},{id:3,type:"introduction",logo:"📖🗺",bgColor:"black",messages:[{text:"「製作一根好魔杖，好的素材和精湛的手藝不可或缺。」",type:"text"},{text:"「從魔物身上取得素材，但一隻魔物只能取得一種材料。」",type:"text"},{text:"「謹慎選擇一種製作方式，將材料融入魔杖中。」",type:"text"},{text:"「經過七道工法後，你的魔杖將面臨考驗。」",type:"text"},{button:">下一頁",type:"button",action:"next_page"}]},{id:4,type:"introduction",logo:"",bgColor:"#DAC9A6",messages:[{text:"🧚開始設計魔杖",type:"text"},{text:"第一堂課:準備魔杖設計圖紙",type:"text"},{text:"拿一張空白的正方形紙，折出九宮格的格線後攤平",type:"text"},{image:"https://tahsdj.github.io/magic-wand/assets/template-grid.64f02c8a.png",type:"image"},{button:">完成準備，下個步驟",type:"button",action:"next_page"}]},{id:5,type:"introduction",logo:"",bgColor:"#DAC9A6",messages:[{text:"🧚開始設計魔杖",type:"text"},{text:"第二堂課:繪製魔杖雛型",type:"text"},{text:"將魔杖雛形繪製於空白紙上",type:"text"},{image:"https://tahsdj.github.io/magic-wand/assets/template-grid-wand.d2592a00.png",type:"image"},{button:">完成準備，下個步驟",type:"button",action:"next_page"}]},{id:6,type:"introduction",logo:"",bgColor:"#DAC9A6",messages:[{text:"🧚開始設計魔杖",type:"text"},{text:"第三堂課:學習加工",type:"text"},{text:"你必須從生物身上取得材料，並以特定的製作方法加工到魔杖上\n每一次加工會改變魔杖形狀和素質",type:"text"},{items:[{title:"材料",image:"🦴",bg:"white"},{title:"製作方法",image:"🛠",bg:"#81C7D4"}],type:"list"},{text:"尋找材料時，你可憐的小包包只夠帶回一樣材料加工",type:"text"},{text:"從你感應到的製作方式中選擇一種,將材料加工到魔杖上",type:"text"},{button:">開始加工魔杖",type:"button",action:"next_page"}]}],h={round_0:{type:"monster_intro",logo:"",bgColor:"black",messages:[]},round_1:{type:"making",logo:"",bgColor:"#DAC9A6",messages:[{text:"🧚開始設計魔杖",type:"text"},{text:"七道工法中的第{{round}}道工法",type:"text"},{text:"你遇到了 {{monster_name}}，",type:"text"},{text:"如果你悄悄接近，可以獲得 {{material_1}}",type:"text"},{text:"或著成功揮動魔杖，可以獲得 {{material_2}}",type:"text"},{title:"你選擇: (請選取材料)",type:"selection",items:[]},{button:">確定將材料放進包包，返回製作坊",type:"button",action:"next_page"}]},round_2:{type:"making",logo:"",bgColor:"#DAC9A6",messages:[{text:"🧚開始設計魔杖",type:"text"},{text:"七道工法中的第 {{round}} 道工法",type:"text"},{text:"雖然可以打贏，但你還是選擇了偷偷撿拾",type:"text"},{text:"你帶著 {{selected_material}} 回到製作坊",type:"text"},{text:"突然靈光乍現想到以下製作方式",type:"text"},{title:"你選擇:(請決定要用哪一種製作方式)",type:"selection",items:[]},{button:">確定用這種製作方式，開始加工",type:"button",action:"next_page"}]},round_3:{type:"making",logo:"",bgColor:"#DAC9A6",messages:[{text:"🧚開始設計魔杖",type:"text"},{text:"七道工法中的第 {{round}} 道工法",type:"text"},{text:"你將 {{material}} 以 {{method}} 加工到魔杖上",type:"text"},{text:"魔杖發生了變化",type:"text"},{title:"你選擇:(請決定要用哪一種製作方式)",type:"list",items:[{image:"{{selected_material_image}}",bg:"#BDC0BA"},{text:"{{selected_method_description}}",image:"{{selected_action_image}}",bg:"#81C7D4"}]},{text:"(請依指示開始在紙上繪製魔杖)",type:"text"},{button:">加工完成,尋找下一個材料",type:"button",action:"next_page"}]}},b=[{id:"final-1",bgColor:"#006284",type:"introduction",logo:"🧙🧙🧙",messages:[{text:"經過七道工法，你完成了魔杖。",type:"text"},{text:"你前去魔杖評等委員會，",type:"text"},{text:"",type:"text"},{text:"在漫長的等待後，魔杖評等委員會將評等結果交給你：",type:"text"},{button:">打開評等結果",type:"button",action:"next_page"}]},{id:"final-2",bgColor:"#006284",type:"introduction",logo:"",messages:[{component:m.createElement("div",{className:"border border-solid border-white text-[32px] text-white rounded-[28px] p-1 px-2 mb-4"},"你的魔杖評等結果"),type:"component"},{text:"你完成了魔杖!",type:"text"},{text:"你的魔杖使用了{{num_methods}}種工法，使用了{{num_materials}}種材料，總有{{total_attack}}點攻擊力。",type:"text"},{text:"根據精密的評等過程，恭喜你獲得以下稱號",type:"text"},{type:"titles",list:[]},{button:">離開魔杖評等委員會，前往街上",type:"button",action:"next_page"}]}],_=[{id:"street-1",bgColor:"#A8D8B9",type:"introduction",logo:"",messages:[{text:"你帶著魔杖回到街上，要去哪裡呢？",type:"text"},{type:"places",items:[{name:"樹林",icon:"🌳",owner:"忌妒的收集狂烏鴉",ownerImage:"",results:[{description:"烏鴉陷入狂怒瘋狂，把你法杖上所有亮晶晶的部位叼走了",criteria:[e=>e.history.filter((e=>"material"===e.type)).some((e=>["鑽石","淚之珍珠","寶石塊","寶石粉","50元銅板"].includes(e.name))).length>0?e.attack<38.5:e.attack<35]},{description:"烏鴉意識到自己有可能成為收集品的瞬間，心中頓時充滿著狂喜與恐懼，複雜的情緒使他落下了所有的羽毛，急速老化而死。",criteria:["materials_include-one_{鑽石,淚之珍珠,寶石塊,寶石粉,50元銅板}","attack_>=_35","materials_include-one_{鴉羽}"]},{description:"烏鴉暫時還不想奪取你的物品，但他會一直跟著你，趁你毫無防備時下手。",criteria:[e=>e.history.filter((e=>"material"===e.type)).some((e=>["鑽石","淚之珍珠","寶石塊","寶石粉","50元銅板"].includes(e.name))).length>0?e.attack>=38.5:e.attack>=35]},{description:"你的魔杖對於這個偏執狂而言毫無吸引力，牠開始發出「鴉、鴉、鴉」的叫聲，並向你展現出他的戰利品，爾後，便拍拍翅膀走鴉了。",criteria:[]}]},{name:"銀行",icon:"🏣",owner:"快要下班的銀行行員",ownerImage:"",results:[{description:"快要下班的銀行行員大罵你把紙鈔弄髒，他還得加班把紙鈔處理乾淨。旁邊一位剛辦完儲匯手續的客人走來安慰你，他說他欣賞你那充滿藝術感的設計，那位銀行行員並不瞭解你的魔杖是如此有價值。粉絲+1。",criteria:["materials_include-one_{千元大鈔}","methods_include-one_{退火}"]},{description:"快要下班的銀行行員眼睛閃亮亮的，滿懷感謝的心，稱讚你是一個為錢錢用心的錢之勇者，最喜歡你這樣的顧客了。你滿頭問號的收下這份誇讚。",criteria:["materials_include-one_{千元大鈔}","methods_not-include-one_{退火}"]},{description:"銀行行員忙著手邊的工作，頭都來不及抬起來就說：「要辦理借貸了話，請去隔壁櫃台喔！」你去了借貸櫃台之後，發現前面有大排長龍的杖師正準備籌措開業基金。但你知道你還不打算開店。",criteria:[]}]},{name:"便當店",icon:"🏪",owner:"便當店阿姨",ownerImage:"",results:[{description:"使用貴重的材料勢必是把好魔杖 頒發便當給你",criteria:["materials_include-one_{千元大鈔,鑽石,淚之珍珠}"]},{description:"同學，最近物價上漲，店租也漲，只有50塊實在是．．．",criteria:["materials_include-one_{50元銅板}"]},{description:"我們可是很注重衛生的 麻煩重新檢視你的法杖",criteria:["materials_include-one_{蟑螂觸鬚}"]},{description:"同學，要好好吃才能當個偉大的魔法師",criteria:[]}]},{name:"隔壁村",icon:"🏞",owner:"在隔壁村落大肆破壞的巨大魔貓",ownerImage:"",results:[{description:"魔貓直接倒在村落裡露出肚皮給你摸，但是村落因此全滅。",criteria:["materials_include-one_{貓頭餅乾}"]},{description:"魔貓摀住耳朵痛苦不堪，慢慢的縮小變成一隻平凡的小貓。你被村落的人們膜拜為勇者。",criteria:["methods-[咒文加護]_>=_2"]},{description:"魔貓發現你的戰利品比他還多，簡直是獵物殺手，他決定拜你為師，從此你有了一隻超巨大的夥伴了。",criteria:["materials_include-one_{有毛毛蟲,蟑螂觸鬚,鴉羽,狼毫,斷尾}"]},{description:"你在魔貓的胃裡，以為得搭著帳篷度過餘生。但魔貓肚裡簡直是一座神奇的冒險之塔，你將開啟了全新的冒險篇章（本作未收錄）。",criteria:[]}]},{name:"魔杖評等委員會",icon:"🏛",owner:""},{name:"魔杖製作坊",icon:"🔮",owner:""}]}]},{id:"street-2",bgColor:"#A8D8B9",type:"introduction",logo:"",messages:[]}],w=()=>{const[e,t]=c.exports.useState(0),[a,r]=c.exports.useState(0),[i,n]=c.exports.useState((()=>{const e=Array(7).fill([0,1,2,3]).reduce(((e,t,a)=>e.concat(t.map((e=>l(s({},h[`round_${e}`]),{round:`${a}_${e}`}))))),[]);return f.concat(e).concat(b).concat(_)})()),[o,p]=c.exports.useState(d.sort((()=>Math.random()-.5)).map((e=>e.id))),[w,v]=c.exports.useState([]),[E,N]=c.exports.useState((()=>{const e=[];for(let t=0;t<=7;t++){const t=u.sort((()=>Math.random()-.5)).map((e=>e.id)),[a,r,...i]=t;e.push(a,r)}return e})()),[k,C]=c.exports.useState([]),[A,j]=c.exports.useState(0),[S,D]=c.exports.useState({attack:0,name:"",history:[]}),[$,O]=c.exports.useState(),[I,P]=c.exports.useState(),[M,B]=c.exports.useState(!1),[T,Y]=c.exports.useState(!1),Z=()=>{const e=(()=>{var e;switch(null==(e=g[A])?void 0:e.id){case"draw_material":return $;case"draw_action":return I;default:return null}})();A+1<g.length?j((e=>e+1)):(j(0),O(null),P(null),t((e=>e+1))),D((t=>l(s({},t),{history:[...t.history,e]})))};c.exports.useEffect((()=>{var t,a;v((t=e,a=1,Array(a).fill().map(((e,r)=>{const i=o[t*a+r];return d.find((e=>e.id===i))||{}})))),C(((e,t)=>Array(t).fill().map(((a,r)=>{const i=E[e*t+r];return u.find((e=>e.id===i))||{}})))(e,2)),j(0),(()=>{if(S.history.length>=g.length){const e=S.history.length,[t,a]=[S.history[e-2],S.history[e-1]],r=a.actions.reduce(((e,t)=>{switch(t.operator){case"+":return e+Number(t.value);case"-":return e-Number(t.value);case"*":return e*Number(t.value);case"/":return e/Number(t.value);default:return e}}),Number(null==t?void 0:t.value)),i=S.attack+r;D(l(s({},S),{attack:i}))}})()}),[e]);const q=e=>e.criteria.every((e=>{const[t,a,r]=e.split("_");switch(a){case"=":return S[t]===Number(r);case">=":return S[t]>=Number(r);case"<=":return S[t]<=Number(r);case"<":return S[t]<Number(r);case">":return S[t]>Number(r);default:return!1}}));return m.createElement(m.Fragment,null,(()=>{const t=i[a],o=w[0];if("monster_intro"===t.type){const a=o.description.split("\n");return m.createElement("div",{className:"flex flex-col items-center w-full min-h-screen pt-[80px]",style:{backgroundColor:t.bgColor}},m.createElement("p",{className:"text-[24px] text-center text-white mb-4"},"🧙開始加工魔杖"),m.createElement("p",{className:"text-[24px] text-center text-white mb-15"},`七道工法中的第 ${e+1} 道工法`),m.createElement("div",{className:"flex flex-row items-start"},m.createElement("div",{className:"flex flex-col w-[350px] items-center mr-5"},m.createElement("span",{className:"text-white text-[24px] text-left w-full mb-1"},"你遇到了..."),m.createElement("img",{key:o.name,className:"w-[350px] h-[350px]",src:o.image}),m.createElement("h2",{className:"text-white text-[32px] mt-4"},o.name)),m.createElement("div",{className:"flex flex-col w-[650px] mt-5 min-h-[380px]"},m.createElement(y,{description:o.description,messages:a,onEnd:()=>B(!0)}),M&&m.createElement("div",{className:"cursor-pointer text-[16px] mt-auto text-white ml-auto",onClick:()=>{r((e=>e+1)),B(!1)}},"> NEXT <"))))}return m.createElement("div",{className:"flex flex-col items-center w-full min-h-screen",style:{backgroundColor:t.bgColor}},m.createElement("div",{className:"flex flex-col items-center h-screen pb-[50px] px-[20px] max-w-[800px]",style:{paddingTop:t.logo?130:80}},t.logo&&m.createElement("div",{className:"text-[120px] mb-6"},t.logo),t.messages.map((a=>{var c,p,u,d;switch(a.type){case"text":{const r=(null==o?void 0:o.materials)||[];return m.createElement("p",{className:"text-[24px] text-center",style:{color:"black"===t.bgColor||"#006284"===t.bgColor?"white":"black",lineHeight:2}},a.text.replace("{{round}}",e+1).replace("{{monster_name}}",null==o?void 0:o.name).replace("{{monster_description}}",null==o?void 0:o.story).replace("{{material_1}}",null==(c=null==r?void 0:r[0])?void 0:c.name).replace("{{material_2}}",null==(p=null==r?void 0:r[1])?void 0:p.name).replace("{{selected_material}}",null==$?void 0:$.name).replace("{{material}}",null==$?void 0:$.name).replace("{{method}}",null==I?void 0:I.name).replace("{{num_methods}}",(()=>{const e={};return S.history.filter((e=>"action"===e.type)).reduce(((t,a)=>e[a.id]?t:(e[a.id]=!0,t+1)),0)})()).replace("{{num_materials}}",(()=>{const e={};return S.history.filter((e=>"material"===e.type)).reduce(((t,a)=>e[a.name]?t:(e[a.name]=!0,t+1)),0)})()).replace("{{total_attack}}",S.attack))}case"button":return m.createElement("div",{className:"cursor-pointer text-[16px] mt-auto underline",style:{color:"black"===t.bgColor||"#006284"===t.bgColor?"white":"black",cursor:"1"===(null==(u=null==t?void 0:t.round)?void 0:u.split("_")[1])&&!$||"2"===(null==(d=null==t?void 0:t.round)?void 0:d.split("_")[1])&&!I?"not-allowed":"pointer"},onClick:()=>{var e,n;if("1"===(null==(e=null==t?void 0:t.round)?void 0:e.split("_")[1])&&!$)return!1;if("2"===(null==(n=null==t?void 0:t.round)?void 0:n.split("_")[1])&&!I)return!1;switch(a.action){case"next_page":t.round&&"2"!==t.round.split("_")[1]&&Z(),r((e=>e+1));break;default:{const e=i.findIndex((e=>e.id===a.action));e>=0&&r(e);break}}}},a.button);case"list":return m.createElement("div",{className:"flex flex-row items-start gap-10 mt-5 mb-3"},a.items.map((e=>m.createElement("div",{className:"flex flex-col items-center"},e.title&&m.createElement("span",{className:"text-[24px] mb-1"},e.title),m.createElement("div",{className:"group relative flex items-center p-5 justify-center w-[145px] h-[200px] rounded-[15px] border border-solid border-[#707070]",style:{backgroundColor:e.bg}},e.image&&("{{selected_material_image}}"===e.image?m.createElement("img",{className:"w-[75px] h-[75px]",src:null==$?void 0:$.image}):"{{selected_action_image}}"===e.image?m.createElement("div",{className:"opacity-0 group-hover:opacity-100 absolute rounded-[15px] top-0 left-0 w-full h-full flex items-center justify-center bg-[rgba(255,255,255,.8)]"},m.createElement("img",{className:"w-[75px] h-[75px]",src:I.image})):m.createElement("span",{className:"text-[75px]"},e.image)),e.text&&m.createElement("p",{className:"text-[16px] text-center"},e.text.replace("{{selected_method_description}}",I.description)))))));case"image":return m.createElement("img",{className:"mt-15 w-[200px]",src:a.image});case"selection":switch(t.round?t.round.split("_")[1]:null){case"1":{const e=(null==o?void 0:o.materials)||[],t=e.length>=1&&q(e[1]);return m.createElement("div",{className:"flex flex-row items-start gap-10 mt-5 mb-3"},e.map((e=>m.createElement("div",{className:"bg-white flex flex-col items-center justify-center w-[145px] h-[200px] rounded-[15px] border border-solid border-[#707070] cusror-pointer",style:{border:(null==$?void 0:$.name)===e.name?"3px solid #2fad88fa":"3px solid transparent",cursor:q(e)?"pointer":"not-allowed",backgroundColor:q(e)?"white":"#e0e0e0"},onClick:()=>{var a;q(e)&&(a=l(s({},e),{win:t}),O(a))}},m.createElement("h3",null,e.name),e.image&&m.createElement("img",{className:"w-[75px] h-[75px] mt-1 mb-2",src:e.image}),m.createElement("p",null,`攻擊＋ ${e.value}`)))))}case"2":return m.createElement("div",{className:"flex flex-row items-start gap-10 mt-5 mb-3"},k.map((e=>m.createElement("div",{className:"group relative bg-white flex flex-col p-2 items-center w-[145px] h-[200px] rounded-[15px] border border-solid border-[#707070] cursor-pointer",style:{border:(null==I?void 0:I.name)===e.name?"3px solid #2fad88fa":"3px solid rgb(218, 201, 166)"},onClick:()=>{(e=>{P(e)})(e)}},m.createElement("h2",{className:"mb-2"},e.name),m.createElement("p",{className:"text-sm"},e.description),m.createElement("div",{className:"flex flex-col items-start w-full"},m.createElement("h3",null,"獲得效果:"),e.actions.map((e=>m.createElement("p",{className:"text-sm"},`選取素材攻擊力  ${e.operator} ${e.value}`)))),m.createElement("div",{className:"opacity-0 group-hover:opacity-100 absolute rounded-[15px] top-0 left-0 w-full h-full flex items-center justify-center bg-[rgba(255,255,255,.8)]"},e.image&&m.createElement("img",{className:"w-[75px] h-75px",src:e.image}))))));default:return null}case"component":return a.component;case"places":return m.createElement("div",{className:"flex flex-row items-start w-[700px] gap-10 flex-wrap justify-center"},a.items.map((e=>m.createElement("div",{className:"h-full bg-white flex flex-col p-5 items-center w-[145px] h-[200px] rounded-[15px] border border-solid border-[#707070] cursor-pointer",onClick:()=>{if("魔杖評等委員會"===e.name){const e=i.findIndex((e=>"final-2"===e.id));r(e)}else if("魔杖製作坊"===e.name)Y(!0);else{const t=i.findIndex((e=>"street-2"===e.id));n((a=>a.map(((a,r)=>{var i;if(r===t){const t=null==(i=e.results.filter((({criteria:e})=>e.every((e=>{if("function"==typeof e)return e(S);const[t,a,r]=e.split("_"),i=(()=>{switch(t){case"methods-num":return(()=>{const e={};return S.history.filter((e=>"action"===e.type)).reduce(((t,a)=>e[a.id]?t:(e[a.id]=!0,t+1)),0)})();case"winner-rewards":return S.history.filter((e=>"material"===e.type&&"reward"===e.category)).length;case"methods":return S.history.filter((e=>"action"===e.type)).map((e=>e.name));case"materials":return S.history.filter((e=>"material"===e.type)).map((e=>e.name));case"free-rewards":return S.history.filter((e=>"material"===e.type&&"free"===e.category)).length;case"win-rounds":return S.history.filter((e=>"material"===e.type&&e.win)).length;case"methods-":{const e=t.split("-")[1];return S.history.filter((t=>"action"===t.type&&t.name===e)).length}default:return S[t]}})();switch(a){case"=":return i===Number(r);case">=":return i>=Number(r);case"<=":return i<=Number(r);case"<":return i<Number(r);case">":return i>Number(r);case"include-one":return r.replace("{","").replace("}","").split(",").some((e=>i.includes(e)));case"include-all":return r.replace("{","").replace("}","").split(",").every((e=>i.includes(e)));case"not-include-one":return!r.replace("{","").replace("}","").split(",").some((e=>i.includes(e)));default:return!1}})))))?void 0:i[0];return l(s({},a),{messages:[{text:`你來到 ${e.name}，遇到 ${e.owner}`,type:"text"},{text:(null==t?void 0:t.description)||"",type:"text"},{button:">回到街上",action:"street-1",type:"button"}]})}return a})))),r(t)}}},m.createElement("span",{className:"mt-5 mb-1 text-[60px]"},e.icon),m.createElement("span",{className:"text-[24px] mt-auto text-center"},e.name)))));case"titles":{const e=x.filter((e=>e.criteria.every((e=>{const[t,a,r]=e.split("_"),i=(()=>{switch(t){case"methods-num":return(()=>{const e={};return S.history.filter((e=>"action"===e.type)).reduce(((t,a)=>e[a.id]?t:(e[a.id]=!0,t+1)),0)})();case"winner-rewards":return S.history.filter((e=>"material"===e.type&&"reward"===e.category)).length;case"methods":return S.history.filter((e=>"action"===e.type)).map((e=>e.name));case"materials":return S.history.filter((e=>"material"===e.type)).map((e=>e.name));case"free-rewards":return S.history.filter((e=>"material"===e.type&&"free"===e.category)).length;case"win-rounds":return S.history.filter((e=>"material"===e.type&&e.win)).length;case"methods-":{const e=t.split("-")[1];return S.history.filter((t=>"action"===t.type&&t.name===e)).length}default:return S[t]}})();switch(a){case"=":return i===Number(r);case">=":return i>=Number(r);case"<=":return i<=Number(r);case"<":return i<Number(r);case">":return i>Number(r);case"include-one":return r.replace("{","").replace("}","").split(",").some((e=>i.includes(e)));case"include-all":return r.replace("{","").replace("}","").split(",").every((e=>i.includes(e)));default:return!1}}))));return m.createElement("div",{className:"flex flex-row items-center justify-center mt-5 max-w-[700px] gap-10 flex-wrap"},e.map((e=>m.createElement("div",{className:"flex py-4 px-2 relative items-center justify-center w-[200px]"},m.createElement("img",{className:"absolute w-full left-1/2 top-1/2 transform -translate-y-1/2 -translate-x-1/2",src:"https://tahsdj.github.io/magic-wand/assets/title.dc8490bd.png"}),m.createElement("span",{className:"text-white text-[24px]"},e.name)))))}default:return null}}))))})(),T&&m.createElement("div",{className:"fixed top-0 left-0 w-screen h-screen bg-[rgba(0,0,0,0.6)] z-99"},m.createElement("div",{className:"flex flex-col items-center py-5 px-10 w-[350px] h-[200px] rounded-[10px] bg-white absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2"},m.createElement("p",{className:"text-[24px] p-5 text-center"},m.createElement("span",{className:"text-red-500 leading-normal"},"! 注意 ！"),m.createElement("br",null),"即將離開製作新魔杖"),m.createElement("div",{className:"flex flex-row w-full items-center justify-between mt-auto"},m.createElement("div",{className:"px-5 py-2 text-sm rounded-[5px] bg-[rgba(0,0,0,.3)] cursor-pointer",onClick:()=>Y(!1)},"取消"),m.createElement("div",{className:"px-5 py-2 text-sm rounded-[5px] bg-black text-white cursor-pointer",onClick:()=>{t(0),r(0),n((()=>{const e=Array(7).fill([0,1,2,3]).reduce(((e,t,a)=>e.concat(t.map((e=>l(s({},h[`round_${e}`]),{round:`${a}_${e}`}))))),[]);return f.concat(e).concat(b).concat(_)})()),p(d.sort((()=>Math.random()-.5)).map((e=>e.id))),N([...u,...u].sort((()=>Math.random()-.5)).map((e=>e.id))),D({attack:0,name:"",history:[]}),j(0),O(null),P(null),B(!1),Y(!1)}},"確認")))))};function v(){return m.createElement("div",{className:"w-screen flex flex-col items-center min-h-screen"},m.createElement(w,null))}p.render(m.createElement(m.StrictMode,null,m.createElement(v,null)),document.getElementById("root"));
