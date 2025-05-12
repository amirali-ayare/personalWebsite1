import Experiences from '@/components/Experiences'
import LatestService from '@/components/LatestService'
import Link from 'next/link'
import React from 'react'

function page() {
    return (
        <div className='bg-black text-white'>
            <div className='pages-header p-20 flex flex-col justify-center items-center gap-5'>
                <h1 className='font-extrabold text-4xl'>خدمات</h1>
                <h4 className='flex items-center gap-2 font-light'>
                    <Link href={'/'} className='hover:text-rose-500 duration-500'>خانه</Link>
                    <i className='bx bxs-chevron-left'></i>
                    <span className='text-rose-500'>خدمات</span>
                </h4>
            </div>

            <Experiences />
            <LatestService />
        </div>
    )
}

export default page