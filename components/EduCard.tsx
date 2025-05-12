"use client"
import React, { useRef } from 'react'

interface IEduProps {
    title: string;
    year: string;
    p: string;
}

function EduCard({ title, year, p }: IEduProps) {

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
            <h1 className='text text-zinc-100 mb-2'>{title}</h1>
            <h1 className='text text-zinc-100 font-extrabold'>{year}</h1>
            <p className='text-zinc-400 text text-sm font-light mt-5'>
                {p}
            </p>
        </div>
    )
}

export default EduCard