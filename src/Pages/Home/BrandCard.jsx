import { Link } from "react-router-dom";


const BrandCard = ({brand}) => {
    
    
    const {id,brand_name,brand_img,brand_image} = brand
    
    return (
        <div>
      <Link to={`product/${brand_name}`}><div  className=" card card-compact  m-5 bg-base-100 shadow-xl">
      <figure><img className="w-[500px] h-[300px]" src={brand_image} alt="brad car" /></figure>
      <div className="card-body">
      <h2 className="card-title text-center">{brand_name}</h2>
      </div>
      </div></Link>
     
        </div>
    );
};

export default BrandCard;