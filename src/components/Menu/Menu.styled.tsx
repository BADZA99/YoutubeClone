import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledMenu = styled.div`
/* background-color:red; */
width: 100%;
overflow-y:scroll;
overflow-x:hidden;
`;
export const StyledMenuItem = styled.div`
  display: flex;
  color: ${({ theme: { text } }) => text};
  border-radius: 0.5rem;
  /* background-color: ${({ theme: { grey2 } }) => grey2}; */

  &.small{
    font-size:26px;
    flex-direction:column;
    align-items:center;
    gap:.3rem;
    padding:1rem 0;

    p{
        font-size:10px;
    }


  }

  &:hover{
    background-color: ${({ theme: { grey2 } }) => grey2};
    cursor: pointer;
  }
`;
