import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { useGetSingleServicesQuery } from '../../components/store/ServicesApi/ServicesApi';
import Loading from '../../components/Loading/Loading';
import { authContext } from '../../AuthContext/AuthProvider';

const ServicesDetails = () => {
    const {loading} = useContext(authContext);
    console.log(loading);
    const {id} = useParams();
    const {data,isLoading} = useGetSingleServicesQuery(id);;
    console.log(data,'servicesDetails');
    if(isLoading || loading){
        return <Loading></Loading>
    }
    return (
        <div className='container py-5'>
            <div className='grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-x-5 gap-y-10'>
                <div>
                    <img src={data?.result?.picture} className='w-full h-96'></img>
                </div>
                <div className='lg:py-8 md:py-8 py-2'>
                    <h1 className='text-red-600 font-semibold text-3xl'>{data?.result?.name}</h1>
                    <p>{data?.result?.descriptions?.slice(0,150)}</p>
                    <h1 className='pt-2'>Ratings : {data?.result?.rating}</h1>
                    <h1 className='pt-2'>Time Need : {data?.result?.needTime}</h1>
                    <p className='text-md pt-2'>OldPrice : ${data?.result?.OldPrice}</p>
                    <h1 className='pt-2'><span className='font-semibold'>Price </span> : ${data?.result?.price}</h1>
                    <button className='text-white text-sm border mt-5 bg-blue-900 px-3 py-1 rounded-md  hover:bg-white hover:text-black hover:border'>OrderNow</button>
                </div>
            </div>
            
                <div>
                    <h1 className='text-lg font-semibold pt-10'>Descriptions</h1>
                    <p className='py-5'>{data?.result?.descriptions}</p>
                </div>
            </div>
       
    );
};

export default ServicesDetails;