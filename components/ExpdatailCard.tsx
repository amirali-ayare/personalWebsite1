"use client"
import React, { useRef } from 'react'

interface ICardProps {
    title: string;
    p: string;
}

function ExpdatailCard({title , p}:ICardProps) {
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
        <div onMouseMove={mouseMove} ref={cardRef} className='card-anim-border flex flex-col justify-center items-center  w-full text-white overflow-hidden'>
            <h1 className='text text-center text-5xl font-extrabold'>{title}</h1>
            <h1 className='text text-center pt-2 text- text-zinc-500'>{p}</h1>
        </div>
    )
}

export default ExpdatailCard