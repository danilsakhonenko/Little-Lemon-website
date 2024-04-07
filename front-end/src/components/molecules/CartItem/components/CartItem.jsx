import React from 'react'
import { Image } from '../../../atoms/Image'
import { Title } from '../../../atoms/Title'
import { PriceTag } from '../../../atoms/PriceTag'

export const CartItem = () => {
  return (
    <div>
        <Image></Image>
        <Title>Tiramisu</Title>
        <PriceTag>14</PriceTag>
    </div>
  )
}
