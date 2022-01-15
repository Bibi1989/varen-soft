import styled from "styled-components";

type StyledContainerT = {
  background: string;
};

export const Container = styled.div<StyledContainerT>`
  background: ${({ background }) => background};
  border-radius: 24px;
  padding: 32px;
`;
