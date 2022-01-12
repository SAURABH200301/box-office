import React from 'react'
import ShowsCards from './ShowsCards'
import IMAGE_NOT_FOUND from '../../image/not-found.png'
import { FlexGrid } from '../styled'

function ShowsGrid({data}) {
    return (
        <FlexGrid>
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

        </FlexGrid>
    )
}

export default ShowsGrid
