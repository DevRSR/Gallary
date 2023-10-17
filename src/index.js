import React from 'react';
import ImageContextProvider from './Context/ImageContext';
import AuthContextProvider from './Context/AuthContext';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
   <ImageContextProvider>
    <AuthContextProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </AuthContextProvider>
   </ImageContextProvider>
);

   

    
    

