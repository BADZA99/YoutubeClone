import React from "react";
import { StyledLargeMenuItem, StyledMenu, StyledMenuItem } from "./Menu.styled";
import { useAppContext } from "../../context/App.context";
import { MENU_LARGE, MENU_SMALL } from "../../utils/SideMenu";
import { Text } from "../../utils/text.styled";
import { ITranslations } from "../../utils/translation";
import AuthButton from "../authButton/AuthButton";

export default function Menu() {
  const { isMenuSmall, text, activeMenuText } = useAppContext();

  if (isMenuSmall) {
    return (
      <StyledMenu>
        {MENU_SMALL.map(({ name, icon }) => (
          <StyledMenuItem
            active={
              activeMenuText.toLowerCase() ===
              text[name as keyof ITranslations].toLowerCase()
            }
            className="small"
            key={name}
          >
            {icon}
            <Text>{text[name as keyof ITranslations]}</Text>
          </StyledMenuItem>
        ))}
      </StyledMenu>
    );
  } else {
    return (
      <StyledMenu>
        {MENU_LARGE.map(({ title, list }, index) => (
          <>
            <StyledLargeMenuItem>
              {title && (
                <Text className="title">
                  {text[title as keyof ITranslations]}
                </Text>
              )}
              {list.map(({ name, icon }) => (
                <StyledMenuItem 
                 active={
              activeMenuText.toLowerCase() ===
              text[name as keyof ITranslations].toLowerCase()} className="large" key={name}>
                  {icon}
                  <Text>{text[name as keyof ITranslations]}</Text>
                </StyledMenuItem>
              ))}
            </StyledLargeMenuItem>
            {index === 1 && (
              <StyledLargeMenuItem key={index} className="text">
                <Text>{text.signInMenuText}</Text>
                <AuthButton />
              </StyledLargeMenuItem>
            )}
          </>
        ))}
      </StyledMenu>
    );
  }
}
