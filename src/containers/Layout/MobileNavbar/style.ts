import styled from "styled-components";
import { Layout, Menu, Breadcrumb } from "antd";

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

export const Navbar = styled(Header)`
  &.ant-layout-header {
    background: ${({ theme }) => theme.white};
    border-bottom: 1px solid #cccccc;
    overflow: hidden;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .ant-menu-title-content {
      color: ${({ theme }) => theme.text};
    }
  }

  .ant-menu.ant-menu-dark,
  .ant-menu-dark .ant-menu-sub,
  .ant-menu.ant-menu-dark .ant-menu-sub {
    background: ${({ theme }) => theme.white};
  }
`;

export const SubNavMenu = styled.div`
  display: flex;
  align-items: center;
`;

export const Circle = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: ${({ theme }) => theme.iconShadow};
`;

export const Seperate = styled.div`
  margin-left: 15px;
`;
