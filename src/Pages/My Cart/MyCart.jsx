import { useState } from "react";
import {  useLoaderData } from "react-router-dom";


const MyCart = () => {
    const loadedCartData =useLoaderData()
    
    const [cartData,setCartData]=useState(loadedCartData)
  
    // console.log(cartData)
   const handleDelete = _id=>{
   
    fetch(`https://brand-shop-server-opal-theta.vercel.app/myCart/${_id}`,{
        method:'DELETE',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(cartData)
       })
       .then(res=>res.json())
       .then(data=>{
        console.log(data)

      const remainingCartProduct =cartData.filter(cart=>cart._id !==_id)
      setCartData(remainingCartProduct)
       })
   }
    return (
        <div>
           
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:px-20">
        {
            cartData?.map(cartProduct=><div key={cartProduct._id}> 
            <div className="card md:h-[700px] lg:h-[700px] card-compact  bg-base-100 shadow-xl">
  <figure><img className="w-[300px] h-[300px] " src={cartProduct.image} /></figure>
  <div className="card-body">
    <div className="lg:flex md:flex">
        <div className=" lg:w-[200px]">
        <h2 className="text-2xl font-bold">{cartProduct.pname}</h2>
    <h2 className="text-xl font-bold">Brand: {cartProduct.brand_name}</h2>
        </div>
        <div className="">
        <h2 className="card-title  pl-10"><img src="https://i.ibb.co/VVMvpNP/star.png" className="w-8" alt="" />{cartProduct.rating}</h2>
    <h2 className="card-title pl-10">{cartProduct.type}</h2>
        </div>
    </div>
    <p className="text-xl py-2">{cartProduct.description}</p>
    <p className="text-xl py-2 font-bold">Price: {cartProduct.price} tk</p>
    <div className="card-actions justify-between">
    <button onClick={()=>handleDelete(cartProduct._id)} className="btn btn-primary">Delete</button>
    </div>
  </div>
</div>
            </div>)
        }
    </div>
        </div>
    );
};

export default MyCart;