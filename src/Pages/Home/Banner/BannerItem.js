import React from 'react';

const BannerItem = ({ slide }) => {
    const { image, id, prev, next } = slide;
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
            <div className='carousel-img'>
                <img className="w-screen h-screen rounded-lg" src={image} alt="" />
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-28 top-1/4">
                <h1 className='text-6xl font-bold text-white'>
                    Affordable <br />
                    Price For Car <br />
                    Servicing
                </h1>
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 w-2/5 left-28 top-1/2">
                <p className='text-white text-xl'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
            </div>
            <div className="absolute flex justify-start transform -translate-y-1/2 w-2/5 left-28 top-3/4">
                <button className="btn btn-error mr-5 hover:text-white">Error</button>
                <button className="btn btn-outline btn-error">Error</button>
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                <a href={`#slide${prev}`} className="btn btn-circle bg-orange-600 hover:bg-orange-500 text-white border-0 mr-5">❮</a>
                <a href={`#slide${next}`} className="btn btn-circle bg-orange-600 hover:bg-orange-500 text-white border-0">❯</a>
            </div>
        </div>
    );
};

export default BannerItem;