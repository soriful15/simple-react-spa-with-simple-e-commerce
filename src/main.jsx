import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import {
      createBrowserRouter,
      RouterProvider,
} from "react-router-dom";
import Shop from './Components/Shop/Shop';
import Home from './Components/Layout/Home';
import Orders from './Components/Orders/Orders';
import Inventory from './Components/Inventory/Inventory';
import Login from './Components/Login/Login';
import cartProductsLoader from './loaders/cartProductsLoaders';
import Checkout from './Components/Checkout/Checkout';
import SignUp from './Components/SingUp/SignUp';
import AuthProvider from './Provider/AuthProvider';
import PrivateRoute from './Roures/PrivateRoute';

const router = createBrowserRouter([
      {
            path: "/",
            element: <Home></Home>,
            children: [
                  {
                        path: '/',
                        element:  <Shop></Shop> ,
                        loader:()=>fetch('http://localhost:5000/totalProducts')
                  },
                  {
                        path: 'orders',
                        element: <Orders></Orders>,
                        // loader: ()=> fetch('products.json')
                        loader: cartProductsLoader
                  },
                  {
                        path: 'inventory',
                        element: <PrivateRoute><Inventory></Inventory></PrivateRoute>
                  },
                  {
                        path: 'checkout',
                        element:  <PrivateRoute> <Checkout></Checkout></PrivateRoute>
                  },
                  {
                        path: 'login',
                        element: <Login></Login>
                  },
                  {
                        path: 'signUp',
                        element: <SignUp></SignUp>
                  },
            ]
      },
]);


ReactDOM.createRoot(document.getElementById('root')).render(


      <AuthProvider>
            <RouterProvider router={router} />

      </AuthProvider>

)
