import React from 'react'
import {MainTemplate} from '../../../../templates/MainTemplate'
import { MenuSection } from '../../../../organisms/MenuSection'


export const MenuPage = () => {
  return (
    <MainTemplate>
      <MenuSection heading={'Specials'} category={'specials'} />
      <MenuSection heading={'Appetizers'} category={'appetizers'} />
      <MenuSection heading={'Main Courses'} category={'main courses'} />
      <MenuSection heading={'Salads'} category={'salads'} />
      <MenuSection heading={'Soups'} category={'soups'} />
      <MenuSection heading={'Desserts'} category={'desserts'} />
      <MenuSection heading={'Cold/Hot Drinks '} category={'drinks'} />
    </MainTemplate>
  )
}
