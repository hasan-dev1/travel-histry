import React from "react";
import { BiTimeFive } from "react-icons/bi";
import { Link } from "react-router-dom";
import './MainPopulartour.css'

const MostPopulartour = () => {
  return (
    <div className="lg:w-3/5 lg:mx-auto mx-8 my-[100px]">
      <div className="flex lg:w-1/2 mx-auto flex-col text-center justify-between  my-12">
        <h3 className="text-5xl font-bold mb-3">Most Popular Tours</h3>
        <p className="text-accent">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
          ipsa voluptas non, aliquid voluptatem similique nisi.
        </p>
      </div>

      <div className="mt-5 w-4/5 mx-auto ">
        <div>
          <hr className="my-6" />
          <div className="grid lg:grid-cols-3 grid-cols-1 gap-10">
            <div className="lg:mt-5">
              <h3 className="text-4xl font-bold mb-2">
                Berlin heiglight <br /> Bike tour
              </h3>
              <p className="text-xl font-bold pt-2">
                <span>From</span>{" "}
                <span className="text-2xl text-primary ">$57</span>
              </p>
            </div>
            <div className="lg:mt-5">
              <p className="text-accent ">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum,
                nobis. Reprehenderit ipsa porro amet earum adipisci odit harum
                fugit ea sit sapiente
              </p>
              <div className="my-5 flex justify-start items-center">
                <div className="rating mr-5">
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                    
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                </div>
                <span>58 reviews</span>
              </div>
              <p className="flex justify-start items-center">
                <BiTimeFive className="text-primary text-xl mr-5"></BiTimeFive>{" "}
                <span>Approximately 5.3 hours</span>
              </p>
            </div>
            <div className="relative">
              <img
                className="w-full rounded-[20px] mainimg h-[15rem]"
                src="https://www.traveloffpath.com/wp-content/uploads/2022/05/Happy-Young-Female-Traveler-Enjoying-A-Long-Tail-Boatride-In-Thailand-1.jpg"
                alt=""
              />
              <div className="absolute top-0 left-0 hidenitem rounded-[20px] w-full h-full">
                <Link to={'/'} className="font-bold text-xl text-white hover:cursor-pointer ">Explore More</Link>
              </div>
            </div>
          </div>
        </div>
        <div>
          <hr className="my-6" />
          <div className="grid lg:grid-cols-3 grid-cols-1 gap-10">
            <div className="lg:mt-5">
              <h3 className="text-4xl font-bold mb-2">
                Berlin heiglight <br /> Bike tour
              </h3>
              <p className="text-xl font-bold pt-2">
                <span>From</span>{" "}
                <span className="text-2xl text-primary ">$57</span>
              </p>
            </div>
            <div className="lg:mt-5">
              <p className="text-accent ">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum,
                nobis. Reprehenderit ipsa porro amet earum adipisci odit harum
                fugit ea sit sapiente
              </p>
              <div className="my-5 flex justify-start items-center">
                <div className="rating mr-5">
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                    
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                </div>
                <span>58 reviews</span>
              </div>
              <p className="flex justify-start items-center">
                <BiTimeFive className="text-primary text-xl mr-5"></BiTimeFive>{" "}
                <span>Approximately 5.3 hours</span>
              </p>
            </div>
            <div className="relative">
              <img
                className="w-full rounded-[20px] mainimg h-[15rem]"
                src="https://www.traveloffpath.com/wp-content/uploads/2022/05/Happy-Young-Female-Traveler-Enjoying-A-Long-Tail-Boatride-In-Thailand-1.jpg"
                alt=""
              />
              <div className="absolute top-0 left-0 hidenitem rounded-[20px] w-full h-full">
                <Link to={'/'} className="font-bold text-xl text-white hover:cursor-pointer ">Explore More</Link>
              </div>
            </div>
          </div>
        </div>
        <div>
          <hr className="my-6" />
          <div className="grid lg:grid-cols-3 grid-cols-1 gap-10">
            <div className="lg:mt-5">
              <h3 className="text-4xl font-bold mb-2">
                Berlin heiglight <br /> Bike tour
              </h3>
              <p className="text-xl font-bold pt-2">
                <span>From</span>{" "}
                <span className="text-2xl text-primary ">$57</span>
              </p>
            </div>
            <div className="lg:mt-5">
              <p className="text-accent ">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum,
                nobis. Reprehenderit ipsa porro amet earum adipisci odit harum
                fugit ea sit sapiente
              </p>
              <div className="my-5 flex justify-start items-center">
                <div className="rating mr-5">
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                    
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                </div>
                <span>58 reviews</span>
              </div>
              <p className="flex justify-start items-center">
                <BiTimeFive className="text-primary text-xl mr-5"></BiTimeFive>{" "}
                <span>Approximately 5.3 hours</span>
              </p>
            </div>
            <div className="relative">
              <img
                className="w-full rounded-[20px] mainimg h-[15rem]"
                src="https://www.traveloffpath.com/wp-content/uploads/2022/05/Happy-Young-Female-Traveler-Enjoying-A-Long-Tail-Boatride-In-Thailand-1.jpg"
                alt=""
              />
              <div className="absolute top-0 left-0 hidenitem rounded-[20px] w-full h-full">
                <Link to={'/'} className="font-bold text-xl text-white hover:cursor-pointer ">Explore More</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <button className="btn px-12 rounded-full mt-6 btn-primary text-white capitalize ">
            Explore more
          </button>
        </div>
      </div>
    </div>
  );
};

export default MostPopulartour;
