import React from 'react';
import { FaQuoteLeft, FaStar } from "react-icons/fa";
const ReviewSlide = () => {
    return (
        <div className='flex flex-col items-center'>
            <div className='text-[#c49332] flex mb-9'>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar className='text-[#a1a1a1]' />
            </div>
            <FaQuoteLeft className='w-[75px] h-[75px] mb-[30px]'/>
            <p>Various version have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
            <h1 className='text-[#CD9003] text-2xl font-medium mt-1 mb-9'>JANE DOE</h1>
        </div>
    );
};

export default ReviewSlide;