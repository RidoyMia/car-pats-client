import React from 'react';
import DashboardHeader from '../DashboardHeader/DashboardHeader';
import { Outlet } from 'react-router-dom';

const DashboardLayout = () => {
    return (
        <div className=''>
            <div className='grid grid-cols-1 lg:grid-cols-12 md:grid-cols-12  text-white'>
                <div className='col-span-0 lg:col-span-2 md:col-span-2 bg-blue-900 px-2'>
                    <DashboardHeader></DashboardHeader>
                </div>
                <div className='col-span-0 lg:col-span-10 md:col-span-10 '>
                    <Outlet></Outlet>
                </div>
            </div>
            {/* <div className='flex justify-start bg-red-100'>
                <div className=''>
                    <DashboardHeader></DashboardHeader>
                </div>
                <div className=''>
                    <Outlet></Outlet>
                </div>
            </div> */}
            
        </div>
    );
};

export default DashboardLayout;