import React from 'react'
import {MainTemplate} from '../../../../templates/MainTemplate'
import {HeroArticle} from '../HeroArticle/HeroArticle'
import {AboutArticle} from '../AboutArticle/AboutArticle'
import {TestimonialsSection} from '../../../../organisms/TestimonialsSection'
import { SpecialsSection } from '../SpecialsSection/SpecialsSection'


export const HomePage = () => {
  return (
    <MainTemplate>
        <HeroArticle/>
        <SpecialsSection/>
        <TestimonialsSection/>
        <AboutArticle/>
    </MainTemplate>
  )
}
