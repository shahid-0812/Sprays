import React from 'react'
import { HeroSection } from '../HomeComponents/HeroSection'
import { Dynamics } from '../HomeComponents/Dynamics'

import { Art } from '../HomeComponents/Art'
import { AllSprays } from '../HomeComponents/AllSprays'
import { Explore } from '../HomeComponents/Explore'
import { Cards } from '../HomeComponents/Cards'

export const Home = () => {
    return (
        <>
            <HeroSection />
            <Dynamics />
            <AllSprays />
            <Art />
            <Explore />
            <Cards />
        </>
    )
}
