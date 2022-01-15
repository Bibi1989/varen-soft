import React from "react";
import { Layout, Menu, Breadcrumb } from "antd";
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from "@ant-design/icons";

import { Navbar, SubNavMenu, Seperate, Circle } from "./style";
import HamburgerMenu from "../../../components/HamburgerMenu";
import { useLayout } from "../../../context/LayoutProvider";
import SearchInput from "../../../components/SearchInput";
import NotificationComponent from "../../../components/Notification";

const MobileNavbar = () => {
  const { collapseSideMenu, isCollapsible } = useLayout();

  return (
    <Navbar>
      <HamburgerMenu onClick={() => collapseSideMenu(!isCollapsible)} />
      <SubNavMenu>
        <Circle>
          <SearchInput />
        </Circle>
        <Seperate />
        <Circle>
          <NotificationComponent />
        </Circle>
      </SubNavMenu>
    </Navbar>
  );
};

export default MobileNavbar;
