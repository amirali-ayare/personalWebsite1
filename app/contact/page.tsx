import Link from 'next/link'
import React from 'react'
import ContactCard from './components/ContactCard'
import Connect from '@/components/Connect'

function page() {

    const contactCard = [
        {
            icon: <i className='bx bxs-map'></i>,
            title: "آدرس",
            p: "تهران خیابان شهید همت کوچه 28 پلاک 11"
        },
        {
            icon: <i className='bx bxs-envelope'></i>,
            title: "ایمیل",
            p: "example@gmail.com"
        },
        {
            icon: <i className='bx bxs-phone-call'></i>,
            title: "ارتباط",
            p: "09902321212"
        }
    ]

    return (
        <div className='text-white bg-black'>

            <div className='pages-header p-20 flex flex-col justify-center items-center gap-5'>
                <h1 className='font-extrabold text-4xl'>ارتباط</h1>
                <h4 className='flex items-center gap-2 font-light'>
                    <Link href={'/'} className='hover:text-rose-500 duration-500'>خانه</Link>
                    <i className='bx bxs-chevron-left'></i>
                    <span className='text-rose-500'>ارتباط</span>
                </h4>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 p-10 gap-8'>

                {contactCard.map((item , index)=>{
                    return(
                        <ContactCard key={index} {...item} />
                    )
                })}

            </div>

            <Connect />

        </div>
    )
}

export default page