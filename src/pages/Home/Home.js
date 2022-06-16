import React from 'react';
import AppStore from '../Shared/AppStore';
import Corusel from '../Shared/Corusel';
import Products from '../Shared/Products/Products';
import Banner from './Banner';

const Home = () => {
    return (
        <div>
            <Banner/>
           <Products/>
           <Corusel/> 
           <AppStore/>
        </div>
    );
};

export default Home;