"use client"
import React, { useState } from 'react'
import { FaRupeeSign } from 'react-icons/fa';
import { VscVerifiedFilled } from "react-icons/vsc";
// import axios from 'axios';
import { useRouter } from 'next/navigation';

function membership() {

    const router = useRouter();
    return (
        <div className="bg-gray-100 flex items-center justify-center mt-6">
            <div className="container mx-auto p-1">
                <div className="flex justify-center space-x-8">
                    {/* Monthly Plan */}
                    <div className="bg-white p-6 rounded-lg shadow-lg w-80 flex flex-col items-center justify-between">
                        <div className='flex flex-col items-center'>
                            <h2 className="text-xl font-semibold mb-4 ">Monthly</h2>
                            <div className="text-4xl font-bold mb-4" ><p >399</p>  <FaRupeeSign className="inline-block text-sm " /><span className="text-base font-normal">/month</span></div>
                            <ul className="mb-6">
                                <li className="flex items-center mb-2">
                                    <VscVerifiedFilled className='text-primary' /> Access to All Courses
                                </li>
                                <li className="flex items-center mb-2">
                                    <VscVerifiedFilled className='text-primary' /> Free Source Code
                                </li>
                                <li className="flex items-center mb-2">
                                    <VscVerifiedFilled className='text-primary' /> Community Forums
                                </li>
                                <li className="flex items-center mb-2">
                                    <VscVerifiedFilled className='text-primary' />Email & Instagram DM support
                                </li>
                            </ul>
                        </div>
                        <button
                            className=" block rounded-full border bg-primary px-12 py-3 text-center text-sm font-medium text-white hover:ring-1
                       hover:ring-indigo-600 focus:outline w-full"
                            onClick={() => router.push('/payment?amount=' + (1))}
                        >Get Started</button>
                    </div>

                    {/* Yearly Plan */}
                    <div className="bg-white p-6 rounded-lg shadow-lg w-80 flex flex-col items-center">
                        <h2 className="text-xl font-semibold mb-4">Yearly</h2>
                        <div className="text-4xl font-bold mb-4"><p>349</p> <FaRupeeSign className="inline-block text-sm " /><span className="text-base font-normal">/month</span></div>
                        <ul className="mb-6">
                            <li className="flex items-center mb-2">
                                <VscVerifiedFilled className='text-primary' />Access to All Courses
                            </li>
                            <li className="flex items-center mb-2">
                                <VscVerifiedFilled className='text-primary' />Free Source Code
                            </li>
                            <li className="flex items-center mb-2">
                                <VscVerifiedFilled className='text-primary' />Free App Membership
                            </li>
                            <li className="flex items-center mb-2">
                                <VscVerifiedFilled className='text-primary' />Email & Instagram DM support
                            </li>
                            <li className="flex items-center mb-2">
                                <VscVerifiedFilled className='text-primary' />Offline Access
                            </li>
                            <li className="flex items-center mb-2">
                                <VscVerifiedFilled className='text-primary' />No Advertisement
                            </li>
                            <li className="flex items-center mb-2">
                                <VscVerifiedFilled className='text-primary' />Certification Programs
                            </li>
                            <li className="flex items-center mb-2">
                                <VscVerifiedFilled className='text-primary' />Expert Support
                            </li>
                        </ul>
                        <button className=" block rounded-full border bg-primary px-12 py-3 text-center 
                      text-sm font-medium text-white hover:ring-1
                       hover:ring-indigo-600 focus:outline w-full"
                            onClick={() => router.push('/payment?amount=' + (1))}
                        >Get Started</button>
                    </div>
                </div>

                {/* Offer Message */}
                <div className="text-center mt-2">
                    <p>Get 30% off when you use the code <span className="font-bold">GUDU30</span> (Yearly plan only).</p>
                </div>
            </div>
        </div>
    )
}

export default membership