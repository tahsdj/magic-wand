import React, { useState } from 'react'
import html2canvas from 'html2canvas'

import Upload from './upload'
// import PageBg from '../../images/page.svg'
import PageBg from '../../images/result-page-bg.png'
import TitleBg from '../../images/title.png'
import ClockImage from '../../images/clock.png'
import Book, { Page } from './Book'

const Frame1 = ({
    left=null,
    right=null
}) => {
    return (
        <div className="flex flex-row items-center justify-around w-[1000px] h-[600px] relative">
            <img src={PageBg} className="z-0 w-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"/>
            <div className="flex flex-col justify-center items-center z-1 w-[300px]" >
                {left}
            </div>
            <div className="z-1 flex flex-col w-[300px] h-[400px] items-center justify-center">
                {right}
            </div>
        </div>
    )
}

const Frame2 = ({
    left,
    right,
    title,
    bgColor,
}) => {
    return (
        <div className="flex flex-row items-center justify-around w-[1000px] h-[600px] relative">
            {title && (
                <div 
                    className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-7 py-2 border-[4px] border-solid rounded-[30px] text-[24px] text-white"
                    style={{
                        backgroundColor: bgColor
                    }}
                >
                    {title} 
                </div>
            )}
            <div className="flex flex-col justify-center items-center z-1 w-[300px]" >
                {left}
            </div>
            <div className="z-1 flex flex-col w-[300px] h-[400px] items-center justify-center">
                {right}
            </div>
        </div>
    )
}

const ResultPage = ({
    currentPage,
    goto=()=>{},
    onChangeImageUrl=()=>{},
    uploadedImageUrl="",
    fitTitles=[],
    personalResult={},
}) => {
    const [imageUrl, setImageUrl] = useState(uploadedImageUrl)
    const step = `${currentPage.id}`.split('-')[1]

    const handleChangeImage = url => {
        setImageUrl(url)
        onChangeImageUrl(url)
    }
    const leftContent = (() => {
        switch (step) {
            case '1':
                return (
                    <p className="z-1 text text-white text-[20px] leading-[1.5] w-full text-center" >
                        經過七道工法，你完成了魔杖。<br/>
                        你前去魔杖評等委員會，<br/>
                        將精心加工的魔杖交給委員
                    </p>
                )
            case '2':
                return (
                    <div className="text-[150px]">
                        <img src={ClockImage} />
                    </div>
                )
            case '3':
                return (
                    <>
                        <p className="z-1 text text-white text-base w-full text-center mb-5" >
                            恭喜你成功完成了魔杖！<br/>
                            {`你的魔杖使用了${personalResult.totalMethods}種工法、${personalResult.totalMaterials}種材料，`}<br/>
                            {`總共有${personalResult.attack}點攻擊力。`}<br/>
                        </p>
                        <div className="flex w-[230px] h-[230px] border border-solid border-[#F3CD47] rounded-[24px] justify-center items-center overflow-hidden" >
                            <div 
                                className="w-full h-full bg-cover bg-no-repeat bg-center"
                                style={{
                                    backgroundImage: `url(${imageUrl})`
                                }}
                                onClick={()=>{
                                    
                                    if (ref.current) ref.current.click()
                                }}
                            />
                        </div>
                        <div className="text-white text-[18px] w-full text-center mt-5">
                            #魔杖評等結果
                        </div>
                    </>
                )
        }
    })()
    const rightContent = (() => {
        switch(step) {
            case '1': {
                return (
                    <div className="flex h-full flex-col w-full items-center">
                        <p className="mt-10 text-center text-white text-base w-[300px] mb-10">（請拍下你的魔杖，並上傳至此）</p>
                        <div className="flex w-[250px] h-[250px] border border-solid border-[#F3CD47] rounded-[24px] justify-center items-center overflow-hidden" >
                            <Upload onChange={handleChangeImage}/>
                        </div>
                        {currentPage.next && (
                            <div 
                                className="ml-auto mt-auto text-white cursor-pointer"
                                onClick={()=>{
                                    goto(index => index + 1)
                                }}
                            >
                                {currentPage.next}
                            </div>
                        )}
                    </div>
                )
            }
            case '2': {
                return (
                    <div className="flex h-full flex-col w-full items-center">
                        <p className="z-1 text text-white text-[20px] leading-[1.5] w-full text-center mt-auto mb-auto" >
                            在漫長的等待後，<br/>
                            魔杖評等委員會將評等結果交給你：
                        </p>
                        {currentPage.next && (
                            <div 
                                className="mt-auto ml-auto text-white cursor-pointer"
                                onClick={()=>{
                                    goto(index => index + 1)
                                }}
                            >
                                {currentPage.next}
                            </div>
                        )}
                    </div>
                )
            }
            case '3': {
                return (
                    <>
                        <p className="z-1 text text-white text-base w-full text-center mb-10" >
                            根據精密的評等過程，恭喜你獲得以下稱號
                        </p>
                        <div className="flex flex-row items-center justify-center mt-5 w-[400px] max-w-[700px] gap-10 flex-wrap">
                            {fitTitles.map(title => (
                                <div 
                                    className="relative flex py-4 px-2 relative items-center justify-center w-[150px] group"
                                >
                                    <img className="absolute w-full left-1/2 top-1/2 transform -translate-y-1/2 -translate-x-1/2" src={TitleBg}/>
                                    <span className="text-white text-[18px]">{title.name}</span>
                                    <div 
                                        className="z-9 group-hover:visible invisible absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full text-black text-[20px] px-3 py-2 w-auto min-w-[220px] rounded-[20px]"
                                        style={{
                                            backgroundColor: 'rgba(255, 215, 0, 0.74)'
                                        }}
                                    >
                                        {title.description}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div 
                            className="absolute right-0 top-full transform translate-y-2 text-white cursor-pointer"
                            onClick={()=>{
                                goto(index => index + 1)
                            }}
                        >
                            {currentPage.next}
                        </div>
                    </>
                )
            }
        }
    })()

    function saveAs(uri, filename) {

        var link = document.createElement('a');
    
        if (typeof link.download === 'string') {
    
            link.href = uri;
            link.download = filename;
    
            //Firefox requires the link to be in the body
            document.body.appendChild(link);
    
            //simulate click
            link.click();
    
            //remove the link when done
            document.body.removeChild(link);
    
        } else {
    
            window.open(uri);
    
        }
    }

    return (
        <div className="relative">
            <Book
                bgColor={step === "3" ? "#006284" : ""}
                bg={step === "3" ? PageBg : ""}
            >
                {(()=>{
                    switch(step) {
                        case '1':
                        case '2':
                            return (
                                <>
                                    <Page>
                                        {leftContent}
                                    </Page>
                                    <Page>
                                        {rightContent}
                                    </Page>
                                </>
                            )
                        case '3':
                            return (
                                <>
                                    <div className="absolute flex left-1/2 transform -translate-x-1/2 top-[94px] text-white text-[20px]">
                                        {currentPage.title}
                                    </div>
                                    <Page>
                                        {leftContent}
                                    </Page>
                                    <Page>
                                        {rightContent}
                                    </Page>

                                    {/* <Frame2
                                        left={leftContent}
                                        right={rightContent}
                                        // title={currentPage.title}
                                        bgColor={currentPage.bgColor}
                                    /> */}
                                </>
                            )
                    }
                })()}
            </Book>
            {step === "3" && (
                    <div className="absolute flex flex-row items-center bottom-[40px] right-5">
                        <div 
                            className="text-base text-white mr-5 cursor-pointer"
                            onClick={()=>{
                                html2canvas(document.querySelector('#book')).then(function(canvas) {
                                    saveAs(canvas.toDataURL(), 'my-magic-wand.png');
                                });
                            }}
                        >
                            {">下載魔杖評等結果"}
                        </div>
                        <div 
                            className="text-base text-white cursor-pointer"
                            onClick={()=>goto(page => page+1)}
                        >
                            {">把評等結果收進包包 "}
                        </div>
                    </div>
                )}
        </div>
    )
}


export default ResultPage