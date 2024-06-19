import React from 'react'
import { IoSearch } from "react-icons/io5";
export default function Search() {
    return (
        <div className='h-[50px] flex  w-[98%] mt-5 font-Montserrat space-x-5'>
            <div className='bg-white w-[450px] flex  h-full'>
                <input type="text" placeholder='Search...' className='w-[400px] rounded-l-lg bg-gray-100 h-full px-4'/>
                <button className='bg-primary w-[50px] h-full rounded-r-lg flex justify-center items-center'><IoSearch color='#fff' size={22}/></button>
            </div>
            <button className='border-primary border-2 h-full px-4 text-lg text-primary rounded-lg'>Save Search</button>
        </div>
    )
}
