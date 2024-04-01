import styled from 'styled-components'
// import { css } from 'styled-components';

export const StyledWatchVideoContent=styled.div`
width: 100%;
height:94.2%;
display: grid;
gap: 1.5vw;
grid-template-columns: 71.5vw 24vw;
padding: 0 1.5vw;
overflow:scroll;
`;
export const MoreVideoContainer=styled.div`
width: 100%;
display: flex;
flex-direction: column;
gap: 1rem;
padding-top: 1.5rem;

`;
export const StyledWatchVideoContainer=styled.div`
width: 100%;
padding-top: 1.5rem;

`;
export const VideoScreen=styled.div`
width: 100%;
height: 44rem;
border-radius:1rem;
overflow:hidden;

`;
export const VideoDetails=styled.div`
width: 100%;
display: flex;
flex-direction: column;
margin-top: 1rem;

.videoScrreenTitle{
    font-size: 20px;
    font-weight: 500;
    color: ${({theme: {text}}) =>text};
}

`;
export const VideoDescription=styled.div`
width: 100%;
background-color: ${({theme: {grey2}}) =>grey2};
padding: 1rem;
border-radius: 1rem;
margin-top: 1rem;
line-height: 1.5rem;



`;
