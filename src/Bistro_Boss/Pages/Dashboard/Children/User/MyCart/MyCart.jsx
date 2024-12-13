import React from 'react';
import SectionTitle from '../../../../../AllCommonDiv/SectionTitle';
import useCart from '../../../../../Hooks/useCart';
import Table from '../../../../../AllCard/Table';
import TableBody from './Component/TableBody';
const MyCart = () => {
    const {cart, refetch} = useCart()
    console.log(cart)
    const totalPrice = cart.reduce((total, item) => total + item.price, 0)
    const table = {
      titles: [{title: "Total Orders", value: cart.length}, {title: "Total Price", value: totalPrice}],
      totalItem: ["Item Image", "Item Name", "Price", "Action"],
    }
    return (
        <div className='flex flex-col items-center bg-[#F6F6F6] w-full'>
            <SectionTitle title={"WANNA ADD MORE?"} subTitle={"My Cart"}></SectionTitle>
            <Table Data={cart} refetch={refetch} table={table} TableBody={TableBody} payButton={true}></Table>
            
        </div>
    );
};

export default MyCart;