import { Link, useLoaderData } from "react-router-dom";

const MyCart = () => {
    const cartData =useLoaderData()
    console.log(cartData)
    const handleDelete =()=>{
        
    }
    return (
        <div>
            <h2>This is my card page :{cartData.length}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:px-20">
        {
            cartData.map(cartproduct=><div key={cartproduct._id}> 
            <div className="card card-compact  bg-base-100 shadow-xl">
  <figure><img className="w-[300px] h-[300px] " src={cartproduct.image} /></figure>
  <div className="card-body">
    <div className="flex">
        <div className="w-[200px] border">
        <h2 className="text-2xl font-bold">{cartproduct.pname}</h2>
    <h2 className="text-xl font-bold">{cartproduct.brand_name}</h2>
        </div>
        <div className="">
        <h2 className="card-title  pl-10"><img src="https://i.ibb.co/VVMvpNP/star.png" className="w-8" alt="" />{cartproduct.rating}</h2>
    <h2 className="card-title pl-10">{cartproduct.type}</h2>
        </div>
    </div>
    <p className="text-xl py-2">{cartproduct.description}</p>
    <p className="text-xl py-2 font-bold">Price: {cartproduct.price} tk</p>
    <div className="card-actions justify-between">
      
    <Link ><button onClick={handleDelete} className="btn btn-primary">Delete</button></Link>  
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