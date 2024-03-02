'use client'
import React from 'react'
import { SessionProvider } from 'next-auth/react'

interface PropsSession {
    children: React.ReactNode
}

const SessionAuthProvider = ({children}:PropsSession) => {
    return (
        <SessionProvider>
            {children}
        </SessionProvider>
    )
}

export default SessionAuthProvider