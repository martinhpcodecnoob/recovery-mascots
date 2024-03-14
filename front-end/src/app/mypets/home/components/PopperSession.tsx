import React from 'react'

const PopperSession = () => {
    return (
        <div className="w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg mr-2">
            <button type="button" className="w-full px-4 py-2 font-medium text-left rtl:text-right border-b border-gray-200 cursor-pointer hover:bg-violet-200 hover:text-identipet focus:outline-none focus:ring-2 focus:ring-identipet">
                Cerrar Sesion
            </button>
            <button type="button" className="w-full px-4 py-2 font-medium text-left rtl:text-right border-b border-gray-200 cursor-pointer hover:bg-violet-200 hover:text-identipet focus:outline-none focus:ring-2 focus:ring-identipet">
                Messages
            </button>
        </div>
    )
}

export default PopperSession