

const BrandCard = ({brand}) => {
    console.log(brand)
    
    const {id,brand_name,brand_img} = brand
    
    return (
        <div>
      <div className=" card card-compact  m-5 bg-base-100 shadow-xl">
      <figure><img className="w-[500px] h-[300px]" src={brand_img} alt="brad car" /></figure>
      <div className="card-body">
      <h2 className="card-title text-center">{brand_name}</h2>
      </div>
      </div>
     {/* <div className=" card py-5 bg-base-100 shadow-xl">
     <div>
        <img className="w-96 h-[300px]" src={brand_img} alt="" />
      </div>
      <div>
        <h2 className="text-4xl font-bold text-center">{brand_name}</h2>
      </div>
     </div> */}
        </div>
    );
};

export default BrandCard;