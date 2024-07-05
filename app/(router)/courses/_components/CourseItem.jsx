import Image from 'next/image'
import React from 'react'
// boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)' }}
//   onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(235, 73, 52, 0.1), 0 2px 4px -1px rgba(235, 73, 52, 0.06)'}
//   onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px
function CourseItem({ course }) {
    return (
        <div className='border rounded-xl hover:shadow-md cursor-pointer hover:shadow-orange-200' style={{ backgroundColor: '#ffff' }}
        >
            <Image src={course?.banner?.url}
                width={500}
                height={150}
                alt='banner'
                className='rounded-t-xl'
            />
            {course?.chapter?.length == 0 ? < div className="flex flex-col gap-1 p-2">
                <h2 className='font-medium'>{course.name}</h2>
                <h2 className='text-[12px] text-gray-400'>{course.author}</h2>
                <div className="flex gap-2">
                    <Image src='/youtube.png' alt='youtube' width={20} height={20} />
                    <h2 className='text-[14px] text-gray-400'>Watch On Youtube</h2>
                </div>
                <h2 className='text-[15px]'>{course?.free ? 'Free' : 'Paid'}</h2>
            </div> :
                <div className="flex flex-col gap-1 p-2">
                    <h2 className='font-medium'>{course.name}</h2>
                    <h2 className='text-[12px] text-gray-400'>{course.author}</h2>
                    <div className="flex gap-2">
                        <Image src='/chapter.png' alt='youtube' width={20} height={20} />
                        <h2 className='text-[14px] text-gray-400'>Chapter</h2>
                    </div>
                    <h2 className='text-[15px]'>{course?.free ? 'Free' : 'Paid'}</h2>
                </div>
            }
        </div >
    )
}

export default CourseItem