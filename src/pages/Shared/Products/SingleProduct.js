import React from 'react';
import './SingleProduct.css'
const SingleProduct = ({product}) => {
    const{name,img,discription,price}=product;
    return (
        <div class="min-h-screen flex justify-center items-center">
                    <div class="container flex justify-center">
                        <div class="max-w-sm py-32">
                            <div class="bg-white relative shadow-lg hover:shadow-xl transform transition duration-500 hover:scale-110 rounded-lg ">
                                <img class="rounded-t-lg " src={img} alt="" />
                                <div class="py-6 px-8 rounded-lg bg-white">
                                    <h1 class="text-gray-700 font-bold text-2xl mb-3 hover:text-gray-900 hover:cursor-pointer">{name}</h1>
                                    <p class="text-gray-700 tracking-wide">{discription}</p>
                                    <button class="mt-6 py-2 px-4 bg-yellow-400 text-gray-800 font-bold rounded-lg shadow-md hover:shadow-lg transition duration-300">Buy Now</button>
                                </div>
                                <div class="absolute top-2 right-2 py-2 px-4 bg-white rounded-lg">
                                    <span class="text-md">${price}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    );
};

export default SingleProduct;