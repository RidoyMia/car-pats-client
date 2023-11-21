import React from 'react';
import logo from "../../assets/logo-wide.png"
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutgoingMail } from "react-icons/md";
import { TbWorldWww } from "react-icons/tb";
import "./Footer.css"
const Footer = () => {
    return (
        <div className=' pt-16'>
            <div className='bg-red-700 container flex justify-center items-center align-middle'>
                <h1 className='text-white text-3xl font-bold py-7'>Car Fix The Best Car Servicing & Reparing</h1>
            </div>
            <div className='bg-black container py-12'>
                <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 gap-x-5 gap-y-5'>
                    <div>
                        <img src={logo} className='w-full h-14'></img>
                        <p className='text-gray-500 text-sm mt-2'>203, Envato Labs, Behind Alis Steet,<br></br> Melbourne, Australia.</p>
                        <div>
                            <div className='flex justify-start align-middle items-center pt-2'>
                                <h1 className='text-red-600 text-sm'><FaPhoneAlt></FaPhoneAlt></h1>
                                <p className='text-gray-500 text-sm pl-2'>+8801314791920</p>
                            </div>
                            <div className='flex justify-start align-middle items-center pt-2'>
                                <h1 className='text-red-600 text-sm'><MdOutgoingMail></MdOutgoingMail></h1>
                                <p className='text-gray-500 text-sm pl-2'>Ridoymia1531@gmail.com</p>
                            </div>
                            <div className='flex justify-start align-middle items-center pt-2'>
                                <h1 className='text-red-600 text-sm'><TbWorldWww></TbWorldWww></h1>
                                <p className='text-gray-500 text-sm pl-2'>www.Ridoymia.com</p>
                            </div>
                        </div>
                    </div>
                    <div className='px-10'>
                        <h1 className='text-white text-2xl font-bold'>Services</h1>
                        <p className='footer-services'>Oil change</p>
                        <p className='footer-services'>Engine services</p>
                        <p className='footer-services'>Wheel Alignment </p>
                        <p className='footer-services'>Looking Glass</p>
                        <p className='footer-services'>Coloring</p>
                    </div>
                    <div className='px-10'>
                        <h1 className='text-white text-2xl font-bold'>Opening Hours</h1>
                        <p className='footer-services flex justify-between'><p>Sat-Mon</p> <p>6:00 am - 10:00 pm</p></p>
                        <p className='footer-services flex justify-between'><p>Tues-Wed</p> <p>6:00 am - 8:00 pm</p></p>
                        <p className='footer-services flex justify-between'><p>Thur</p> <p> 6:00 am - 4:00 pm</p></p>
                        <p className='footer-services flex justify-between'><p>Friday</p> <p>Closed day</p></p>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;