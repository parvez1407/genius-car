import React from 'react';
import person from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'

const About = () => {
    return (
        <div className="hero my-32">
            <div className="hero-content flex-col lg:flex-row">
                <div className='relative w-1/2'>
                    <img src={person} alt="" className="w-4/5 h-full rounded-lg drop-shadow-lg" />
                    <img src={parts} alt="" className="w-3/5 right-5 top-1/2 border-white border-8 rounded-lg drop-shadow-lg absolute" />
                </div>
                <div className='w-1/2'>
                    <h3 className='text-orange-500 font-bold text-2xl'>About Us</h3>
                    <h1 className="text-5xl font-bold leading-tight my-5">We are qualified <br /> & of experience <br /> in this field</h1>
                    <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomized words which don't look even slightly believable. <br /> <br /> the majority have suffered alteration in some form, by injected humour, or randomized words which don't look even slightly believable.  </p>
                    <button className="btn bg-orange-600 hover:bg-orange-500 px-8 py-2 border-0">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;