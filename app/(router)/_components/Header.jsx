'use client'

import { Button } from '@/components/ui/button'
import { UserButton, useUser } from '@clerk/nextjs'
import { BellDot, Search } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

function Header() {
    const { user, isLoaded } = useUser()
    return (
        <div className='p-4 bg-white flex justify-between gap-2' >
            {/* search bar */}<h1 className="text-3xl  font-extrabold text-gray-900 tracking-tight mb-4">Your <span className='text-primary'>Learning</span> Hub for All</h1>


            <div className='flex justify-end gap-2 border rounded-md h-8
            p-2'>

                <Search className='h-4 w-4' />
                <input type='text' placeholder='Search...' className='outline-none ' />
            </div>
            {/* Get started button and bellicon */}
            <div className="flex items-center gap-4">
                <BellDot className='text-gray-500' />
                {isLoaded && user ?
                    <UserButton afterSignOutUrl='/courses' /> :
                    <Link href={'/sign-in'}> < Button > Get Started</Button></Link>
                }</div>
        </div>
    )
}

export default Header