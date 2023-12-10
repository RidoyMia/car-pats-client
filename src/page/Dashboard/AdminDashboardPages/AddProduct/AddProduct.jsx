import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form"
import { useCreateProductMutation } from '../../../../components/store/ProductApi/ProductApi';
import Loading from '../../../../components/Loading/Loading';
const api = `bd0f22832703db189e737da27b90a211`
const AddProduct = () => {
    const [createProduct,{isLoading}] = useCreateProductMutation()
    const {register,handleSubmit,watch,formState: { errors }, } = useForm()
    const onSubmit = (data) => {
        const image = data?.photo[0];
        const formData = new FormData();
        formData.append('image', image)
        axios.post(`https://api.imgbb.com/1/upload?expiration=600&key=${api}`, formData).then(result => {
            
            if (result?.data?.data?.url) {
                const productInfo = {
                    name: data?.name,
                    descriptions: data?.description,
                    price: parseInt(data?.price),
                    picture: result?.data?.data.url,
                    rating:parseInt( data?.rating)
                };
                console.log(productInfo,'info');
                createProduct(productInfo).then(res =>{
                    console.log(res,'product added');
                    reset()
                })
            }
        })
    }
    if(isLoading){
        return <Loading></Loading>
    }
    return (
        <div className='text-black container'>
            <h1 className='py-10 text-3xl'>Add product</h1>
            <div className=' shadow-xl rounded-lg p-5 bg-gray-200'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='flex justify-between gap-x-3 my-5'>
                        <input type='text' placeholder='name' className='w-full py-2 px-5 outline-none rounded-md ' {...register("name", { required: true })} />
                        <input type='number' placeholder='price' className='w-full py-2 px-5  outline-none rounded-md' {...register("price", { required: true })} />
                    </div>

                    <textarea type='text' placeholder='descriptions' className='w-full px-5 py-20 rounded-md outline-none' {...register("description", { required: true })} />

                    <div className='flex justify-between gap-x-3 my-5'>
                        <input type='number' placeholder='rating' className='w-full py-2 px-5  outline-none rounded-md' {...register("rating", { required: true })} />
                        <input type='file' placeholder='image' className='w-full py-2 px-5 outline-none rounded-md ' {...register("photo", { required: true })} />

                    </div>
                    <div className='flex justify-center items-center align-middle my-10'>
                        <button className='py-2 px-20 bg-yellow-600 text-white rounded-md'>AddProduct</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddProduct;