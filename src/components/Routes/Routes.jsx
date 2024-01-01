
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
// update
import UserProduct from "../../page/Dashboard/UserDashboardPages/UserProducts/UserProduct";
import UserService from "../../page/Dashboard/UserDashboardPages/UserService/UserService";
import AdminLayout from "../Layout/AdminLayout";
import AdminDashboardHome from "../../page/Dashboard/AdminDashboardPages/AdminDashboardHome/AdminDashboardHome";
import AdminAllServices from "../../page/Dashboard/AdminDashboardPages/AdminAllServices/AdminAllServices";
import AdminAllProducts from "../../page/Dashboard/AdminDashboardPages/AdminAllProducts/AdminAllProducts";
import AdminAllProductPayments from "../../page/Dashboard/AdminDashboardPages/AdminAllProductPayments/AdminAllProductPayments";
import AddProduct from "../../page/Dashboard/AdminDashboardPages/AddProduct/AddProduct";
import AddService from "../../page/Dashboard/AdminDashboardPages/AddService/AddService";
import UpdateProduct from "../../page/Dashboard/AdminDashboardPages/UpdateProduct/UpdateProduct";
import UpdatedService from "../../page/Dashboard/AdminDashboardPages/UpdatedService/UpdatedService";
import AdminOrders from "../../page/Dashboard/AdminDashboardPages/AdminOrder/AdminOrders";



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
            element : <AuthRoutes><ProductDetails></ProductDetails></AuthRoutes>
        },{
           path : '/productDetails/:id',
           element : <AuthRoutes><ProductSuccess></ProductSuccess></AuthRoutes>
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
            },
            {
              path : '/dashboard/my-sevices',
              element : <UserProduct></UserProduct>
            },{
              path : '/dashboard/My-products',
              element : <UserService></UserService>
            },{
              path : '*',
              element : <NotFound></NotFound>
            }
        ]
    },{
      path : '/adminDashboard',
      element : <AuthRoutes><AdminLayout></AdminLayout></AuthRoutes>,
      children : [
        {
          path : '/adminDashboard',
          element : <AdminDashboardHome></AdminDashboardHome>
        },{
          path : '/adminDashboard/services',
          element : <AdminAllServices></AdminAllServices>
        },{
          path : '/adminDashboard/products',
          element : <AdminAllProducts></AdminAllProducts>
        },{
          path : '/adminDashboard/orders',
          element : <AdminAllProductPayments></AdminAllProductPayments>
        },{
          path : '/adminDashboard/addproduct',
          element : <AddProduct></AddProduct>
        },{
          path : '/adminDashboard/addService',
          element : <AddService></AddService>
        },{
          path : '/adminDashboard/updateproduct/:id',
          element : <UpdateProduct></UpdateProduct>
        },{
          path : '/adminDashboard/updateservice/:id',
          element : <UpdatedService></UpdatedService>
        },{
          path : '/adminDashboard/totalOrders',
          element : <AdminOrders></AdminOrders>
        }
      ]
    }
  ]);

