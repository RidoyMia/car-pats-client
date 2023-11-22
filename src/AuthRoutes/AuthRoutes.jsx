import React, { useContext } from 'react';
import { authContext } from '../AuthContext/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../components/Loading/Loading';

const AuthRoutes = ({children}) => {
  
    const {user,loading} = useContext(authContext);
    if(loading){
        return <Loading></Loading>
    }
    const location = useLocation();
    if(!user){
        return <Navigate to="/login" state={{ from: location }} replace />
    }
    return children
};

export default AuthRoutes;