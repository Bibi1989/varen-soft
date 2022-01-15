import styled from "styled-components";

export const ColHeaderContainer = styled.div`
  background: transparent;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 200px;
`;

export const H1 = styled.h1`
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 48px;
  line-height: 72px;
  letter-spacing: -1px;
  color: ${({ theme }) => theme.text};
`;

export const H2 = styled.h2`
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 32px;
  color: ${({ theme }) => theme.text};
`;
