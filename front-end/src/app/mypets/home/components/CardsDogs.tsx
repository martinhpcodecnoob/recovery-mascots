import React from 'react'
import CardCategory from './CardCategory'
import dog from '../../../../../public/images/dog.jpeg'

const CardsDogs = () => {
    const dogs = [1,2,3,4,5,6,7,8,9,10,11,12,13]

    return (
        <div className='flex flex-wrap justify-center '>
            {
                dogs.map((e,i) => {
                    return(
                        <div className='m-2' key={i}>
                            <CardCategory pet={dog}/>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default CardsDogs