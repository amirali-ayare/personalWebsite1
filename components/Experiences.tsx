import React from 'react'

function Experiences() {

    const card = [
        {
            icon: <i className='bx bx-envelope text-rose-500 text-6xl'></i>,
            text: "بازاریابی",
            p: "23 پروژه"
        },
        {
            icon: <i className='bx bx-pencil text-rose-500 text-6xl'></i>,
            text: "طراحی سایت",
            p: "43 پروژه"
        },
        {
            icon: <i className='bx bx-code-curly text-rose-500 text-6xl'></i>,
            text: "برنامه نویسی",
            p: "71 پروژه"
        },
        {
            icon: <i className='bx bx-palette text-rose-500 text-6xl'></i>,
            text: "طراحی رابط کاربری",
            p: "12 پروژه"
        }
    ]

    return (
        <div className='p-10 text-white'>
            <div className='grid grid-cols-1 lg:grid-cols-4 xl:grid-cols-4 gap-5'>

                {
                    card.map((item, index) => {
                        return (
                            <div key={index} className='border-1 rounded-2xl border-rose-950 p-10 flex gap-3 items-center flex-col'>
                                {item.icon}
                                <h2 className='text-2xl font-extrabold line-anim cursor-pointer'>{item.text}</h2>
                                <h4 className='text-sm text-gray-500'>{item.p}</h4>
                            </div>
                        )
                    })
                }


            </div>
        </div>
    )
}

export default Experiences