import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetSingleBlogQuery } from '../../components/store/BlogApi/BlogApi';

const BlogDetails = () => {
    const {id} = useParams();
    const {data} = useGetSingleBlogQuery(id);
  
    return (
        <div>
            <div className='container'>
            <img src={data?.result?.picture} className='w-full h-96'></img>
            <h1 className='text-red-600 uppercase text-5xl py-5 font-semibold'>{data?.result?.title}</h1>
            <p>{data?.result?.descriptions}</p>
        </div>
        </div>
    );
};

export default BlogDetails;