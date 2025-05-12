import Image from 'next/image'
import React from 'react'
import line from '../image/custom-line.png'
import photo from '../image/experience.jpg'

function ExperienceComponent() {
    return (
        <div className='p-10 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-5 text-white'>

            <div>
                <div className='flex items-center mb-12'>
                    <h1 className='text-white font-extrabold text-2xl'>تجربه ها</h1>
                    <Image src={line} className='h-[2x] mt-2 mr-4' alt='line' />
                </div>

                <div className='mb-12'>
                    <h3 className='font-extrabold text-xl mb-2'>سافت تک (2 سال)</h3>
                    <h4 className='text-lg font-thin mb-1'>UI/UX Designer</h4>
                    <p className='text-zinc-500 font-light'>
                        من در این زمینه تجربه‌های زیادی کسب کردم و ارتباطات خوبی را ساختم. از استاد دلسوزم ممنونم که به من درس های زیادی آموخت.
                    </p>
                </div>

                <div className='mb-5'>
                    <h3 className='font-extrabold text-xl mb-2'>مدرن تک (3 سال)</h3>
                    <h4 className='text-lg font-thin mb-1'>App Developer</h4>
                    <p className='text-zinc-500 font-light'>
                        من در این زمینه تجربه‌های زیادی کسب کردم و ارتباطات خوبی را ساختم. از استاد دلسوزم ممنونم که به من درس های زیادی آموخت.
                    </p>
                </div>

            </div>

            <div>
                <Image src={photo} className='rounded-lg' alt='.' />
            </div>

        </div>
    )
}

export default ExperienceComponent