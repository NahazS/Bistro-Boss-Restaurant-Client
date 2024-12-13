import React, { useEffect } from 'react';
import SectionTitle from '../../../../../AllCommonDiv/SectionTitle';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';
import useCart from '../../../../../Hooks/useCart';
import { useNavigate } from 'react-router-dom';

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY)
const Payment = () => {
    const navigate = useNavigate()
    const {cart} = useCart()
    useEffect(() => {
        if(!cart.length)
        {
            navigate('/')
        }
    },[cart])
    return (
        <div className='flex flex-col items-center bg-[#F6F6F6] w-full h-screen'>
            <SectionTitle title={"Payment"} subTitle={""}></SectionTitle>
            <div className='w-[600px] mt-[64px]'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm></CheckoutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;