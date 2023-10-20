import { useState } from "react";
import { useEffect } from "react";
import { useLoaderData, useParams, } from "react-router-dom";


const ProductDetails = () => {
    //  const {_id}=useParams()
    // const [productDetails,setProductDetails]=useState([])
    const products =useLoaderData()
     const {pname,brand_name,image,type,price,description,rating}=products
    console.log(products)

    
    return (
        <div>
            <h2>This is product details page :{pname}</h2>
            <div className="card  bg-base-100 shadow-xl">
  <figure><img src={image} alt="image" /></figure>
  <div className="card-body">
    <h2 className="card-title">Model Name: {pname}</h2>
    <p>{description}</p>
    <p>Price: {price} tk</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Add to Cart</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default ProductDetails;