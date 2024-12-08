import React from 'react';
import Navbar from '../Layout/Navbar';
import Footer from '../Layout/Footer';
import { Outlet, useLocation } from 'react-router-dom';

const Root = () => {
    const location = useLocation()
    const noNavFooter = location.pathname.includes('signIn') || location.pathname.includes('signUp')
    return (
        <div>
            {noNavFooter || <Navbar></Navbar>}
            <Outlet></Outlet>
            {noNavFooter || <Footer></Footer>}
        </div>
    );
};

export default Root;