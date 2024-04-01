import styled from 'styled-components'
// import { css } from 'styled-components';

export const StyledVideoShortContainer =styled.div`
width: 100%;
margin-top:2rem;




`;
export const VideoShortHeading =styled.div`
display: flex;
align-items: center;


p{
    font-size: 24px;
    font-weight: 500;
    /* color: ${({theme: {text}}) =>text}; */
    margin-left: .5rem;
}




`;
export const MoreLessContainer =styled.div`
width: 100%;
display: flex;
justify-content: center;
border-top: 1px solid ${({theme: {divider}})=>divider};
margin-top:2.5rem;
/* padding-top:1rem; */
margin-bottom:.5rem;




`;
export const MoreLessButton =styled.button`
border: 1px solid ${({theme: {divider}})=>divider};
display: flex;
justify-content: center;
align-items: center;
gap:.5rem;
padding:.5rem 0rem;
width: 23.5rem;
background-color:${({theme: {background}})=>background};
border-radius: 100rem;
transform:translateY(-50%);

&:hover{
background-color:${({theme: {grey2}})=>grey2};
cursor: pointer;

.icon{
background-color:${({theme: {grey2}})=>grey2};
/* margin-top:.5rem; */

}
}

`;
export const ShortsVideosContainer =styled.div`

width: 100%;
display: grid;
grid-template-columns: repeat(6,1fr);
column-gap: 1rem;
row-gap: 1rem;
margin-top:1.5rem;


`;