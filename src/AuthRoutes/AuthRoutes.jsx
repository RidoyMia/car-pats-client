import React, { useContext } from 'react';
import { authContext } from '../AuthContext/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const AuthRoutes = ({children}) => {
  
    const {user} = useContext(authContext);
    const location = useLocation();
    if(!user){
        return <Navigate to="/login" state={{ from: location }} replace />
    }
    return children
};

export default AuthRoutes;