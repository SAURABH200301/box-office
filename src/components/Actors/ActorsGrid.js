import React from 'react'
import ActorsCards from './ActorsCards'
import IMAGE_NOT_FOUND from '../../image/not-found.png'
import { FlexGrid } from '../styled'

function ActorsGrid({data}) {
    return (
        <FlexGrid>
            {
                data.map( ({person})=><ActorsCards 
                key={person.id}  
                name={person.name} 
                country={person.country?person.country.name: null}
                birthday={person.birthday}
                deathday={person.deathday}
                gender={person.gender}
                image={person.image? person.image.medium: IMAGE_NOT_FOUND} 
                /> 
                )
            }

        </FlexGrid>
    )
}

export default ActorsGrid
