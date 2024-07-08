import React from 'react'
import ProgressCourseItem from './ProgressCourseItem'

function InProgressCourseList({ userEnrolledCourses }) {
    return (
        <div className='p-5  mt-3 rounded-sm' style={{ backgroundColor: "#e6e6e6" }}>
            <h2 className='text-primary text-[20px]  text-center font-bold'>Recent Enrolled Courses</h2>

            <div className='grid  grid-cols-1 md:grid-cols-3 mt-3 gap-5'>
                {userEnrolledCourses?.map((item, index) => (
                    <ProgressCourseItem key={index}
                        course={item}
                    />
                ))}
            </div>
        </div>
    )
}

export default InProgressCourseList