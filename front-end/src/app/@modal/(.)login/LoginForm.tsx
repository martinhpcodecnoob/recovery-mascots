'use client'
import { LoginModel } from '@/app/models/auth.model'
import { loginSchema } from '@/app/schemas/auth.schema'
import { zodResolver } from '@hookform/resolvers/zod'
import React, { useEffect, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { z } from 'zod'
import { signIn } from "next-auth/react";
import { useRouter } from 'next/navigation'

const LoginForm = () => {
    const router = useRouter()
    const [urlParams, setUrlParams] = useState<string>('/mypets')
    type LoginSchema = z.infer<typeof loginSchema>
    const {
        handleSubmit,control,
        formState:{errors},
        setValue
    } = useForm<LoginSchema>({resolver:zodResolver(loginSchema)})

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        let param = urlParams.get('p')
        if (typeof param === 'string') {
            setUrlParams(param)
        }
    }, [])
    
    
    const onSubmit = handleSubmit(async(dataForm:LoginModel) => {
        console.log(dataForm);
        
        try {
            const signInResponse = await signIn('credentials',{
                email:dataForm.email,
                password:dataForm.password,
                redirect:false
            })
            if (signInResponse?.status) {
                router.replace(urlParams)
                console.log("Sesión iniciada correctamente");
            } else {
                console.error("Datos incorrectos, por favor verifique");
            }
        } catch (error) {
            
        }
    })

    return (
        <form onSubmit={onSubmit} className='w-full space-y-3 form-container'>
            <div className='w-full px-4'>
                <label className="block mb-2 text-sm font-medium text-gray-900">Email</label>
                <Controller
                    name='email'
                    control={control}
                    defaultValue=''
                    render={ ({field}) => {
                        return(
                            <input 
                                {...field}
                                name='email'
                                id='email'
                                type="email" 
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-identipet focus:border-[2px] focus:outline-none w-full p-2.5" 
                                placeholder="Ingresa un correo"
                            />
                        )
                    }}
                />
                {
                errors && errors.email ? (
                    <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                        <span className="font-medium">{`Upss! `}</span>
                        {errors.email.message}
                    </p>
                    ) : null
                }
            </div>
            <div className='w-full px-4'>
                <label className="block mb-2 text-sm font-medium text-gray-900">Contraseña</label>
                <Controller
                    name='password'
                    control={control}
                    defaultValue=''
                    render={ ({field}) => {
                        return(
                            <input 
                                {...field}
                                name='password'
                                id='password'
                                type="password" 
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-identipet focus:border-[2px] focus:outline-none w-full p-2.5" 
                                placeholder="Ingresa tu contraseña"/>
                        )
                    }}
                />
                {
                    errors && errors.password ? (
                        <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                            <span className="font-medium">{`Upss! `}</span>
                            {errors.password.message}
                        </p>
                        ) : null
                }
            </div>
            <div className='w-full px-4 flex justify-center items-center mt-6'>
                <button type='submit' className='bg-identipet p-1 rounded-[1rem] text-white'>
                    Iniciar Sesion
                </button>
            </div>
        </form>
    )
}



export default LoginForm