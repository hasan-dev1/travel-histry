import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
      <div className="w-[100vw] h-[90vh] flex justify-center items-center">
        <div className="bg-slate-100 w-1/3 mx-auto p-16 rounded-lg">
          <h3 className="text-6xl text-center mb-6">Login</h3>
          <div className="mb-6">
            <p className="text-xl">Email</p>
            <input type="text" className="w-full input focus:outline-none" />
          </div>
          <div className="mb-6">
            <p className="text-xl">Password</p>
            <input
              type="password"
              className="w-full input focus:outline-none"
            />
          </div>
          <div>
            <button className="btn btn-primary w-full text-white">
              Submit
            </button>
            <p className='text-center my-2'>New in travelpoint? <Link className='text-primary' to={'/signup'}>SignUp</Link></p>
          </div>
        </div>
      </div>
    );
};

export default Login;