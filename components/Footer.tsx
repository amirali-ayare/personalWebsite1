import React from 'react'

function Foooter() {

    const li = [
        {
            txt: "خانه",
            link: ""
        },
        {
            txt: "درباره من",
            link: ""
        },
        {
            txt: "سرویس",
            link: ""
        },
        {
            txt: "وبلاگ",
            link: ""
        },
        {
            txt: "پروژه",
            link: ""
        },
        {
            txt: "ارتباط",
            link: ""
        }
    ]

    return (
        <div className='p-10 text-white bg-zinc-900 grid grid-cols-1 xl:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-10'>

            <div>
                <h3 className='font-extrabold text-2xl'>لینک سریع</h3>
                <ul className='mt-7'>
                    {li.map((i, index) => {
                        return <li className='text-md cursor-pointer hover:text-rose-500 duration-300 font-light my-2' key={index}>{i.txt}</li>
                    })}
                </ul>
            </div>

            <div>
                <h3 className='font-extrabold text-2xl'>ارتباط با من</h3>
                <ul className='mt-7'>
                    
                    <li className='text-md flex items-center cursor-pointer text-md hover:text-rose-500 duration-500 font-light my-4'>
                        <i className='bx bxs-envelope ml-3'></i>
                        <span>example@gmail.com</span>
                    </li>
                    
                    <li className='text-md flex items-center cursor-pointer text-md hover:text-rose-500 duration-500 font-light my-4'>
                        <i className='bx bxs-map-pin ml-3'></i>
                        <span>خیابان مطهری پلاک 80</span>
                    </li>

                    <li className='text-md flex items-center cursor-pointer text-md hover:text-rose-500 duration-500 font-light my-4'>
                        <i className='bx bxs-phone-call ml-3'></i>
                        <span>021-56498912</span>
                    </li>

                </ul>
            </div>

        </div>
    )
}

export default Foooter