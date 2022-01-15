import styled from "styled-components";

export const Container = styled.div``;

export const Title = styled.p`
  color: ${({ theme }) => theme.text};
`;

export const Chart = styled.div`
  width: 100%;
`;

export const Content = styled.div`
  padding-right: 20px;

  h1 {
    color: ${({ theme }) => theme.text};
  }
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: 25% 75%;
`;

export const Col = styled.div`
  width: 100%;
`;

export const Grid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  border: 1px solid #cccccc;
  border-radius: 16px;
  overflow: hidden;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const GridChild = styled.div`
  border: 1px solid #cccccc;
  text-align: center;
`;

export const Div = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  .blue {
    margin-left: 10px;
    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
    color: ${({ theme }) => theme.textLink};
  }

  p {
    margin: 0;
  }

  h1 {
    color: ${({ theme }) => theme.text};
  }

  .dark {
    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
    color: ${({ theme }) => theme.text};
    margin-top: 20px;
    opacity: 0.4;
  }
`;
