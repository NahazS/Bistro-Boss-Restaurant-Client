import React from 'react';

const OrderOnlineSlide = ({image, title}) => {
    console.log(title)
    return (
        <div className='w-[234px] h-[337px] relative mt-[36px] mb-12'>
            <h1 className='absolute z-10 bottom-0 left-[50%] translate-x-[-50%] text-white text-[24px] font-Cinzel' style={{ textShadow: '2px 2px 4px rgba(0, 0, 0)' }}>{title}</h1>
            <img src={image} alt="" />
        </div>
    );
};

export default OrderOnlineSlide;