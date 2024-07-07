import React from 'react'
import Footer from '../Components/Footer'
import video from '../Assets/2nd.mp4'
import { IMAGE } from '../Assets/Image'
import { IoIosArrowForward } from 'react-icons/io'
import SmallCard from '../Components/SmallCard'
export default function Home() {
  const d = [1, 2, 3, 4]
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
      <div className=' overflow-x-scroll flex   h-[300px] space-x-5 '>
        {
          d.map((item, index) => (
            <SmallCard />
          ))
        }
      </div>
      <h2 className=' font-poppins font-semibold text-4xl py-8 text-gray-800'>Explore homes on ALS</h2>
      <p className='text-center text-xs tracking-wide w-[58%]'>
        Take a deep dive and browse homes for sale, original neighborhood photos, resident reviews and local insights to find what is right for you.
      </p>
      <div className="px-5 py-5 overflow-x-scroll font-Montserrat w-full overflow-y-hidden hide-scrollbar">
        <div className="flex flex-row p-2 w-fit h-[45vh] gap-5 justify-evenly bg-white">
          <div
            style={{ backgroundImage: ` url(${IMAGE.sample1})` }}
            // style={{ backgroundImage: ⁠ url(${bg}) ⁠ }}
            className="flex flex-col  bg-cover hover:scale-[102%] transition-all ease-in-out  w-[35vh] h-full justify-between rounded-lg rounded-t-lg shadow-lg"
          >
            <div className="text-white p-4 flex h-fit w-full flex-col justify-between bg-gradient-to-b rounded-lg from-gray-400 to-transparent">
              <p className="text-white text-2xl font-semibold ">Trambakeshwar</p>
            </div>
            <div className="text-white p-4 flex flex-col justify-between">
              <button className="py-1 px-4 flex items-center justify-center align-middle text-black backdrop-blur-lg w-fit rounded-lg">
                View <IoIosArrowForward />
              </button>
            </div>
          </div>
          <div className="flex flex-col  w-[35vh] gap-5 h-full">
            <div
              style={{ backgroundImage: ` url(${IMAGE.sample1})` }}
              className="flex flex-col  bg-cover hover:scale-[102%] transition-all ease-in-out  w-[35vh] h-full justify-between rounded-lg rounded-t-lg shadow-lg"
            >
              <div className="text-white p-4 flex h-fit w-full flex-col justify-between bg-gradient-to-b rounded-lg from-gray-400 to-transparent">
                <p className="text-white text-2xl font-semibold ">
                  Trambakeshwar
                </p>
              </div>
              <div className="text-white p-4 flex flex-col justify-between">
                <button className="py-1 px-4 flex items-center justify-center align-middle text-black backdrop-blur-lg w-fit rounded-lg">
                  View <IoIosArrowForward />
                </button>
              </div>
            </div>
            <div
              style={{ backgroundImage: ` url(${IMAGE.sample1})` }}
              className="flex flex-col  bg-cover hover:scale-[102%] transition-all ease-in-out  w-[35vh] h-full justify-between rounded-lg rounded-t-lg shadow-lg"
            >
              <div className="text-white p-4 flex h-fit w-full flex-col justify-between bg-gradient-to-b rounded-lg from-gray-400 to-transparent">
                <p className="text-white text-2xl font-semibold ">
                  Trambakeshwar
                </p>
              </div>
              <div className="text-white p-4 flex flex-col justify-between">
                <button className="py-1 px-4 flex items-center justify-center align-middle text-black backdrop-blur-lg w-fit rounded-lg">
                  View <IoIosArrowForward />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h2 className=' font-poppins font-semibold text-4xl py-8 text-gray-800'>Newly listed homes in Nashik</h2>
      <div className=' overflow-x-scroll flex   h-[300px] space-x-5 '>
        {
          d.map((item, index) => (
            <SmallCard />
          ))
        }
      </div>
      <h2 className=' font-poppins font-semibold text-4xl py-8 text-gray-800' >See how ALS can help you</h2>
      <div className='container mx-auto font-Montserrat flex  justify-evenly space-x-10 my-5'>
        {
          options.map((item, index) => {
            return (
              <div key={index} className=' w-[25%] flex flex-col justify-evenly  items-center space-y-4'>
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
