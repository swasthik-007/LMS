import React from 'react'
import Image from 'next/image'

function WelcomeBannerDashboard({ user }) {
    return (
        <div className=' rounded-sm p-5 flex gap-5 items-center ' style={{ backgroundColor: "#e6e6e6" }}>
            <Image src={'/panda.png'} alt='panda' width={200} height={200} />
            <div>
                <h2 className='text-[32px] font-light'>Welcome Back ,
                    <span className='font-bold text-primary'> {user?.fullName}</span></h2>
                <h2 className='text-[16px] font-light text-slate-500'>Lets Begin Learning where you left off,<br />
                    Keep it up and improve your progress
                </h2>
            </div>
        </div>
    )
}

export default WelcomeBannerDashboard