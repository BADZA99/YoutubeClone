import React from 'react'
import { StyledBody } from './Body.styled'
import { useAppContext } from '../../context/App.context'
import Menu from '../Menu/Menu'

export default function Body() {
    const {isMenuSmall} = useAppContext();
  return (
    <StyledBody  $isMenuSmall={isMenuSmall}>
         <Menu/>
        <p>tag</p>
      
    </StyledBody>
  )
}
