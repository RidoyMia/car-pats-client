import React from 'react';
import { useGetAllExpertQuery } from '../store/ExpertApi/ExpertApi';
import { Badge,Button,Card, } from "keep-react";
import { useNavigate } from 'react-router-dom';
const Expert = () => {
    const {data} = useGetAllExpertQuery(undefined);
    const navigate = useNavigate();
    const detailsExpert = id =>{
      navigate(`/expert/${id}`)
    }
    return (
        <div className='container'>
            <h1 className='text-center text-5xl font-bold py-16 '>Our <span className='text-red-600'> Experts</span></h1>
            <div className='grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-x-3 gap-y-5'>
                {
                    data?.result?.map(s => <Card
                        className="max-w-lg overflow-hidden rounded-md"
                        imgSrc={s?.picture}
                        imgSize="xl"
                      >
                        
                        <Card.Container className="py-2 px-2">
                          
                          <Card.Container className="flex items-center justify-between">
                            <div>
                                <h1 className='text-3xl font-semibold'>Name : {s?.name}</h1>
                                <h1 className='text-xl font-semibold'>Expert : {s?.expert}</h1>
                                <p>{s?.About.slice(0,60)}...</p>
                                <div className='flex justify-between align-middle items-center'>
                                <button className='text-white text-sm border mt-5 bg-blue-900 px-3 py-1 rounded-md  hover:bg-white hover:text-black hover:border' onClick={()=>detailsExpert(s?._id)}>Read more</button>
                                
                                </div>
                            </div>
                          </Card.Container>
                        </Card.Container>
                      </Card>)
                }
            </div>
        </div>
    );
};

export default Expert;