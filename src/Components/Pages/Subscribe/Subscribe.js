import React from 'react';
import { FaEnvelope, FaSearch, FaTelegramPlane } from 'react-icons/fa';

const Subscribe = () => {
    return (
      <div className="w-1/2 mx-auto text-center my-[80px]">
        <div>
          <h3 className="text-4xl font-bold">Your Jurney Start here</h3>
          <p className="lg:w-1/2 lg:mx-auto my-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
            vitae voluptatibus.
          </p>
        </div>
        <div className="relative mx-auto max-w-md">
          <FaEnvelope className="absolute top-1/2 -translate-y-1/2 left-3 text-primary"></FaEnvelope>
          <input
            type="text"
            placeholder="Write Your Email"
            className="input w-full pl-8 lg:pr-28 focus:outline-none rounded-full bg-slate-200 "
          />
          <button className="bg-primary px-3 py-1 rounded-full text-white font-bold absolute top-1/2 -translate-y-1/2 right-2 flex justify-center items-center">
            <FaTelegramPlane className="mr-1"></FaTelegramPlane>
            <span className='lg:flex hidden'>Subscribe</span>
          </button>
        </div>
      </div>
    );
};

export default Subscribe;