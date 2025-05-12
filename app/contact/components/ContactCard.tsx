"use client"
import React, { useRef } from 'react'

interface IContactCard {
    icon: any;
    title: string;
    p: string;
}

function ContactCard({icon, title , p}:IContactCard) {

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
        <div onMouseMove={mouseMove} ref={cardRef} className='rounded-3xl bg-zinc-950 p-10 gap-5 flex flex-col overflow-hidden items-center card-anim-border2'>
            <div><span className='flex text items-center text-rose-500 text-3xl p-5 justify-center bg-rose-950 rounded-full'>{icon}</span></div>
            <div><h1 className='font-extrabold text text-2xl text-white'>{title}</h1></div>
            <div><p className='font-light text-sm text text-zinc-300'>
                {p}
            </p></div>
        </div>
    )
}

export default ContactCard