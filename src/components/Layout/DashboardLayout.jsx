import React, { useContext, useEffect, useState } from 'react';
import DashboardHeader from '../DashboardHeader/DashboardHeader';
import { Outlet, useNavigate } from 'react-router-dom';
import { authContext } from '../../AuthContext/AuthProvider';

const DashboardLayout = () => {
    const [loading,setLoading] = useState(true);
    const navigate = useNavigate()
    const {user} = useContext(authContext);
    useEffect(()=>{
        setLoading(true);
        if(user){
            setLoading(false)
        }
        else{
           navigate('/')
           setLoading(false)
        }
    },[user])
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
            
            
        </div>
    );
};

export default DashboardLayout;