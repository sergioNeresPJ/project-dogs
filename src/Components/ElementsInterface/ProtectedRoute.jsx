import React from 'react'
import { UserContext } from '../../UserContext'
import { Navigate } from 'react-router-dom';
import Loader from './Loader/Loader';

function ProtectedRoute({ children }) {
    const { login } = React.useContext(UserContext);

    if (login === true) {
        return children;
    } else if (login === false) {
        <Navigate to="/login" />
    } else {
        return (
            <Loader/>
        )
    }
}

export default ProtectedRoute