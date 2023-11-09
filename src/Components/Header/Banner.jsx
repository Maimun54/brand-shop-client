
const Banner = () => {
    return (
        <div className="w-full mb-5   hero h-[600px] hero-overlay" style={{backgroundImage:'url(https://i.ibb.co/wJfk91V/istockphoto-114288673-2048x2048.jpg )'}}>
            <div className=" w-full h-[600px]   bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">

            
            <div data-aos="fade-right"className=" pt-20 text-center items-center lg:px-20 " >
         <div className="">
             <h2 className="  mt-40  lg:text-5xl md:text-5xl text-2xl   font-bold  text-white">We Make Car like your Dream
                 </h2>
                    
             </div>

             <div className="my-8">
             <button className="btn btn-primary text-center justify-center items-center">Book Your Car</button>
             </div>
            </div>
            </div>
        </div>
    );
};

export default Banner;