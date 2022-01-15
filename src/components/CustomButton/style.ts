import styled from "styled-components";
import { theme } from "../../constants/theme";

export const ButtonStyle = styled.div<{ background?: string }>`
  background: ${({ background }) => background};
  color: ${({ background }) => (background ? theme.white : theme.text)};
  width: 100%;
  height: 56px;
  text-align: center;
  line-height: 56px;
  border-radius: 16px;
`;
