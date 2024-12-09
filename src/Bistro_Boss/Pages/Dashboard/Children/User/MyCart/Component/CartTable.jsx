import React from 'react';
import useCart from '../../../../../../Hooks/useCart';
import TableBody from './TableBody';

const CartTable = () => {
    const {cart} = useCart()
    const totalPrice = cart.reduce((total, item) => total + item.price, 0)
    return (
        <div className='max-w-[872px] w-full min-h-[852px] h-full mt-[56px] '>
            <div className='bg-white px-5 md:px-[44px] pt-[50px] min-h-[550px]'>
                <div className='font-Cinzel uppercase flex justify-between items-center'>
                    <h1 className='text-[16px] md:text-[28px] font-bold'>Total orders:{cart.length}</h1>
                    <h1 className='text-[16px] md:text-[28px] font-bold'>total price:{totalPrice}</h1>
                    <button className='btn bg-[#D1A054] border-none text-white'>Pay</button>
                </div>
                <div className="overflow-x-auto mt-8">
                  <table className="table table-zebra w-full rounded-none rounded-t-[13.2px] bg-[#D1A054] ">
                    {/* head */}
                    <thead className='text-white h-[64px]'>
                      <tr>
                        <th></th>
                        <th className='text-[14px]'>ITEM IMAGE</th>
                        <th className='text-[14px]'>ITEM NAME</th>
                        <th className='text-[14px]'>PRICE</th>
                        <th className='text-[14px]'>ACTION</th>
                      </tr>
                    </thead>
                    <tbody className='bg-white h-[108px]'>
                      {
                        cart.map((item, index) => <TableBody key={item._id} index={index} item={item}></TableBody>)
                      }
                    </tbody>
                  </table>
                </div>
            </div>
        </div>
    );
};

export default CartTable;