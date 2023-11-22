import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetSingleExperQuery } from '../../components/store/ExpertApi/ExpertApi';
import Loading from "../../components/Loading/Loading"
const ExpertDetails = () => {
    const { id } = useParams();
    const { data, isLoading } = useGetSingleExperQuery(id);
    if (isLoading) {
        return <Loading></Loading>
    }

    return (

        <div>
            <div className='container'>
                <img src={data?.result?.picture} className='w-full h-96'></img>
                <div className=' flex justify-start items-center align-middle py-5'>
                 <h1 className='text-red-600 uppercase text-5xl py-5 font-semibold'>name : {data?.result?.name}</h1>
                 <h1 className='text-red-600 uppercase text-5xl py-5 font-semibold  px-10'> expert : {data?.result?.expert}</h1>
                </div>
                <p>{data?.result?.About}</p>
            </div>
        </div>

    );
};

export default ExpertDetails;