import React from 'react';
import './SliderItem.css'

const SliderItem = ({ slide }) => {
    const { prev, next, id, image } = slide;
    return (

        <div id={`slide${id}`} className="carousel-item relative w-full">
            <div className='carousel-img w-[100%] '>
                <img alt="" src={image} className="lg:w-[100%]  lg:h-[800px]" />
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-24  md:top-20 lg:top-1/4">
                <h1 className='sm:text-4xl lg:text-6xl font-bold text-white'>
                    Affordable <br />
                    Price for Car <br />
                    Servicing
                </h1>
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 w-2/5 left-24  md:top-2/3 lg:bottom-0">
                <p className='md:text-xl text-white'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-8 right-5 bottom-10">
                <a href={`#slide${prev}`} className="btn btn-circle mr-10">❮</a>
                <a href={`#slide${next}`} className="btn btn-circle">❯</a>
            </div>
        </div>
    );
};

export default SliderItem;