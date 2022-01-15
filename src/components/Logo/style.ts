import styled from "styled-components";

export const LogoDiv = styled.div<{ collapse: boolean }>`
  display: flex;
  margin-top: ${({ collapse }) => (collapse ? "70px" : "0px")};
  margin-left: ${({ collapse }) => (collapse ? "0" : "0px")};

  h1 {
    color: ${({ theme }) => theme.text};
  }
`;
