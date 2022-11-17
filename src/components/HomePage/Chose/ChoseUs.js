import pic1 from '../../../assets/icons/Group 38729.svg'
import pic2 from '../../../assets/icons/check.svg'
import pic4 from '../../../assets/icons/person.svg'
import pic5 from '../../../assets/icons/deliveryt.svg'
import pic6 from '../../../assets/icons/Wrench.svg'
import pic3 from '../../../assets/icons/logo.eps'

const ChoseUs = () => {




    return (
        <div className='md:mx-40'>
            <div>
                <div className='flex justify-center'>
                    <div>
                        <p className='text-[#FF3811] text-2xl font-semibold flex justify-center'>Core feature</p>
                        <h1 className='text-4xl font-bold flex justify-center'> Why Choose Us </h1>
                        <p>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.  </p>
                    </div>
                </div>
            </div>

            <div className='md:flex justify-around  my-20'>
                <div className='p-10 bg-[#FF3811] rounded-md shadow-lg mt-5'>
                    <img src={pic1} alt="" />
                    <div>
                        <p>Time Delivery</p>
                    </div>
                </div>
                <div className='p-10 mt-5'>
                    <img src={pic2} alt="" />
                    <div>
                        <p>100% Guranty</p>
                    </div>
                </div>
                <div className='p-10 mt-5'>
                    <img src={pic4} alt="" />
                    <div>
                        <p>24/7 Support</p>
                    </div>
                </div>
                <div className='p-10 mt-5'>
                    <img src={pic5} alt="" />
                    <div>
                        <p>Timely Delivery</p>
                    </div>
                </div>
                <div className='p-10 mt-5'>
                    <img src={pic6} alt="" />
                    <div>
                        <p>Best Equipment</p>
                    </div>
                </div>
                <div className='p-10 mt-5'>
                    <img src={pic3} alt="" />
                    <div>
                        <p>Expert Team</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChoseUs;