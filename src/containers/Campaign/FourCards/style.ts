import styled, { css } from "styled-components";

// user style
export const Container = styled.div<{ mobile: boolean }>`
  ${({ mobile }) =>
    mobile
      ? css`
          display: grid;
          grid-template-columns: repeat(1fr);
          gap: 20px;
          padding: 30px 0;
        `
      : css`
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
          padding: 30px 0;
        `};

  .user_card,
  .income_card,
  .icon_progress_card {
    border-radius: 32px;
    height: 480px;
    background: ${({ theme }) => theme.white};

    .ant-card-body {
      padding: 0 !important;
    }
  }

  .income_card {
    background: ${({ theme }) => theme.purple};
    padding: 8px;

    .income_inner_card {
      border-radius: 24px;
      height: 100%;
      padding: 24px;
      height: 372px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      background: ${({ theme }) => theme.white};

      .btn {
        align-self: flex-end;
        margin-top: 40px;
      }
    }
  }

  .icon_progress_card {
    .btn {
      padding: 0 24px;
    }
  }
`;

export const Title = styled.p<{ color?: string }>`
  padding: 24px;
  padding-bottom: 10px;
  padding-top: 32px;
  font-size: 18px;
  color: ${({ color, theme }) => (color ? color : theme.text)};
`;

export const GoSettings = styled.p`
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
  line-height: 18px;
  text-align: center;
  color: #5f75ee;
`;

// income style
export const IncomeInnerCardDiv = styled.div`
  display: flex;
`;
