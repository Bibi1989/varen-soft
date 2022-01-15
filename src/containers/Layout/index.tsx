import { Switch } from "antd";
import React from "react";
import { useLayout } from "context/LayoutProvider";
import MobileNavbar from "./MobileNavbar";

import SideMenu from "./SideMenu";
import { StickyFooter } from "./SideMenu/style";

import { Container, SideBar, Main } from "./style";

const Layout: React.FC = ({ children }) => {
  const { isCollapsible, isMobile, isDark, changeTheme } = useLayout();

  const onChange = (checked: boolean) => {
    changeTheme(!isDark);
  };

  return (
    <>
      {isMobile ? (
        <>
          <MobileNavbar />
          {!isCollapsible ? (
            <Container collapse={isCollapsible}>
              <SideBar>
                <SideMenu />
                <StickyFooter collapse={isCollapsible}>
                  <Switch defaultChecked={false} onChange={onChange} />
                </StickyFooter>
              </SideBar>

              <Main>{children}</Main>
            </Container>
          ) : (
            <Main>{children}</Main>
          )}
        </>
      ) : (
        <Container collapse={isCollapsible}>
          <SideBar>
            <SideMenu />
            <StickyFooter collapse={isCollapsible}>
              <Switch defaultChecked={false} onChange={onChange} />
            </StickyFooter>
          </SideBar>
          <Main>{children}</Main>
        </Container>
      )}
    </>
  );
};

export default Layout;
