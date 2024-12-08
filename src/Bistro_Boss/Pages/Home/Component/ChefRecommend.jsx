import React from 'react';
import SectionTitle from '../../../AllCommonDiv/SectionTitle';
import FoodCard from '../../../AllCard/FoodCard';

const ChefRecommend = ({chefFood}) => {
    return (
        <div className='max-w-[990px] px-5 xl:px-0 mx-auto flex flex-col items-center mt-[97px]'>
            <SectionTitle title={"CHEF RECOMMENDS"} subTitle={"Should Try"}></SectionTitle>
            <div className='flex flex-wrap gap-[18px] justify-center mt-9'>
                {
                    chefFood.map(food => <FoodCard key={food._id} food={food}></FoodCard>)
                }      
            </div>
        </div>
    );
};

export default ChefRecommend;