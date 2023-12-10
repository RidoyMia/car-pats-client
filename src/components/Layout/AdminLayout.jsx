import React, { useContext, useEffect, useState } from 'react';

import { Outlet, useNavigate } from 'react-router-dom';
import { authContext } from '../../AuthContext/AuthProvider';
import { useGetIsAdminQuery } from '../store/UserApi/UserApi';
import AdminHeader from '../DashboardHeader/AdminHeader';

const AdminLayout = () => {
    
    const [loading,setLoading] = useState(false);
    const navigate = useNavigate()
    const accesstoken = localStorage.getItem('accesstoken');
    const [token,setToken] = useState(null) 
    const {user} = useContext(authContext);
    console.log({email : user?.email, accesstoken : token});
  
   
    return (
        <div className=''>
            <div className='grid grid-cols-1 lg:grid-cols-12 md:grid-cols-12  text-white'>
                <div className='col-span-0 lg:col-span-2 md:col-span-2 bg-blue-900 px-2'>
                    <AdminHeader></AdminHeader>
                </div>
                <div className='col-span-0 lg:col-span-10 md:col-span-10 '>
                    <Outlet></Outlet>
                </div>
            </div>
            
            
        </div>
    );
};

export default AdminLayout;