import styled from 'styled-components';

export const StyledSettings = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${({ theme }) => theme.settingsBg};
    position:absolute;
    right:85%;
    top:100%;
    width:17.3rem;
    padding:0.5rem 0;
    border-radius:0.5rem;
    box-shadow: 0px 0px 10px 0px ${({ theme }) => theme.settingsShadow};
    z-index: 200000;
`;
export const Setting = styled.div`
    display: flex;
    align-items:center;
    gap:1rem;
    width:100%;
    height: 3rem;
    padding-left:1rem;
    color: ${({ theme }) => theme.text};
    
    &:hover{
        background-color: ${({ theme }) => theme.grey2};
        cursor:pointer;
    }

`;