import Image from 'next/image'
import React from 'react'
import p1 from '../image/portfoli1.jpg'
import p2 from '../image/portfoli2.jpg'

function Portfolio() {
    return (
        <div className='mt-5 p-10 text-white'>

            <div className='flex flex-col items-center mb-10'>
                <h4 className='text-rose-500 text-sm font-bold'>آخرین نمونه کار ها</h4>
                <h1 className='text-3xl mt-3 font-extrabold'>تبدیل ایده ها به واقعیت</h1>
                <p className='text-sm text-zinc-500 font-light lg:w-1/3 xl:w-1/3  w-full text-center mt-3'>
                مشاوران مشاوره کسب و کار با ارائه مشاوره های تخصصی و راهنمایی کسب و کارها به آنها کمک می کند تا عملکرد، کارایی و سازمانی خود را بهبود بخشند.
                </p>
            </div>


            <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 xl:grid-cols-2'>

                <div className='hoverImg'>
                    <div className='p-5 bg-neutral-900 border-2 border-zinc-700 rounded-3xl mb-4 overflow-hidden'>
                        <Image className='rounded-3xl duration-500' src={p1} alt='.' />
                    </div>
                    <div>
                        <h1 className='text-2xl line-anim cursor-pointer font-extrabold'>نمونه کار اول سایت شخصی</h1>
                        <h3 className='text-sm text-zinc-400 font-light'>برنامه نویسی وب</h3>
                    </div>
                </div>

                <div className='hoverImg'>
                    <div className='p-5 bg-neutral-900 border-2 border-zinc-700 rounded-3xl mb-4 overflow-hidden'>
                        <Image className='rounded-3xl duration-500' src={p2} alt='.' />
                    </div>
                    <div>
                        <h1 className='text-2xl line-anim cursor-pointer font-extrabold'>نمونه کار دوم سایت شخصی</h1>
                        <h3 className='text-sm text-zinc-400 font-light'>طراحی رابط کاربری</h3>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Portfolio