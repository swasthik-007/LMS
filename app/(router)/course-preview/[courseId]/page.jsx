'use client'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import CourseVideoDescription from './_components/CourseVideoDescription';
import GlobalApi from '@/app/_utils/GlobalApi';
import CourseEnrollSection from './_components/CourseEnrollSection';
import CourseContentSection from './_components/CourseContentSection';

function CoursePreview({ params }) {

    const [courseInfo, setCourseInfo] = useState();

    useEffect(() => {
        params && getCourseInfoById()
    }, [params]);



    const getCourseInfoById = () => {
        GlobalApi.getCourseById(params?.courseId).then(resp => {

            setCourseInfo(resp?.courseList)
        })
    }
    return courseInfo && (
        <div className='grid grid-cols-1 md:grid-cols-3 p-5 gap-3'>
            {/* title video and description  */}
            <div className='col-span-2 p-3' style={{ backgroundColor: '#e6e6e6' }}>
                <CourseVideoDescription courseInfo={courseInfo} />
            </div>
            {/* course content */}


            <div className="">
                <CourseEnrollSection />

                <CourseContentSection courseInfo={courseInfo} />
            </div>
        </div>
    )
}

export default CoursePreview