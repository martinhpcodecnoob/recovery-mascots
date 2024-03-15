'use client'
import React, { useState } from 'react'
import { usePopper } from 'react-popper'

interface PropsModal {
    children:React.ReactNode
    referenceElement:HTMLDivElement | null
    visible:boolean
    setVisible:React.Dispatch<React.SetStateAction<boolean>>
    ComponentChildren:React.FunctionComponent
}

export default function PopperModal({children,visible,setVisible,referenceElement,ComponentChildren}:PropsModal) {
    const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(null)
    const {styles,attributes} = usePopper(referenceElement,popperElement,{
        placement:'bottom'
    })
    return (
        <>
            <div className='flex flex-col justify-center items-center'>
                {children}
                {visible && (
                    <div
                        ref={setPopperElement}
                        style={{...styles.popper, zIndex: 20}}
                        {...attributes.popper}
                        className=''
                        onMouseEnter={() => setVisible(true)}
                        onMouseLeave={() => setVisible(false)}
                    >
                        <ComponentChildren/>
                    </div>
                )}
            </div>
        </>
    )
}
