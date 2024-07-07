import { Button } from '@/components/ui/button'
import React from 'react'

function CourseEnrollSection() {
    const membership = false;
    return (
        <div className='p-3 text-center rounded-sm bg-primary flex flex-col gap-3'>

            <h2 className='text-[22px] font-bold text-white'>Enroll To The Course</h2>
            {/* user has member ship and already logged in */}

            {membership ? <div className='flex flex-col gap-3  mt-3' >
                <h2 className='text-white font-light'> Enroll Now To Start Learning and Building the Projects</h2>
                <Button className='bg-white text-primary hover:bg-primary hover:text-white'>Enroll Now</Button>
            </div>

                : <div className='flex flex-col gap-3 mt-3'>
                    <h2 className='text-white font-light'> Buy Monthly Membership and Get Access to All Courses</h2>
                    <Button className='bg-white text-primary hover:bg-primary hover:text-white sm:text-sm  md:text-wrap sm:px-2 sm:py-1'>Buy Membership @ $2.99</Button>


                </div>}
        </div >
    )
}

export default CourseEnrollSection