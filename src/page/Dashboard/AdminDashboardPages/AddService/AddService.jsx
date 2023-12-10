import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import { useCreateSingleServiceMutation } from '../../../../components/store/ServicesApi/ServicesApi';
import Loading from '../../../../components/Loading/Loading';
const api = `bd0f22832703db189e737da27b90a211`
const AddService = () => {
    const { register, handleSubmit, watch, formState: { errors },} = useForm()
    const [createSingleService,{isLoading}] = useCreateSingleServiceMutation()
    const onSubmit = (data) => {
        const image = data?.photo[0];
        const formData = new FormData();
        formData.append("image", image);
        axios.post(`https://api.imgbb.com/1/upload?expiration=600&key=${api}`, formData).then(result => {
            if (result?.data.data?.url) {
               
                const productDataInfo = {
                    name: data?.name,
                    descriptions: data?.description,
                    price: parseInt(data?.price),
                    picture: result?.data?.data.url,
                    rating: parseInt(data?.rating),
                    needTime: data?.needTime,
                    OldPrice: parseInt(data?.OldPrice)
                };
                console.log(productDataInfo,'product info');
                createSingleService(productDataInfo).then(res =>{
                    console.log(res,'createProduct');
                })
            }
        })
    }
    if(isLoading){
        return <Loading></Loading>
    }
    return (
        <div className='container text-black'>
            <h1 className='text-3xl font-semibold'>Add services</h1>
            <div className=' bg-gray-100 shadow-2xl rounded-md p-10'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='flex justify-between gap-x-3 my-5'>
                        <input type='text' placeholder='name' className='w-full py-2 px-5 outline-none rounded-md ' {...register("name", { required: true })} />
                        <input type='number' placeholder='price' className='w-full py-2 px-5  outline-none rounded-md' {...register("price", { required: true })} />
                    </div>
                    <div className='flex justify-between gap-x-3 my-5'>
                        <input type='number' placeholder='OldPrice' className='w-full py-2 px-5  outline-none rounded-md' {...register("OldPrice", { required: true })} />
                        <input type='text' placeholder='needTime like 3 days' className='w-full py-2 px-5 outline-none rounded-md ' {...register("needTime", { required: true })} />

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

export default AddService;