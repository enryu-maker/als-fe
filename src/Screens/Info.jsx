import React from 'react'
import Form from '../Components/Form'
import { IMAGE } from '../Assets/Image'
import { motion } from 'framer-motion'
import Infopop from '../Components/Infopop'
import SmallCard from '../Components/SmallCard'
import { useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { getPropertyInfo } from '../Store/actions'
import { baseURL } from '../Helper/Helper'
import Footer from '../Components/Footer'
import { Puff } from 'react-loader-spinner'

export default function Info() {
    const [show, setShow] = React.useState(false)
    const d = [1, 2, 3, 4]
    const state = useLocation()
    const dispatch = useDispatch()
    const [data, setData] = React.useState()
    const [loading, setLoading] = React.useState(false)
    React.useEffect(() => {
        dispatch(getPropertyInfo(state?.pathname.split('/')[3], setData, setLoading))
    }, [])
    return (
        <>
            <div className='w-full h-full flex justify-center items-center'>
                {
                    show ?
                        <Infopop setShow={setShow} />
                        :
                        null
                }
                {
                    loading ?
                    <div className=' w-[100%] h-[80vh] flex flex-col justify-center items-center my-10'>
                        <Puff
                            visible={true}
                            height="40"
                            width="40"
                            color="#4fa94d"
                            ariaLabel="puff-loading"
                            wrapperStyle={{}}
                            wrapperClass=""
                        />
                        </div>
                        :
                        <div className=' w-[68%] flex flex-col items-center my-10'>
                            <img
                                onClick={() => {
                                    setShow(true)
                                }}
                                src={baseURL + data?.images[0]?.image}
                                className='h-[500px] w-full rounded-lg object-cover ' />
                            <div className='flex flex-row justify-between w-[100%] my-8'>
                                <div className=' space-y-2 w-[65%]'>
                                    <h1 className='text-3xl font-Montserrat font-bold'>{data?.title}</h1>
                                    <p className='text-sm font-Montserrat text-gray-700'>#{data?.type?.name}</p>
                                    <p className='text-base font-Montserrat text-gray-700'>{data?.address}</p>
                                    <h1 className='text-3xl font-Montserrat font-bold'>₹ {data?.price}</h1>
                                    <div className=' flex w-full space-x-2'>
                                        <div className={`flex items-center ${data?.beds == null ? "hidden" : ""}`} >
                                            <img src={IMAGE.bed} className=' h-[25x] w-[25px]' />
                                            <p className='text-base font-Montserrat text-gray-700'>{data?.beds} Beds</p>
                                        </div>
                                        <div className={`flex items-center ${data?.baths == null ? "hidden" : ""}`} >
                                            <img src={IMAGE.bath} className=' h-[25x] w-[25px]' />
                                            <p className='text-base font-Montserrat text-gray-700'>{data?.baths} Baths</p>
                                        </div>
                                        <div className={`flex items-center ${data?.area == null ? "hidden" : ""}`} >
                                            <img src={IMAGE.area} className=' h-[25x] w-[25px]' />
                                            <p className='text-base font-Montserrat text-gray-700'>{data?.area}</p>
                                        </div>
                                    </div>
                                    <h1 className='text-xl font-Montserrat font-bold'>Local Information</h1>
                                    <div className='w-[100%] h-[220px] '>
                                        <iframe className='h-full w-full rounded-xl' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14995.842606428492!2d73.7639747!3d20.0101661!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddeb2a84349985%3A0x449a6e5f81546855!2sNerdTech!5e0!3m2!1sen!2sin!4v1718903888080!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                    </div>
                                </div>
                                <Form />
                            </div>
                            <div className='w-[100%]'>
                                <h1 className='text-xl font-Montserrat font-bold'>Description</h1>
                                <p className='text-base text-justify font-Montserrat pt-2 text-gray-400'>
                                    {data?.description}
                                </p>
                            </div>
                            <div className='my-8 self-start w-[100%]'>
                                <h1 className='text-2xl font-Montserrat font-bold pb-5'>Similar {data?.type?.name} You May Like</h1>
                                <div className=' overflow-x-scroll flex   h-[300px] space-x-5 '>
                                    {
                                        d.map((item, index) => (
                                            <SmallCard />
                                        ))
                                    }
                                </div>
                            </div>
                            <div className='my-8 self-start w-[100%]'>
                                <h1 className='text-2xl font-Montserrat font-bold pb-5'>New Listings {data?.location?.name}</h1>
                                <div className=' overflow-x-scroll flex   h-[300px] space-x-5 '>
                                    {
                                        d.map((item, index) => (
                                            <SmallCard />
                                        ))
                                    }
                                </div>
                            </div>
                            <div className='self-start my-8 w-full space-y-3'>
                                <h1 className='text-xl font-Montserrat font-bold'>Contact an ALS Team</h1>
                                <div className=' shadow-lg rounded-lg border-[1px] border-gray-50 h-[180px] w-[100%] flex flex-wrap justify-evenly items-center'>
                                    <input
                                        placeholder='Name'
                                        type='text'
                                        className='font-Montserrat  outline-primary outline-1 border-[1px] w-[44%] px-3 py-2 text-lg'
                                    />
                                    <input
                                        placeholder='Phone'
                                        type='tel'
                                        className='font-Montserrat  outline-primary outline-1 border-[1px] w-[44%] px-3 py-2 text-lg'
                                    />
                                    <input
                                        placeholder='Email'
                                        type='email'
                                        className='font-Montserrat  outline-primary outline-1 border-[1px] w-[44%] px-3 py-2 text-lg'
                                    />
                                    <motion.button
                                        whileTap={{ scale: 1.1 }}
                                        //   onClick={}
                                        className='tracking-widest bg-primary flex justify-center items-center font-Montserrat text-white w-[44%] px-3 py-2 font-bold'>Request Info</motion.button>
                                </div>
                                <p className=' text-[10px]  text-justify text-gray-400 font-Montserrat'>
                                    By pressing Request Info, you agree that ALS and real estate professionals may contact you via phone/text about your inquiry,
                                    which may involve the use of automated means. You are not required to consent as a condition of purchasing any property, goods or services. Message/data rates may apply.
                                    You also agree to our Terms of Use ALS does not endorse any
                                    real estate professionals
                                </p>
                            </div>
                        </div>
                }

            </div>
            <Footer />
        </>
    )
}
