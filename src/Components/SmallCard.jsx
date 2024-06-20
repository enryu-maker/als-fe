import React from 'react'
import { IMAGE } from '../Assets/Image'
import { FaRegHeart } from "react-icons/fa";
import { motion } from 'framer-motion';
export default function SmallCard() {
    return (
        <a href='#/home/info' className='h-[300px] w-[250px]  flex flex-col justify-evenly font-Montserrat'>
            <img src={IMAGE.sample} className='w-full rounded-lg h-[55%]' />
            <h1 className='text-lg font-Montserrat font-bold'>$5,250,000</h1>
            <div className=' flex space-x-2 text-ellipsis overflow-hidden w-[98%]'>
                <div className='flex items-center   '>
                    <img src={IMAGE.bed} className=' h-[20px] w-[20px]' />
                    <p className='text-xs font-Montserrat text-gray-700'>2 Beds</p>
                </div>
                <div className='flex items-center '>
                    <img src={IMAGE.bath} className=' h-[20px] w-[20px]' />
                    <p className='text-xs font-Montserrat text-gray-700'>8 Baths</p>
                </div>
                
            </div> 
            <div className='flex items-center '>
                    <img src={IMAGE.area} className=' h-[20px] w-[20px]' />
                    <p className='text-xs font-Montserrat text-gray-700'>9,600 sqft (on 1.15 acres)</p>
                </div>
            <h1 className='text-sm font-Montserrat text-gray-700 font-semibold'>910 Buckingham Cir NW</h1>
            <p className='text-sm font-Montserrat text-gray-700 font-semibold'>Atlanta, GA 30327</p>
            {/* <motion.button
                // whileHover={{scale:1.1}}
                whileTap={{ scale: 1.3 }}
                className=' self-end mx-3'>
                <FaRegHeart className=' hover:text-red-600' size={22} />
            </motion.button> */}
        </a>
    )
}
