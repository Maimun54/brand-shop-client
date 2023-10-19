import { useLoaderData } from "react-router-dom";
import Banner from "../../Components/Header/Banner";
import BrandCard from "./BrandCard";
import Benefits from "./Benefits";
import { useState } from "react";


const Home = () => {
    const brandloddedData =useLoaderData()
    
    const [brandData,setBrandData]=useState(brandloddedData)

    // console.log(brandData)
    return (
        <div>
            <h2>This is Home page</h2>
            <Banner></Banner>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gird-cols-1 py-10 px-10" >
                {
                    brandData.map(brand=><BrandCard key={brand.id} brand={brand}></BrandCard>)
                }
            </div>
            <Benefits></Benefits>
            <div className="lg:flex px-10 py-10">
                <div>
                    <img className="w-[800px]" src="https://i.ibb.co/vvKpbSZ/auto-2179220-1280.jpg" alt="" />
                    
                    </div>
                <div className="text-center lg:pt-10">
                    <h2 className="text-4xl font-bold lg:py-5">DYNAMIC <br /> AND ECONOMICAL</h2>
                    <p className="lg:py-5 text-2xl">Gets speed fast, but smoothly there is <br /> no transmission, Restores the charge on the road thanks to regenerative braking.

                      </p>
                      <button className="btn btn-success"> REGISTER FOA A TEST DRIVE</button>
                </div>
            </div>
        </div>
    );
};

export default Home;