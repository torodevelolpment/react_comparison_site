import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; 
import './index.css'
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import Productspage from './pages/productspage';

const router = createBrowserRouter([
  {
    path: "/home",
    element: <App/>,
  },
   {
    path: "products",
    element: <Productspage/>,
  },
]);

ReactDOM.render(<RouterProvider router={router}/>, document.getElementById('root'));
