import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import AddProduct from "../Pages/Add Product/AddProduct";
import MyCart from "../Pages/My Cart/MyCart";
import Login from "../Pages/Login/Login";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Register from "../Pages/Register/Register";
import PrivateProvider from "../Provider/PrivateProvider";
import Product from "../Pages/Add Product/Product";

import ProductDetails from "../Pages/Add Product/ProductDetails";
import UpdateProduct from "../Pages/UpdateProduct/UpdateProduct";



const router = createBrowserRouter([
    {
      path: "/",
      element:<Root></Root>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
          path:"/",
          element:<Home></Home>,
          loader:()=>fetch('/brandData.json')
        },
        {
          path:"/addProduct",
          element:<PrivateProvider><AddProduct></AddProduct></PrivateProvider>
        },
        {
          path:"/myCart",
          element:<PrivateProvider><MyCart></MyCart></PrivateProvider>,
         
          loader:()=>fetch('https://brand-shop-server-opal-theta.vercel.app/myCart')
        },
        {
          path:"/login",
          element:<Login></Login>
        },
        {
          path:"/register",
          element:<Register></Register>
        },
       
        {
          path:"/updateProduct/:id",
          element:<UpdateProduct></UpdateProduct>,
          loader:({params})=>fetch(`https://brand-shop-server-opal-theta.vercel.app/products/${params.id}`)
        },
       
        {
          path:"/product/:brand_name",
          element:<Product></Product>,
          loader:({params})=>fetch(`https://brand-shop-server-opal-theta.vercel.app/product/${params.brand_name}`)

        },
        {
          path:"/productDetails/:id",
          element:<PrivateProvider><ProductDetails></ProductDetails></PrivateProvider>,
          loader:({params})=>fetch(`https://brand-shop-server-opal-theta.vercel.app/products/${params.id}`)
        
        },
      ]
    },
  ]);

  export default router