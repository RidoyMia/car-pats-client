import React, { useContext } from 'react';
import { authContext } from '../../../../AuthContext/AuthProvider';
import { useGetSingleUserServicePaymentInfoQuery } from '../../../../components/store/ServicePaymentApi/ServicePaymentApi';
import Loading from '../../../../components/Loading/Loading';
import UserServices from '../../../../components/DashboardComponents/UserServices/UserServices';

const UserService = () => {
    const {user} = useContext(authContext);
    const accesstoken = localStorage.getItem('accesstoken')
   
   const userinfo = {accesstoken,email:user?.email}
   const { data: servicePaymentData, isLoading: servicePaymentLoading } = useGetSingleUserServicePaymentInfoQuery(userinfo);
   if(servicePaymentLoading ){
       return <Loading></Loading>
   }
    return (
        <div>
            <UserServices service={servicePaymentData?.result}></UserServices>
        </div>
    );
};

export default UserService;