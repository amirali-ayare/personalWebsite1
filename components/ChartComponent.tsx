import React from 'react'
import Chart from './chart'
import line from '../image/custom-line.png'
import Image from 'next/image'


function ChartComponent() {

    const DevelopChartData = [
        {
            name: "React",
            percent: "90"
        },
        {
            name: "Next js",
            percent: "85"
        },
        {
            name: "CSS",
            percent: "70"
        },
        {
            name: "JavaScript",
            percent: "90"
        },
    ]

    const DesignChartData = [
        {
            name: "PhotoShop",
            percent: "100"
        },
        {
            name: "Figma",
            percent: "75"
        },
        {
            name: "Adobe XD",
            percent: "60"
        },
        {
            name: "Adobe Illustrator",
            percent: "70"
        },
    ]

    return (
        <div className='p-10 text-white grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-7'>

            <div>
                <div className='flex items-center'>
                    <h1 className='text-white font-extrabold text-2xl'>مهارت های برنامه نویسی</h1>
                    <Image src={line} className='h-[2x] mt-2 mr-4' alt='line'/>
                </div>

                {
                    DevelopChartData.map((i , index)=>{
                        return <Chart key={index} {...i} />
                    })
                }
            </div>

            <div>
                <div className='flex items-center'>
                    <h1 className='text-white font-extrabold text-2xl'>مهارت های طراحی</h1>
                    <Image src={line} className='h-[2x] mt-2 mr-4' alt='line'/>
                </div>

                {
                    DesignChartData.map((i , index)=>{
                        return <Chart key={index} {...i} />
                    })
                }
            </div>

        </div>
    )
}

export default ChartComponent