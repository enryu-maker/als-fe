import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp } from "react-icons/fa6";

export default function FloatingBtn() {
//   const navigate = useNavigate()
  return (
    <motion.button
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.85 }}
      onClick={()=>{
        // navigate('/contact-us')
      }}
      className=' bg-primary1 rounded-full w-14 h-14 flex items-center justify-center '>
      <FaWhatsapp className=' text-3xl text-white ' />
    </motion.button>
  );
}