import React from 'react';

const MenuCard = ({menu}) => {
    const {name, recipe, image, price} = menu
    return (
        <div className='flex items-start max-w-[486px]'>
            <img className='w-[88px] h-[78px] rounded-[150px] rounded-tl-none mr-6' src={image} alt="" />
            <div>
                <h1 className='font-Cinzel text-[15px]'>{name}</h1>
                <p className='font-Inter text-[#737373] text-[12px]'>{recipe}</p>
            </div>
            <p className='text-[15px] text-[#BB8506]'>${price}</p>
        </div>
    );
};

export default MenuCard;