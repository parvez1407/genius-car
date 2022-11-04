import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <div className='max-w-screen-2xl mx-auto mb-12'>
                <Banner></Banner>
                <About></About>
                <Services></Services>
            </div>
        </div>
    );
};

export default Home;