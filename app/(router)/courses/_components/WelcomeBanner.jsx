import Image from 'next/image'
import React from 'react'

function WelcomeBanner() {
    return (
        <div className='flex gap-5 items-center  rounded-xl p-5' style={{ backgroundColor: '#e6e6e6' }}>
            <Image src="/panda.png" alt='panda' height={100} width={100} />
            <div
            >
                <h2 className='font-extrabold text-[27px]'>Welcome To
                    <span className='text-primary'> Ed</span>-Hub</h2>
                <h2 className='font-normal text-black'>Explore , Learn and Build All Real Life Projects</h2>
            </div>
        </div>
    )
}

export default WelcomeBanner