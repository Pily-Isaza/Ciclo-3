import React from 'react';

import 'styles/estilos.css';

const authLayout = ({ children }) => {
  return (
   
    <div className="outer"> 
        {children}
        </div>
  );
};

export default authLayout;
