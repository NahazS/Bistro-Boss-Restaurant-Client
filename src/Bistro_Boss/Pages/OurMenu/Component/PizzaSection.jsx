import React from 'react';
import SectionCard from '../../../AllCard/SectionCard';
import MenuCard from '../../../AllCard/MenuCard';

const PizzaSection = ({pizzas}) => {
    const section = {title: "PIZZA", description: "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
    return (
        <div>
            <div className='w-screen h-[525px]'>
                <SectionCard section={section}></SectionCard>
            </div>
            <div className='mt-[79px] flex gap-[18px] flex-wrap justify-center max-w-[990px] px-5 xl:px-0 mx-auto'>
                {
                    pizzas.map(pizza => <MenuCard menu={pizza}></MenuCard>)
                }
            </div>
            <button className='btn border-black border-[3px] border-t-0 border-x-0 max-w-[275px] mx-auto flex mt-9'>ORDER YOUR FAVOURITE FOOD</button>
        </div>
    );
};

export default PizzaSection;