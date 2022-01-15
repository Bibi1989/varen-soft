import styled from "styled-components";

export const HamMenu = styled.div`
  .bar {
    height: 2px;
    width: 33px;
    background: ${({ theme }) => theme.text};
    margin: 10px 0;
  }
`;
