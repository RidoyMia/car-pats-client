import React from 'react';
import { useForm } from "react-hook-form";
import { FaGooglePlusG } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Register = () => {
    const { register, handleSubmit, watch, formState: { errors }, } = useForm();
    const onSubmit = (data) => console.log(data)
    return (
        <div>
            <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3'>
                <div></div>
                <div className='bg-base-50 shadow-2xl'>
                    <div className='lg:p-10 p-5 md:py-5'>
                        <h1 className='text-center pb-8 text-xl font-semibold'>Login Register</h1>
                        <form onSubmit={handleSubmit(onSubmit)}>

                            


                            <input type='text'   placeholder='name' className='w-full h-10 px-5 mb-5 outline-none bg-gray-200 rounded-md' {...register("name", { required: true })} />
                            <input  type='email'  placeholder='email' className='w-full h-10 px-5 mb-5 outline-none bg-gray-200 rounded-md' {...register("email", { required: true })} />
                            <input  type='password'  placeholder='password' className='w-full h-10 px-5 mb-5 outline-none bg-gray-200 rounded-md' {...register("password", { required: true })} />
                            <input  type='password'  placeholder='confirm' className='w-full h-10 px-5 mb-5 outline-none bg-gray-200 rounded-md' {...register("confirm", { required: true })} />
                            <input  type='file'  placeholder='image' className='w-full h-10 px-5 mb-5 outline-none bg-gray-200 rounded-md' {...register("photo", { required: true })} />

                            {errors.exampleRequired && <span>This field is required</span>}
                            <div className='flex justify-center align-middle items-center underline mt-2'>
                                <Link to='/login'>Please Login</Link>
                            </div>
                            <div className='flex justify-center py-5'>
                            <button className='px-12 py-1  bg-blue-900  text-white text-sm rounded-lg'>Login</button>
                            </div>
                        </form>
                        <div className='flex justify-center items-center mt-5 align-middle'>
                            <div className='bg-gray-500 h-[1px] w-44'></div>
                            <h1 className='px-5 font-semibold'>OR</h1>
                            <div className='bg-gray-500 h-[1px] w-44'></div>
                        </div>
                        <div className='mx-20 bg-blue-900 text-white py-1 mt-5 rounded-lg'>
                            <div className='flex justify-center align-middle items-center bg-blue-900 text-white'>
                                <h1><FaGooglePlusG></FaGooglePlusG></h1>
                                <h1 className='px-1'>Google</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;