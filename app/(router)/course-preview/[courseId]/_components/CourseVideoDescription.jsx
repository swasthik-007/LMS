import React from 'react'
import VideoPlayer from './VideoPlayer'
import Markdown from 'react-markdown'
import { Button } from '/components/ui/button'

function CourseVideoDescription({ courseInfo, activeChapterIndex, watchMode, setChapterCompleted }) {
    return (
        <div>
            <h2 className='text-[22px] font-bold'>{courseInfo.name}</h2>
            <h2 className='text-gray-500 text-[14px] mb-3'>{courseInfo.authors}</h2>
            <VideoPlayer videoUrl={courseInfo?.chapter[activeChapterIndex]?.video?.url}
                poster={!watchMode ? courseInfo?.banner?.url : null} />
            <h2 className='mt-5 text-[17px] font-semibold'>
                {watchMode ?
                    <span className='flex justify-between items-center'>{courseInfo?.chapter[activeChapterIndex]?.name}
                        <Button onClick={() => setChapterCompleted(courseInfo?.chapter[activeChapterIndex]?.id)}>Mark Completed</Button>
                    </span>
                    : <span>About This Course</span>
                }
            </h2>

            {watchMode ?
                <Markdown className='text-[15px] font-light mt-2 leading-7'>
                    {courseInfo?.chapter[activeChapterIndex]?.shortDesc}
                </Markdown>
                :
                <Markdown className='text-[13px] font-light mt-2 leading-7'>
                    {courseInfo.description}
                </Markdown>}

        </div>
    )
}

export default CourseVideoDescription