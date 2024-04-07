import React from 'react'
import {MainTemplate} from '../../../../templates/MainTemplate'
import { StoryArticle } from '../StoryArticle/StotyArticle'
import { TeamArticle } from '../TeamArticle/TeamArticle'
import { AtmosphereSection } from '../AtmosphereSection/AtmosphereSection'
import { TestimonialsSection } from '../../../../organisms/TestimonialsSection'


export const AboutPage = () => {
  return (
    <MainTemplate>
        <StoryArticle/>
        <TeamArticle/>
        <AtmosphereSection/>
        <TestimonialsSection/>
    </MainTemplate>
  )
}
