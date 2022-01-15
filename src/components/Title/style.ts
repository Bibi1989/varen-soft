import styled from "styled-components";

type H1T = { size: string };

export const H1 = styled.h1<H1T>`
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: ${({ size }) => size};
  line-height: 36px;
  letter-spacing: -1px;
  color: #11142d;
  margin: 0;
`;
