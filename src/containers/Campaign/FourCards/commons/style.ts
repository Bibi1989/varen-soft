import styled from "styled-components";

// User Card
export const UserCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px;
`;

export const UserContent = styled.div`
  p {
    font-family: Poppins;
    font-style: normal;
    letter-spacing: -0.5px;
    margin-bottom: 0;
  }

  .total_users {
    font-size: 32px;
    font-weight: 500;
    line-height: 48px;
    color: ${({ theme }) => theme.text};
  }

  .user_title {
    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
    color: #808191;
  }

  .users_percentage {
    font-family: Inter;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    color: #7fba7a;
  }
`;

// Icon Progress Card style
export const ProgressContainer = styled.div`
  padding: 24px;

  h2,
  p {
    margin: 0;
  }

  h2 {
    font-family: Inter;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    color: ${({ theme }) => theme.text};
    margin-bottom: 10px;
  }

  p {
    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
    color: #808191;
  }

  .sales_amount {
    font-family: Inter;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    text-align: right;
    color: ${({ theme }) => theme.green};
  }
`;

export const ProgressImageDiv = styled.div``;
