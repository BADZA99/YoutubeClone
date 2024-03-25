import React from 'react'
import { StyledMenu, StyledMenuItem } from './Menu.styled'
import { useAppContext } from '../../context/App.context';
import { MENU_SMALL } from '../../utils/SideMenu';
import { Text } from '../../utils/text.styled';
import { ITranslations } from '../../utils/translation';



export default function Menu() {
    const { isMenuSmall,text } = useAppContext();

    if(isMenuSmall) {
    return <StyledMenu>
        {
            MENU_SMALL.map(({name,icon})=>
                <StyledMenuItem className='small'>
                    {icon}
                    <Text>
                       {
                        text[name as keyof ITranslations]
                       } 
                    </Text>
                </StyledMenuItem>

               
            )
        }
    </StyledMenu>;
    } 
        

  return (
    <StyledMenu>
      menu
    </StyledMenu>
  )
}
