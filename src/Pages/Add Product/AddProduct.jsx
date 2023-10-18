

const AddProduct = () => {
    const handleAddProduct=e=>{
        e.preventDefault();
        const form =e.target
        const pname =form.name.value;
        const bname =form.bname.value;
        const image =form.photo.value;
        const type =form.type.value;
        const price =form.price.value;
        const description =form.description.value;
        const rating =form.rating.value;
        console.log(pname,bname,image,type,price,description,rating)
    }
    return (
        <div className="mb-10">
             <div className="text-center">
                <h2 className="text-4xl font-bold py-3">Add Your Product</h2>
                
            </div>
            <form  onSubmit={handleAddProduct}  className=" mx-auto md:w-3/4 lg:w-2/5">

  
  <div className="form-control ">
  <label className="label">
    <span className="label-text">Name</span>
  </label>
  <input  type="text" name="bname"  required placeholder="Type your product Name" className="input input-bordered"  />
</div>
  <div className="form-control ">
  <label className="label">
    <span className="label-text">Brand Name</span>
  </label>
  <input  type="text" name="name"  required placeholder="Type your product Brand Name" className="input input-bordered"  />
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
  <option>Toyota</option>
  <option>Ford</option>
  <option>BMW</option>
  <option>Mercedes-Benz</option>
  <option>Tesla</option>
  <option> Honda</option>
  
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

export default AddProduct;