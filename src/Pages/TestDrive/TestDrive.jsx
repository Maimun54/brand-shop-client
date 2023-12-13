


import { useForm } from "react-hook-form";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";

import emailjs from '@emailjs/browser';
import { useRef } from "react";
import Swal from "sweetalert2";
const TestDrive = () => {
  const form = useRef();
    const {
        register,reset,handleSubmit,formState: { errors },} = useForm()
        const onSubmit= data => {
            console.log(data)
            emailjs.send('service_7v9mu4g', 'template_q5i7c5v', form.current, 'lGgUZ17OaAPqrYpBK')
      .then((result) => {
          console.log(result.text);
          if(result.text==='OK'){
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Your Booking is Confirm",
              showConfirmButton: false,
              timer: 1500
            });
            reset()
          }
      }, (error) => {
          console.log(error.text);
      });
        }
    return (
        <div className="max-w-[1200px] mx-auto p-4">
            <div className="xl:flex">
                <div className="xl:w-1/2">
        <h2 className="text-3xl text-center py-5 font-bold">Booking for Free Test Drive</h2>
        <p>Experience the Drive Before You Decide! Visit our brand shop car store and take advantage of our exclusive offer - a free test drive before purchase. Secure your spot now by booking a free test drive. Get behind the wheel, feel the thrill, and make an informed decision when choosing your next car. Book your free test drive today!</p>
        <div className="">
  <div className="mx-auto md:w-3/4 lg:w-full">
    
    <div className="card flex-shrink-0 w-full  shadow-2xl bg-base-100">
      <form onSubmit={handleSubmit(onSubmit)}  className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Full Name</span>
          </label>
          <input type="text" {...register("from_name",{required:true})} name="from_name" placeholder="name" className="input input-bordered"  />
          {errors.from_name && <span className="text-red-600">This field is required</span>}
        </div>
        
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" {...register("from_email",{required:true})} name="from_email" placeholder="email" className="input input-bordered"/>
          {errors.from_email && <span className="text-red-600">This field is required</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Booking Date</span>
          </label>
          <input type="date" {...register("booking",{required:true})} name="booking" placeholder="email" className="input input-bordered"/>
          {errors.booking && <span className="text-red-600">This field is required</span>}
        </div>
        
        <div className="form-control  mt-6">
        <label className="label">
            <span className="label-text">Message</span>
          </label>
        <textarea  type="text" {...register("message",{required:true})} name="message"  className="textarea textarea-bordered" placeholder="message"></textarea>
        {errors.message && <span className="text-red-600">This field is required</span>}
        </div>
        <button className="btn btn-primary"><input type="submit" value="Confirm Booking" /></button>
      </form>
      <div className="p-5">
        
       
      </div>
      
    </div>
  </div>
</div>
        </div>
                <div className="xl:w-1/2 ml-20">
                    <div>
                    <img className="xl:w-[95%]" src="https://i.ibb.co/z5QWC1D/pexels-luke-miller-19316800.jpg" alt="" />
                    </div>
                    <div className="flex">
                        
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestDrive;