import React, { useEffect, useState } from 'react';
import ProductCart from './ProductCart';

const PopularProduct = () => {
const [products, setProducts]=useState([]);
useEffect(()=>{
    fetch('products.json')
    .then(res=>res.json())
    .then(data=>setProducts(data))
},[])

    return (
        <div className='md:mx-40 mb-20'>
            <div className='flex justify-center'>
                <div>
                    <p className='text-[#FF3811] text-2xl font-semibold flex justify-center'>Popular Products</p>
                    <h1 className='text-4xl font-bold flex justify-center'> Browse Our Products</h1>
                    <p> the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.  </p>
                </div>
            </div>
            <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-20'>
                    {
                        products.map(product=><ProductCart
                        key={product._id}
                        product={product}
                        ></ProductCart>)
                    }
            </div>
            <div className='flex justify-center'>
                <button className='text-[#FF3811] px-6 py-2 btn btn-outline hover:bg-[#FF3811]  mt-20 '>More Products</button>
            </div>
        </div>
    );
};

export default PopularProduct;