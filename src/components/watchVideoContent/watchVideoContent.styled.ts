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
export const VideoDetailsAction=styled.div`
display: flex;
align-items: center;
justify-content: space-between;
margin-top: 1rem;
`;
export const VideoDetailsInfos=styled.div`
display: flex;
align-items: center;

`;
export const UserAccount=styled.div`
display: flex;
flex-direction: column;
margin-left: 1rem;
gap: .2rem;

.name{
    font-weight: 800;  
    font-size:16px;     
}
.subscribers{
    font-weight: 600;   
color: ${({theme: {grey3}}) =>grey3};

}


`;
export const SubscribeButton=styled.div`
padding: 0.6rem .6rem;
border-radius:200rem;
background-color: ${({theme: {text}}) =>text};
color: ${({theme: {background}}) =>background};
margin-left: 2rem;
font-size:13px;
font-weight: 600;
`;
export const DetailsActions=styled.div`
display: flex;
align-items: center;
gap: .5rem;
`;
export const DetailsActionsButton=styled.div`
display: flex;
align-items: center;
justify-content: center;
gap: .5rem;
background-color: ${({theme: {grey2}}) =>grey2};
color: ${({theme: {text}}) =>text};
border-radius: 100rem;
padding: .5rem .5rem;
cursor: pointer;

.divider{
    border-left: 1px solid ${({theme: {grey3}}) =>grey3};
}
`;
