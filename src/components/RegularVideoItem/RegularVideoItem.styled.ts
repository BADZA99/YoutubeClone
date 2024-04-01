import styled from 'styled-components'
import { css } from 'styled-components';

export const StyledRegularVideoItem =styled.div`
width: 100%;
/* height:10rem; */
display: flex;
flex-direction: column;
gap: 0.7rem;
/* background-color:red; */



&:hover{
    cursor: pointer;
}
`;


export const Time =styled.div`
background-color: ${({theme: {background}}) =>background};
width: max-content;
padding: .15rem .25rem;
border-radius: .3rem;
position: absolute;
bottom: .3rem;
right: .3rem;
/* height: max-content; */

&p{
    /* color: ${({theme: text}) =>text}; */
    font-size: .13px;
}
`;
export const RegularVideoThumbnail =styled.div<{$isMenuSmall?:boolean}>`
width: 100%;
height:12.2rem;
border-radius:.8rem;
overflow:hidden;
position: relative;

img{
    width:100%;
    height:100%;
    border-radius:inherit;
    object-fit:cover;
}
${({$isMenuSmall}) => $isMenuSmall && css`
     height: 13.7rem;
`}
`;

export const RegularVideoContent =styled.div`
width: 100%;
display: grid;
grid-template-columns: 2.3rem 1fr ;
gap: 0.7rem;

`;
export const RegularVideoPic =styled.div`
width: 2.3rem;
height: 2.3rem;
display: grid;
grid-template-columns: 2.3rem 1fr ;
border-radius:50%;

img{
    width:100%;
    height:100%;
    border-radius:inherit;
    object-fit:cover;
}
`;
export const RegularVideoTitleSubTitle =styled.div`
margin-top:.3rem;
.videoItemTitle{
    font-size:16px;
    font-weight: 500;
}
`;


