import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import AuthProvider from './Provider/AuthProvider.jsx';
import Root from './Components/Root.jsx';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './Components/Home';
import AddProduct from './Components/AddProduct/AddProduct';
import MyCart from './Components/MyCart/MyCart';
import Login from './Components/SignPage/Login';
import SingUp from './Components/SignPage/SingUp';
import ErrorPage from './Components/ErrorPage';
import PrivateRoutes from './Components/PrivateRoutes/PrivateRoutes';
import BrndSpcificProd from './Components/BrandSpecificProd/BrndSpcificProdPage';
import Anypage from './Anypage';
import DetailedProduct from './Components/BrandSpecificProd/DetailedProduct';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('/brands.json')
      },
      {
        path: '/anypage',
        element: <Anypage></Anypage>
      },
      {
        path: '/addProduct',
        element: <PrivateRoutes><AddProduct></AddProduct></PrivateRoutes> 
      },
      {
        path: '/myCart',
        element: <MyCart></MyCart>,
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/signup',
        element: <SingUp></SingUp>
      },
      {
        path: '/brandSpcificProd/:brandname',
        element: <BrndSpcificProd></BrndSpcificProd>,
        loader: ()=> fetch('http://localhost:5000/products')
      },
      {
        path: '/detailedProduct/:prodName',
        element: <DetailedProduct></DetailedProduct>,
        loader: ()=> fetch('http://localhost:5000/products')

      }
      
      
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>

      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)
