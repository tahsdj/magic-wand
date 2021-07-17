import React, { useEffect, useState } from 'react'

import { MAX_ROUND, STAGE, MONSTERS, ACTIONS } from '../../constants'


const NUM_OF_MONSTERCARD_PER_ROUND = 1
const NUM_OF_ACTIONCARD_PER_ROUND = 2

const Board = () => {

    const [round, setRound] = useState(0)
    const [orderOfMonsters, setOrderOfMonsters] = useState(MONSTERS.sort(() => Math.random() - 0.5).map(m => m.id)) 
    const [currentMonsters, setCurrentMonsters] = useState([])
    const [orderOfActions, setOrderOfActions] = useState([...ACTIONS, ...ACTIONS].sort(() => Math.random() - 0.5).map(m => m.id)) 
    const [currentActions, setCurrentActions] = useState([])
    const [stageIndex, setStageIndex] = useState(0)
    const [userInfo, setUserInfo] = useState({
        attack: 0,
        name: '',
        history: []
    })
    const [currentSelectedMaterial, setSelectedMaterial] = useState()
    const [currentSelectedAction, setSelectedAction] = useState()

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


    const renderStage = () => {
        switch(STAGE[stageIndex]?.id) {
            case 'draw_material':
                return (
                    <div >
                        {currentMonsters.map(monster => (
                            <div className="flex flex-col items-center w-60 h-100 p-5 gap-3">
                                <h2>{monster.name}</h2>
                                <p>{monster.story}</p>
                                <div className="flex flex-row gap-2 items-center w-full justify-center gap-3">
                                    {monster
                                        .materials
                                        .filter(m => {
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
                                        })
                                        .map(m => (
                                            <div 
                                                className={`flex flex-col p-3 items-start gap-1 border border-solid ${currentSelectedMaterial?.name === m.name ? "border-[#2fad88fa]" : "border-gray-200"} cursor-pointer`}
                                                onClick={()=>{selectMaterial(m)}}
                                            >
                                                <h3>{m.name}</h3>
                                                <p>{`攻擊＋ ${m.value}`}</p>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        ))}
                    </div>
                )

            case 'draw_action': {
                return (
                    <div className={`flex flex-row items-start gap-5 mb-10`}>
                        {currentActions.map(action => {
                            return (
                                <div 
                                    className={`flex flex-col items-center w-60 min-h-80 p-5 gap-3 border border-solid ${currentSelectedAction?.name === action.name ? "border-[#2fad88fa]" : "border-gray-200"}`}
                                    onClick={()=>selectAction(action)}
                                >
                                    <h2>{action.name}</h2>
                                    <p>{action.description}</p>
                                    <div className="flex flex-col items-start w-full">
                                        <h3>獲得效果:</h3>
                                        {action.actions.map(e => (
                                            <p>
                                                {`選取素材攻擊力  ${e.operator} ${e.value}`}
                                            </p>
                                        ))}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                )
            }
            default:
                return null
        }
    }


    const isButtonDisabled = (() => {
        switch(STAGE[stageIndex]?.id) {
            case 'draw_material':
                return !currentSelectedMaterial
            case 'draw_action':
                return !currentSelectedAction
            default:
                return false
        }
    })()
    return (
        <div className="relative w-[500px] h-[500px] flex flex-col items-center p-[10px]">
            <div className="absolute flex flex-col w-50 left-full transform translate-x-10 top-0 border border-solid rounder border-gray-300 p-3">
                <span>玩家資訊</span>
                <span>{`攻擊力: ${userInfo.attack}`}</span>
            </div>
            <h1 className="text-xl mb-5">{ round < 7 ? `第 ${round + 1} 回合` : ""}</h1>
            {round < 7 && (
                <>
                    {renderStage()}
                    <div 
                        className={`w-50 p-2 border border-solid border-gray-500 rounded text-center cursor-pointer ${""}`}
                        onClick={handleConfirm}
                    >
                        確認選取
                    </div>
                </>
            )}
            {round === 7 && (
                <div className="text-xl">
                    恭喜你完成魔杖
                </div>
            )}
        </div>
    )
}


export default Board