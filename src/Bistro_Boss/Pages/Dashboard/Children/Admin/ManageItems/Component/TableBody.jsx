import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import useAxiosSecure from '../../../../../../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const TableBody = ({item, index, refetch}) => {
    const axiosSecure = useAxiosSecure()
    const handleDeleteItem = () => {
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

              axiosSecure.delete(`/foodMenu/${item._id}`)

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
            <td><Link to={`/dashboard/updateItem/${item._id}`}><button className='btn bg-[#D1A054] hover:bg-[#D1A054] hover:bg-opacity-50 border-none text-white text-xl'><FaEdit></FaEdit></button></Link></td>
            <td><button onClick={handleDeleteItem} className='btn bg-[#B91C1C] hover:bg-[#B91C1C] hover:bg-opacity-50 border-none text-white'><FaTrash></FaTrash></button></td>
        </tr>
    );
};

export default TableBody;