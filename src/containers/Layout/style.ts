import styled, { css } from "styled-components";

export const Container = styled.div<{ collapse: boolean }>`
  background: ${({ theme }) => theme.background};
  display: grid;
  ${({ collapse }) =>
    collapse
      ? css`
          grid-template-columns: 60px auto;
        `
      : css`
          grid-template-columns: 256px auto;
        `};
  height: 100vh;
  overflow: hidden;
  width: 100%;
`;

export const SideBar = styled.div`
  background: ${({ theme }) => theme.white};
  box-shadow: inset -1px 0px 0px #e4e4e4;
  height: 100%;
  overflow: auto;
`;

export const Main = styled.div`
  height: 100%;
  overflow: auto;
`;
