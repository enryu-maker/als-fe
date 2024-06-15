import { motion } from 'framer-motion'
import React from 'react'
export default function Form() {
    return (
        <div className='w-[320px] flex flex-col justify-evenly items-center border-[1px] border-gray-50 h-[450px] shadow-lg rounded-lg'>
            <input
                placeholder='Name'
                type='text'
                className='font-Montserrat  outline-primary outline-1 border-[1px] w-[88%] px-3 py-2 text-lg'
            />
            <input
                placeholder='Phone'
                type='tel'
                className='font-Montserrat  outline-primary outline-1 border-[1px] w-[88%] px-3 py-2 text-lg'
            />
            <input
                placeholder='Email'
                type='email'
                className='font-Montserrat  outline-primary outline-1 border-[1px] w-[88%] px-3 py-2 text-lg'
            />
            <motion.button
                whileTap={{ scale: 1.1 }}
                //   onClick={}
                className='tracking-widest bg-primary flex justify-center items-center font-Montserrat text-white w-[88%] px-3 py-2 font-bold'>Request Info</motion.button>
            <p className=' text-[10px] w-[88%] text-justify text-gray-400'>
                By pressing Request Info, you agree that ALS and real estate professionals may contact you via phone/text about your inquiry,
                which may involve the use of automated means. You are not required to consent as a condition of purchasing any property, goods or services. Message/data rates may apply.
                You also agree to our Terms of Use ALS does not endorse any
                real estate professionals
            </p>
        </div>
    )
}
