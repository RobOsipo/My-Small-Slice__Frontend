import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom'
import ImageContextProvider from './context/image-context/ImageContextProvider'

import App from './components/App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <ImageContextProvider>
    <App />

  </ImageContextProvider>
</BrowserRouter>
 
);


