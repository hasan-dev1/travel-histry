import React, { useState } from 'react';
import { BiBell, BiBookmarkMinus, BiClipboard, BiCog, BiCollection, BiCompass, BiHome, BiLogOut, BiUser } from 'react-icons/bi';
import { FaAngleDoubleDown } from 'react-icons/fa';
import { FcCloseUpMode } from 'react-icons/fc';
import { NavLink, Outlet } from 'react-router-dom';

const DashboardLayout = () => {
  const [profile, setProfile] = useState(true)
    return (
      <div className="min-h-[90vh] mt-20">
        <div className="grid lg:grid-cols-12 grid-cols-1 gap-6">
          <div className="col-span-2 lg:flex justify-center hidden min-w-[180px]">
            <div className="bg-[#FFFFFF] flex flex-col justify-center items-center h-[80vh]">
              <h3 className=" mb-8 font-bold flex justify-center items-center text-primary">
                <FcCloseUpMode className="text-5xl"></FcCloseUpMode>{" "}
                <span className="text-2xl">TravelPoint.</span>
              </h3>
              <ul className="text-white font-bold mt-2">
                <li>
                  <NavLink
                    to={"/dashboard/main"}
                    className={({ isActive }) =>
                      isActive
                        ? "flex justify-start items-center my-4 py-4 px-6 bg-primary rounded-xl"
                        : "flex justify-start items-center my-4 py-4 px-6 text-[#D1D2DB] rounded-xl"
                    }
                  >
                    <BiHome className="mr-2 text-xl"></BiHome>
                    <span>Dashboard</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"/dashboard/discover"}
                    className={({ isActive }) =>
                      isActive
                        ? "flex justify-start items-center my-4 py-4 px-6 bg-primary rounded-xl"
                        : "flex justify-start items-center my-4 py-4 px-6 text-[#D1D2DB] rounded-xl"
                    }
                  >
                    <BiCompass className="mr-2 text-xl"></BiCompass>
                    <span>Discover</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"/dashboard/tickets"}
                    className={({ isActive }) =>
                      isActive
                        ? "flex justify-start items-center my-4 py-4 px-6 bg-primary rounded-xl"
                        : "flex justify-start items-center my-4 py-4 px-6 text-[#D1D2DB] rounded-xl"
                    }
                  >
                    <BiClipboard className="mr-2 text-xl"></BiClipboard>
                    <span>Tickets</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"/dashboard/favourits"}
                    className={({ isActive }) =>
                      isActive
                        ? "flex justify-start items-center my-4 py-4 px-6 bg-primary rounded-xl"
                        : "flex justify-start items-center my-4 py-4 px-6 text-[#D1D2DB] rounded-xl"
                    }
                  >
                    <BiBookmarkMinus className="mr-2 text-xl"></BiBookmarkMinus>
                    <span>Favourits</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"/dashboard/transaction"}
                    className={({ isActive }) =>
                      isActive
                        ? "flex justify-start items-center my-4 py-4 px-6 bg-primary rounded-xl"
                        : "flex justify-start items-center my-4 py-4 px-6 text-[#D1D2DB] rounded-xl"
                    }
                  >
                    <BiCollection className="mr-2 text-xl"></BiCollection>
                    <span>Transaction</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"/dashboard/setting"}
                    className={({ isActive }) =>
                      isActive
                        ? "flex justify-start items-center my-4 py-4 px-6 bg-primary rounded-xl"
                        : "flex justify-start items-center my-4 py-4 px-6 text-[#D1D2DB] rounded-xl"
                    }
                  >
                    <BiCog className="mr-2 text-xl"></BiCog>
                    <span>Setting</span>
                  </NavLink>
                </li>
              </ul>
              <div className="mt-auto">
                <NavLink
                  to={"/"}
                  className="flex justify-start items-center my-4 py-4 px-10 text-[#D1D2DB] font-bold rounded-xl"
                >
                  <BiLogOut className="mr-2 text-xl rotate-180"></BiLogOut>
                  <span>LogOut</span>
                </NavLink>
              </div>
            </div>
          </div>
          <div className="col-span-7">
            <div className="bg-[#f1efefc2] rounded-[20px] p-8">
              <div className="flex justify-between items-center mb-2">
                <div>
                  <h4 className="text-3xl font-bold">Hello Hasan!</h4>
                  <p className=" text-[#c2c2c5]">
                    welcome back, and explore the world
                  </p>
                </div>
                <div className="mr-3">
                  <div className="indicator">
                    <span className="indicator-item indicator-bottom mb-2 mr-1  badge bg-red-600"></span>
                    <BiBell className="text-4xl"></BiBell>
                  </div>
                </div>
              </div>
              <Outlet></Outlet>
            </div>
          </div>
          <div className="col-span-3  lg:pr-3">
            <div className="flex flex-col justify-center items-center">
              <div className="flex lg:justify-between justify-center items-center">
                <div className="flex justify-start items-center">
                  <img
                    className="w-16 h-16 rounded-full"
                    src="https://static.vecteezy.com/system/resources/thumbnails/003/313/655/small_2x/man-traveling-to-the-beach-free-vector.jpg"
                    alt=""
                  />
                  <div className=" mx-8">
                    <h3 className="text-2xl font-bold">Md Hasan</h3>
                    <p>
                      <span>Traveller</span>{" "}
                      <span className="text-primary">pro+</span>
                    </p>
                  </div>
                </div>
                <div className="relative">
                  <button onClick={()=> setProfile(!profile)} className="btn btn-primary rounded-full text-white">
                    <FaAngleDoubleDown></FaAngleDoubleDown>
                  </button>
                  <div
                    className={`absolute top-12 bg-slate-200 p-4 rounded-[15px] ${
                      profile === true ? "-top-[500px]" : "right-10"
                    }`}
                  >
                    <ul>
                      <li className="my-2">
                        {" "}
                        <NavLink
                        to={'/'}
                          className={`px-4 hover:bg-primary py-2 font-semibold text-primary hover:text-white rounded-[10px] flex justify-start items-center`}
                        >
                          <BiUser className="mr-2 text-xl"></BiUser>
                          <span>Profile</span>
                        </NavLink>
                      </li>
                      <li className="my-2">
                        {" "}
                        <NavLink
                        to={'/'}
                          className={`px-4 hover:bg-primary py-2 font-semibold text-primary hover:text-white rounded-[10px] flex justify-start items-center`}
                        >
                          <BiHome className="mr-2 text-xl"></BiHome>
                          <span>Dahboard</span>
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <p className="my-3">
                Please Finish your profile{" "}
                <span className="text-primary">Edit Now</span>
              </p>
              <hr className="border-t-2" />
            </div>
          </div>
        </div>
      </div>
    );
};

export default DashboardLayout;