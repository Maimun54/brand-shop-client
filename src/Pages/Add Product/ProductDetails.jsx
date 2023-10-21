
import { useLoaderData,  } from "react-router-dom";
import swal from 'sweetalert';


const ProductDetails = () => {
  
    const products =useLoaderData()

   const {pname,brand_name,image,type,price,description,rating}=products
    // console.log(products)
   
    const handleCartAdd =()=>{

      fetch('https://brand-shop-server-opal-theta.vercel.app/myCart',{
        method:'POST',
        headers:{
            'Content-type':'application/json'
        },
        body:JSON.stringify(products)
    })
    .then(res=>res.json())
    .then(data=>{
        
        if(data.insertedId){
          swal("product added your card");
      }
    })
     }
    
    return (
        <div>
            <div className="text-center py-5">
            <h2 className="lg:text-5xl text-2xl md:text-5xl text-centers font-bold">Oww you will received 20% Discount </h2>
            </div>
            <div className="card  bg-base-100 shadow-xl">
  <figure><img src={image} alt="image" /></figure>
  <div className="card-body">
    <h2 className="card-title">Model Name: {pname}</h2>
    <p className="text-xl">{description}</p>
    <p className="text-xl">Price: {price} tk</p>
    <div className="card-actions justify-center">
      <button onClick={handleCartAdd} className="btn btn-primary">Add to Cart</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default ProductDetails;