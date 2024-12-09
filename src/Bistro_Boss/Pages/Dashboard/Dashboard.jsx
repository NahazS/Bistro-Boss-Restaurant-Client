import React from 'react';
import DashboardDrawer from './Component/DashboardDrawer';
import { Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className='w-screen flex flex-col lg:flex-row'>
            <DashboardDrawer></DashboardDrawer>
            <div className='flex-grow place-items-center'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;