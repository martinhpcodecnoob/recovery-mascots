'use client'
import PopperModal from '@/components/PopperModal'
import React, { useState } from 'react'
import PopperSession from '../mypets/home/components/PopperSession'

const UserOptionsPopper = () => {
    const [visible, setVisible] = useState<boolean>(false)
    const [refDivElement, setRefDivElement] = useState<HTMLDivElement | null>(null)
    return (
        <>
            <PopperModal
                visible={visible}
                setVisible={setVisible}
                referenceElement={refDivElement}
                ComponentChildren={PopperSession}
            >
                <div 
                    ref={setRefDivElement} 
                    onClick={() => setVisible(true)}
                    onMouseLeave={() => setVisible(false)}
                    className='mr-4 text-white bg-hero_black rounded-[50%] p-2'
                >
                    MH
                </div>
            </PopperModal>
        </>
    )
}

export default UserOptionsPopper