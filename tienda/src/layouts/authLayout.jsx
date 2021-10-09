import React from 'react';
// import { Link } from 'react-router-dom';
import 'styles/estilos.css';

const AuthLayout = ({ children }) => {
  return (
   
    <div className="outer"> 
        {children}
        </div>
  );
};

export default AuthLayout;
