import React from 'react'
import ServiceCard from './ServiceCard'
import img from '../image/latest-services-user-image.png'
import Image from 'next/image'

function LatestService() {

    const data = [
        {
            title: "مجموعه ای از خلاقیت",
            p: "مشاوران مشاوره کسب و کار مشاوره تخصصی ارائه می دهند و کسب و کارها را راهنمایی می کنند تا به کارایی عملکرد آنها کمک کنند"
        },
        {
            title: "نمونه کارها من از نوآوری",
            p: "کار من مبتنی بر این باور است که طراحی متفکرانه و برنامه‌ریزی استراتژیک می‌تواند برندها را قدرتمند کند، کسب‌وکارها را متحول کند"
        },
        {
            title: "ویترینی از پروژه های من",
            p: "در این نمونه کارها، مجموعه‌ای از پروژه‌ها را خواهید دید که مهارت‌های من را در [مناطق اصلی، به‌عنوان مثال، طراحی وب واکنش‌گرا برجسته می‌کند."
        }
    ]

    return (
        <div className='p-10 mt-5 text-white'>

            <div className='flex flex-col items-center'>
                <h4 className='text-rose-500 text-sm font-bold'>آخرین خدمت</h4>
                <h1 className='text-3xl mt-3 font-extrabold'>الهام بخش یک پروژه جهانی</h1>
                <p className='text-sm text-zinc-500 font-light lg:w-1/3 xl:w-1/3  w-full text-center mt-3'>
                    مشاوران مشاوره کسب و کار با ارائه مشاوره های تخصصی و راهنمایی کسب و کارها به آنها کمک می کند تا عملکرد، کارایی و سازمانی خود را بهبود بخشند.
                </p>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-5 mt-10'>

                <div className='flex flex-col gap-5'>
                    {
                        data.map((item , index)=>{
                            return <ServiceCard key={index} {...item}/>
                        })
                    }
                </div>

                <div className='px-10'>
                    <Image src={img} alt='man' />
                </div>

            </div>

        </div>
    )
}

export default LatestService