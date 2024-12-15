import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import useAxiosSecure from './useAxiosSecure';

const useCart = () => {
    const axiosSecure = useAxiosSecure()
    const { user } = useContext(AuthContext);
    const { refetch, data: cart = [] } = useQuery({
        queryKey: ['cart', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`http://localhost:3000/cart?email=${user.email}`);
            return res.data;
        },
    });

    // Return cart and refetch to use in other components
    return { cart, refetch };
};

export default useCart;