

const UpdateProduct = () => {
    const handleUpdateProduct=e=>{
        e.preventDefault();
        const form =e.target
        const pname =form.name.value;
        const brand_name =form.brand_name.value;
        const image =form.photo.value;
        const type =form.type.value;
        const price =form.price.value;
        const description =form.description.value;
        const rating =form.rating.value;
        const newProduct={pname,brand_name,image,type,price,description,rating}
        console.log(newProduct)
        //send data server side
        fetch('http://localhost:5000/product',{
            method:'PUT',
            headers:{
                'Content-type':'application/json'
            },
            body:JSON.stringify(newProduct)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
        })
    }
    return (
        <div className="mb-10">
             <div className="text-center">
                <h2 className="text-4xl font-bold py-3">Update Your Product</h2>
                
            </div>
            <form  onSubmit={handleUpdateProduct}  className=" mx-auto md:w-3/4 lg:w-2/5">

  
  <div className="form-control ">
  <label className="label">
    <span className="label-text" >Name</span>
  </label>
  <input  type="text" name="name"  required placeholder="Type your product Name" className="input input-bordered"  />
</div>
  <div className="form-control ">
  <label className="label">
    <span className="label-text">Brand Name</span>
  </label>
  <select name="brand_name" className="select select-bordered w-full ">
  {/* <option disabled selected>Brand Name</option> */}
  <option>Toyota</option>
  <option>BMW</option>
  <option>Honda </option>
  <option>Tesla</option>
  <option>Mercedes-Benz</option>
  <option>Ford</option>
  
</select>
</div>
 
  <div className="form-control ">
  <label className="label">
    <span className="label-text">Image</span>
  </label>
  <input type="text" name="photo"  required placeholder="Type your Image url" className="input input-bordered"  />
</div>
  <div className="form-control ">
  <label className="label">
    <span className="label-text">Type</span>
  </label>
  <select name="type" className="select select-bordered w-full ">
  <option disabled selected>category</option>
  <option>RAV4 Adventure</option>
  <option>RAV4 Hybrid</option>
  <option>Bmw X3</option>
  <option>Bmw X6</option>
  <option>Ranger</option>
  <option> Maverick</option>
  
</select>
</div>

<div className="form-control">
  <label className="label">
    <span className="label-text">Price</span>
  </label>
  <input type="text" required name="price" placeholder="Type Price" className="input input-bordered"  />
  
</div>
<div className="form-control">
  <label className="label">
    <span className="label-text">Description</span>
  </label>
  <input type="text" required name="description" placeholder="Type Short Description" className="input input-bordered"  />
  
</div>
<div className="form-control">
  <label className="label">
    <span className="label-text">Rating</span>
  </label>
  <input type="text" required name="rating" placeholder="Type Rating" className="input input-bordered"  />
  
</div>

<div className="form-control mt-6">
  <button className="btn btn-primary">Add Now </button>
  
</div>
  </form>
        </div>
    );
};

export default UpdateProduct;