'use client'
import Modal from '@/components/PopperModal'
import React, { useState } from 'react'
import PopperSession from './PopperSession'

const NavBarHomeTwo = () => {
    const [visible, setVisible] = useState<boolean>(false)
    const [refDivElement, setRefDivElement] = useState<HTMLDivElement | null>(null)
    
    return (
        <div className='md:invisible z-50 fixed w-full h-16 shadow-xl bg-hero_primary flex justify-between items-center'>
            <div className='ml-3 text-identipet text-[1.3rem] font-bold'>Identipet</div>
            <Modal
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
            </Modal>
        </div>
    )
}

export default NavBarHomeTwo