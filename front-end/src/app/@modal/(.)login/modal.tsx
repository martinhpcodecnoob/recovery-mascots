'use client'
import { type ElementRef, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
// import { createPortal } from 'react-dom';

export function Modal({ children }: { children: React.ReactNode }) {
const router = useRouter();
const dialogRef = useRef<ElementRef<'dialog'>>(null);
// console.log(dialogRef.current);

useEffect(() => {
    if (!dialogRef.current?.open) {
    dialogRef.current?.showModal();
    }
}, []);

function onDismiss() {
    router.back();
}

return (
    <div className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-sm">
        <div className='popup-overlay bg-gray-800 bg-opacity-50 fixed inset-0'>

        </div>
        <dialog ref={dialogRef} className="modal bg-white rounded-lg shadow-lg" onClose={onDismiss}>
            {children}
            <button onClick={onDismiss} className="close-button" />
        </dialog>
    </div>
);
}