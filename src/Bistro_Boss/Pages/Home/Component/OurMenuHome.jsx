import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../AllCommonDiv/SectionTitle';
import MenuCard from '../../../AllCard/MenuCard';

const OurMenuHome = ({menu}) => {
    const showData = menu
    console.log(showData)
    return (
        <div className='max-w-[990px] px-5 xl:px-0 mx-auto mt-[70px]'>
            <div className='flex justify-center mb-9'><SectionTitle title={"FROM OUR MENU"} subTitle={"Check it out"}></SectionTitle></div>
            <div className='flex gap-[18px] flex-wrap mx-auto justify-center'>
                {
                    showData.map(data => <MenuCard menu={data}></MenuCard>)
                }
            </div>
            <button className='btn border-black border-[3px] border-t-0 border-x-0 max-w-[177px] mx-auto flex mt-9'>View Full  Menu</button>
        </div>
    );
};

export default OurMenuHome;