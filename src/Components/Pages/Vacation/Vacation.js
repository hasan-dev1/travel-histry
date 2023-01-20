import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import VacationTitle from "./VacationTitle";
import { FcCloseUpMode } from "react-icons/fc";

const Vacation = () => {
    const data = [...Array(20)]
    const [loading, setLoading] = useState(false)
    const [traveldata, setTravelData] = useState()

    useEffect(()=>{
      setLoading(true)
      fetch(`http://localhost:5000/traveldata`)
        .then((res) => res.json())
        .then((data) => {
          setTravelData(data[0]);
          setLoading(false);
        });
    },[])

  return (
    <div className="my-8 lg:w-3/5 lg:mx-auto mx-8">
      <VacationTitle></VacationTitle>
      <div>
        <div className="mt-12 mb-6">
          <ul className="flex justify-start items-center text-white flex-wrap">
            <li className="my-3">
              <NavLink
                to={"/"}
                className="w-8 h-8 rounded-full mr-3 bg-primary py-2 px-4 font-bold"
              >
                All
              </NavLink>
            </li>
            <li className="my-3">
              <NavLink
                to={"/"}
                className="w-8 h-8 rounded-full mr-3 bg-primary py-2 px-4 font-bold"
              >
                Trending
              </NavLink>
            </li>
            <li className="my-3">
              <NavLink
                to={"/"}
                className="w-8 h-8 rounded-full mr-3 bg-primary py-2 px-4 font-bold"
              >
                Popular
              </NavLink>
            </li>
            <li className="my-3">
              <NavLink
                to={"/"}
                className="w-8 h-8 rounded-full mr-3 bg-primary py-2 px-4 font-bold"
              >
                Feautures
              </NavLink>
            </li>
            <li className="my-3">
              <NavLink
                to={"/"}
                className="w-8 h-8 rounded-full mr-3 bg-primary py-2 px-4 font-bold"
              >
                Recomended
              </NavLink>
            </li>
            <li className="my-3">
              <NavLink
                to={"/"}
                className="w-8 h-8 rounded-full mr-3 bg-primary py-2 px-4 font-bold"
              >
                Tour Packeges
              </NavLink>
            </li>
          </ul>
        </div>
        <div>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
            {loading ? (
              <div>Loading...</div>
            ) : (
              traveldata?.vacation?.slice(0,6).map((item, idx) => (
                <div key={idx}>
                  <img
                    className="w-full rounded-lg lg:h-[20rem] md:h-[12rem] h-[15rem]"
                    src="https://static.vecteezy.com/system/resources/thumbnails/003/313/655/small_2x/man-traveling-to-the-beach-free-vector.jpg"
                    alt=""
                  />
                  <div className="flex justify-between items-center font-bold text-xl mt-3">
                    <h3 className="flex justify-start items-center">
                      <span>
                        <FcCloseUpMode className="mr-1"></FcCloseUpMode>
                      </span>{" "}
                      <span>Title name</span>
                    </h3>
                    <h3 className="">$66.38</h3>
                  </div>
                  <hr className="my-3 border-t-2" />
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Dolores harum nam asperiores praesentium odio....Read more
                  </p>
                </div>
              ))
            )}
            
          
          </div>
        </div>
        <div className="lg:flex-nowrap flex justify-center items-center flex-wrap  mt-8">
          <button className="btn btn-sm btn-primary rounded-full capitalize text-white">
            back page
          </button>
          {data?.slice(0, 5).map((item, idx) => (
            <div key={idx}>
              <button className="btn btn-sm btn-primary rounded-full capitalize text-white mx-1">
                {idx + 1}
              </button>
            </div>
          ))}
          <button className="btn btn-sm bg-sky-600 rounded-full capitalize text-white mx-1">
            {"... " + data.length}
          </button>
          <button className="btn btn-sm btn-primary rounded-full capitalize text-white">
            next page
          </button>
        </div>
      </div>
    </div>
  );
};

export default Vacation;
