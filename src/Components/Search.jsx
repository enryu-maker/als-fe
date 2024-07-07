import React from 'react'
import Select from 'react-select';
import { IoSearch } from "react-icons/io5";
export default function Search() {
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' },
    ];
    const [selectedOption, setSelectedOption] = React.useState(null);
    return (
        <div className='h-[50px] flex  px-6 self-center  w-[98%] mt-5 font-Montserrat items-center space-x-5'>
            <div className='bg-white w-[450px] flex  h-[38px]'>
                <input type="text" placeholder='Search...' className='w-[400px] rounded-l-[4px] bg-gray-100 h-full px-4' />
                <button className='bg-primary w-[50px] h-full rounded-r-[4px] flex justify-center items-center'><IoSearch color='#fff' size={22} /></button>
            </div>
            <Select
                className=' rounded-lg'
                placeholder="Property Type"
                isSearchable={false}
                defaultValue={selectedOption}
                onChange={setSelectedOption}
                options={options}
            />
            <Select
                className=' rounded-lg'
                placeholder="Location"
                isSearchable={false}
                defaultValue={selectedOption}
                onChange={setSelectedOption}
                options={options}
            />
            <button className='border-gray-300 border-[1px] h-[38px] px-4 text-lg text-primary '>Save Search</button>
        </div>
    )
}
