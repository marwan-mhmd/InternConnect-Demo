import React from 'react';
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ children, allowedRole }) {
  const token = localStorage.getItem('token');
  const userRole = localStorage.getItem('userRole'); 

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  if (allowedRole && userRole !== allowedRole) {
    return <Navigate to={`/${userRole}`} replace />; 
  }

  return children;
}

export default ProtectedRoute;