'use client'
import { Lock, Play } from 'lucide-react'
import React, { useState } from 'react'

function CourseContentSection({ courseInfo, isUserAlreadyEnrolled, watchMode = false,
    setActiveChapterIndex, completedChapter }) {
    const [activeIndex, setActiveIndex] = useState(0)

    const checkIsChapterCompleted = (chapterId) => {
        return completedChapter.find(item => item.chapterId == chapterId)
    }
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
                     ${isUserAlreadyEnrolled && `hover:bg-orange-100 hover:text-black`}
                     ${watchMode && checkIsChapterCompleted(item.id) &&
                            'border-green-800 bg-green-400'
                            }`}
                        onClick={() => {
                            watchMode && setActiveChapterIndex(index);
                            watchMode && setActiveIndex(index)
                        }}>
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