import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from "@auth0/auth0-react";
import 'bootstrap/dist/css/bootstrap.min.css'

const domain = "dev-se2iupx4.us.auth0.com"
const clientId = "RV3WL726JnJRDgEJhlFfVhaNRgYA8gS0"


ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
    domain={domain}
    clientId = {clientId}
    redirectUri="https://reactwebnewbies.herokuapp.com/iinicio"
    audience='api-autentificacion-newbies'
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();