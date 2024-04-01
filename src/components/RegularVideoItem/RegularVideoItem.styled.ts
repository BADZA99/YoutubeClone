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

&.smallView{
    flex-direction: row;
    height: auto;
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

&.smallView{
   height:6rem;
    width: 9rem;
}
`;

export const RegularVideoContent =styled.div`
width: 100%;
display: grid;
grid-template-columns: 2.3rem 1fr ;
gap: 0.7rem;

&.smallView{
  display: flex;
}
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

&.smallView{
  display: none !important;
}
`;
export const RegularVideoTitleSubTitle =styled.div`
margin-top:.3rem;
.videoItemTitle{
    font-size:16px;
    font-weight: 500;
    color: ${({theme: {text}}) =>text};

}
.name{
    font-size:14px;
    color: ${({theme: {grey3}}) =>grey3};
    margin:.5rem 0 0.2rem 0;
}
.details{
    font-size:14px;
    display: flex;
    gap: .5rem;
    color: ${({theme: {grey3}}) =>grey3};

    /* margin:.5rem 0 0.2rem 0; */
}

.dot{
    font-size: 8px;
   
}

&.smallView{
.videoItemTitle{
    font-size:14px;
}

.name{
    font-size:17px;
}
.details{
    font-size:12px;
}
}
`;


