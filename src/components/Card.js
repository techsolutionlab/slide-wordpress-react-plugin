import React from 'react';

const Card = ({index, src, curSubIndex, title, cardIndex, curIndex, setCurIndex, setCurSubIndex, setModalShow}) => {
    return (
        <>
            <div className={`card-block flex flex-col gap-[16px] w-full md:w-[400px] ${index % 2 === 1 ? 'justify-center items-center md:mt-[120px]' : 'justify-start'}`}>
                <div className={`flex flex-row w-full items-center justify-center zoom-on-hover ${index % 2 === 0 ? 'h-[60%]' : 'md:w-[80%] h-[55%]'} `}>
                    <img className={`w-full md:w-[400px] ${index % 2 === 0 ? 'md:!h-[225px]' : 'md:!h-[180px]'} rounded-[24px] cursor-pointer object-cover`}
                         src={src}
                         alt={title}
                         onClick={() => {
                             setCurIndex(cardIndex);
                             setCurSubIndex(index);
                             setModalShow(true);
                         }}
                         
                         onDragStart={(e) => e.preventDefault()}
                    />
                </div>
                <div className="flex flex-col gap-[8px] items-start self-stretch">
                    <span className="text-[#1A2141] w-full font-montserrat text-[24px] font-semibold leading-[120%] text-center">{title}</span>
                    <span className="text-[#1A2141] w-full font-montserrat text-[18px] font-normal leading-[160%] text-center">Step {index + 1}</span>
                </div>
                <div className="flex flex-row justify-center cursor-pointer"
                     onClick={() => {
                         setCurIndex(cardIndex);
                         setCurSubIndex(index);
                         setModalShow(true);
                     }}>
                    {cardIndex === curIndex && index === curSubIndex ? (
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                            <circle cx="16" cy="16" r="16" className="plus-circle" fill="#1A2141"/>
                            <path d="M16 9V16M16 16H9M16 16V23M16 16H23" className="plus-path" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                            <circle cx="16" cy="16" r="15.5" className="plus-circle" stroke="#1A2141"/>
                            <path d="M16 9V16M16 16H9M16 16V23M16 16H23" className="plus-path" stroke="#1A2141" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    )}
                </div>
            </div>
        </>
    );
}

export default Card;
