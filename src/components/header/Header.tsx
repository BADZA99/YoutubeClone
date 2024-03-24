import React, { useState } from 'react'
import { HeaderMoreSection, LeftSection, LogoSection, SearchBar, SearchSection, StyledHeader } from './Header.styled'
import { FaMicrophone, FaYoutube } from "react-icons/fa";
import { LuSearch } from "react-icons/lu";
import { SlMenu } from "react-icons/sl";
import { CgMoreVerticalAlt } from "react-icons/cg";
import { Text } from '../../utils/text.styled';
import { Icon } from '../../utils/icon.styled';
import AuthButton from '../authButton/AuthButton';
import Settings from '../Settings/Settings';
import { useAppContext } from '../../context/App.context';



const Header = () => {
   const {  text,setSearchBarText } =
     useAppContext();
  const [showSettings,setShowSettings]=useState(false);
  const [searchText, setsearchText] = useState("");
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
      <SearchSection>
        <SearchBar>
          <input
            value={searchText}
            placeholder={text.search}
            onChange={(e) => setsearchText(e.target.value)}
          />

          <Icon
            data-tooltip-id="search"
            data-tooltip-content={text.search}
            onClick={() => setsearchText(searchText)}
          >
            <LuSearch size={19} />
          </Icon>
        </SearchBar>
        <Icon
          data-tooltip-id="voiceSearch"
          data-tooltip-content={text.voiceSearch}
          $showBackground={true}
          onClick={() => setsearchText(searchText)}
        >
          <FaMicrophone size={21} />
        </Icon>
      </SearchSection>
      <HeaderMoreSection>
        <Icon
          className="more"
          data-tooltip-id="Settings"
          data-tooltip-content="Settings"
          onClick={() => setShowSettings(!showSettings)}
        >
          <CgMoreVerticalAlt size={21} />
        </Icon>
        <AuthButton />
        {showSettings && <Settings />}
      </HeaderMoreSection>
    </StyledHeader>
  );
}

export default Header
