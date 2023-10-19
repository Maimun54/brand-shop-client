import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
const BrandDetails = () => {
    // const {brand_name}=brand
    // console.log(brand)
    return (
        <div>
            
            <h2>THis brand BrandDetails page</h2>
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
        </div>
    );
};

export default BrandDetails;