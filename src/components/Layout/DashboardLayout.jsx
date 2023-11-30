import React, { useContext, useEffect, useState } from 'react';
import DashboardHeader from '../DashboardHeader/DashboardHeader';
import { Outlet, useNavigate } from 'react-router-dom';
import { authContext } from '../../AuthContext/AuthProvider';
import { useGetIsAdminQuery } from '../store/UserApi/UserApi';

const DashboardLayout = () => {
    const [admin,setAdmin] = useState(false)
    const [loading,setLoading] = useState(true);
    const navigate = useNavigate()
    const accesstoken = localStorage.getItem('accesstoken');
    const [token,setToken] = useState(null) 
    const {user} = useContext(authContext);
    console.log({email : user?.email, accesstoken : token});
    const {data} = useGetIsAdminQuery({email : user?.email,accesstoken});
   if(data?.role == 'admin'){
    setAdmin(true)
   }
    useEffect(()=>{
        setLoading(true);
        if(user){
           
           
            
            if(!accesstoken){
                navigate('/login')
                setLoading(false)
            }else{
                
            }
           
        }
        else{
           navigate('/')
           setLoading(false)
        }
    },[user,token])
    return (
        <div className=''>
            <div className='grid grid-cols-1 lg:grid-cols-12 md:grid-cols-12  text-white'>
                <div className='col-span-0 lg:col-span-2 md:col-span-2 bg-blue-900 px-2'>
                    <DashboardHeader admin={admin}></DashboardHeader>
                </div>
                <div className='col-span-0 lg:col-span-10 md:col-span-10 '>
                    <Outlet></Outlet>
                </div>
            </div>
            
            
        </div>
    );
};

export default DashboardLayout;