import axios from 'axios';
import React from 'react';
import { FaTrash } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useCart from '../../../../../../Hooks/useCart';

const TableBody = ({item,index}) => {
    const {refetch} = useCart()
    const handleDeleteCartItem = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axios.delete(`http://localhost:3000/cart/${item._id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }
    return (

            <tr>
                <th>{index+1}</th>
                <td><img className='w-[66px] h-[66px]' src={item.image} alt="" /></td>
                <td>{item.name}</td>
                <td>${item.price}</td>
                <td><button onClick={handleDeleteCartItem} className='btn bg-[#B91C1C] hover:bg-[#B91C1C] hover:bg-opacity-50 border-none text-white'><FaTrash></FaTrash></button></td>
            </tr>

    );
};

export default TableBody;