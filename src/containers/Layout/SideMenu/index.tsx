import { Switch } from "antd";
import React, { useState } from "react";
import HamburgerMenu from "../../../components/HamburgerMenu";
import Logo from "../../../components/Logo";

import { menus, menus2, MenusT } from "../../../constants/menus";
import { useLayout } from "../../../context/LayoutProvider";
import Menu from "./Menu";
import { AllMenus, Divider, MenusOne, StickyFooter } from "./style";

const SideMenu = () => {
  const [stateMenus, setStateMenus] = useState<MenusT[]>(menus);

  const { isCollapsible, isMobile, breakpoint1340, collapseSideMenu } =
    useLayout();

  const handleActiveMenu = (id: number) => {
    const newMenus = menus.map((menu: MenusT) => {
      if (menu.id === id) {
        menu.active = true;
      } else {
        menu.active = false;
      }

      return menu;
    });

    setStateMenus(newMenus);
  };

  return (
    <AllMenus collapse={isCollapsible}>
      <Logo />
      <MenusOne collapse={isCollapsible}>
        <p className="menu">{true ? "Admin" : "Admin tools"}</p>
        {stateMenus.map((menu: MenusT) => (
          <Menu menu={menu} key={menu.id} handleActiveMenu={handleActiveMenu} />
        ))}
      </MenusOne>
      <Divider />
      <MenusOne collapse={isCollapsible}>
        <p className="menu">Insights</p>
        {menus2.map((menu: MenusT) => (
          <Menu menu={menu} key={menu.id} />
        ))}
      </MenusOne>
      {breakpoint1340 && !isMobile && (
        <HamburgerMenu onClick={() => collapseSideMenu(!isCollapsible)} />
      )}
    </AllMenus>
  );
};

export default SideMenu;
