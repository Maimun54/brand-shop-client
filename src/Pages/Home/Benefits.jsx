
import { FaBeer } from 'react-icons/fa';
const Benefits = () => {
    return (
        <div >
            <div className="text-center">
                <h2 className="text-4xl font-bold py-3">Benefits of ElementalCars</h2>
                <p className="lg:text-xl p-2">Elemental Cars is a British automotive manufacturer known for its  innovative approach <br />to lightweight, high-performance sports cars.
</p>
            </div>
            <div className="grid md:grid-cols-1 grid-cols-1 lg:grid-cols-3 lg:px-10 lg:py-10">
            <div className=' lg:pl-20 md:pl-32 pl-16'>
                    <div className='flex py-2 '>
                    <img className='w-10 h-10' src="https://i.ibb.co/ZBqp3xj/security.png" alt="" />
                    <p className='text-2xl px-2'>Welcome Discount
                         </p>
                       
                       
                    </div>
                    <div className='flex py-2'>
                    <img className='w-10 h-10' src="https://i.ibb.co/XJK50Dj/condition.png" alt="" />
                    <p className='text-2xl px-2'>Good Condition</p>
                      
                        
                    </div>
                    <div className='flex py-2'>
                    <img className='w-10 h-10' src="https://i.ibb.co/TqdxZ7p/quality.png" alt="" />
                    <p className='text-2xl px-2'>1 years Guarantee</p>
                        
                        
                    </div>
                    <div className='flex py-2'>
                    <img className='w-10 h-10' src="https://i.ibb.co/YD3CZrX/tax-free.png" alt="" />
                        
                    <p className='text-2xl px-2'>No hidden Cost</p>
                       
                    </div>
                
                </div>
                <div className='' >
                <img className="lg:w-96" src="https://i.ibb.co/Vmmv2sX/car-49278-1280.jpg" alt="" />
                </div>
                <div className='lg:pl-0 md:pl-32 pl-16'>
                    <div className='flex py-2'>
                        <img className='w-10 h-10' src="https://i.ibb.co/ZBqp3xj/security.png" alt="" />
                        <p className='text-2xl px-2'>Fast online Payment
</p>
                    </div>
                    <div className='flex py-2'>
                        <img className='w-10 h-10' src="https://i.ibb.co/CWm8Dqr/dollar.png" alt="" />
                        <p className='text-2xl px-2'>Best Price</p>
                    </div>
                    <div className='flex py-2'>
                        <img className='w-10 h-10' src="https://i.ibb.co/TqdxZ7p/quality.png" alt="" />
                        <p className='text-2xl px-2'>2 years warranty</p>
                    </div>
                    <div className='flex py-2'>
                        <img className='w-10 h-10' src="https://i.ibb.co/YD3CZrX/tax-free.png" alt="" />
                        <p className='text-2xl px-2'>Fewer sales text</p>
                    </div>
                
                </div>
            </div>
        </div>
    );
};

export default Benefits;