import React from 'react';

const SectionTitle = ({title, subTitle,color}) => {
    return (
        <div className='w-full sm:w-[318px] text-center'>
            <p className={`text-[#D99904] ${color ? 'border-white' : 'border-[#E8E8E8]' } text-[15px] w-full border-b-[3px] p-[15px]`}>---{subTitle}---</p>
            <h1 className={`text-[30px] ${color ? 'text-white' : 'text-black'} font-Inter w-full border-b-[3px] border[#E8E8E8] p-[15px]`}>{title}</h1>
        </div>
    );
};

export default SectionTitle;