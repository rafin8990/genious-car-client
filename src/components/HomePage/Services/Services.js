import React, { useEffect, useState } from 'react';
import ServiceCart from './ServiceCart';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch("Services.json")
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className=' mt-60 mb-32 md:mx-40'>
            <div className='flex justify-center'>
                <div>
                    <p className='text-[#FF3811] text-2xl font-semibold flex justify-center'>Service</p>
                    <h1 className='text-4xl font-bold flex justify-center'> Our Service Area</h1>
                    <p>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10'>
                {
                    services?.map(service=><ServiceCart
                         key={service?._id}
                        service={service}
                    ></ServiceCart>)
                }
            </div>
            <div className='flex justify-center'>
                <button className='text-[#FF3811] px-6 py-2 btn btn-outline hover:bg-[#FF3811]  mt-20 '>More Services</button>
            </div>
        </div>
    );
};

export default Services;