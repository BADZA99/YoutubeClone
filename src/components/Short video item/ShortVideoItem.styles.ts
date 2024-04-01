import styled from 'styled-components'
// import { css } from 'styled-components';

export const StyledshortVideoItem =styled.div`
display: flex;
flex-direction: column;

&:hover{
    cursor: pointer;
}

.videoItemTitle{
    font-size:16px;
    margin-top:.7rem;
    margin-bottom:.3rem;
}

.details{
    font-size:14px;
    color: ${({ theme }) => theme.grey3};
    display: flex;
    align-items: center;
    gap: .2rem;
}




`;
export const StyledshortVideoThumbnail =styled.div<{$isMenuSmall:boolean}>`
height:24.8rem;
width:100%;
border-radius:.8rem;
overflow:hidden;

img{
    width:100%;
    height:100%;
    border-radius: inherit;
    object-fit: cover;

}






`;