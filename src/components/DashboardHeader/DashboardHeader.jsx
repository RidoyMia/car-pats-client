import React from 'react';
import logo from "../../assets/logo-wide.png"
import { FaGooglePlusG } from "react-icons/fa";

import './dashboard.css'
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
                <div className='flex justify-start items-center align-middle'>
                    <FaGooglePlusG></FaGooglePlusG>
                    <h1>Dashboard</h1>
                </div>
              </NavLink>
              <NavLink
                to="/dashboard/ami"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                ami
              </NavLink>
              <NavLink
                to="/expert"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                Experts
              </NavLink>
              <NavLink
                to="/products"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                Products
              </NavLink>
              <NavLink
                to="/login"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                Login
              </NavLink>
              </nav>
        </div>
    );
};

export default DashboardHeader;