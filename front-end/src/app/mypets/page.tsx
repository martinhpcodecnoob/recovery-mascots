import React from 'react'
import Home from './home/Home'
import { authOptions } from '@/utils/authOptions';
import { getServerSession } from 'next-auth';

async function getDataSession() {
    const data = await getServerSession(authOptions);
    return data
}

export default async function page() {
    const session = await getDataSession();

    if (session) {
        return (
            <div className=''>
                <Home session={session}/>
            </div>
        )
    }
    
}
