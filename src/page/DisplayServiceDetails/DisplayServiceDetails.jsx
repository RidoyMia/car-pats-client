import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useGetSingleBlogQuery } from '../../components/store/BlogApi/BlogApi';
import { useGetSingleBestServiceQuery } from '../../components/store/serviceBlogApi/ServiceBlogApi';
import Loading from '../../components/Loading/Loading';

const DisplayServiceDetails = () => {
    const {id} = useParams();
   const {data,isLoading} = useGetSingleBestServiceQuery(id);
  
   if(isLoading){
    return <Loading></Loading>
   }
    return (
        <div className='container'>
            <img src={data?.result[0]?.picture} className='w-full h-96'></img>
            <h1 className='text-red-600 uppercase text-5xl py-5 font-semibold'>{data?.result[0]?.title}</h1>
            <p>{data?.result[0]?.descriptions}</p>
        </div>
    );
};

export default DisplayServiceDetails;