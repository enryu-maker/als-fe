import React from 'react'
import { IMAGE } from '../Assets/Image'
import { FaRegHeart } from "react-icons/fa";
import { motion } from 'framer-motion';
export default function Card() {
    return (
            <a href='#/home/info' className='h-[410px] mb-5 w-[410px] flex flex-col justify-evenly font-Montserrat'>

                <img src={IMAGE.sample} className='w-full rounded-lg h-[60%]' />

                <h1 className='text-xl font-Montserrat font-bold'>$5,250,000</h1>
                <div className=' flex space-x-2'>
                    <div className='flex items-center  '>
                        <img src={IMAGE.bed} className=' h-[25x] w-[25px]' />
                        <p className='text-sm font-Montserrat text-gray-700'>2 Beds</p>
                    </div>
                    <div className='flex items-center '>
                        <img src={IMAGE.bath} className=' h-[25x] w-[25px]' />
                        <p className='text-sm font-Montserrat text-gray-700'>8 Baths</p>
                    </div>
                    <div className='flex items-center '>
                        <img src={IMAGE.area} className=' h-[25x] w-[25px]' />
                        <p className='text-sm font-Montserrat text-gray-700'>9,600 sqft (on 1.15 acres)</p>
                    </div>
                </div>
                <h1 className='text-base font-Montserrat text-gray-700'>910 Buckingham Cir NW</h1>
                <p className='text-base font-Montserrat text-gray-700'>Atlanta, GA 30327</p>
                <motion.button
                // whileHover={{scale:1.1}}
                whileTap={{scale:1.3}}
                className=' self-end mx-3'>
                    <FaRegHeart className=' hover:text-red-600' size={22} />
                </motion.button>
            </a>

    )
}
