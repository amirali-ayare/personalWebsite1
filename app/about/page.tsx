import ChartComponent from '@/components/ChartComponent'
import Connect from '@/components/Connect'
import Education from '@/components/Education'
import ExpCards from '@/components/ExpCards'
import Experiences from '@/components/Experiences'
import Link from 'next/link'
import React from 'react'

function page() {
    return (
        <div className='text-white bg-black'>

            <div className='pages-header p-20 flex flex-col justify-center items-center gap-5'>
                <h1 className='font-extrabold text-4xl'>درباره من</h1>
                <h4 className='flex items-center gap-2 font-light'>
                    <Link href={'/'} className='hover:text-rose-500 duration-500'>خانه</Link>
                    <i className='bx bxs-chevron-left'></i>
                    <span className='text-rose-500'>درباره من</span>
                </h4>
            </div>

            <Experiences />
            <ChartComponent />
            <ExpCards />
            <Education />
            <Connect />

        </div>
    )
}

export default page