import React from 'react';
import CartTable from './Component/CartTable';
import SectionTitle from '../../../../../AllCommonDiv/SectionTitle';
import useAxiosSecure from '../../../../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import Table from '../../../../../AllCard/Table';
import TableBody from './Component/TableBody';

const AllUsers = () => {
    const axiosSecure = useAxiosSecure()
    const {data: users=[], refetch} = useQuery({
      queryKey: ['users'],
      queryFn: async () => {
        const res = await axiosSecure.get('/users')
        return res.data
      }
    })
    const table = {
        titles: [{title: "Total Users", value: users.length}],
        totalItem: ["Item Image", "Item Name", "Price", "Action"],
    }
    return (
        <div className='flex flex-col items-center bg-[#F6F6F6] w-full'>
            <SectionTitle title={"MANAGE ALL USERS"} subTitle={"How many??"}></SectionTitle>
            <Table Data={users} refetch={refetch} table={table} TableBody={TableBody}></Table>
        </div>
    );
};

export default AllUsers;