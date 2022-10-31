import React from 'react';
import { FaArrowRight } from "react-icons/fa";

const ServiceCart = ({ service }) => {
    const { title, img, price } = service
    return (

        <div className="card w-96  shadow-xl">
            <figure><img src={img} alt="" className='h-52 rounded-lg' /></figure>
            <div className="card-body">
                <h2 className="card-title font-bold">{title}</h2>
                <div className="card-actions justify-between">
                    <p className='text-[#FF3811] font-semibold'>Price: ${price}</p>
                    <button className=" text-[#FF3811]"><FaArrowRight></FaArrowRight></button>
                </div>
            </div>
        </div>

    );
};

export default ServiceCart;