import styled from "styled-components";

export const Container = styled.div`
  max-width: calc(1440px - (256px));
  margin: auto;
  width: 100%;
  height: 100%;
`;
export const Row = styled.div`
  display: grid;
  grid-template-columns: 65% 35%;
  height: 100%;

  @media (max-width: 1340px) {
    grid-template-columns: 1fr;
  }
`;
export const Col = styled.div`
  padding: 0 50px;
  border-right: 1px solid #cccccc;
  height: 100%;
  background: ${({ theme }) => theme.background};

  @media (max-width: 1340px) {
    padding: 0 15px;
  }

  .card {
    border-radius: 32px;
    background: ${({ theme }) => theme.white};
  }

  &.second_col {
    @media (max-width: 1340px) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 30px;

      .search_div {
        display: none;
      }
    }
    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      gap: 30px;

      .search_div {
        display: none;
      }
    }
  }
`;
