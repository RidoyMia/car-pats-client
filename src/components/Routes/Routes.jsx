
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../../page/Home/Home";
import Services from "../../page/Services/Services";
import Expert from "../../page/Expert/Expert";
import Products from "../../page/Products/Products";
import Login from "../../page/Login/Login";
import Register from "../../page/Register/Register";
import DashboardLayout from "../Layout/DashboardLayout";
import Dashboard from "../../page/Dashboard/Dashboard";
import NotFound from "../../page/NotFound/NotFound";
import DisplayServiceDetails from "../../page/DisplayServiceDetails/DisplayServiceDetails";
import BlogDetails from "../../page/BlogDetails/BlogDetails";
import ExpertDetails from "../../page/ExperDetails/ExpertDetails";
import ServicesDetails from "../../page/ServicesDetails/ServicesDetails";
import AuthRoutes from "../../AuthRoutes/AuthRoutes";
import { CheckBox } from "keep-react";
import CheckOut from "../../page/CheckOut/CheckOut";
import Successpage from "../../page/SuccessPage/Successpage";
import ProductDetails from "../../page/ProductsDetails/ProductDetails";
import ProductSuccess from "../../page/Products/productSuccess/ProductSuccess";



export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      
      children: [
        {
          path: "/",
          element: <Home></Home>
         
        },
        {
          path : '/checkout/:id',
          element : <CheckOut></CheckOut>
        },
        {
            path : '/services',
            element : <Services></Services>
        },{
          path : 'servicesDetails/:id',
          element : <AuthRoutes><ServicesDetails></ServicesDetails></AuthRoutes>
        },{
            path : '/expert',
            element : <Expert></Expert>
        },
        {
          path : '/success/:id',
          element : <Successpage></Successpage>
        },{
            path : '/products',
            element : <Products></Products>
        },{
            path : '/product/:id',
            element : <ProductDetails></ProductDetails>
        },{
           path : '/productDetails/:id',
           element : <ProductSuccess></ProductSuccess>
        },
        {
            path : '/login',
            element : <Login></Login>
        },{
            path : '/register',
            element : <Register></Register>
        },
        {
          path : '/displayservice/:id',
          element : <DisplayServiceDetails></DisplayServiceDetails>
        },{
          path : '/blog/:id',
          element : <BlogDetails></BlogDetails>
        },{
          path : '/expert/:id',
          element : <ExpertDetails></ExpertDetails>
        },{
          path : '*',
          element : <NotFound></NotFound>
        }
        
      ],
    },
    {
        path : '/dashboard',
        element : <DashboardLayout></DashboardLayout>,
        children : [
            {
                path : '/dashboard',
                element : <Dashboard></Dashboard>
            },{
              path : '*',
              element : <NotFound></NotFound>
            }
        ]
    }
  ]);

