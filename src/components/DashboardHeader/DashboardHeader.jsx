import React from 'react';
import logo from "../../assets/logo-wide.png"
import { FaGooglePlusG } from "react-icons/fa";


import { NavLink } from 'react-router-dom';
const DashboardHeader = () => {
    return (
        <div className=' lg:h-screen md:h-screen py-5 '>
            <img src={logo} className='w-96 h-13 py-12 hidden lg:block md:block'></img>
            <nav id='sideBar2' className='flex lg:flex-col md:flex-col flex-wrap  gap-5 '>
              <NavLink
                to="/dashboard"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                <div className='flex justify-start items-center align-middle py-1'>
                  
                    <h1 className='text-xl'>Dashboard</h1>
                </div>
              </NavLink>
              <NavLink
                to="/dashboard/my-sevices"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
              <div className='flex justify-start items-center align-middle py-1'>
                  
                  <h1 className='text-xl'>My-Services</h1>
              </div>
              </NavLink>
              <NavLink
                to="/dashboard/My-products"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                <div className='flex justify-start items-center align-middle py-1'>
                  
                  <h1 className='text-xl'>My-Products</h1>
              </div>
              </NavLink>
              
             
              </nav>
        </div>
    );
};

export default DashboardHeader;