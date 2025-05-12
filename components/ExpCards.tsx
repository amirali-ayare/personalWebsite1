import ExpdatailCard from './ExpdatailCard'

function ExpCards() {

    const firstColCards = [
        {
            title: "200+",
            p: "پروژه موفق"
        },
        {
            title: "300+",
            p: "نظر مشتری"
        }
    ]
    const secondColCards = [
        {
            title: "50+",
            p: "همکاری با برند های معتبر"
        },
        {
            title: "1000+",
            p: "مشتری راضی"
        }
    ]

    return (
        <div className='p-10 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-5'>

            <div>
                <div className='rounded-2xl p-10 flex flex-col items-center' id='bg-gradient-rose'>
                    <div className='flex gap-20'>
                        <div>
                            <h1 className='text-9xl font-extrabold text-rose-500'>2</h1>
                            <h1 className='text-9xl font-extrabold text-rose-500'>5</h1>
                        </div>

                        <div className='flex flex-col justify-center'>
                            <h1 className='font-extrabold text-3xl text-slate-200'>سال</h1>
                            <h1 className='font-extrabold text-3xl text-slate-200'>تجربه</h1>
                        </div>
                    </div>

                    <div className='mt-4'>
                        <p className='text-slate-200 font-thin w-5/6 text-sm'>
                            مشاوران مشاوره کسب و کار مشاوره تخصصی ارائه می دهند و کسب و کارها را راهنمایی می کنند تا به کارایی عملکرد آنها کمک کنند
                        </p>
                    </div>
                </div>
            </div>

            <div className='grid grid-cols-1 gap-5 px-5'>

                <div className='grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 xl:grid-cols-2 gap-5'>

                    {
                        firstColCards.map((item , index) => {
                            return <ExpdatailCard key={index} {...item} />
                        })
                    }

                </div>

                <div className='grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 xl:grid-cols-2 gap-5'>

                    {
                        secondColCards.map((item , index) => {
                            return <ExpdatailCard key={index} {...item} />
                        })
                    }

                </div>


            </div>

        </div>
    )
}

export default ExpCards