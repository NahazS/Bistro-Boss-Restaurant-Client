import React from 'react';
import { Link } from 'react-router-dom';
const Table = ({Data, table, TableBody, refetch, payButton}) => {
    const {titles, totalItem} = table
    return (
        <div className='max-w-[872px] w-full min-h-[852px] h-full mt-[56px] '>
            <div className='bg-white px-5 md:px-[44px] pt-[50px] min-h-[550px]'>
                <div className='font-Cinzel uppercase flex justify-between items-center'>
                    {
                      titles.map(title => <h1 className='text-[16px] md:text-[28px] font-bold'>{title.title}:{title.value}</h1>)
                    }
                    {payButton && <Link to={Data.length > 0 && '/dashboard/payment'}><button disabled={!Data.length} className='btn bg-[#D1A054] border-none text-white'>Pay</button></Link>}
                </div>
                <div className="overflow-x-auto mt-8">
                  <table className="table table-zebra w-full rounded-none rounded-t-[13.2px] bg-[#D1A054] ">
                    {/* head */}
                    <thead className='text-white h-[64px]'>
                      <tr>
                        <th></th>
                        {
                          totalItem.map(item => <th className='text-[14px]'>{item}</th>)
                        }
                      </tr>
                    </thead>
                    <tbody className='bg-white h-[108px]'>
                      {
                        Data.map((item, index) => <TableBody key={item._id} index={index} item={item} refetch={refetch}></TableBody>)
                      }
                    </tbody>
                  </table>
                </div>
            </div>
        </div>
    );
};

export default Table;