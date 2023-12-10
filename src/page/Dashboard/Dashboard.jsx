import React, { useContext, useEffect, useState } from 'react';
import { authContext } from '../../AuthContext/AuthProvider';
import { useGetSingleUserPaymentQuery } from '../../components/store/ProductPaymentApi/ProductPaymentApi';
import Loading from '../../components/Loading/Loading';
import { useGetSingleUserServicePaymentInfoQuery } from '../../components/store/ServicePaymentApi/ServicePaymentApi';
import UserServices from '../../components/DashboardComponents/UserServices/UserServices';
import UserProducts from '../../components/DashboardComponents/UserProducts/UserProducts';

const Dashboard = () => {
    const {user} = useContext(authContext);
    const accesstoken = localStorage.getItem('accesstoken')
   
   const userinfo = {accesstoken,email:user?.email}
   console.log(userinfo,'userinfo');
    
    const {data:paymenData,isLoading:load} = useGetSingleUserPaymentQuery(userinfo)
  
    const { data: servicePaymentData, isLoading: servicePaymentLoading } = useGetSingleUserServicePaymentInfoQuery(userinfo);
    if(load || servicePaymentLoading ){
        return <Loading></Loading>
    }

    console.log(paymenData,servicePaymentData,'payment');

    return (
        <div className='text-black container py-10'>
            <div className='grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-x-5 gap-y-10'>
                <div className='bg-gray-300 text-black font-semibold text-center py-16 rounded-sm'>
                    <h1>Total : {paymenData?.result?.length}</h1>
                    <h1> My products</h1>
                </div>
                <div className='bg-gray-300 text-black font-semibold text-center py-16 rounded-sm'>
                    <h1>Total : {servicePaymentData?.result?.length}</h1>
                    <h1> My Services</h1>
                </div>
            </div>
            <h1 className='pt-20 pb-4 text-3xl font-semibold'>My-Services</h1>
            <UserServices service={servicePaymentData?.result}></UserServices>
            <h1 className='pt-20 pb-4 text-3xl font-semibold'>My-Products</h1>
            <UserProducts services={paymenData?.result}></UserProducts>
        </div>
    );
};

export default Dashboard;