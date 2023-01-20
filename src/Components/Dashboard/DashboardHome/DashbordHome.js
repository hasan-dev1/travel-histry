import React, { useEffect, useState } from "react";
import { BiCustomize } from "react-icons/bi";
import { FaMapMarkerAlt } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "./DashboardHome.css";

const DashbordHome = () => {
  const [loading, setLoading] = useState(false);
  const [travelplan, setTravelPlan] = useState();
  const [swipemenu, setSwipemenu] = useState("first");

  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:5000/traveldata")
      .then((res) => res.json())
      .then((data) => {
        setTravelPlan(data[0]);
        setLoading(false);
      });
  }, []);

  return (
    <div className="">
      <div className="flex justify-between items-center">
        <input
          type="search"
          placeholder="Search"
          className="input focus:outline-none w-full mr-3"
        />
        <button className="btn btn-primary rounded-lg text-xl capitalize text-white mx-3">
          <BiCustomize></BiCustomize>
        </button>
        <button className="btn btn-primary rounded-lg text-xl capitalize text-white mx-3">
          Search
        </button>
      </div>
      <div>
        <div>
          <h3 className="text-2xl font-bold my-3">Traveling By Plaling</h3>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
            {loading ? (
              <div>Loading...</div>
            ) : (
              travelplan?.travelplaning?.slice(0, 3).map((item, idx) => (
                <div key={idx} className="planningmaindiv rounded-[20px]">
                  <img
                    className="rounded-[20px] p-3 w-full h-[10rem]"
                    src={`${item.image}`}
                    alt=""
                  />
                  <div className="flex justify-between items-center p-3">
                    <h3 className="text-xl font-bold">{item.title}</h3>
                    <h3 className="text-xl font-bold text-sky-400">
                      {item.bankname}
                    </h3>
                  </div>
                  <p className=" px-3 py-1 flex jsutify-start items-center">
                    <span>
                      <FaMapMarkerAlt className="text-red-400 mr-3"></FaMapMarkerAlt>
                    </span>{" "}
                    <span>{item.locationname}</span>
                  </p>
                  <div className="flex justify-between items-center planninglastdiv p-4 rounded-b-[20px]">
                    <h3 className="font-bold">{item.dateandtime}</h3>
                    <h3 className="font-bold">${item.price}</h3>
                  </div>
                </div>
              ))
            )}
          </div>
          <div>
            <ul className="text-2xl font-bold my-5 flex lg:flex-row flex-col">
              <li>
                <NavLink
                  onClick={() => setSwipemenu("first")}
                  className={`${
                    swipemenu === "first"
                      ? "text-black mx-3"
                      : "text-[#D1D2DB] mx-3"
                  }`}
                >
                  Most Popular
                </NavLink>
              </li>
              <li>
                {" "}
                <NavLink
                  onClick={() => setSwipemenu("second")}
                  className={`${
                    swipemenu === "second"
                      ? "text-black mx-3"
                      : "text-[#D1D2DB] mx-3"
                  }`}
                >
                  Special Offer
                </NavLink>
              </li>
              <li>
                <NavLink
                  onClick={() => setSwipemenu("third")}
                  className={`${
                    swipemenu === "third"
                      ? "text-black mx-3"
                      : "text-[#D1D2DB] mx-3"
                  }`}
                >
                  Near Me
                </NavLink>
              </li>
            </ul>
            {swipemenu === "first" && (
              <div className="grid lg:grid-cols-2 grid-cols-1 gap-6">
                {travelplan?.travelplaning?.slice(0, 4).map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-[15px] p-3 flex justify-between items-center"
                  >
                    <div className="flex justify-start items-center">
                      <img
                        className="w-24 h-24 rounded-[15px]"
                        src={item.image}
                        alt=""
                      />
                      <div className="ml-2">
                        <h3 className="text-2xl font-bold">{item.title}</h3>
                        <p className="py-1 flex jsutify-start items-center">
                          <span>
                            <FaMapMarkerAlt className="text-red-400 mr-1"></FaMapMarkerAlt>
                          </span>{" "}
                          <span>{item.locationname}</span>
                        </p>
                      </div>
                    </div>
                    <div>
                      <h3 className="flex justify-end items-center">
                        <span className="text-2xl font-bold">{item.price}</span>{" "}
                        <span className="text-[#D1D2DB] mx-1">/day</span>
                      </h3>
                    </div>
                  </div>
                ))}
              </div>
            )}
            {swipemenu === "second" && (
              <div className="m-6 text-2xl font-bold">Cooming soon....</div>
            )}
            {swipemenu === "third" && (
              <div className="m-6 text-2xl font-bold">Cooming soon....</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// D1D2DB;
export default DashbordHome;
