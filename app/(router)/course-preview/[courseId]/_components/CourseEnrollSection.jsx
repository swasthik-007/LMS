import GlobalApi from '@/app/_utils/GlobalApi';
import { Button } from '@/components/ui/button'
import { useUser } from '@clerk/nextjs';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'
import { toast } from 'sonner';
function CourseEnrollSection({ courseInfo, isUserAlreadyEnrolled }) {
    const membership = false;
    const { user } = useUser();
    const router = useRouter();


    useEffect(() => {
        console.log("isUserAlreadyEnrolled", isUserAlreadyEnrolled);
    }, [])

    //Enroll to the course
    const onEnrollCourse = () => {
        GlobalApi.enrollToCourse(courseInfo?.slug, user?.primaryEmailAddress?.emailAddress).then((resp) => {
            console.log(resp);
            if (resp) {
                //SHow toast on successful enroll
                toast("User Enrolled Successfully", {
                    description: "User Enrolled",
                })
                //redirect to watch course
                router.push('/watch-course/' + resp.createUserEnrollCourse.id)
            }
        })
    }
    return (
        <div className='p-3 text-center rounded-sm bg-primary flex flex-col gap-3'>

            <h2 className='text-[22px] font-bold text-white'>Enroll To The Course</h2>
            {/* user has member ship and already logged in */}

            {user && (membership || courseInfo.free) && !isUserAlreadyEnrolled ? < div className='flex flex-col gap-3  mt-3' >
                <h2 className='text-white font-light'> Enroll Now To Start Learning and Building the Projects</h2>
                <Button className='bg-white text-primary hover:bg-primary hover:text-white' onClick={() => onEnrollCourse()}>Enroll Now</Button>
            </div>
                : !user ?
                    <div className='flex flex-col gap-3  mt-3' >
                        <h2 className='text-white font-light'> Enroll Now To Start Learning and Building the Projects</h2>
                        <Link href={"/sign-in"}><Button className='bg-white text-primary hover:bg-primary hover:text-white' >Enroll Now</Button></Link>
                    </div>

                    : !isUserAlreadyEnrolled && <div className='flex flex-col gap-3 mt-3'>
                        <h2 className='text-white font-light'> Buy Monthly Membership and Get Access to All Courses</h2>
                        <Button className='bg-white text-primary hover:bg-primary hover:text-white sm:text-sm  md:text-wrap sm:px-2 sm:py-1'>Buy Membership @ $2.99</Button>


                    </div>
            }
            {
                isUserAlreadyEnrolled && < div className='flex flex-col gap-3 mt-3'>
                    <h2 className='text-white font-light'>Continue To Learn Your Project</h2>
                    <Link href={'/watch-course/' + isUserAlreadyEnrolled}> <Button className='bg-white text-primary hover:bg-primary hover:text-white sm:text-sm  md:text-wrap sm:px-2 sm:py-1'>Continue</Button></Link>


                </div>
            }
        </div >
    )
}

export default CourseEnrollSection