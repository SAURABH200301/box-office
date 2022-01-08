import React from 'react'
import Navs from './Navs';
import Title from './Title';


function MainPageLayout({children}) {
    return (
        <>
            <Title title="Box Office" subtitle="Are you looking for movie or actor"/>
            <Navs/>
            {children}
        </>
    )
}

export default MainPageLayout
