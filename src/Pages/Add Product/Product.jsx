import { Link, useLoaderData } from "react-router-dom";
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Product = () => {
    const products =useLoaderData()
const {_id,pname,brand_name,image,type,price,description,rating}   =products
    console.log(products)
    console.log(pname)
    return (
        <div>
            

<Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      
    >
      <SwiperSlide><img src="https://i.ibb.co/svxfZXS/pexels-mike-bird-794435.jpg" style={{width:'100%',height:'80vh'}} alt="" /></SwiperSlide>
      <SwiperSlide><img src="https://i.ibb.co/8dXMB9q/pexels-albert-nunez-88628.jpg" style={{width:'100%',height:'80vh'}} alt="" /></SwiperSlide>
      <SwiperSlide><img src="https://i.ibb.co/HH6hnJS/pexels-mike-bird-120049.jpg" style={{width:'100%',height:'80vh'}} alt="" /></SwiperSlide>
      
      
    </Swiper>
    <h2>Product:{products.length}</h2>
    
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:px-20">
        {
            products.map(product=><p key={product._id}> 
            <div className="card card-compact  bg-base-100 shadow-xl">
  <figure><img className="w-[300px] h-[300px] " src={product.image} /></figure>
  <div className="card-body">
    <div className="flex">
        <div className="w-50">
        <h2 className="card-title ">{product.pname}</h2>
    <h2 className="card-title">{product.brand_name}</h2>
        </div>
        <div>
        <h2 className="card-title pl-10"><img src="https://i.ibb.co/VVMvpNP/star.png" className="w-8" alt="" />{product.rating}</h2>
    <h2 className="card-title">{product.type}</h2>
        </div>
    </div>
    <p>{product.description}</p>
    <p>Price:{product.price}</p>
    <div className="card-actions justify-between">
      <Link to={`/productDetails/${product._id}`} ><button className="btn btn-primary">Details</button></Link>
      <button className="btn btn-primary">Update</button>
    </div>
  </div>
</div>
            </p>)
        }
    </div>
        </div>
    );
};

export default Product;


