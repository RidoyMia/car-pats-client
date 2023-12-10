import React from 'react';
import logo from "../../assets/logo-wide.png"
import { FaGooglePlusG } from "react-icons/fa";


import { NavLink } from 'react-router-dom';
const AdminHeader = () => {
 
    return (
        <div className=' lg:h-screen md:h-screen py-5 '>
            <img src={logo} className='w-96 h-13 py-12 hidden lg:block md:block'></img>
            <nav id='sideBar2' className='flex lg:flex-col md:flex-col flex-wrap  gap-5 '>
              <NavLink
                to="/adminDashboard"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                <div className='flex justify-start items-center align-middle py-1'>
                  
                    <h1 className='text-xl'>Dashboard</h1>
                </div>
              </NavLink>
              <NavLink
                to="/adminDashboard/services"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
              <div className='flex justify-start items-center align-middle py-1'>
                  
                  <h1 className='text-xl'>Services</h1>
              </div>
              </NavLink>
              <NavLink
                to="/adminDashboard/products"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                <div className='flex justify-start items-center align-middle py-1'>
                  
                  <h1 className='text-xl'>Products</h1>
              </div>
              </NavLink>
              <NavLink
                to="/adminDashboard/totalOrders"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                <div className='flex justify-start items-center align-middle py-1'>
                  
                  <h1 className='text-xl'>Orders</h1>
              </div>
              </NavLink>
              <NavLink
                to="/adminDashboard/addproduct"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                <div className='flex justify-start items-center align-middle py-1'>
                  
                  <h1 className='text-xl'>addProduct</h1>
              </div>
              </NavLink>
              <NavLink
                to="/adminDashboard/addService"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                <div className='flex justify-start items-center align-middle py-1'>
                  
                  <h1 className='text-xl'>addService</h1>
              </div>
              </NavLink>
              
             
              </nav>
        </div>
    );
};

export default AdminHeader;