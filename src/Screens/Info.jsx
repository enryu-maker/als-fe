import React from 'react'
import Form from '../Components/Form'
import { IMAGE } from '../Assets/Image'
import { motion } from 'framer-motion'
import Infopop from '../Components/Infopop'
import SmallCard from '../Components/SmallCard'

export default function Info() {
    const [show, setShow] = React.useState(false)
    const d = [1, 2, 3, 4]
    return (
        <div className='w-full h-full flex justify-center items-center'>
            {
                show ?
                    <Infopop setShow={setShow} />
                    :
                    null
            }
            <div className=' w-[68%] flex flex-col items-center my-10'>
                <div
                    onClick={() => {
                        setShow(true)
                    }}
                    className='h-[500px] w-full rounded-lg bg-gray-300' />
                <div className='flex flex-row justify-between w-[100%] my-8'>
                    <div className=' space-y-4 w-[65%]'>
                        <h1 className='text-3xl font-Montserrat font-bold'>910 Buckingham Cir NW</h1>
                        <p className='text-base font-Montserrat text-gray-700'>Atlanta, GA 30327</p>
                        <h1 className='text-3xl font-Montserrat font-bold'>$5,250,000</h1>
                        <div className=' flex w-full space-x-2'>
                            <div className='flex items-center  '>
                                <img src={IMAGE.bed} className=' h-[25x] w-[25px]' />
                                <p className='text-base font-Montserrat text-gray-700'>2 Beds</p>
                            </div>
                            <div className='flex items-center '>
                                <img src={IMAGE.bath} className=' h-[25x] w-[25px]' />
                                <p className='text-base font-Montserrat text-gray-700'>8 Baths</p>
                            </div>
                            <div className='flex items-center '>
                                <img src={IMAGE.area} className=' h-[25x] w-[25px]' />
                                <p className='text-base font-Montserrat text-gray-700'>9,600 sqft (on 1.15 acres)</p>
                            </div>
                        </div>
                        <h1 className='text-xl font-Montserrat font-bold'>Local Information</h1>
                        <div className='w-[100%] h-[220px] '>
                            <iframe className='h-full w-full rounded-xl' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14995.842606428492!2d73.7639747!3d20.0101661!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddeb2a84349985%3A0x449a6e5f81546855!2sNerdTech!5e0!3m2!1sen!2sin!4v1718903888080!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                    <Form />
                </div>
                <div className=' '>
                    <h1 className='text-xl font-Montserrat font-bold'>Description</h1>
                    <p className='text-base text-justify font-Montserrat pt-2 text-gray-400'>
                        Presenting a magnificent example of modern European-inspired architecture, meticulously crafted by KBD Development, Atlanta’s esteemed custom home builder, showcasing an elegant design by acclaimed architect Linda MacArthur. This luxury estate home features a remarkable array of high-quality finishes and amenities that cater to the refined tastes of sophisticated buyers. Upon entering, you’ll encounter a breathtakingly open layout highlighted by a dramatic wall of windows and a striking floating staircase. This design cleverly integrates the interior with the exterior, offering an ideal setting for social gatherings. The central great room features soaring ceilings and offers idyllic views of the walk-out level pool and entertainment lawn. The primary kitchen dazzles with bespoke Bell inset cabinetry, a spacious island, ample storage, and premium professional appliances, including a 48” Wolf Range. The home includes a discreetly positioned scullery, equipped with top-tier appliances like a steam oven, a full-sized Sub-Zero fridge, and an extra dishwasher. Additional luxurious features include a wet bar, a mudroom, a home office, an elevator shaft, and a dedicated pool bathroom. The main-level primary suite is a haven of sophistication with high-end finishes such as a barrel vault ceiling, grand his/her closets, and a spa-inspired marble and quartzite clad bathroom featuring a beautiful frameless walk-in shower, floating soaking tub, all complemented by a convenient laundry closet. Upstairs features four additional ensuite bedrooms, another dedicated laundry room, and a large flex room ideal for a kid’s den. The fully finished basement is an entertaining haven, offering a bedroom, a full bathroom, dual bar options, a game room, and spaces adaptable for a gym, wine storage, or a golf simulator/billiards area. The quality of finishes throughout the home is unparalleled, with Emtek door hardware, custom closet systems, Isokern fireplaces, an exquisite Circa lighting package, and 7-inch French White Oak flooring. The exterior is equally captivating, featuring a brick and limestone facade, Sapele Mahogany front doors, and Western Cedar garage doors. The Davinci slate roof adds an element of elegance, and the saltwater pool with a heated spa and sun shelf is a tranquil backyard haven. Located on over an acre in close proximity to Atlanta's most desirable private schools, including Pace Academy, Westminster, and Lovett. Nearing completion, there’s still an opportunity for buyers to personalize some options in this extraordinary home that masterfully combines luxury, elegance, and functionality.
                    </p>
                </div>
                <div className='my-8 self-start w-[100%]'>
                    <h1 className='text-2xl font-Montserrat font-bold pb-5'>Similar Homes You May Like</h1>
                    <div className=' overflow-x-scroll flex   h-[300px] space-x-5 '>
                        {
                            d.map((item, index) => (
                                <SmallCard />
                            ))
                        }
                    </div>
                </div>
                <div className='my-8 self-start w-[100%]'>
                    <h1 className='text-2xl font-Montserrat font-bold pb-5'>New Listings near 910 Buckingham Cir NW</h1>
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
        </div>
    )
}
