import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import React from "react";
import { FaAngleLeft, FaAngleRight, FaAngleUp } from "react-icons/fa";
import "./ClientReview.css";

const ClientReview = () => {
  return (
    <div className="lg:w-3/5 lg:mx-auto mx-8 my-12 py-12 bg-sky-200 rounded  px-6">
      <Splide
        options={{
          perPage: 1,
          height: "30rem",
          rewind: true,
          gap: "1rem",
        }}
        hasTrack={false}
        aria-label="..."
      >
        <SplideTrack>
          <SplideSlide>
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 h-full">
              <div className=" flex flex-col justify-center items-start">
                <h3 className="text-4xl font-bold">
                  What our travelers <br /> are saying
                </h3>
                <p className="my-6 text-xl ">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio
                  ipsa cum numquam excepturi omnis harum perspiciatis sed
                  nostrum ipsam tempora voluptatibus
                </p>
                <h2 className=" text-xl">
                  {" "}
                  <span className="font-bold">-Md Hasan</span>
                  <span>(Kuakata, Bike Tour)</span>
                </h2>
              </div>
              <div className="flex justify-end items-center">
                <img
                  className="w-full h-full rounded"
                  src="https://media.istockphoto.com/id/1307397490/photo/landscape-photo-of-kuakata-sea-beach.jpg?b=1&s=612x612&w=0&k=20&c=50QOuNe3-C-ta2RCUmZbApfGUHGFdRQj5TIlEcFXLRw="
                  alt=""
                />
              </div>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 h-full">
              <div className=" flex flex-col justify-center items-start">
                <h3 className="text-4xl font-bold">
                  What our travelers <br /> are saying
                </h3>
                <p className="my-6 text-xl ">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio
                  ipsa cum numquam excepturi omnis harum perspiciatis sed
                  nostrum ipsam tempora voluptatibus
                </p>
                <h2 className=" text-xl">
                  {" "}
                  <span className="font-bold">-Md Hasan</span>
                  <span>(Kuakata, Bike Tour)</span>
                </h2>
              </div>
              <div className="flex justify-end items-center">
                <img
                  className="w-full h-full rounded"
                  src="https://media.istockphoto.com/id/1307397495/photo/landscape-photo-of-kuakata-sea-beach.jpg?b=1&s=612x612&w=0&k=20&c=vN0dh8subZXOTHUi5VQL7GRBdyQ-lk361fvXsLYQgEg="
                  alt=""
                />
              </div>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 h-full">
              <div className=" flex flex-col justify-center items-start">
                <h3 className="text-4xl font-bold">
                  What our travelers <br /> are saying
                </h3>
                <p className="my-6 text-xl ">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio
                  ipsa cum numquam excepturi omnis harum perspiciatis sed
                  nostrum ipsam tempora voluptatibus
                </p>
                <h2 className=" text-xl">
                  {" "}
                  <span className="font-bold">-Md Hasan</span>
                  <span>(Kuakata, Bike Tour)</span>
                </h2>
              </div>
              <div className="flex justify-end items-center">
                <img
                  className="w-full h-full rounded"
                  src="https://media.istockphoto.com/id/1307397501/photo/landscape-photo-of-kuakata-sea-beach.jpg?b=1&s=612x612&w=0&k=20&c=yNRyn1U8A-dMMHybQaaUUtnYi61kvtNBB6vRLU15sEQ="
                  alt=""
                />
              </div>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 h-full">
              <div className=" flex flex-col justify-center items-start">
                <h3 className="text-4xl font-bold">
                  What our travelers <br /> are saying
                </h3>
                <p className="my-6 text-xl ">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio
                  ipsa cum numquam excepturi omnis harum perspiciatis sed
                  nostrum ipsam tempora voluptatibus
                </p>
                <h2 className=" text-xl">
                  {" "}
                  <span className="font-bold">-Md Hasan</span>
                  <span>(Kuakata, Bike Tour)</span>
                </h2>
              </div>
              <div className="flex justify-end items-center">
                <img
                  className="w-full h-full rounded"
                  src="https://images.pexels.com/photos/341378/pexels-photo-341378.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
                  alt=""
                />
              </div>
            </div>
          </SplideSlide>
        </SplideTrack>

        <div className="splide__arrows">
          <button className="splide__arrow splide__arrow--prev">
            <FaAngleRight className="arrowsbtn"></FaAngleRight>
          </button>
          <button className="splide__arrow splide__arrow--next">
            <FaAngleRight className="arrowsbtn"></FaAngleRight>
          </button>
        </div>
      </Splide>
    </div>
  );
};

export default ClientReview;
