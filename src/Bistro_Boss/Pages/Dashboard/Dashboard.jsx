import React from 'react';
import DashboardDrawer from './Component/DashboardDrawer';
import { Outlet } from 'react-router-dom';
import useAdmin from '../../Hooks/useAdmin';

const Dashboard = () => {
    const [isAdmin, isPending] = useAdmin()
    if(isPending)
    {
        return <h1>nahaz</h1>
    }
    return (
        <div className='w-screen flex flex-col lg:flex-row'>
            <DashboardDrawer isAdmin={isAdmin}></DashboardDrawer>
            <div className='flex-grow place-items-center'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;