import React, { useContext } from 'react';
import { authContext } from '../../../../AuthContext/AuthProvider';
import { useGetSingleUserPaymentQuery } from '../../../../components/store/ProductPaymentApi/ProductPaymentApi';
import UserProducts from '../../../../components/DashboardComponents/UserProducts/UserProducts';
const UserProduct = () => {
    const {user} = useContext(authContext);
    const accesstoken = localStorage.getItem('accesstoken')
   
   const userinfo = {accesstoken,email:user?.email}
   console.log(userinfo,'userinfo');
    
    const {data:paymenData,isLoading:load} = useGetSingleUserPaymentQuery(userinfo)
    return (
        <div>
            <h1>Product-Payment-History</h1>
            <UserProducts services={paymenData?.result}></UserProducts>
        </div>
    );
};

export default UserProduct;