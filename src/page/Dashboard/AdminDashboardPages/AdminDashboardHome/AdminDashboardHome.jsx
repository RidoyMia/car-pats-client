import React from 'react';
import { useGetAllServicesQuery } from '../../../../components/store/ServicesApi/ServicesApi';
import Loading from '../../../../components/Loading/Loading';
import { useGetAllProductsQuery } from '../../../../components/store/ProductApi/ProductApi';
import { useGetAllproductPaymentQuery } from '../../../../components/store/ProductPaymentApi/ProductPaymentApi';
import { useGetAllServicePaymentQuery } from '../../../../components/store/ServicePaymentApi/ServicePaymentApi';

const AdminDashboardHome = () => {
    const {data,isLoading} = useGetAllServicesQuery();
    const page = 1;
    const {data:Product,isLoading:ProductLoading} = useGetAllProductsQuery()
    const {data:ProductPayment,isLoading:ProductPaymentLoading} = useGetAllproductPaymentQuery(page)
    const {data:ServicePayment,isLoading:ServicePaymentLoading} = useGetAllServicePaymentQuery(page)
    console.log(ServicePayment,'productPaayment');
    if(isLoading || ProductLoading || ProductPaymentLoading){
        return <Loading></Loading>
    }
    return (
        <div className='container py-10 text-black'>
            <div className='grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-x-5 gap-y-10'>
                <div className='flex justify-center bg-gray-50 rounded-md'>
                    <div className='py-16'>
                        <h1 className='text-center text-2xl font-semibold'>total {data?.result?.length}</h1>
                        <h1 className='text-center text-2xl font-semibold'>Available Services</h1>
                    </div>
                </div>
                <div className='flex justify-center bg-gray-50 rounded-md'>
                    <div className='py-16'>
                        <h1 className='text-center text-2xl font-semibold'>total {Product?.result?.length}</h1>
                        <h1 className='text-center text-2xl font-semibold'>Available Products</h1>
                    </div>
                </div>
                <div className='flex justify-center bg-gray-50 rounded-md'>
                    <div className='py-16'>
                        <h1 className='text-center text-2xl font-semibold'>total {ProductPayment?.result?.total}</h1>
                        <h1 className='text-center text-2xl font-semibold'> Products-orders</h1>
                    </div>
                </div>
                <div className='flex justify-center bg-gray-50 rounded-md'>
                    <div className='py-16'>
                        <h1 className='text-center text-2xl font-semibold'>total {ServicePayment?.result?.total}</h1>
                        <h1 className='text-center text-2xl font-semibold'>Service-orders</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboardHome;