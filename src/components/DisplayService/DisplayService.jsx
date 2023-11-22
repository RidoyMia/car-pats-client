import React, { useEffect, useState } from 'react';
import { useGetAllBestServicesQuery } from '../store/serviceBlogApi/ServiceBlogApi';
import Loading from '../Loading/Loading';
import { Badge, Card,} from "keep-react";
import { useNavigate } from 'react-router-dom';
   
const DisplayService = () => {
    const navigate = useNavigate()
    const {data,isError,isLoading} = useGetAllBestServicesQuery(undefined);

    if(isLoading){
        return <Loading></Loading>
    }
    const handleDetails = id =>{
   
      navigate(`/displayservice/${id}`)
    }
    return (
        <div className='lg:container md:container -mt-32'>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-x-5  gap-y-5 justify-center'>
            {
                data?.result?.map((s,index)=>
                <Card
                  className="max-w-md overflow-hidden rounded-md"
                  imgSrc={s?.picture}
                  imgSize="md"
                >
                  <Card.Container className=" px-3 py-2">
                    <Card.Container>
                      <Card.Title className=" md:text-body-2 text-lg  font-semibold text-metal-700 uppercase  text-red-500">
                        {s?.title}
                      </Card.Title>
                      <Card.Description className="text-body-5 text-md py-3 text-metal-500">
                        {s?.descriptions?.slice(0,100)}...
                      </Card.Description>
                      <button className='text-white text-sm border mt-5 bg-blue-900 px-3 py-1 rounded-md  hover:bg-white hover:text-black hover:border' onClick={()=>handleDetails(s?._id)}>Read more</button>
                    </Card.Container>
                    
                    
                  </Card.Container>
                </Card>)
            }
            </div>
        </div>
    );
};

export default DisplayService;