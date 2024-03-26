import React from 'react'
import CardCategory from './CardCategory'
import dog from '../../../../../public/images/dog.jpeg'
import { InterCatsandDogs } from '../Home'

const CardsDogs = ({ data }:InterCatsandDogs) => {
    const dogs = [1,2,3,4,5,6,7,8,9,10,11,12,13]

    if (data) {
        return (
            <div className='flex flex-wrap justify-center '>
                {
                    data.length < 1 || data === undefined ?
                        (
                            <>
                                <div>
                                    No hay perrijos
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

export default CardsDogs