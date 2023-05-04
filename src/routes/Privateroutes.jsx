/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { AuthContex } from '../providers/Authprovider';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const Privateroutes = ({children}) => {
    const {user ,loading}= useContext(AuthContex)
    const location = useLocation();
    if(loading){
        return <Spinner animation="border" variant="danger" />
    }
    if(user){
        return children;
    }
    return <Navigate state={{from: location}} to='/login' replace></Navigate>
};

export default Privateroutes;