import styled, { css } from "styled-components";

export const SideMenuDiv = styled.div<{ collapse: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  ${({ collapse }) =>
    collapse
      ? css`
          padding: 5px;
        `
      : css`
          padding: 20px;
        `};

  .side_menu_card {
    background: #cfc8ff;
    border-radius: 30px;
  }
`;

export const AvatarDiv = styled.div`
  display: flex;
  align-items: center;
  margin-top: 60px;
`;

export const AvatarName = styled.div`
  h3,
  p {
    margin: 0;
  }
`;

export const AllMenus = styled.div<{ collapse: boolean }>`
  position: relative;
  margin-bottom: 50px;

  .ham_menu {
    position: absolute;
    top: 20px;
    right: 20px;
  }
`;

export const MenusOne = styled.div<{ collapse: boolean }>`
  padding: 20px 0;

  ${({ collapse }) =>
    collapse
      ? css`
          .menu {
            padding-left: 0px;
            font-family: Inter;
            font-style: normal;
            font-weight: 500;
            font-size: 12px;
            line-height: 16px;
            color: #808191;
          }
        `
      : css`
          .menu {
            padding-left: 22px;
            font-family: Inter;
            font-style: normal;
            font-weight: 500;
            font-size: 12px;
            line-height: 16px;
            color: #808191;
          }
        `};
`;

export const Divider = styled.div`
  height: 1px;
  width: 100%;
  background: ${({ theme }) => theme && theme.divider};
`;

export const MenuBox = styled.div<{ active?: boolean; collapse?: boolean }>`
  cursor: pointer;
  ${({ collapse, active }) =>
    collapse
      ? css`
          display: flex;
          align-items: center;
          justify-content: center;
          height: 56px;
          width: 100%;
          background-color: ${({ theme }) => active && theme.purple};
          color: ${({ theme, active }) => active && theme.white};
          border-radius: ${({ active }) => active && "8px"};
          transition: all 0.3s linear;
        `
      : css`
          display: flex;
          align-items: center;
          height: 56px;
          padding: 0 22px;
          background-color: ${({ theme }) => active && theme.purple};
          color: ${({ theme, active }) => active && theme.white};
          border-radius: ${({ active }) => active && "8px"};
          transition: all 0.3s linear;
        `};
`;

export const Icon = styled.div`
  margin-right: 10px;
  color: ${({ theme }) => theme.text};
`;

export const Label = styled.p`
  margin-bottom: 8px;
  color: ${({ theme }) => theme.text};
`;

export const StickyFooter = styled.div<{ collapse: boolean }>`
  position: fixed;
  width: ${({ collapse }) => (collapse ? "60px" : "256px")};
  height: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid #eeeeee;
  bottom: 0;
`;
