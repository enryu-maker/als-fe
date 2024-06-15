import React from 'react'
import { IMAGE } from '../Assets/Image'
import { useSelector } from 'react-redux'

export default function Footer() {
  const cat = useSelector(state => state.Reducers.cat)
  const logo = useSelector(state => state.Reducers.icon)
  const contact = useSelector(state => state.Reducers.contact)



  const type = [
    {
      id: 1,
      name: "Residential"
    },
    {
      id: 1,
      name: "Commercial"
    },
    {
      id: 1,
      name: "Industrial"
    },
    {
      id: 1,
      name: "Agriculture lands"
    },
    {
      id: 1,
      name: "Farm houses"
    },
  ]
  const social = [
    {
      id: 1,
      name: "Instagram"
    },
    {
      id: 1,
      name: "Facebook"
    },
    {
      id: 1,
      name: "Twitter"
    },
  ]


  return (
    <div className='w-full h-[80vh]  font-Montserrat justify-evenly  items-center flex flex-col bg-gray-100'>
      <div className='w-[88%] sm:w-[78%]  h-[88%] flex justify-evenly items-center flex-col'>
        <p className=' font-medium text-2xl font-Montserrat text-center text-blue-950 tracking-widest'>discover 📍 a place  🏠  you'll love 💗 to live</p>
        <div className='flex w-full flex-wrap justify-around sm:justify-evenly '>
          <div className='w-[45%] sm:w-auto'>
            <p className=' font-Montserrat text-lg sm:text-xl tracking-widest'>Categories</p>
            {
              cat?.map((item, index) => (
                <p key={index} className=' font-medium text-base tracking-wide text-gray-500'>{item?.name}</p>
              ))
            }
          </div>
          <div className='w-[45%] sm:w-auto'>
            <p className=' font-Montserrat text-lg sm:text-xl tracking-widest'>Building Type</p>
            {
              type?.map((item, index) => (
                <p key={index} className=' font-medium text-sm sm:text-base tracking-wide text-gray-500'>{item?.name}</p>
              ))
            }
          </div>
          <div className='w-[45%] sm:w-auto'>
            <p className=' font-Montserrat text-lg sm:text-xl tracking-widest'>Explore ALS </p>
            {
              social?.map((item, index) => (
                <p key={index} className=' font-medium text-sm sm:text-base tracking-wide text-gray-500'>{item?.name}</p>
              ))
            }
          </div>
          <div className='w-[45%] sm:w-auto flex flex-col'>
            <p className=' font-Montserrat text-lg sm:text-xl tracking-widest'>Contact Us </p>
            <a href={`tel:${contact[0]?.mobile_number}`} className=' font-medium text-sm sm:text-base tracking-wide text-gray-500'>{contact[0]?.mobile_number}</a>
            <a href={`mailto:${contact[0]?.email}`} className=' font-medium text-sm sm:text-base tracking-wide text-gray-500'>{contact[0]?.email}</a>
          </div>
        </div>
        <div className='flex justify-evenly items-center sm:w-[48%] w-[88%]'>
          <img alt={logo[1]?.name} src={logo[1]?.logo_image} className='sm:h-[65px] h-[45px]' />
          <p className=' font-Montserrat text-lg sm:text-xl tracking-widest'>by</p>
          <img alt={logo[0]?.name} src={logo[0]?.logo_image} className='sm:h-[65px] h-[45px]' />
        </div>
      </div>

      <svg width="68%" height="20%" viewBox="0 0 704 113" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style={{
        verticalAlign: "bottom"
      }}><g fill="none" fill-rule="evenodd"><path fill="#F6E3D5" d="M687.244 37.378h-23.687L684.07 25.46l-4.289-7.474-20.513 11.917L671.11 9.262l-7.429-4.315-11.843 20.64V1.754h-8.578v23.834L631.418 4.947l-7.43 4.315 11.844 20.642-20.513-11.917-4.289 7.474 20.513 11.917h-23.686v8.63h23.688L611.03 57.927l4.289 7.474 20.513-11.917-11.843 20.642 7.429 4.316 11.843-20.642v23.835h8.578V57.8l11.843 20.64 7.43-4.315-11.844-20.642L679.78 65.4l4.289-7.474-20.515-11.917h23.689z"></path><path fill="#144225" d="M595.426 25.97v24.457L566.86 58.18V113h18.95V89.238h9.308V113h58.771V42.575z"></path><path fill="#00ADBB" d="M566.859 113V76.436l-11.653-10.28-8.513 7.496-8.518-7.492-8.561 7.539-8.523-7.505-11.923 10.518v36.232l6.164.006V79.402l5.763-5.084 5.486 4.831v33.812l6.183.006V79.046l5.413-4.768 5.487 4.827v33.872l6.183.007V78.996l5.355-4.715 5.523 4.872v33.841z"></path><path d="M689.618 64.607c-7.502 0-13.584 6.095-13.584 13.613l.015 8.97a13.603 13.603 0 0 0 10.486 12.918V113h6.167v-12.892a13.603 13.603 0 0 0 10.486-12.918l.014-8.97c0-7.518-6.081-13.613-13.584-13.613Zm-46.23 2.19.015 20.393a13.602 13.602 0 0 0 10.485 12.917V113h6.167v-12.893A13.602 13.602 0 0 0 670.54 87.19h.015V66.798c0-7.518-6.082-13.613-13.584-13.613-7.501 0-13.583 6.095-13.583 13.613Z" fill="#C3D600"></path><path d="M334.785 37.712h42.454V113H265.062V25.278h28.142V.823h41.581v36.89Zm-53.191 14.032h12.003V38.553h-12.003v13.191Zm12.003 27.668h12.004v-13.19h-12.004v13.19Z" fill="#CEB7FF"></path><path d="M234.254 65.543c7.077 0 12.814 5.977 12.814 13.35l-.014 8.796c-.146 6.181-4.317 11.32-9.892 12.668V113h-5.816v-12.643c-5.575-1.349-9.745-6.487-9.891-12.668l-.014-8.797c0-7.372 5.736-13.35 12.813-13.35Zm44.135 2.736-.014 19.738c-.146 6.101-4.316 11.173-9.89 12.504V113h-5.817v-12.48c-5.575-1.33-9.746-6.402-9.892-12.503h-.014V68.28c0-7.278 5.737-13.177 12.814-13.177 7.076 0 12.813 5.9 12.813 13.177Z" fill="#144225"></path><path d="M401.33 31.69 360.677 68.29V113h81.31V68.289L401.33 31.69Zm-24.091 65.5h8.281V80.627h-8.281V97.19Z" fill="#730731"></path><path d="M458.343 78.564h35.48v18.783h-35.48V78.564Zm-5.317-5.156V113h-5.118V68.13h44.87v5.278h-39.752Z" fill="#C3D600"></path><path d="M54.142 75.066c23.159 0 42.611 16.21 47.76 37.934h-8.08c-4.956-17.342-20.862-30.072-39.68-30.072-.696 0-1.388.018-2.075.053v-7.863c.689-.028 1.38-.052 2.075-.052Zm-2.075 23.146c.687-.053 1.38-.088 2.08-.088 10.55 0 19.679 6.087 23.953 14.876h-9.158a18.782 18.782 0 0 0-14.794-7.165c-.703 0-1.397.042-2.081.117v-7.74ZM116.86 113c-5.373-29.703-31.454-52.306-62.723-52.306-.693 0-1.383.015-2.071.038v-7.799A71.244 71.244 0 0 1 80.9 58.091c12.093-9.718 27.404-15.588 44.06-15.753v7.791a63.44 63.44 0 0 0-36.15 11.743l-.003-.002a71.907 71.907 0 0 1 12.946 9.203 48.733 48.733 0 0 1 23.207-6.24v7.802a40.99 40.99 0 0 0-17.44 4.201 71.81 71.81 0 0 1 8.826 12.257 26.298 26.298 0 0 1 8.614-1.69v7.806c-1.775.069-3.49.375-5.109.903A70.831 70.831 0 0 1 124.775 113h-7.914Z" fill="#CEB7FF"></path><path d="M136.22 41.706h-9.72V31.012h9.72v10.694Zm9.722 23.17h-9.721V54.184h9.721v10.694Zm18.152-46.34v27.407l22.571-14.034 23.79 14.792-.114.116h.1V113h-93.662V18.536h47.315Z" fill="#FF8C68"></path><path d="M.974 79.955A14.766 14.766 0 0 0 0 85.246c0 6.88 4.694 12.664 11.06 14.337v13.28h7.582v-13.28c6.365-1.672 11.06-7.457 11.06-14.337 0-1.638-.266-3.213-.758-4.686L24.91 67.623A10.441 10.441 0 0 0 14.85 60a10.442 10.442 0 0 0-10.044 7.573L.974 79.955Zm33.654 1.827a14.85 14.85 0 0 0-.362 3.265c0 6.88 4.695 12.664 11.06 14.337v13.48h7.583v-13.48c6.365-1.673 11.059-7.458 11.059-14.337 0-.946-.089-1.872-.259-2.77h.115l-4.332-22.644c-.584-5.204-5.006-9.25-10.375-9.25s-9.791 4.046-10.374 9.25l-4.115 22.149Z" fill="#730731"></path></g></svg>
    </div>
  )
}



