import React from 'react';
import { FaRegCompass, FaUsers } from 'react-icons/fa';
import { BiBookBookmark, BiCog } from "react-icons/bi";

const Category = () => {
    return (
        <div className='lg:w-3/5 mx-8 lg:mx-auto my-[80px]'>
            <div className='grid lg:grid-cols-4 grid-cols-2 gap-8'>
                <div className='text-center flex flex-col justify-center items-center'>
                    <span className=' p-3 bg-slate-200 w-14 h-14 rounded-full flex justify-center items-center'><FaRegCompass className='w-8 h-8 text-purple-400'></FaRegCompass></span>
                    <h3 className='my-2 text-xl font-bold'>Lot of Choises</h3>
                    <p>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</p>
                </div>
                <div className='text-center flex flex-col justify-center items-center'>
                    <span className=' p-3 bg-slate-200 w-14 h-14 rounded-full flex justify-center items-center'><FaUsers className='w-8 h-8 text-purple-400'></FaUsers></span>
                    <h3 className='my-2 text-xl font-bold'>Best Tour Guide</h3>
                    <p>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet..</p>
                </div>
                <div className='text-center flex flex-col justify-center items-center'>
                    <span className=' p-3 bg-slate-200 w-14 h-14 rounded-full flex justify-center items-center'><BiBookBookmark className='w-8 h-8 text-purple-400'></BiBookBookmark></span>
                    <h3 className='my-2 text-xl font-bold'>Easy Booking</h3>
                    <p>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</p>
                </div>
                <div className='text-center flex flex-col justify-center items-center'>
                    <span className=' p-3 bg-slate-200 w-14 h-14 rounded-full flex justify-center items-center'><BiCog className='w-8 h-8 text-purple-400'></BiCog></span>
                    <h3 className='my-2 text-xl font-bold'>Lots of Promos</h3>
                    <p>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</p>
                </div>
            </div>
        </div>
    );
};

export default Category;