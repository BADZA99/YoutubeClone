import React, { useState } from 'react'
import { HeaderMoreSection, LeftSection, LogoSection, SearchSection, StyledHeader } from './Header.styled'
import { FaYoutube } from "react-icons/fa";
import { SlMenu } from "react-icons/sl";
import { CgMoreVerticalAlt } from "react-icons/cg";
import { Text } from '../../utils/text.styled';
import { Icon } from '../../utils/icon.styled';
import AuthButton from '../authButton/AuthButton';
import Settings from '../Settings/Settings';



const Header = () => {
  const [showSettings,setShowSettings]=useState(false);
  return (
    <StyledHeader>
      <LeftSection>
        <Icon className="menu">
          <SlMenu size={17} />
        </Icon>
        <LogoSection to="/">
          <FaYoutube size={32} color="#ff0000" />
          <Text className="logo">YouTube</Text>
        </LogoSection>
      </LeftSection>
      <SearchSection>search</SearchSection>
      <HeaderMoreSection>
        <Icon
          className="more"
          data-tooltip-id="Settings"
          data-tooltip-content="Settings"
          onClick={()=>setShowSettings(!showSettings)}
        >
          <CgMoreVerticalAlt size={21} />
        </Icon>
        <AuthButton />
      { showSettings && <Settings/>}
      </HeaderMoreSection>
    </StyledHeader>
  );
}

export default Header
