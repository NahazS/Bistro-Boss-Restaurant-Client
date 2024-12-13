import { useQuery } from '@tanstack/react-query';
import React from 'react';
import SectionTitle from '../../../../../AllCommonDiv/SectionTitle';
import Table from '../../../../../AllCard/Table';
import TableBody from './Component/TableBody';
import useAxiosPublic from '../../../../../Hooks/useAxiosPublic';

const ManageItems = () => {
    const axiosPublic = useAxiosPublic()
    const {data: items=[], refetch} = useQuery({
        queryKey: ['items'],
        queryFn: async () => {
            const res = await axiosPublic.get('/foodMenu')
            return res.data
        }
    })
    console.log(items)
    const table = {
        titles: [{title: "Total items", value: items.length}],
        totalItem: ["Item Image", "Item Name", "Price", "Action", "Action"],
    }
    return (
        <div className='flex flex-col items-center bg-[#F6F6F6] w-full'>
            <SectionTitle title={"MANAGE ALL ITEMS"} subTitle={"Hurry Up!"}></SectionTitle>
            <Table table={table} Data={items} refetch={refetch} TableBody={TableBody}></Table>
        </div>
    );
};

export default ManageItems;