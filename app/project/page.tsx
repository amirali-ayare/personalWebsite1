import Link from 'next/link'
import React from 'react'
import Portfolio from '@/components/portfolio'


function page() {

    return (
        <div className='text-white bg-black'>

            <div className='pages-header p-20 flex flex-col justify-center items-center gap-5'>
                <h1 className='font-extrabold text-4xl'>پروژه</h1>
                <h4 className='flex items-center gap-2 font-light'>
                    <Link href={'/'} className='hover:text-rose-500 duration-500'>خانه</Link>
                    <i className='bx bxs-chevron-left'></i>
                    <span className='text-rose-500'>پروژه</span>
                </h4>
            </div>

            <Portfolio />

        </div>
    )
}

export default page