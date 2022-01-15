import React from "react";
import styled from "styled-components";
import { Badge } from "antd";
import { BellOutlined } from "@ant-design/icons";
import { useLayout } from "../../context/LayoutProvider";

const NotificationComponent = () => {
  const { isMobile } = useLayout();
  return (
    <NotificationDiv>
      {isMobile ? (
        <Badge dot={true}>
          <BellOutlined className="bell_icon" />
        </Badge>
      ) : (
        <Badge count={5}>
          <BellOutlined className="bell_icon" />
        </Badge>
      )}
    </NotificationDiv>
  );
};

export const NotificationDiv = styled.div`
  .bell_icon {
    font-size: 20px;
    color: ${({ theme }) => theme.text};
  }
`;

export default NotificationComponent;
