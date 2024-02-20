import styled from 'styled-components'

export const Text =styled.p`
color :${({theme})=>theme.text};
font-size:14px;

/* chaque instance de text ayant la class logo */
&.logo{
    letter-spacing:-1px;
    font-size:24px;
  font-family:'Oswald', sans-serif;
}
`;