import React from 'react';

import 'styles/estilos.css';

const AuthLayout = ({ children }) => {
  return (
   
    <div className="outer"> 
        {children}
        </div>
  );
};

export default AuthLayout
