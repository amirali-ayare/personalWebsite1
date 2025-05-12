import React from 'react'
import EduCard from './EduCard'
import Image from 'next/image'
import line from '../image/custom-line.png'


function Education() {

    const firstRow = [
        {
            title: "دستیار کارگردان",
            year: "2010-2014",
            p: "هر پروژه در اینجا نشان دهنده تعهد من به برتری و سازگاری است که برای برآوردن نیازهای منحصر به فرد هر مشتری طراحی شده است."
        },
        {
            title: "بازاریابی مربی",
            year: "2005-2009",
            p: "پورتفولیو شخصی مجموعه‌ای از کار حرفه‌ای یک فرد است که مهارت‌ها و تجربه‌های یک نمونه کار شخصی را به نمایش می‌گذارد."
        }
    ]

    const secondRow = [
        {
            title: "دستیار طراحی",
            year: "2008-2012",
            p: "هر پروژه در اینجا نشان دهنده تعهد من به تعالی و سازگاری است که برای برآورده کردن نیازهای منحصر به فرد هر مشتری طراحی شده است."
        },
        {
            title: "دستیار طراحی",
            year: "2008-2012",
            p: "من این امتیاز را داشته‌ام که با مشتریان مختلف، از استارت‌آپ‌ها گرفته تا شرکت‌های تأسیس‌شده، کار کنم و به ایده‌هایشان کمک کنم."
        }
    ]

    return (
        <div className='p-10 mt-5 text-white'>

            <div className='flex flex-col items-center'>
                <h4 className='text-rose-500 text-sm font-bold'>تحصیلات و تجربه ها</h4>
                <h1 className='text-3xl mt-3 font-extrabold'>تحصیلات و تجارب من</h1>
                <p className='text-sm text-zinc-500 font-light lg:w-1/3 xl:w-1/3  w-full text-center mt-3'>
                    مشاوران مشاوره کسب و کار با ارائه مشاوره های تخصصی و راهنمایی کسب و کارها به آنها کمک می کند تا عملکرد، کارایی و سازمانی خود را بهبود بخشند.
                </p>
            </div>

            <div className='mt-10'>

                <div className='flex items-center mb-5'>
                    <h1 className='text-white font-extrabold text-2xl'>تحصیلات</h1>
                    <Image src={line} className='h-[2x] mt-2 mr-4' alt='line' />
                </div>

                <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-5 mb-5'>
                    {
                        firstRow.map((item, index) => {
                            return <EduCard {...item} key={index} />
                        })
                    }
                </div>

                <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-5'>
                    {
                        secondRow.map((item, index) => {
                            return <EduCard {...item} key={index} />
                        })
                    }
                </div>

            </div>

        </div>
    )
}

export default Education