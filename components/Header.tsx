import React from 'react'
import man from '../image/man-header.png'
import Image from 'next/image'

function Header() {


    return (
        <div id='header' className='w-full h-[1000px] lg:h-[820px] xl:h-[820px] p-10 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 text-white'>

            <div className='h-full flex justify-center gap-5 flex-col'>
                <h3 className='font-extrabold text-xl'>سلام</h3>
                <h2 className='font-extrabold text-3xl'>من امیرعلی ایاره هستم یک</h2>
                <div className='inline-block'><p className='job-text w-[60%] md:w-[30%] lg:w-[40%] xl:w-[30%] text-rose-500 font-extrabold text-3xl'>
                    برنامه نویس
                </p></div>
                <p className='text-slate-400 text-sm font-light w-5/6 text-justify'>
                    این سایت تجربه های کاری من, مجموعه ای از نمونه کارهای من و مهارت من را به نمایش میزارد. با استفاده از لینک های
                    شبکه اجتماعی میتونید با من در فضای مجازی در ارتباط باشید.
                </p>
            </div>

            <div className='flex items-center justify-center px-10 relative'>
                <h3 className='font-black lg:text-5xl xl:text-5xl md:text-7xl text-3xl absolute animation-text'>برنامه نویس فرانت اند</h3>
                <Image src={man} alt='.' className='manimage ' />
            </div>

        </div>
    )
}

export default Header