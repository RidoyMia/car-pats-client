import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { useGetSingleProductQuery } from '../../components/store/ProductApi/ProductApi';
import Loading from '../../components/Loading/Loading';
import { authContext } from '../../AuthContext/AuthProvider';
import { useProductPaymentMutation } from '../../components/store/ProductPaymentApi/ProductPaymentApi';

const ProductDetails = () => {
    const {user} = useContext(authContext)
    const {id} = useParams();
    const {data,isLoading} = useGetSingleProductQuery(id)
    const[productPayment,{isLoading:productLoading}] = useProductPaymentMutation()
    console.log(data,'products');
    if(isLoading || productLoading){
        return <Loading></Loading>
    }
    const handleCheckOut = async()=>{
       const productInfo = {
        id,email : user?.email,
        name : user?.displayName,
       }
       console.log(productInfo,'order info');
       const result = await productPayment(productInfo);
       console.log(result,'product payment ');
       window.location.replace(result?.data?.url)
    }
    return (
        <div>
             <div className='container py-5'>
            <div className='grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-x-5 gap-y-10'>
                <div>
                    <img src={data?.result?.picture} className='w-full h-96'></img>
                </div>
                <div className='lg:py-8 md:py-8 py-2'>
                    <h1 className='text-red-600 font-semibold text-3xl'>{data?.result?.name}</h1>
                    <p>{data?.result?.descriptions?.slice(0,150)}</p>
                    <h1 className='pt-2'>Ratings : {data?.result?.rating}</h1>
                   
                    <h1 className='pt-2'><span className='font-semibold'>Price </span> : ${data?.result?.price}</h1>
                    <button className='text-white text-sm border mt-5 bg-blue-900 px-3 py-1 rounded-md  hover:bg-white hover:text-black hover:border' onClick={handleCheckOut}>OrderNow</button>
                </div>
            </div>
            
                <div>
                    <h1 className='text-lg font-semibold pt-10'>Descriptions</h1>
                    <p className='py-5'>{data?.result?.descriptions}</p>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;