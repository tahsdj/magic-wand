import React, { useEffect, useState } from 'react'



const MessageLines = ({
    messages=[],
    onEnd,
    description=""
}) => {
    const [displayMessages, setDisplayMessages] = useState(messages.map(() => ""))
    const [currentLine, setCurrentLine] = useState(0)
    
    useEffect(() => {
        const currentDisplayMessage = displayMessages[currentLine]
        const originMessage = messages[currentLine]
        let t = null
        if (originMessage && currentLine < messages.length) {
            const displayNewText = originMessage.replace(currentDisplayMessage, '')[0]
            const newDisplayMessages = displayMessages.map((m, index) => {
                if (index === currentLine) {
                    return `${m}${displayNewText}`
                }
                return m
            })
            t = setTimeout(() => {
                if (`${currentDisplayMessage}${displayNewText}` === originMessage) {
                    setCurrentLine(line => line + 1)
                }
                setDisplayMessages(newDisplayMessages)
            }, 60)
        }
        return () => {
            clearTimeout(t)
        }
    }, [displayMessages, currentLine])

    useEffect(() => {
        setDisplayMessages(description.split("\n").map(() => ""))
    }, [description])

    useEffect(() => {
        if (currentLine >= messages.length) {
            if (typeof onEnd === "function") {
                onEnd()
            }
        }
    }, [currentLine])
    
    return (
        <div className="flex flex-col w-full items-start">
            {displayMessages.map(message => (
                <p className={`text-[18px] text-white text-left`} style={{lineHeight: 1.5}}>
                    {message}
                </p>
            ))}
        </div>
    )
}


export default MessageLines