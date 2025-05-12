import Image from 'next/image';
import React from 'react';
import quote from '../image/qute-icon.svg'
import c1 from '../image/comment1.png'
import c2 from '../image/comment2.png'

function Slider() {
    return (
        <div className='p-10 text-white gap-10 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2'>

            <div className='p-5 relative grid grid-cols-2'>
                <div><Image src={c1} alt='c1' /></div>

                <div className='flex flex-col'>
                    <div>
                        <h2 className='lg:text-xl xl:text-xl md:text-xl text-xs font-bold text-zinc-300'>یکی از بهترین تجربه های من همکاری با امیرعلی بود. بسیار منظم و دقیق و کار بلد. پیشنهاد میکنم حتما کارتون رو بهش بسپارید</h2>
                    </div>

                    <div className='mt-5'>
                        <h4 className='font-extrabold lg:text-lg xl:text-lg md:text-lg text-sm'>محمد ندایی</h4>
                    </div>

                    <div>
                        <h4 className='font-light text-zinc-600'>UI/UX Designer</h4>
                    </div>

                    <div><Image className='w-[30%] mt-5' src={quote} alt='.' /></div>
                </div>
            </div>

            <div className='p-5 relative grid grid-cols-2'>
                <div><Image src={c2} alt='c1' /></div>

                <div className='flex flex-col'>
                    <div>
                        <h2 className='lg:text-xl xl:text-xl md:text-xl text-xs font-bold text-justify text-zinc-300'>یکی از بهترین تجربه های من همکاری با امیرعلی بود. بسیار منظم و دقیق و کار بلد. پیشنهاد میکنم حتما کارتون رو بهش بسپارید</h2>
                    </div>

                    <div className='mt-5'>
                        <h4 className='font-extrabold lg:text-lg xl:text-lg md:text-lg text-sm'>حسین تاج</h4>
                    </div>

                    <div>
                        <h4 className='font-light text-zinc-600'>UI/UX Designer</h4>
                    </div>

                    <div><Image className='w-[30%] mt-5' src={quote} alt='.' /></div>
                </div>

            </div>

        </div>
    )
}

export default Slider