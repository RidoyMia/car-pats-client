import React from 'react';
import Mariyana from "../../assets/Maria anderson.jpg"
import { FaTools } from "react-icons/fa";
import { HiComputerDesktop } from "react-icons/hi2";
import { TiFlowParallel } from "react-icons/ti";
import { RiAdminFill } from "react-icons/ri";
const Choose = () => {
    return (
        <div>
            <div className='grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1 bg-gray-50'>
                <div className=' hidden lg:block  '>
                    <img src={Mariyana} className='w-full h-full'></img>
                </div>
                <div>
                    <h1 className='text-4xl flex justify-center items-center align-middle font-bold py-10 lg:py-20'>Why <span className='text-red-600 px-3'> Choose Us?</span></h1>
                    <div className='grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 py-10 gap-y-5'>
                         <div>
                            <div className='flex px-5'>
                                <h1 className='text-5xl text-red-500'><HiComputerDesktop></HiComputerDesktop></h1>
                                <div className='pl-2'>
                                    <h1 className='font-semibold text-2xl'>BEST DIAGNOSTICS</h1>
                                    <p className='text-gray-500 py-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, sequi! Delectus sed, sequi nam?</p>
                                </div>
                            </div>
                         </div>
                         <div>
                         <div className='flex px-5'>
                                <h1 className='text-5xl text-red-500'><FaTools></FaTools></h1>
                                <div className='pl-2'>
                                    <h1 className='font-semibold text-2xl'>BEST METERIALS</h1>
                                    <p className='text-gray-500 py-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, sequi! Delectus sed, sequi nam?</p>
                                </div>
                            </div>
                         </div>
                    </div>
                    <div className='grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 py-10 gap-y-5'>
                         <div>
                            <div className='flex px-5'>
                                <h1 className='text-5xl text-red-500'><TiFlowParallel></TiFlowParallel></h1>
                                <div className='pl-2'>
                                    <h1 className='font-semibold text-2xl'>LAW COST SERVICES</h1>
                                    <p className='text-gray-500 py-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, sequi! Delectus sed, sequi nam?</p>
                                </div>
                            </div>
                         </div>
                         <div>
                         <div className='flex px-5'>
                                <h1 className='text-5xl text-red-500'><RiAdminFill></RiAdminFill></h1>
                                <div className='pl-2'>
                                    <h1 className='font-semibold text-2xl'>BEST PROFESSION</h1>
                                    <p className='text-gray-500 py-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, sequi! Delectus sed, sequi nam?</p>
                                </div>
                            </div>
                         </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Choose;