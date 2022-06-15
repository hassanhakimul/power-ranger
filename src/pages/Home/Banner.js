import React from 'react';
import img from '../../images/group1.jpg'
import bg from '../../images/bg.jpg'
const Banner = () => {
    return (
        <div class="w-full my-10"  >
    <div class="flex "  style={{height:'450px'}}>
        <div class="flex items-center text-center lg:text-left px-8 md:px-12 lg:w-1/2">
            <div>
                <h2 class="text-3xl font-semibold text-amber-400 md:text-4xl"> GET YOUR<span class="text-primary"> FACOURITE</span> <span class="text-primary">RANGERS</span></h2>
                <p class="mt-2 text-sm text-gray-500 md:text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis commodi cum cupiditate ducimus, fugit harum id necessitatibus odio quam quasi, quibusdam rem tempora voluptates. Cumque debitis dignissimos id quam vel!</p>
                <div class="flex justify-center lg:justify-start mt-6">
                    <a class="px-4 py-3 bg-gray-900 text-gray-200 text-xs font-semibold rounded hover:bg-gray-800" href="#">Get Started</a>
                </div>
            </div>
        </div>
        <div class="hidden lg:block lg:w-1/2" style={{clipPath: "polygon(10% 0, 100% 0%, 100% 100%, 0 100%)" }}>
            <div class="h-full w-full object-cover" style={{ backgroundImage: `url(${img})`,  backgroundRepeat: 'no-repeat', }}>
                <div class="h-full bg-black opacity-25"></div>
            </div>
        </div>
    </div>
</div>
    );
};

export default Banner;