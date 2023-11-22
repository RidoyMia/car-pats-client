import React, { useContext, useState } from 'react';
import { FaGooglePlusG } from "react-icons/fa";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { authContext } from '../../AuthContext/AuthProvider';
import Loading from '../../components/Loading/Loading';
import { useSigninUserMutation } from '../../components/store/UserApi/UserApi';

const Login = () => {
    const navigate = useNavigate()
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const [loading,setLoading] = useState(false)
    const{user,googleLogin,signIn} = useContext(authContext);
    const [SigninUser] = useSigninUserMutation()
    const Google = ()=>{
        setLoading(true)
        googleLogin().then(res =>{
         const userInfo = {
           
            email : res?.user?.email,
           
         }
         if(userInfo){
            SigninUser(userInfo).then(res => {
                if(res){
                    localStorage.setItem('accesstoken',res?.data.accesstoken)
                    navigate(from, { replace: true });
                    setLoading(false)
                }
              
       })
         }
        
        }).catch(e=>{
          
        })
    };
    const handleLogin = e =>{
        setLoading(true)
        e.preventDefault();
        const email = e.target.email.value;  
        const password = e.target.password.value;
        signIn(email,password).then(res =>{
             
             if(res?.user){
                const userInfo = {
                    email
                }
                SigninUser(userInfo).then(res => {
                    if(res){
                        localStorage.setItem('accesstoken',res?.data?.accesstoken)
                        navigate(from, { replace: true });
                        setLoading(false)
                    }
                })
             }
         }).catch(e=>{
          
         })
         setLoading(false)
    }
    if(loading){
        return <Loading></Loading>
    }
    return (
        <div>
            <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3'>
                <div></div>
                <div className='bg-base-50 shadow-2xl'>
                    <div className='lg:p-10 p-5 md:py-5'>
                        <h1 className='text-center pb-8 text-xl font-semibold'>Login please</h1>
                        <form onSubmit={handleLogin}>
                            <input type='email' placeholder='email' name="email" className='w-full h-10 px-5 mb-5 outline-none bg-gray-200 rounded-md'></input>
                            <input type='password' placeholder='Password' name="password" className='w-full h-10 px-5 outline-none bg-gray-200 rounded-md'></input>
                            <div className='flex justify-center align-middle items-center underline mt-2'>
                                <Link to='/register'>Please Register</Link>
                            </div>
                            <div className='flex justify-center py-5'>
                            <button className='px-12 py-1  bg-blue-900  text-white text-sm rounded-lg' type='submit'>Login</button>
                            </div>
                        </form>
                        <div  className='flex justify-center items-center mt-5 align-middle'>
                            <div className='bg-gray-500 h-[1px] w-44'></div>
                            <h1 className='px-5 font-semibold'>OR</h1>
                            <div className='bg-gray-500 h-[1px] w-44'></div>
                        </div>
                        <div className='mx-20 bg-blue-900 text-white py-1 mt-5 rounded-lg' onClick={()=> Google()}>
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

export default Login;