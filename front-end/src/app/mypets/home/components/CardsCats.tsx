import React from 'react'
import CardCategory from './CardCategory'
import cat from '../../../../../public/images/cat.jpeg'
import { InterCatsandDogs } from '../Home'

const CardsCats = ({ data }:InterCatsandDogs) => {
    
    if (data) {
        return (
            <div className='flex flex-wrap justify-center '>
                {
                    data.length < 1 || data === undefined ?
                        (
                            <>
                                <div>
                                    No hay pets de !!Michis
                                </div>
                            </>
                        ) : data.map((e,i) => {
                                return(
                                    <div className='m-2' key={i}>
                                        <CardCategory pet={e}/>
                                    </div>
                                )
                            })
                        }
                    </div>
                )
        }
    }

export default CardsCats