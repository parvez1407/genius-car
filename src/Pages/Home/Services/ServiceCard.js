import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    const { title, img, price, _id } = service;
    return (
        <div className="card card-compact border-2 w-96 bg-base-100 shadow-xl">
            <figure><img src={img} alt="service" className='h-60 w-92 rou p-2' /></figure>
            <div className="card-body">
                <h2 className="card-title font-bold text-xl">{title}</h2>
                <div className="card-actions justify-end">
                    <p className='text-xl text-orange-600 font-semibold'>Price: ${price}</p>
                    <Link to={`/checkout/${_id}`}>
                        <button className="font-bold text-2xl text-orange-600"><FaArrowRight /></button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;