import React from 'react';
import SectionTitle from '../../../../AllCommonDiv/SectionTitle';
import MenuCard from '../../../AllCard/MenuCard';

const TodaysOffer = ({todaysOffer}) => {
    return (
        <div className='max-w-[990px] px-5 xl:px-0 mx-auto'>
            <div className='flex justify-center mb-9'><SectionTitle title={"TODAY'S OFFER"} subTitle={"Don't miss"}></SectionTitle></div>
            <div className='flex gap-[18px] flex-wrap mx-auto justify-center'>
                {
                    todaysOffer.map(offer => <MenuCard menu={offer}></MenuCard>)
                }
            </div>
            <button className='btn border-black border-[3px] border-t-0 border-x-0 max-w-[275px] mx-auto flex mt-9'>ORDER YOUR FAVOURITE FOOD</button>
        </div>
    );
};

export default TodaysOffer;