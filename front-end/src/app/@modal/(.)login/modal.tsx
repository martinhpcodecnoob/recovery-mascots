'use client'
import { type ElementRef, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
// import { createPortal } from 'react-dom';

export function Modal({ children }: { children: React.ReactNode }) {
const router = useRouter();
const dialogRef = useRef<ElementRef<'dialog'>>(null);

function onDismiss() {
    router.back();
}

const handleOutsideClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if ((event.target as HTMLDivElement).classList.contains('modal-container')) {
        router.back();
    }
};

return (
    <div>
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
                <div className="modal-container bg-gray-800 bg-opacity-50 fixed top-0 left-0 w-full h-full flex items-center justify-center backdrop-blur-sm" onClick={handleOutsideClick}>
                    {children}
                </div>
        </div>
    </div>
);
}