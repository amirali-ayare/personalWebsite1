import React from 'react'

interface IChartProps {
    name: string;
    percent: string;
}

function Chart({ name, percent }: IChartProps) {

    const widthStyle = {
        width: `${percent}%`
    };
    return (
        <div className='py-5'>

            <h3 className='text-zinc-300 font-light text-sm mb-4'>{name}</h3>

            <div className='w-full bg-zinc-900 rounded-full'>
                <div style={widthStyle} className={"py-1 bg-rose-500 rounded-full duration-500"}></div>
            </div>

        </div>
    )
}

export default Chart