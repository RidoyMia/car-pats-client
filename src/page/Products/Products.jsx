import React from 'react';
import { useGetAllProductsQuery } from '../../components/store/ProductApi/ProductApi';
import Loding from "../../components/Loading/Loading"
import Loading from '../../components/Loading/Loading';
import { Card } from 'keep-react';
const Products = () => {
    const {data,isLoading} = useGetAllProductsQuery(undefined);
    if(isLoading){
        return <Loading></Loading>
    }
    console.log(data,'products');
    return (
        <div>
            <div className='container'>
            <h1 className='text-center text-5xl font-bold py-16 '>Our <span className='text-red-600'> Products</span></h1>
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
                               
                                <p>{s?.descriptions.slice(0,60)}...</p>
                                <h1 className='text-lg'>Price : {s?.price}</h1>
                                <div className='flex justify-between align-middle items-center'>
                                <button className='text-white text-sm border mt-5 bg-blue-900 px-3 py-1 rounded-md  hover:bg-white hover:text-black hover:border'>Read more</button>
                                
                                </div>
                            </div>
                          </Card.Container>
                        </Card.Container>
                      </Card>)
                }
            </div>
        </div>
        </div>
    );
};

export default Products;