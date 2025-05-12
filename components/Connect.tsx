"use client"
import React, { useRef } from 'react'

function Connect() {
    const cardRef = useRef<HTMLDivElement | null>(null);

    const mouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (cardRef.current) {
            const x = e.pageX - cardRef.current.offsetLeft;
            const y = e.pageY - cardRef.current.offsetTop;

            cardRef.current.style.setProperty("--x", `${x}px`);
            cardRef.current.style.setProperty("--y", `${y}px`);
        }
    };

    return (
        <div className='p-10 text-white flex items-center justify-center'>

            <div onMouseMove={mouseMove} ref={cardRef} className='overflow-hidden gap-10 w-full rounded-3xl p-10 card-anim-border2 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2'>
                <div className='flex justify-center gap-3 flex-col'>
                    <h4 className='text-rose-500 text text-sm font-extrabold'>ارتباط با من</h4>
                    <h1 className='font-extrabold text text-3xl'>برند خود را با من ارتقا دهید</h1>
                    <p className='font-light text-zinc-400 text text-sm w-5/6 mt-5'>
                    این واقعیت جالب است که یک خواننده به صورت بیولوژیکی طراحی شده است که یک خواننده عمل می کند واقعیت این است که یک خواننده توزیع خواهد شد
                    </p>
                </div>

                <div className='grid grid-cols-1 gap-5'>
                    <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-5'>
                        <input type="text" className='p-5 text bg-zinc-900 rounded-xl border-2 border-zinc-700 w-full outline-none hover:border-rose-500 duration-500 text-sm' placeholder='شماره موبایل' />
                        <input type="text" className='p-5 text bg-zinc-900 rounded-xl border-2 border-zinc-700 w-full outline-none hover:border-rose-500 duration-500 text-sm' placeholder='نام' />
                    </div>
                    <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-5'>
                        <input type="text" className='p-5 text bg-zinc-900 rounded-xl border-2 border-zinc-700 w-full outline-none hover:border-rose-500 duration-500 text-sm' placeholder='ایمیل' />
                        <input type="text" className='p-5 text bg-zinc-900 rounded-xl border-2 border-zinc-700 w-full outline-none hover:border-rose-500 duration-500 text-sm' placeholder='موضوع' />
                    </div>
                    <div className='flex gap-5'>
                        <textarea className='p-5 text bg-zinc-900 rounded-xl border-2 border-zinc-700 outline-none w-full hover:border-rose-500 duration-500 resize-none text-sm' placeholder='پیام شما...' />
                    </div>

                    <div className='flex gap-5'>
                        <button className='rounded-full w-full bg-rose-600 text py-4'>ارسال</button>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default Connect