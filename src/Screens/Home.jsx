import React from 'react'
import Footer from '../Components/Footer'
import video from '../Assets/2nd.mp4'
import { IMAGE } from '../Assets/Image'
export default function Home() {
  const options = [
    {
      id: 1,
      img: IMAGE.buy,
      title: "Buy a Home",
      desc: "With over 1 million+ homes for sale available on the website, Trulia can match you with a house you will want to call home.",
      buttonText: "Find a Home"
    },
    {
      id: 2,
      img: IMAGE.rent,
      title: "Rent a Home",
      desc: "With 35+ filters and custom keyword search, Trulia can help you easily find a home or apartment for rent that you'll love.",
      buttonText: "Find a Rental"
    },
    {
      id: 3,
      img: IMAGE.neighbor,
      title: "See neighborhoods",
      desc: "With more neighborhood insights than any other real estate website, we've captured the color and diversity of communities.",
      buttonText: "Learn More"
    }
  ]

  return (

    <div className='w-full h-full flex flex-col font-Montserrat justify-center items-center'>
        <video className='h-full' autoPlay muted loop >
          <source src={video} type="video/mp4" />
        </video>
      <h2 className=' font-poppins font-semibold text-4xl py-8 text-gray-800'>Recently Viewed</h2>
      <h2 className=' font-poppins font-semibold text-4xl pt-8 text-gray-800'>Explore homes on ALS</h2>
      <p className='text-center text-xs tracking-wide w-[58%]'>
      Take a deep dive and browse homes for sale, original neighborhood photos, resident reviews and local insights to find what is right for you.
      </p>
      <h2 className=' font-poppins font-semibold text-4xl pt-8 text-gray-800'>Newly listed homes in Nashik</h2>
      
      <h2 className=' font-poppins font-semibold text-4xl py-8 text-gray-800' >See how ALS can help you</h2>
      <div className='container mx-auto font-Montserrat flex  justify-evenly space-x-10 my-5'>
        {
          options.map((item, index) => {
            return (
              <div className=' w-[25%] flex flex-col justify-evenly  items-center space-y-4'>
                <img className='flex justify-center w-[200px] ' src={item.img} alt="" />
                <h1 className=' text-center font-Montserrat text-2xl font-bold text-gray-700 '>{item.title}</h1>
                <p className='text-center text-base tracking-wide'>{item.desc}</p>
                <button className='tracking-widest bg-primary flex justify-center items-center font-Montserrat text-white  px-3 py-[5px] font-bold'>{item.buttonText}</button>
              </div>
            )
          }
          )
        }
      </div>

      <Footer />
    </div>
  )
}
