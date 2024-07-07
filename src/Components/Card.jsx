import React from 'react'
import { IMAGE } from '../Assets/Image'
import { FaRegHeart } from "react-icons/fa";
import { motion } from 'framer-motion';
import { baseURL } from '../Helper/Helper';
export default function Card({
    data
}) {
    return (
        <a href={`#/property-info/${data?.title}/${data?.id}`} className='h-[410px] mb-5 w-[410px] flex flex-col justify-evenly font-Montserrat'>
            <img src={baseURL +  data?.images[0]?.image} className='w-full rounded-lg h-[60%]' />
            <h1 className='text-xl font-Montserrat font-bold'>₹ {data?.price}</h1>
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
            <h1 className='text-base font-Montserrat text-gray-700'>{data?.title}</h1>
            <p className='text-base font-Montserrat text-gray-700'>{data?.address}</p>
        </a>

    )
}
