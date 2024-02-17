import styled,{createGlobalStyle} from 'styled-components'


export const  GlobalStyle = createGlobalStyle`
*, *::before,*::after{
    margin: 0;
    padding: 0;
    border:none;
    font-family:"Roboto",sans-serif;

    box-sizing:border-box !important;
    -webkit-box-sizing:border-box;
    -moz-box-sizing:border-box;
    -ms-box-sizing:border-box;
}

::-webkit-scrollbar{
    width: 0;
    background: transparent;
}

-ms-overlow-style:none;
scrollbar-width:none;


&::-webkit-scrollbar{
    display:none;
}
`;


export const AppContainer=styled.div`
width:100vw;
height:100vh;
overflow:hidden;
background-color: ${(props)=>props.theme.background};


`;