import React from 'react'
import Card from '../Components/Card'
import Search from '../Components/Search'

export default function Property() {
    return (
        <div className='w-full h-full flex flex-col justify-center items-center'>
            <Search/>
            <div className='h-[82vh] w-full flex justify-evenly items-center'>
                <div className='w-[58%] h-[88%] space-y-4'>
                    <h1 className='text-xl font-Montserrat font-bold'>Atlanta, GA Real Estate & Homes For Sale</h1>
                    <div className='w-[100%] h-[100%]   flex flex-wrap justify-between overflow-auto overflow-y-scroll'>
                        <Card />
                        <Card />
                        <Card />
                    </div>
                </div>
                <div className='w-[38%] h-[96%] bg-slate-100 rounded-xl'>map</div>
            </div>
        </div>
    )
}
