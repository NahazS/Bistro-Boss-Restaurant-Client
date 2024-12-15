import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import useAxiosSecure from '../../../../../Hooks/useAxiosSecure';
import { AuthContext } from '../../../../../Provider/AuthProvider';
import SectionTitle from '../../../../../AllCommonDiv/SectionTitle';
import TableBody from './TableBody';
import Table from '../../../../../AllCard/Table';

const PaymentHistory = () => {
    const {user} = useContext(AuthContext)
    const axiosSecure = useAxiosSecure()
    const {data: payment= [], refetch} = useQuery({
        queryKey: ['payment'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payment?email=${user.email}`)
            return res.data;
        }
    })
    console.log(payment)
    const table = {
        titles: [{title: "Total Payments", value: payment.length}],
        totalItem: ["EMAIL", "TOTAL PRICE", "PAYMENT DATE", "ORDER STATUS"],
      }
    return (
        <div className='flex flex-col items-center bg-[#F6F6F6] w-full'>
            <SectionTitle title={"PAYMENT HISTORY"} subTitle={"At a Glance!"}></SectionTitle>
            <Table Data={payment} refetch={refetch} table={table} TableBody={TableBody}></Table>
        </div>
    );
};

export default PaymentHistory;