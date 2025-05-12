import React from 'react'
import blog1 from '../image/blog-img-1.jpg'
import blog2 from '../image/blog-img-2.jpg'
import blog3 from '../image/blog-img-3.jpg'
import Image from 'next/image'

function News() {

    const cards = [
        {
            title: "از کجا باید شروع کنیم؟ 4 قدم اصلی برای شروع",
            img: blog1
        },
        {
            title: "معرفی نرم افزار های پیشرفته طراحی رابط کاربری",
            img: blog2
        },
        {
            title: "چقدر طول میکشد تا مهارت لازم را کسب کنیم",
            img: blog3
        }
    ]


    return (
        <div className='p-10 text-white'>

            <div className='flex flex-col items-center'>
                <h4 className='text-rose-500 font-extrabold mb-4'>وبلاگ و اخبار</h4>
                <h1 className='font-extrabold text-center lg:text-3xl xl:text-3xl text-md'>
                    ارتقا برندسازی شخصی از طریق نمونه کار قوی
                </h1>
            </div>

            <div className='grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 mt-10'>


                {
                    cards.map((item , index) => {
                        return (
                            <div key={index} className='border-2 border-zinc-900 rounded-2xl hoverImg'>
                                <div className='overflow-hidden rounded-2xl'><Image src={item.img} alt='.' className='rounded-2xl duration-500' /></div>

                                <div className='p-5 flex flex-col'>
                                    <h2 className='cursor-pointer text-sm lg:text-md xl:text-md lg:font-extrabold  xl:font-extrabold line-anim2'>{item.title}</h2>

                                    <h4 className='text-zinc-500 text-xs lg:text-md xl:text-md hover:text-rose-500 duration-500 mt-5 cursor-pointer'>
                                        بخوانید...
                                    </h4>
                                </div>
                            </div>
                        )
                    })
                }



            </div>

        </div>
    )
}

export default News