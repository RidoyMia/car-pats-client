import React from 'react';
import { Navbar, TextInput } from "keep-react";
import logo from "../../assets/logo-wide.png"
import './Header.css'
import {
  CaretDown,
  FacebookLogo,
  InstagramLogo,
  MagnifyingGlass,
  TwitterLogo,
} from "phosphor-react";
import { Link, NavLink } from 'react-router-dom';
const Header = () => {
  return (
    <div>
      <Navbar fluid={true} s className='bg-blue-900 !py-5'>
        <Navbar.Container className="flex  align-middle items-center justify-between">
          <Navbar.Brand>
            <img
              src={logo}
              alt="keep"
              className='w-44 h-12'
            />
          </Navbar.Brand>

          <Navbar.Container className="flex items-start gap-6">
            <Navbar.Container
            id="sidebar"
              tag="ul"
              className="lg:flex md:flex hidden  items-start justify-between gap-4"
            >
              <nav id='sidebar'>
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/services"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                Services
              </NavLink>
              <NavLink
                to="/expert"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                Expers
              </NavLink>
              <NavLink
                to="/products"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                Products
              </NavLink>
              </nav>

            </Navbar.Container>
            <Navbar.Container className="flex lg:hidden md:hidden gap-1 bg-blue-900">
              <Navbar.Toggle className="block" />

            </Navbar.Container>
          </Navbar.Container>
          <Navbar.Collapse
            collapseType="sidebar"
            className="fixed bg-blue-900 right-0 top-0  p-10 lg:!w-2/6 xl:!w-1/6 md:!w-2/6 w-1/2"
          >
            <Navbar.Container tag="ul" className="flex flex-col gap-5 bg-blue-900">
            <nav id='sidebar' className='flex flex-col gap-5'>
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/services"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                Services
              </NavLink>
              <NavLink
                to="/expert"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                Expers
              </NavLink>
              <NavLink
                to="/products"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                Products
              </NavLink>
              </nav>
              
            </Navbar.Container>
          </Navbar.Collapse>
        </Navbar.Container>
      </Navbar>
    </div>
  );
};

export default Header;