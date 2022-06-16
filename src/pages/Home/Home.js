import React from 'react';
import AppStore from '../Shared/AppStore';
import Corusel from '../Shared/Corusel';
import NewsLetter from '../Shared/NewsLetter';
import Products from '../Shared/Products/Products';
import Stat from '../Shared/Stat';
import Banner from './Banner';

const Home = () => {
    return (
        <div>
            <Banner/>
           <Products/>
           <Stat/>
           {/* <Corusel/>  */}
           <AppStore/>
           <NewsLetter/>
        </div>
    );
};

export default Home;