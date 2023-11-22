
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
            path : '/services',
            element : <Services></Services>
        },{
            path : '/expert',
            element : <Expert></Expert>
        },{
            path : '/products',
            element : <Products></Products>
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

