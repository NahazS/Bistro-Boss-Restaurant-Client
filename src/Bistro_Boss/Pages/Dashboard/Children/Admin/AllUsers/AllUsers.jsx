import React from 'react';
import CartTable from './Component/CartTable';
import SectionTitle from '../../../../../AllCommonDiv/SectionTitle';

const AllUsers = () => {
    return (
        <div className='flex flex-col items-center bg-[#F6F6F6] w-full'>
            <SectionTitle title={"MANAGE ALL USERS"} subTitle={"How many??"}></SectionTitle>
            <CartTable></CartTable>
        </div>
    );
};

export default AllUsers;