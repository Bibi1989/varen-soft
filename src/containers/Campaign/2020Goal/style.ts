import styled from "styled-components";
import { theme } from "../../../constants/theme";

export const GoalDiv = styled.div`
  margin-bottom: 50px;

  .title {
    color: ${({ theme }) => theme.text};
    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 24px;
  }
`;

export const ImageDiv = styled.div`
  height: 250px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  border-radius: 16px;
  margin-bottom: 15px;
  overflow: hidden;
  position: relative;

  .image {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const BackgroundWhite = styled.div`
  background: ${({ theme }) => theme.white};
  height: 100%;
`;

export const BackgroundBlue = styled.div`
  background: ${({ theme }) => theme.goalBackground};
  height: 100%;
`;

export const ChartDiv = styled.div`
  .progress_title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin-top: 20px;

    p {
      margin: 0;
      color: ${({ theme }) => theme.text};
    }
  }

  .bar1 {
    .ant-progress-bg {
      background-color: ${theme.purple};
    }
  }

  .bar2 {
    .ant-progress-bg {
      background-color: ${theme.green};
    }
  }

  .bar3 {
    .ant-progress-bg {
      background-color: ${theme.yellow};
    }
  }

  .bar4 {
    .ant-progress-bg {
      background-color: ${theme.pink};
    }
  }
`;
