import axios from 'axios';
import React from 'react';
import { FaTrash } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useCart from '../../../../../../Hooks/useCart';
import useAxiosSecure from '../../../../../../Hooks/useAxiosSecure';
import { FaUsers } from 'react-icons/fa6';
import { GrUserAdmin } from 'react-icons/gr';

const TableBody = ({item,index, refetch}) => {
    const axiosSecure = useAxiosSecure()
    const handleDeleteCartUser = () => {
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
                axiosSecure.delete(`/users/${user._id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch()
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
    const handleMakeAdmin = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: `Yes, add ${user.name} as a admin`
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.patch(`/users/admin/${user._id}`)
                    .then(res => {
                        if (res.data.modifiedCount > 0) {
                            refetch()
                            Swal.fire({
                                title: "Add",
                                text: `${user.name} add as a admin`,
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
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item?.role === 'admin' ? <div className='bg-[#D1A054] btn px-0 flex flex-col text-white items-center'><GrUserAdmin></GrUserAdmin><h1>Admin</h1></div> : <button onClick={handleMakeAdmin} className='btn bg-[#D1A054] text-white'><FaUsers></FaUsers></button>}</td>
                <td><button onClick={handleDeleteCartUser} className='btn bg-[#B91C1C] hover:bg-[#B91C1C] hover:bg-opacity-50 border-none text-white'><FaTrash></FaTrash></button></td>
            </tr>

    );
};

export default TableBody;