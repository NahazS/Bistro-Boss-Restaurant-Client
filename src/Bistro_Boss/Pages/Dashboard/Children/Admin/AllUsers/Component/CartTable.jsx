import React from 'react';
import TableBody from './TableBody';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../../../../Hooks/useAxiosSecure';

const CartTable = () => {
    const axiosSecure = useAxiosSecure()
    const {data: users=[], refetch} = useQuery({
      queryKey: ['users'],
      queryFn: async () => {
        const res = await axiosSecure.get('/users')
        return res.data
      }
    })
    return (
        <div className='max-w-[872px] w-full min-h-[852px] h-full mt-[56px] '>
            <div className='bg-white px-5 md:px-[44px] pt-[50px] min-h-[550px]'>
                <div className='font-Cinzel uppercase flex justify-between items-center'>
                    <h1 className='text-[16px] md:text-[28px] font-bold'>Total Users:{users.length}</h1>
                    <h1 className='text-[16px] md:text-[28px] font-bold'> </h1>
                </div>
                <div className="overflow-x-auto mt-8">
                  <table className="table table-zebra w-full rounded-none rounded-t-[13.2px] bg-[#D1A054] ">
                    {/* head */}
                    <thead className='text-white h-[64px]'>
                      <tr>
                        <th></th>
                        <th className='text-[14px]'>NAME</th>
                        <th className='text-[14px]'>EMAIL</th>
                        <th className='text-[14px]'>ROLE</th>
                        <th className='text-[14px]'>ACTION</th>
                      </tr>
                    </thead>
                    <tbody className='bg-white h-[108px]'>
                      {
                        users.map((user, index) => <TableBody key={user._id} index={index} user={user} refetch={refetch}></TableBody>)
                      }
                    </tbody>
                  </table>
                </div>
            </div>
        </div>
    );
};

export default CartTable;