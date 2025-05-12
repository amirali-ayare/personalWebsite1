"use client"
import React from 'react'
import { useRef } from 'react'

interface IDataProps {
    title: string;
    p: string;
}

function ServiceCard({title, p}:IDataProps) {
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
        <div onMouseMove={mouseMove} ref={cardRef} className='p-8 overflow-hidden rounded-2xl card-anim-border2'>
            <h1 className='text-xl text text-zinc-100 font-extrabold'>{title}</h1>
            <p className='text-zinc-500 text text-sm font-light mt-5'>
                {p}
            </p>
        </div>
    )
}

export default ServiceCard