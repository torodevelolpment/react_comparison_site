import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; 
import './index.css'
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import Productspage from './pages/productpage/productspage';
import Aboutpage from './pages/aboutpage/aboutpage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
   {
    path: "products",
    element: <Productspage/>,
  },
   {
    path: "/about",
    element: <Aboutpage/>,
  },
  //  {
  //   path: "contact",
  //   element: <Contactpage/>,
  // },
]);

ReactDOM.render(<RouterProvider router={router}/>, document.getElementById('root'));
