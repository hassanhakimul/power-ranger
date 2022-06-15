import React, { useEffect, useState } from 'react';
import SingleProduct from './SingleProduct';

const Products = () => {
    const[products,setProducts]=useState([]);
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    }
    ,[])
    return (
        <div className='mt-10'>
            <h1 className='flex justify-center text-3xl text-secondary text-bold '>A BRAND NEW TEAM. GOOD OL' DINO POWER. HOW'S THAT FOR A CHANGE?</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    products.map(product=><SingleProduct product={product} key={product._id}></SingleProduct>)
                }
            </div>
        </div>
    );
};

export default Products;



