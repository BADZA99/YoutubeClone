import React from 'react'
import { CategoryCarusel, CategoryItem, StyledCategories } from './Categories.styled'
import { CATEGORIES } from '../../utils/categories'
import { useAppContext } from '../../context/App.context'
import { ITranslations } from '../../utils/translation'
import { Text } from '../../utils/text.styled'

const Categories = () => {
    const { text, activeCategory, setActiveCategory } = useAppContext();
  return (
    <CategoryCarusel>

    <StyledCategories>
      {
        CATEGORIES.map((name,index)=>
        <CategoryItem key={index}
        active={
            name.toLowerCase() === activeCategory.toLowerCase()
        }
        onClick={()=>setActiveCategory(name)}
        >
            <Text>{text[name as keyof ITranslations]}</Text>
         
        </CategoryItem>)
      }
    </StyledCategories>
    </CategoryCarusel>
  )
}

export default Categories
