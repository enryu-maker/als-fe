import React from 'react'
import Card from '../Components/Card'
import Search from '../Components/Search'
import Select from 'react-select';

export default function Property() {
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' },
    ];
    const [selectedOption, setSelectedOption] = React.useState(null);

    return (
        <div className='w-full h-full flex flex-col font-Montserrat justify-center items-center'>
            <Search />
            <div className='h-[82vh] w-full flex justify-evenly items-center'>
                <div className='w-full mx-10 h-[88%] space-y-4'>
                    <div className='flex items-center justify-between'>
                        <h1 className='text-xl font-Montserrat font-bold'>Atlanta, GA Real Estate & Homes For Sale</h1>
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
                {/* <div className='w-[38%] h-[96%] '>
                <iframe className='h-full w-full rounded-xl' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14995.842606428492!2d73.7639747!3d20.0101661!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddeb2a84349985%3A0x449a6e5f81546855!2sNerdTech!5e0!3m2!1sen!2sin!4v1718903888080!5m2!1sen!2sin"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div> */}
            </div>
        </div>
    )
}
