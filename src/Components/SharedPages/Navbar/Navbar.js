import React, { useEffect, useState } from "react";
import { BiHome, BiUser } from "react-icons/bi";
import { FaAngleDown, FaArrowUp } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import './Navbar.css'

const Navbar = () => {
  const user = true;
  const [profile, setProfile] = useState(true);
  const [navbg, setNavbg] = useState("shadow-xl");
  const [dispnone, setDispnone] = useState('hidden')

  useEffect(() => {
    window.onscroll = () => {
      if (
        document.body.scrollTop > 50 ||
        document.documentElement.scrollTop > 50
      ) {
        setNavbg("bg-[#F8F4EA] shadow-xl");
        setDispnone('block')
      } else {
        setNavbg("");
        setDispnone('hidden')
      }
    };
  }, []);

  function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  return (
    <div className={`lg:fixed top-0 left-0  w-full z-10 ${navbg}`}>
      <div className=" w-4/5 mx-auto py-3">
        <div className="flex justify-between items-center">
          <div className="text-xl font-bold">
            <Link className="text-[#7FE9DE]" to={"/"}>
              TravelPoint
            </Link>
          </div>
          <div className="lg:flex hidden">
            <ul className="flex justify-center items-center text-accent text-[18px] font-bold">
              <li>
                <NavLink
                  to={"/"}
                  className={({ isActive }) =>
                    isActive ? "mx-2 text-primary" : "mx-2 text-[#7FE9DE]"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/traveldeals"}
                  className={({ isActive }) =>
                    isActive ? "mx-2 text-primary" : "mx-2 text-[#7FE9DE]"
                  }
                >
                  TravelDeals
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/aboutus"}
                  className={({ isActive }) =>
                    isActive ? "mx-2 text-primary" : "mx-2 text-[#7FE9DE]"
                  }
                >
                  AboutUs
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/blogs"}
                  className={({ isActive }) =>
                    isActive ? "mx-2 text-primary" : "mx-2 text-[#7FE9DE]"
                  }
                >
                  Blogs
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="flex justify-end items-center">
            {user ? (
              <div
                onClick={() => setProfile(!profile)}
                className={`flex justify-end items-center relative ${
                  profile ? "bg-[#5BC0F8]" : "bg-primary"
                } p-1 rounded-full`}
              >
                <img
                  className="w-8 h-8 rounded-full mr-4"
                  src="https://static.vecteezy.com/system/resources/thumbnails/003/313/655/small_2x/man-traveling-to-the-beach-free-vector.jpg"
                  alt=""
                />
                <FaAngleDown></FaAngleDown>

                <div
                  className={`absolute top-12 bg-slate-200 p-4 z-20 rounded-[15px] ${
                    profile === true ? "-top-[500px]" : "right-10"
                  }`}
                >
                  <ul>
                    <li className="my-2">
                      {" "}
                      <NavLink
                        to={"/"}
                        className={`px-4 hover:bg-primary py-2 font-semibold text-primary hover:text-white rounded-[10px] flex justify-start items-center`}
                      >
                        <BiUser className="mr-2 text-xl"></BiUser>
                        <span>Profile</span>
                      </NavLink>
                    </li>
                    <li className="my-2">
                      {" "}
                      <NavLink
                        to={"/dashboard"}
                        className={`px-4 hover:bg-primary py-2 font-semibold text-primary hover:text-white rounded-[10px] flex justify-start items-center`}
                      >
                        <BiHome className="mr-2 text-xl"></BiHome>
                        <span>Dahboard</span>
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            ) : (
              <>
                <Link to={'/login'} className="btn btn-sm text-white btn-primary rounded-full px-4 mx-1 capitalize">
                  Login
                </Link>
                <Link to={'/signup'} className="btn btn-sm text-white bg-sky-600 rounded-full px-4 mx-1 capitalize">
                  SignUp
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
      <div>
        <button
          onClick={backToTop}
          type="button"
          className={`fixed bottom-24 bg-purple-500 text-white p-3 rounded-xl right-12 ${dispnone}`}
        >
          <FaArrowUp></FaArrowUp>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
