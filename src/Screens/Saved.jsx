import React from 'react'
import Footer from '../Components/Footer'
import Search from '../Components/Search'
import { IMAGE } from '../Assets/Image'
import Card from '../Components/Card'
import Select from 'react-select';

export default function Saved() {
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' },
    ];
    const [selectedOption, setSelectedOption] = React.useState(null);
    return (
        <div className='w-full h-full flex flex-col font-Montserrat justify-center items-center'>
            <img src={IMAGE.stat1} className='h-[350px] w-full object-cover' />
            <Search />
            <div className='h-[82vh] w-full flex justify-evenly items-center'>
            <div className='w-full mx-10 h-[88%] space-y-4'>
                    <div className='flex items-center justify-between'>
                        <h1 className='text-xl font-Montserrat font-bold'>Your Saved Property 💗</h1>
                        <Select
                            className=' border-none'
                            placeholder="Sort By"
                            isSearchable={false}
                            defaultValue={selectedOption}
                            onChange={setSelectedOption}
                            options={options}
                        />
                    </div>
                    <div className='w-[100%] h-[100%]   flex flex-wrap justify-between overflow-auto overflow-y-scroll'>
                        <Card />
                        <Card />
                        <Card />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
