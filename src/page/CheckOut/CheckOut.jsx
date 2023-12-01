import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { useGetSingleServicesQuery } from '../../components/store/ServicesApi/ServicesApi';
import { authContext } from '../../AuthContext/AuthProvider';
import Loading from '../../components/Loading/Loading';
import { useCreatePaymentServiceMutation } from '../../components/store/ServicePaymentApi/ServicePaymentApi';

const CheckOut = () => {
    const {user} = useContext(authContext)
    const {id} = useParams()
    const {data,isLoading} = useGetSingleServicesQuery(id);
    const [createPaymentService,{error,isLoading:PaymentError}] = useCreatePaymentServiceMutation()

    const payhandler = async(e) =>{
        e.preventDefault();
        const form = e.target;
        const email = user?.email;
        const name = user?.displayName;
        const postCode = parseInt(form.postCode.value);
        const phone = parseInt(form.phone.value);
        const price = parseInt(data?.result.price);
        const bookingDate = form?.date.value
        const  productId = id
        const orderInfo = {
            email,name,postCode,phone,price,productId,bookingDate
        }
        console.log(orderInfo);
        const result = await createPaymentService(orderInfo);
        console.log(result,'serviceResult');
        window.location.replace(result.data.url)
    }
    if(isLoading){
        return <Loading></Loading>
    }
    return (
        <div className='container py-5'>
            <div className='grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-x-5 gap-y-10'>
                <div>
                    <img src={data?.result?.picture} className='w-full h-96'></img>
                    <h1 className='text-xl font-semibold my-7'>Name : {data?.result?.name}</h1>
                    <p>{data?.result?.descriptions.slice(0,200)}</p>
                    <div className='flex justify-between items-center align-middle'>
                        <h1 className='font-semibold py-3'>Price : ${data?.result?.price}</h1>
                        <h1 className='font-semibold py-3'>Rating : {data?.result?.rating}</h1>
                    </div>
                </div>
                <div className='lg:px-10 px-2 py-10 shadow-inner rounded-md bg-gray-100'>
                    <h1 className='text-left font-semibold py-5 text-xl'>Fillup Information</h1>
                    <form onSubmit={payhandler}>
                        <input type='email'readOnly value={user?.email} placeholder='email' className='w-full py-2 my-4 px-5 border shadow-2xl rounded-lg'></input>
                        <input type='text'readOnly value={user?.displayName} placeholder='name' className='w-full py-2 my-4 px-5 border shadow-2xl rounded-lg'></input>
                        <input type='number' name="postCode" placeholder='postcode' className='w-full py-2 my-4 px-5 border shadow-2xl rounded-lg'></input>
                        <input type='number' placeholder='Phone number' name='phone' className='w-full py-2 my-4 px-5 border shadow-2xl rounded-lg'></input>
                        <input type='date' placeholder='Booking date' name='date' className='w-full py-2 my-4 px-5 border shadow-2xl rounded-lg'></input>
                        <div className='flex justify-left items-center mt-5'>
                            <button type='submit' className='bg-blue-900 text-white py-1 px-10 rounded-md'>Pay now</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CheckOut;