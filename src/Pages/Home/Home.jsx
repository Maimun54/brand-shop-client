import { useLoaderData } from "react-router-dom";
import Banner from "../../Components/Header/Banner";
import BrandCard from "./BrandCard";


const Home = () => {
    const brandData =useLoaderData()
    console.log(brandData)
    return (
        <div>
            <h2>This is Home page</h2>
            <Banner></Banner>
            <div className="grid grid-cols-3 py-10 px-10" >
                {
                    brandData.map(brand=><BrandCard key={brand.id} brand={brand}></BrandCard>)
                }
            </div>
        </div>
    );
};

export default Home;