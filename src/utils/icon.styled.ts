import styled from 'styled-components'

export const Icon=styled.div<{$showBackground?:boolean}>`
background-color: ${({theme,$showBackground})=>$showBackground ? theme.grey2:'transparent'}; 
border-radius:100rem;
color:${({theme})=>theme.text};
display: flex;
align-items: center;
justify-content: center;
padding:0.6rem;
cursor:pointer;

&.menu{
    &:hover{
        background-color:${({theme})=>theme.grey2};
    }
}
`;