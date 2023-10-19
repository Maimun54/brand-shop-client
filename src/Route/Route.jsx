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
import BrandDetails from "../Pages/Home/BrandDetails";
import ProductDetails from "../Pages/Add Product/ProductDetails";



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
          element:<MyCart></MyCart>
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
          path:"/brandDetails",
          element:<BrandDetails></BrandDetails>
        },
        {
          path:"/productDetails",
          element:<ProductDetails></ProductDetails>,
          loader:({params})=>fetch(`http://localhost:5000/product/${params.brand_name}`)
        },
        {
          path:"/product/:brand_name",
          element:<Product></Product>,
          loader:({params})=>fetch(`http://localhost:5000/product/${params.brand_name}`)

        },
      ]
    },
  ]);

  export default router