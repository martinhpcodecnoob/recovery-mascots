import React from 'react'
import CardCategory from './CardCategory'
import cat from '../../../../../public/images/cat.jpeg'

const CardsCats = () => {
    
    const gatos = [1,2,3,4,5,6,7,8,9,10,11,12,13]

    return (
        <div className='flex flex-wrap justify-center '>
            {
                gatos.map((e,i) => {
                    return(
                        <div className='m-2' key={i}>
                            <CardCategory pet={cat}/>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default CardsCats