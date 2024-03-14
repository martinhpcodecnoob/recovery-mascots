'use client'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { useState } from 'react'

interface ChildrenReact{
    children:React.ReactNode
}

const TanstackProvider = ({children}:ChildrenReact) => {
    // const [queryClient] = useState(() => new QueryClient({
    //     defaultOptions:{
    //         queries:{
    //             refetchOnWindowFocus:false,
    //             refetchOnMount:false,
    //             retry:1
    //         }
    //     }
    // }))
    const queryClient = new QueryClient({
        defaultOptions:{
            queries:{
                refetchOnWindowFocus:false,
                refetchOnMount:false,
                retry:1
            }
        }
    })
    return(
        <QueryClientProvider client={queryClient}>
            {children}
            <ReactQueryDevtools initialIsOpen={false}/>
        </QueryClientProvider>
    )
} 

export default TanstackProvider