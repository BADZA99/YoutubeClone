// import { Link } from 'react-router-dom';
import styled from 'styled-components'




export const StyledCategories =styled.div`
width:85%;
height: 90%;
display: flex;
align-items: flex-end;
gap: 0.3rem;
position: relative;
padding-bottom: .6rem;
z-index: 100;
padding-right:10rem;
overflow-x:scroll;

`;

export const CategoryItem =styled.div<{active:boolean}>`
background-color: ${({theme: {divider,text},active})=>active ?  text : divider};
padding: 0.5rem .8rem;
border-radius: .5rem;
white-space:nowrap;
height:2rem;
display: flex;
justify-content: center;
align-items: center;

p{
    color: ${({theme: {background,text},active})=>active ? background :text } !important;

}

&:hover{
    cursor: pointer;
}


`;
export const CategoryCarusel =styled.div`
width: 100%;
overflow-x:scroll;
margin-bottom:-35px;
display: flex;
align-items: flex-end;
/* background-color: red; */
`;