import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);
    console.log(services);
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className='mb-32'>
            <div className='mb-12'>
                <p className='text-center text-orange-500 font-bold text-2xl'>Service</p>
                <h1 className='text-5xl font-bold leading-tight my-5 text-center'>Our Service Area</h1>
                <p className='w-1/2 text-center mx-auto'>the majority have suffered alteration in some form, by injected humour, or randomized words which don't look even slightly believable. </p>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
            <div className='relative my-10'>
                <button className='btn btn-outline border-2 border-orange-600 text-orange-600 hover:bg-orange-500 hover:border-orange-500 absolute left-1/2 -translate-x-1/2'>More Services</button>
            </div>
        </div>
    );
};

export default Services;