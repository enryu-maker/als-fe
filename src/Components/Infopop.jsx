import { motion } from 'framer-motion'
import React from 'react'
import { IoClose } from "react-icons/io5";
import { FaRegShareSquare, FaRegHeart } from "react-icons/fa";
import Form from './Form';
export default function Infopop({
  setShow
}) {
  const menu = [
    {
      id: 1,
      title: "Media"
    },
    {
      id: 1,
      title: "Map"
    },
    {
      id: 1,
      title: "Schools"
    },
    {
      id: 1,
      title: "Shop & Eat"
    },
  ]
  return (
    <div
      className='w-[100%] h-[100%] z-50 fixed font-Montserrat top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-[#00000096]'
    >
      <div className='w-[88%] h-[80vh] bg-white '>
        <div className='h-[70px] border-b-2 w-full flex flex-row justify-between px-10 items-center'>
          <div className='flex space-x-5'>
            {
              menu?.map((item, index) => (
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  key={index} className=' font-bold hidden sm:flex hover:text-primary  text-base tracking-wide text-black'>{item?.title}</motion.button>
              ))
            }
          </div>
          <div className=' flex space-x-5 items-center'>
            <motion.button
              whileHover={{ scale: 1.1 }}
              className=' flex items-center space-x-2 font-bold border-[2px] py-1 px-3'>
              <FaRegShareSquare />&nbsp;Share
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              className=' flex items-center space-x-2 border-[2px] font-bold py-1 px-3'>
              <FaRegHeart />&nbsp;Save
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1, rotate: 180 }}
              onClick={() => setShow(false)} className='flex justify-center items-center text-lg text-black'>
              <IoClose size={30} />
            </motion.button>
          </div>
        </div>
        <div className='flex justify-center items-center h-[90%]'>
          <div className='w-[70%]'>

          </div>
          <Form />
        </div>
      </div>
    </div>
  )
}
