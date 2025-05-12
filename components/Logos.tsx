import React from 'react'
import logo1 from '../image/logo1.svg'
import logo2 from '../image/logo2.svg'
import logo3 from '../image/logo3.svg'
import logo4 from '../image/logo4.svg'
import logo5 from '../image/logo5.svg'
import logo6 from '../image/logo6.svg'
import logo7 from '../image/logo7.svg'
import logo8 from '../image/logo8.svg'
import Image from 'next/image'

function Logos() {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-4 xl:grid-cols-4 md:grid-cols-4 p-10'>
            <div className='px-3 py-6 border-1 border-zinc-800 flex items-center justify-center'>
                <Image src={logo1} alt='logo' />
            </div>

            <div className='px-3 py-6 border-1 border-zinc-800 flex items-center justify-center'>
                <Image src={logo2} alt='logo' />
            </div>

            <div className='px-3 py-6 border-1 border-zinc-800 flex items-center justify-center'>
                <Image src={logo3} alt='logo' />
            </div>

            <div className='px-3 py-6 border-1 border-zinc-800 flex items-center justify-center'>
                <Image src={logo4} alt='logo' />
            </div>

            <div className='px-3 py-6 border-1 border-zinc-800 flex items-center justify-center'>
                <Image src={logo5} alt='logo' />
            </div>

            <div className='px-3 py-6 border-1 border-zinc-800 flex items-center justify-center'>
                <Image src={logo6} alt='logo' />
            </div>

            <div className='px-3 py-6 border-1 border-zinc-800 flex items-center justify-center'>
                <Image src={logo7} alt='logo' />
            </div>

            <div className='px-3 py-6 border-1 border-zinc-800 flex items-center justify-center'>
                <Image src={logo8} alt='logo' />
            </div>

        </div>
    )
}

export default Logos