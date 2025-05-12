import React from 'react'

function MySkill() {


    return (
        <div className='p-10 text-white'>

            <div>
                <h3 className='font-bold text-rose-500 mb-2'>مهارت های من</h3>
                <h1 className='font-extrabold text-3xl'>بهترین مهارت های من در زمینه تکنولوژی</h1>
            </div>


            <div className='mt-10'>

                <div className='grid hovercard duration-500 hover:bg-rose-500 grid-cols-1 lg:grid-cols-4 xl:grid-cols-4 gap-2 py-10 px-2'>
                    <div className='flex flex-col justify-center items-center'>
                        <span className='p-4 w-[60px] h-[60px] flex items-center text-2xl justify-center border-2 border-zinc-800 rounded-full'><i className='bx bx-pen'></i></span>
                    </div>

                    <div className='flex flex-col justify-center gap-7 items-center'>
                        <h1 className='font-extrabold text-2xl'>طراحی رابط کاربری/بصری</h1>
                        <h3 className='font-light text-sm'>21 تکمیل شده</h3>
                    </div>

                    <div className='flex flex-col justify-center items-center'>
                        <p className='text-zinc-500 text-sm text-justify'>
                        کار من مبتنی بر این باور است که طراحی متفکرانه و برنامه ریزی استراتژیک می تواند برندها را تقویت کند برنامه ریزی استراتژیک می تواند برندها را قدرتمند کند
                        </p>
                    </div>

                    <div className='flex justify-center items-center cursor-pointer'>
                        <h3 className='text-zinc-200 '>ادامه مطلب</h3>
                        <i className='bx bx-chevron-left mt-1'></i>
                    </div>
                </div>

                <div className='grid hovercard duration-500 hover:bg-rose-500 grid-cols-1 lg:grid-cols-4 xl:grid-cols-4 gap-2 py-10 px-2 border-t-2 border-b-2 border-zinc-900'>
                    <div className='flex flex-col justify-center items-center'>
                        <span className='p-4 w-[60px] h-[60px] flex items-center text-2xl justify-center border-2 border-zinc-800 rounded-full'><i className='bx bx-calendar-alt'></i></span>
                    </div>

                    <div className='flex flex-col justify-center gap-7 items-center'>
                        <h1 className='font-extrabold text-2xl'>طراحی رابط کاربری/بصری</h1>
                        <h3 className='font-light text-sm'>21 تکمیل شده</h3>
                    </div>

                    <div className='flex flex-col justify-center items-center'>
                        <p className='text-zinc-500 text-sm text-justify'>
                        در این نمونه کارها، مجموعه‌ای از پروژه‌ها را خواهید دید که مهارت‌های من را در مناطق اصلی، به‌عنوان مثال، طراحی وب واکنش‌گرا برجسته می‌کند.   
                        </p>
                    </div>

                    <div className='flex justify-center items-center  cursor-pointer'>
                        <h3 className='text-zinc-200 '>ادامه مطلب</h3>
                        <i className='bx bx-chevron-left mt-1'></i>
                    </div>
                </div>

                <div className='grid hovercard duration-500 hover:bg-rose-500 grid-cols-1 lg:grid-cols-4 xl:grid-cols-4 gap-2 py-10 px-2'>
                    <div className='flex flex-col justify-center items-center'>
                        <span className='p-4 w-[60px] h-[60px] flex items-center text-2xl justify-center border-2 border-zinc-800 rounded-full'><i className='bx bx-pyramid'></i></span>
                    </div>

                    <div className='flex flex-col justify-center gap-7 items-center'>
                        <h1 className='font-extrabold text-2xl'>طراحی حرکت</h1>
                        <h3 className='font-light text-sm'>20 تکمیل شده</h3>
                    </div>

                    <div className='flex flex-col justify-center items-center'>
                        <p className='text-zinc-500 text-sm text-justify'>
                        هر پروژه در اینجا تعهد من به برتری و سازگاری را نشان می دهد که برای برآورده کردن نیازهای منحصر به فرد هر مشتری طراحی شده است.
                        </p>
                    </div>

                    <div className='flex justify-center items-center cursor-pointer'>
                        <h3 className='text-zinc-200 '>ادامه مطلب</h3>
                        <i className='bx bx-chevron-left mt-1'></i>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default MySkill