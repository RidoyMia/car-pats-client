import React from 'react';
import { useGetAllServicesQuery } from '../store/ServicesApi/ServicesApi';
import { Badge,Button,Card, } from "keep-react";
const Services = () => {
    const {data} = useGetAllServicesQuery(undefined);
    console.log(data);
    return (
        <div className='container py-12'>
            <h1 className='text-center text-5xl font-bold '>Our <span className='text-red-600'> Services</span></h1>
            <div className='grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-3 py-10 gap-x-3 gap-y-8 '>
                {
                    data?.result?.map(s => <Card
                        className="max-w-lg overflow-hidden rounded-md"
                        imgSrc={s?.picture}
                        imgSize="md"
                      >
                        
                        <Card.Container className="py-2 px-2">
                          
                          <Card.Container className="flex items-center justify-between">
                            <div>
                                <h1 className='text-3xl font-semibold'>{s?.name}</h1>
                                <p>{s?.descriptions.slice(0,60)}...</p>
                                <div className='flex justify-between align-middle items-center'>
                                <button className='text-white text-sm border mt-5 bg-blue-900 px-3 py-1 rounded-md  hover:bg-white hover:text-black hover:border'>Read more</button>
                                <h1 className='mt-2 text-lg font-semibold'>Cost : ${s?.price}</h1>
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

export default Services;