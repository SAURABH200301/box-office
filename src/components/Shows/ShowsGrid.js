import React from 'react'
import ShowsCards from './ShowsCards'
import IMAGE_NOT_FOUND from '../../image/not-found.png'

function ShowsGrid({data}) {
    return (
        <div>
            {
                data.map( ({show})=><ShowsCards 
                key={show.id} 
                id={show.id} 
                name={show.name} 
                image={show.image? show.image.medium: IMAGE_NOT_FOUND} 
                summary={show.summary}
                /> 
                )
            }

        </div>
    )
}

export default ShowsGrid
