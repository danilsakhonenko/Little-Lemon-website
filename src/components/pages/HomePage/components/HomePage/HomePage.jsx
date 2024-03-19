import React from 'react'
import {MainTemplate} from '../../../../templates/MainTemplate'
import {HeroArticle} from '../HeroArticle/HeroArticle'
import {AboutArticle} from '../AboutArticle/AboutArticle'
import {SpecialsSection} from '../../../../organisms/SpecialsSection'
import {TestimonialsSection} from '../../../../organisms/TestimonialsSection'


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
