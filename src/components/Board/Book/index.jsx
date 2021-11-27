import React from 'react'

import BookStartBg from './images/book-start.png'
import BookOpenBg from './images/book-open.png'
import BookEndBg from './images/book-end.png'


export const Page = ({
    children,
    className=""
}) => (
    <div className={`flex flex-col pt-20 pb-25 w-1/2 h-full flex-shrink-0 items-center justify-center px-10 ${className}`}>
        {children}
    </div>
)

const Book = ({
    isStart=false,
    isEnd=false,
    bg="",
    bgColor="",
    children
}) => {

    const bgImage = (() => {
        if (isStart) return BookStartBg
        if (isEnd) return BookEndBg
        return BookOpenBg
    })()
    return (
        <div
            id="book"
            className="relative mt-auto mb-auto flex flex-row items-start max-w-full w-[1000px] h-[670px] bg-cover bg-no-repeat bg-center px-10"
            style={{
                backgroundColor: bgColor,
                backgroundImage: `url(${bg || bgImage})`,
                backgroundSize: '100% auto',
                // backgroundPosition: 'center top'
            }}
        >
            {children}
        </div>
    )
}

export default Book