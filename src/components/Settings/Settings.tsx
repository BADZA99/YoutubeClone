import React from 'react'
import { Setting, StyledSettings } from './Settings.styled'
import { HiLanguage } from "react-icons/hi2";
import { GoMoon } from "react-icons/go";
import { Text } from '../../utils/text.styled';
import { useAppContext } from '../../context/App.context';

const Settings = () => {
 const { theme,text,language,ToggleLanguage,ToggleTheme } = useAppContext();

    const SETTINGS = [
      {
        label: text.language,
        icon: <HiLanguage size={23} />,
        value: text[language === "english" ? "french" : "english"],
        onClick: ()=> ToggleLanguage(),
      },
      {
        label: text.appearance,
        icon: <GoMoon size={23} />,
        value: text[theme==="dark" ? "dark" : "light"],
        onClick: ()=> ToggleTheme(),
      },
    ];
  return (
    <StyledSettings>
        {
            SETTINGS.map(({label,icon,value,onClick})=>(
                <Setting
                    onClick={onClick} 
                >
                    {icon}
                    <Text>{`${label}: ${value}`}</Text>
                </Setting>
            ))
        }
      
    </StyledSettings>
  )
}

export default Settings
