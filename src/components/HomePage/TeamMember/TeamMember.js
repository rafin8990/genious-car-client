import React from 'react';
import pic1 from '../../../assets/images/team/1.jpg'
import pic2 from '../../../assets/images/team/2.jpg'
import pic3 from '../../../assets/images/team/3.jpg'
import { FaFacebook, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const TeamMember = () => {
    return (
        <div className=' md:mx-40 my-20 '>
            <div>
                <div className='flex justify-center'>
                    <div>
                        <p className='text-[#FF3811] text-2xl font-semibold flex justify-center'>Team</p>
                        <h1 className='text-4xl font-bold flex justify-center'> Meet Our Team</h1>
                        <p>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.  </p>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5 mt-10'>
                <div className='border border-gray-300 p-5 rounded-md'>
                    <div className='flex justify-center'>
                        <img className='h-72  rounded-md' src={pic2} alt="" />
                    </div>
                    <h3 className='text-2xl font-semibold flex justify-center'>Car Engine Plug</h3>
                    <p className='text-gray-500 flex justify-center'>Engine Expert</p>
                    <div className='flex justify-center mt-3'>
                        <FaFacebook className='ml-5'></FaFacebook>
                        <FaTwitter className='ml-5'></FaTwitter>
                        <FaLinkedinIn className='ml-5'></FaLinkedinIn>
                        <FaInstagram className='ml-5'></FaInstagram>
                    </div>
                </div>
                <div className='border border-gray-300 p-5 rounded-md'>
                    <div className='flex justify-center'>
                        <img className='h-72 rounded-md' src={pic3} alt="" />
                    </div>
                    <h3 className='text-2xl font-semibold flex justify-center'>Car Engine Plug</h3>
                    <p className='text-gray-500 flex justify-center'>Engine Expert</p>
                    <div className='flex justify-center mt-3'>
                        <FaFacebook className='ml-5'></FaFacebook>
                        <FaTwitter className='ml-5'></FaTwitter>
                        <FaLinkedinIn className='ml-5'></FaLinkedinIn>
                        <FaInstagram className='ml-5'></FaInstagram>
                    </div>
                </div>
                <div className='border border-gray-300 p-5 rounded-md'>
                    <div className='flex justify-center'>
                        <img className='h-72 rounded-md' src={pic1} alt="" />
                    </div>
                    <h3 className='text-2xl font-semibold flex justify-center'>Car Engine Plug</h3>
                    <p className='text-gray-500 flex justify-center'>Engine Expert</p>
                    <div className='flex justify-center mt-3'>
                        <FaFacebook className='ml-5'></FaFacebook>
                        <FaTwitter className='ml-5'></FaTwitter>
                        <FaLinkedinIn className='ml-5'></FaLinkedinIn>
                        <FaInstagram className='ml-5'></FaInstagram>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeamMember;