import React from 'react'
import { useLocation } from 'react-router-dom'
import { NavList,LinkStyled } from './Navs.styled'

export default function Navs() {

    const location = useLocation();

const LINKS=[
    {to:'/',text:'home'},
    {to:'/starred',text:'Starred'}
]

    return (
        <div>
            <NavList>
                {LINKS.map(item=>
                <li key={item.to}>
                    <LinkStyled 
                        to={item.to} 
                        className={item.to===location.pathname?'active':''}>
                        {item.text}
                    </LinkStyled>
                </li>)}
            </NavList>
        </div>
    )
}
