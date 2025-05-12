"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'

function Navbar() {

    const socailIcons = [
        {
            icon: "<i class='bx bxl-facebook'></i>",
            link: '/'
        },
        {
            icon: "<i class='bx bxl-twitter'></i>",
            link: '/'
        },
        {
            icon: "<i class='bx bxl-linkedin'></i>",
            link: '/'
        },
        {
            icon: "<i class='bx bxl-instagram'></i>",
            link: '/'
        }
    ]

    const navbarItems = [
        {
            text: 'خانه',
            link: '/'
        },
        {
            text: 'درباره من',
            link: '/about'
        },
        {
            text: 'خدمات',
            link: '/service'
        },
        {
            text: 'وبلاگ',
            link: '/blog'
        },
        {
            text: 'پروژه',
            link: '/project'
        },
        {
            text: 'ارتباط',
            link: '/contact'
        },
    ]

    const [openMenu, setOpenMenu] = useState(false)

    const path = usePathname();

    return (
        <div className='w-full flex justify-between grid grid-cols-2 text-white px-3 lg:px-10 xl:px-10 py-4 bg-zinc-950'>

            <div className='flex items-center gap-10 hidden lg:flex xl:flex'>
                {
                    navbarItems.map((i) => {
                        return (
                            <Link key={i.link} href={`${i.link}`}><span className={path === i.link ? 'text-rose-500 text-sm hidden lg:block xl:block px-3 rounded-md py-1 Navbarhover font-extrabold' : 'text-sm hidden lg:block xl:block text-white duration-500 px-3 rounded-md py-1 Navbarhover hover:text-rose-500 font-extrabold'}>{i.text}</span></Link>
                        )
                    })
                }
            </div>


            <div className='flex items-center lg:justify-end xl:justify-end lg:gap-3 xl:gap-3 gap-1'>

                {
                    <span onClick={() => setOpenMenu(true)} className='p-3 flex lg:hidden xl:hidden rounded-full border-2 border-rose-500 hover:bg-transparent duration-500 hover:text-rose-500 items-center text-lg bg-rose-500 text-white'><i className='bx bx-menu'></i></span>
                }
                {
                    socailIcons.map((i, index) => {
                        return (
                            <Link key={index} href={`${i.link}`}><span className='p-3 hidden md:flex lg:flex xl:flex rounded-full flex items-center text-lg bg-slate-800 duration-500 hover:bg-rose-500 text-white' dangerouslySetInnerHTML={{ __html: `${i.icon}` }}></span></Link>
                        )
                    })
                }

            </div>

            {/* <div className='flex items-center gap-10'>
                {
                    navbarItems.map((i) => {
                        return (
                            <Link key={i.link} href={`${i.link}`}><span className={path===i.link ? 'text-rose-500 text-sm hidden lg:block xl:block px-3 rounded-md py-1 Navbarhover font-extrabold' : 'text-sm hidden lg:block xl:block text-white duration-500 px-3 rounded-md py-1 Navbarhover hover:text-rose-500 font-extrabold'}>{i.text}</span></Link>
                        )
                    })
                }
            </div> */}



            <div id='menu-sm' className={openMenu ? 'fixed lg:hidden xl:hidden w-5/6 h-full p-5 top-0' : 'hidden'}>
                <div className='w-full ltr'>
                    <button className='bg-black text-lg text-white flex items-center rounded-full p-3' onClick={() => setOpenMenu(false)}><i className='bx bx-x'></i></button>
                </div>
                <div className='flex flex-col mt-3'>

                    {
                        navbarItems.map((i) => {
                            return (
                                <Link key={i.link} href={`${i.link}`}><div className='py-2 text-gray-500 border-b-1 w-full flex justify-start border-slate-800'>{i.text}</div></Link>
                            )
                        })
                    }

                    <div className='flex justify-start text-xs text-slate-400 mt-5'>
                        من را دنبال کنید در :
                    </div>

                    <div className='flex justify-start gap-2 mt-3'>
                        {
                            socailIcons.map((i, index) => {
                                return (
                                    <Link key={index} href={`${i.link}`}><span className='p-2 text-xs rounded-full flex items-center text-lg bg-slate-800 duration-500 hover:bg-rose-500 text-white' dangerouslySetInnerHTML={{ __html: `${i.icon}` }}></span></Link>
                                )
                            })
                        }
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Navbar