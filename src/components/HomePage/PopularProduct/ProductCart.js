import React from 'react';
import { FaStar } from "react-icons/fa";

const ProductCart = ({ product }) => {
    const { balance, picture, name } = product;
    return (

        <div className="card w-96  shadow-xl">
            <figure><img src={picture} alt="" className='h-52 rounded-lg' /></figure>
            <div className='flex justify-center'>
                <div className="card-body ">
                    <div className='flex'>
                        <FaStar className=' text-yellow-500'></FaStar>
                        <FaStar className=' text-yellow-500'></FaStar>
                        <FaStar className=' text-yellow-500'></FaStar>
                        <FaStar className=' text-yellow-500'></FaStar>
                        <FaStar className=' text-yellow-500'></FaStar>
                    </div>
                    <h2 className="card-title font-bold">{name}</h2>
                    <div className="card-actions justify-between">
                        <p className='text-[#FF3811] font-semibold'>Price: ${balance}</p>
                        <button className=" text-[#FF3811]"></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCart;