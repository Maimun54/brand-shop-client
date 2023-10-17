import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import AddProduct from "../Pages/Add Product/AddProduct";
import MyCart from "../Pages/My Cart/MyCart";
import Login from "../Pages/Login/Login";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";



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
          element:<AddProduct></AddProduct>
        },
        {
          path:"/myCart",
          element:<MyCart></MyCart>
        },
        {
          path:"/login",
          element:<Login></Login>
        },
      ]
    },
  ]);

  export default router