import React from 'react'
import { HeaderMoreSection, LeftSection, LogoSection, SearchSection, StyledHeader } from './Header.styled'
import { FaYoutube } from "react-icons/fa";
import { SlMenu } from "react-icons/sl";
import { Text } from '../../utils/text.styled';
import { Icon } from '../../utils/icon.styled';


const Header = () => {
  return (
    <StyledHeader >
      <LeftSection>
        <Icon className='menu'>
        <SlMenu size={17}/>
        </Icon>
        <LogoSection to="/">
          <FaYoutube size={32} color='#ff0000' />
          <Text className="logo">YouTube</Text>
        </LogoSection>
      </LeftSection>
      <SearchSection>search</SearchSection>
      <HeaderMoreSection>more</HeaderMoreSection>
    </StyledHeader>
  )
}

export default Header
