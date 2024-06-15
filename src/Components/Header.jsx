import { motion } from 'framer-motion'
import React from 'react'
import { IoIosMenu } from "react-icons/io";
import { FaInstagram } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import { RiFacebookCircleLine } from "react-icons/ri"
import { MdCall } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FiTwitter } from "react-icons/fi";
import { useSelector } from 'react-redux';
import { signInWithGooglePopup } from '../firebase.utils';
export default function Header() {
  // const [show, setShow] = React.useState(false)
  const logo = useSelector(state => state.Reducers.icon)
  const cat = useSelector(state => state.Reducers.cat)
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    console.log(response);
  }
  return (
    <>
      <div className='h-[35px] font-Montserrat w-full bg-primary1 shadow-lg hidden sm:flex justify-center items-center '>
        <div className='w-[78%] h-full space-x-3 text-white flex justify-between items-center '>
          <div className='flex space-x-5 items-center justify-center'>
            <a href='tel:+919930999998' className='font-medium hidden sm:flex  text-sm tracking-wide justify-center items-center '><MdCall size={20} className='mr-2' /> +919930999998</a>
            <a href='tel:+919930999998' className='font-medium hidden sm:flex  text-sm tracking-wide justify-center items-center '><FaLocationDot size={18} className='mr-2' /> +919930999998</a>
          </div>
          <div className='flex space-x-5'>
            <a href='mailto:affordableluxuryspaces@gmail.com' className='font-medium hidden sm:flex  text-base tracking-wide'><MdOutlineMail /></a>
            <a href='mailto:affordableluxuryspaces@gmail.com' className='font-medium hidden sm:flex  text-base tracking-wide'><FaInstagram /></a>
            <a href='mailto:affordableluxuryspaces@gmail.com' className='font-medium hidden sm:flex  text-base tracking-wide'><RiFacebookCircleLine /></a>
            <a href='mailto:affordableluxuryspaces@gmail.com' className='font-medium hidden sm:flex  text-base tracking-wide'><FiTwitter /></a>

          </div>
        </div>
      </div>
      <div className='h-[70px] font-Montserrat w-full bg-white shadow-lg flex justify-center items-center sticky top-0 '>
        <div className='w-[78%] h-full flex justify-between items-center '>
          <div className='space-x-4 flex items-center '>
            <img alt={logo[0]?.name} src={logo[0]?.logo_image} className='h-[40px]' />
            {
              cat?.map((item, index) => (
                <motion.button whileHover={{ scale: 1.1 }} key={index} className=' font-medium hidden sm:flex hover:text-primary1 text-base tracking-wide text-black'>{item?.name}</motion.button>
              ))
            }
          </div>
          <div>
            <motion.button
              whileTap={{ scale: 1.1 }}
              onClick={logGoogleUser}
              className='tracking-widest hidden  sm:flex rounded-md text-primary1 font-bold'>Login</motion.button>
          </div>
          <motion.button
            className='sm:hidden flex'
            whileHover={{ scale: 1.2 }}>
            <IoIosMenu size={30} />
          </motion.button>
        </div>
      </div >
    </>

  )
}
