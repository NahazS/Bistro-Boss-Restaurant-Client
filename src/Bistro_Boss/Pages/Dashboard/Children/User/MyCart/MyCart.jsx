import React from 'react';
import SectionTitle from '../../../../../AllCommonDiv/SectionTitle';
import CartTable from './Component/CartTable';
const MyCart = () => {
    return (
        <div className='flex flex-col items-center bg-[#F6F6F6] w-full'>
            <SectionTitle title={"WANNA ADD MORE?"} subTitle={"My Cart"}></SectionTitle>
            <CartTable></CartTable>
        </div>
    );
};

export default MyCart;