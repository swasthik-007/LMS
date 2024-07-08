'use client'
import { Lock, Play } from 'lucide-react'
import React, { useState } from 'react'

function CourseContentSection({ courseInfo, isUserAlreadyEnrolled }) {
    const [activeIndex, setActiveIndex] = useState(0)
    return (
        <div className='p-3 bg-white rounded-sm mt-3' style={{ backgroundColor: '#e6e6e6' }}>
            <h2>Content</h2>
            {courseInfo.chapter.map((item, index) => (
                <div>
                    <h2 className=
                        {` p-2 
                     text-[14px]
                     flex justify-between
                     items-center border
                     border-gray-400
                     rounded-sm px-4
                     m-2 cursor-pointer hover:bg-white
                     hover:text-orange-600
                     ${activeIndex == index && 'bg-primary text-white'} 
                     ${isUserAlreadyEnrolled && `hover:bg-orange-100 hover:text-black`}`}>
                        {index + 1}. {item.name}
                        {activeIndex == index || isUserAlreadyEnrolled ?
                            <Play className='h-4 w-4' /> :
                            <Lock className='h-4 w-4' />
                        } </h2>
                </div>
            ))
            }
        </div >
    )
}

export default CourseContentSection