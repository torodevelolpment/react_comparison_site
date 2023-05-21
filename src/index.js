import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; 
import './index.css'
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import Products from './pages/products';

const router = createBrowserRouter([
  {
    path: "/home",
    element: <App/>,
  },
   {
    path: "products",
    element: <Products/>,
  },
]);

ReactDOM.render(<RouterProvider router={router}/>, document.getElementById('root'));
