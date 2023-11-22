import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetSingleServicesQuery } from '../../components/store/ServicesApi/ServicesApi';
import Loading from '../../components/Loading/Loading';

const ServicesDetails = () => {
    const {id} = useParams();
    const {data,isLoading} = useGetSingleServicesQuery(id);;
    console.log(data,'servicesDetails');
    if(isLoading){
        return <Loading></Loading>
    }
    return (
        <div className='py-10'>
            <div className='grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2'>
                <div>
                    <img src={data?.result?.picture} className='w-full h-96'></img>
                </div>
                <div></div>
            </div>
        </div>
    );
};

export default ServicesDetails;