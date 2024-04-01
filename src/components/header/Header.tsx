import React, { MouseEventHandler, useEffect, useState } from 'react'
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
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { useLocation } from 'react-router-dom';




const Header = () => {
     
  const { text, setSearchBarText, ToggleMenuSize } =
    useAppContext();
  const [showSettings, setShowSettings] = useState(false);
  const [searchText, setsearchText] = useState("");
   const { pathname } = useLocation();

    const {
      transcript,
      listening,
      // resetTranscript,
      browserSupportsSpeechRecognition,
    } = useSpeechRecognition();

      useEffect(() => {
        setSearchBarText(transcript);
        setsearchText(transcript);
      }, [transcript, setSearchBarText]);
      
      // useEffect(() => {
      //   setSearchBarText(searchText);
      //   setsearchText(searchText);
      // }, [searchText]);
const isHomePath= pathname === "/";
if(isHomePath){
  document.title="Youtube";
}
      if (!browserSupportsSpeechRecognition) {
        return <span>Browser doesn't support speech recognition.</span>;
      }

      const HandleSearchText = (e : React.ChangeEvent<HTMLInputElement>) => {
        setsearchText(e.target.value);
      };

   
  return (
    <StyledHeader>
      <LeftSection>
        <Icon
          className={`${!isHomePath && "disabled"} menu`}
          onClick={() => ToggleMenuSize()}
        >
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
            onChange={HandleSearchText}
          />

          <Icon
            data-tooltip-id="search"
            data-tooltip-content={text.search}
            onClick={() => setSearchBarText(searchText)}
          >
            <LuSearch size={19} />
          </Icon>
        </SearchBar>
        <Icon
          data-tooltip-id="voiceSearch"
          data-tooltip-content={text.voiceSearch}
          $showBackground={true}
          className={listening ? "Listening" : ""}
          onClick={
            SpeechRecognition.startListening as MouseEventHandler<HTMLDivElement>
          }
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
