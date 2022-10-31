import React from 'react';
import image from '../../../assets/images/about_us/person.jpg'
import part from '../../../assets/images/about_us/parts.jpg'

const AboutUs = () => {
    return (
        <div className='flex flex-col md:flex-row md:mx-40 my-32 '>
            <div className='relative'>
                <div>
                    <img className=' w-4/5 rounded-lg shadow-2xl' src={image} alt="" />
                </div>
                <div className=' absolute right-5 top-1/2 w-3/5 border-8 rounded-lg shadow-2xl'>
                    <img className='' src={part} alt="" />
                </div>
            </div>
            <div className='mx-5'>
                <p className='text-[#FF3811] font-semibold'> About US</p>
                <h1 className='text-4xl font-bold'> We are qualified <br />
                    & of experience <br />
                    in this field</h1>
                <p className=' text-gray-500'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. <br />
                <br />
                the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                
                </p>
                <button className='text-white bg-[#FF3811] px-4 py-2 rounded-md mt-5'> Get More Info</button>
            </div>
        </div>
    );
};

export default AboutUs;