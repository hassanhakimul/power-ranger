import React from 'react';
import Products from '../Shared/Products/Products';
import Banner from './Banner';

const Home = () => {
    return (
        <div>
            <Banner/>
           <Products/> 
        </div>
    );
};

export default Home;