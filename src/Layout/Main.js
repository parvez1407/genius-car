import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import Header from '../Pages/Shared/Header/Header';

const Main = () => {
    return (
        <div>
            <div className='max-w-screen-2xl mx-auto'>
                <Header></Header>
            </div>
            <div className='max-w-screen-2xl mx-auto mb-12'>
                <Outlet></Outlet>
            </div>
            <div className='bg-black'>
                <div className='max-w-screen-2xl mx-auto bg-black  py-32'>
                    <Footer></Footer>
                </div>
            </div>
        </div>
    );
};

export default Main;