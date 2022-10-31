import React from 'react';
import login from '../assets/images/login/login.svg'
import google from '../assets/images/social/Google_Icons-09-512.webp'
import facebook from '../assets/images/social/facebook_circle_color-512.webp'
import linked from '../assets/images/social/145807.png'
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className='mx-10 my-3 grid grid-cols-1 md:grid-cols-2 gap-5'>
            <div>
                <img src={login} alt="" />
            </div>
            <div className=''>
                <form className=' border border-gray-300 p-10 rounded-md'>
                    <h1 className='text-4xl text-gray-600 mb-10 flex justify-center'>Sign Up</h1>
                    <div className=' form-control lg:m-10'>
                        <label className='Font-semibold mb-3' htmlFor="name">Name :</label>
                        <input placeholder='Enter name' className='border border-gray-400 py-3 rounded-md text-xl' type="text" />
                    </div>
                    <div className=' form-control lg:m-10'>
                        <label className='Font-semibold mb-3 mt-3' htmlFor="name">Email :</label>
                        <input placeholder='Enter Email ' className='border border-gray-400 py-3 rounded-md text-xl' type="Email" required />
                    </div>
                    <div className=' form-control lg:m-10'>
                        <label className='Font-semibold mb-3 mt-3' htmlFor="name">Password :</label>
                        <input placeholder='Confirm Password' className='border border-gray-400 py-3 rounded-md text-xl' type="password" required />
                    </div>
                    <div className='form-control mt-3 lg:m-10'>
                        <button className='pl-5 pr-5 py-2 btn bg-[#FF3811] border-0'>Sign Up</button>
                    </div>
                    <div>
                        <p className='text-md text-gray-600 flex justify-center mb-3'>Or Sign up With</p>
                        <div className='flex justify-center'>
                            <img className=' w-11 ml-3' src={google} alt="" />
                            <img className='w-10 ml-3' src={facebook} alt="" />
                            <img className='w-10 ml-3' src={linked} alt="" />
                        </div>
                        <p className='text-md text-gray-600 flex justify-center mt-3'>Already Have An Account? <Link className=' text-blue-700' to='/login'> Please Sign In</Link></p>
                    </div>
                </form>


            </div>
        </div>
    );
};

export default Register;