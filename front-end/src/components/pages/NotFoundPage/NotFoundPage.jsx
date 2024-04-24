import React from 'react'
import { ErrorTemplate } from '../../templates/ErrorTemplate'
import { Heading } from '../../atoms/Heading'
import { Title } from '../../atoms/Title'

export const NotFoundPage = () => {
  return (
    <ErrorTemplate>
        <Heading level={2}>Page not found</Heading>
        <Heading level={3}>Sorry, but we couldn't find the page you requested.</Heading>
    </ErrorTemplate>
  )
}
