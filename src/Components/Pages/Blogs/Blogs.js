import React from 'react';

const Blogs = () => {
    return (
      <div className="lg:w-3/5 mx-8 lg:mx-auto mb-12 mt-20">
        <div>
          <h4 className="mb-8 text-5xl text-center font-bold">Blogs And Articles</h4>
          <div className='grid lg:grid-cols-2 grid-cols-1 gap-10'>
            <div className=" rounded-lg bg-base-100 shadow-xl">
              <figure>
                <img
                  className="rounded-t-lg w-full h-96"
                  src="https://media.istockphoto.com/photos/young-man-arms-outstretched-by-the-sea-at-sunrise-enjoying-freedom-picture-id1285301614?b=1&k=20&m=1285301614&s=612x612&w=0&h=oL04ACGYXP5cepM8NLZIyJaeUjuYoXYIrTT-Ej2jTAQ="
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <p className="text-accent">22-11-2022</p>
                <h2 className="card-title">
                  2022 Travel trends -What you need to know!
                </h2>
                <p className="text-accent">
                  If a dog chews shoes whose shoes does shoes whose shoes does
                  he choose?
                </p>
              </div>
            </div>
            <div className=" rounded-lg bg-base-100 shadow-xl">
              <figure>
                <img
                  className="rounded-t-lg w-full h-96"
                  src="https://media.istockphoto.com/photos/young-man-arms-outstretched-by-the-sea-at-sunrise-enjoying-freedom-picture-id1285301614?b=1&k=20&m=1285301614&s=612x612&w=0&h=oL04ACGYXP5cepM8NLZIyJaeUjuYoXYIrTT-Ej2jTAQ="
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <p className="text-accent">22-11-2022</p>
                <h2 className="card-title">
                  2022 Travel trends -What you need to know!
                </h2>
                <p className="text-accent">
                  If a dog chews shoes whose shoes does shoes whose shoes does
                  he choose?
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 text-center">
          <button className="px-12 rounded-full btn btn-primary text-white capitalize">
            View More
          </button>
        </div>
      </div>
    );
};

export default Blogs;