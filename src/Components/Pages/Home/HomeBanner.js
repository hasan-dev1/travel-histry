import React from 'react';
import { FaMapMarkerAlt, FaSearch } from "react-icons/fa";

const HomeBanner = () => {
    return (
      <div className="relative">
        <img
          className="w-[100vw] h-[90vh] brightness-75"
          src="https://res.cloudinary.com/daryupoh9/image/upload/v1673727386/shifaaz-shamoon-okVXy9tG3KY-unsplash_mppuhw.jpg"
          alt=""
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
          <h4 className="lg:text-5xl font-bold text-white text-xl">
            Discover and enjoy your new
            <br className="lg:flex hidden" /> place and Experiences
          </h4>
          <p className="lg:text-xl my-5 text-white mx-auto lg:w-2/3">
            Explore destinations, places, and Unforgettable experiences Explore
            destinations, places, and Unforgettable experiences Explore
            destinations, places,
          </p>
          <div className="relative mx-auto max-w-md">
            <FaMapMarkerAlt className="absolute top-1/2 -translate-y-1/2 left-3 text-primary"></FaMapMarkerAlt>
            <input
              type="text"
              placeholder="Where you want to go?"
              className="input w-full pl-8 pr-28 rounded-full"
            />
            <button className="bg-primary px-3 py-1 rounded-full text-white font-bold absolute top-1/2 -translate-y-1/2 right-2 flex justify-center items-center">
              <FaSearch className='mr-1'></FaSearch>
              <span className='lg:flex hidden'>Search</span>
            </button>
          </div>
        </div>
      </div>
    );
};

export default HomeBanner;