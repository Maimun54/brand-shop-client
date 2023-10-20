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
            <div className="text-center py-5">
            <h2 className="text-5xl text-centers font-bold">Oww you will received 20% Discount </h2>
            </div>
            <div className="card  bg-base-100 shadow-xl">
  <figure><img src={image} alt="image" /></figure>
  <div className="card-body">
    <h2 className="card-title">Model Name: {pname}</h2>
    <p className="text-xl">{description}</p>
    <p className="text-xl">Price: {price} tk</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Add to Cart</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default ProductDetails;