"use client"
import React, { useEffect, useState } from 'react'
import { useUser } from '@clerk/nextjs'
import SideBanners from '../courses/_components/SideBanners'
import WelcomeBannerDashboard from './_components/WelcomeBannerDashboard';
import InProgressCourseList from './_components/InProgressCourseList';
import GlobalApi from '/app/_utils/GlobalApi';

function Dashboard() {
    const { user } = useUser();
    const [userEnrolledCourses, setUserEnrolledCourses] = useState([]);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        user && getUserAllEnrolledCourseList();
    }, [user])

    const getUserAllEnrolledCourseList = () => {
        GlobalApi.getUserAllEnrolledCourseList(user.primaryEmailAddress.emailAddress).then(resp => {
            setUserEnrolledCourses(resp.userEnrollCourses);
        })
    }


    function handleDismiss() {
        setIsVisible(false);
    }
    return (
        <div>
            {isVisible && (
                <div className="flex items-center justify-between gap-4 bg-primary px-4 py-3 text-white ">
                    <p className="text-sm font-medium">
                        Love ACADEMY ?&nbsp;&nbsp;
                        <a href="/courses" className="inline-block  transition-all ease-in-out text-base hover:text-black hover:underline"> Check out our NEWLY   LAUNCHED courses!</a>
                    </p>

                    <button
                        aria-label="Dismiss"
                        className="shrink-0 rounded-lg bg-black/10 p-1 transition hover:bg-black/20"
                        onClick={handleDismiss}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path
                                fillRule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </button>
                </div>
            )}
            <div className='grid grid-cols-1 md:grid-cols-4 p-4 gap-5'>
                <div className='col-span-3'>
                    <WelcomeBannerDashboard user={user} />
                    <InProgressCourseList userEnrolledCourses={userEnrolledCourses} />
                </div>
                <div className='p-3 bg-white rounded-xl'>
                    <SideBanners />
                </div>
            </div>
        </div>
    )
}

export default Dashboard