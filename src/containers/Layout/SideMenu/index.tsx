import { Card } from "antd";
import React, { useState } from "react";
import Image from "next/image";

import HamburgerMenu from "components/HamburgerMenu";
import Logo from "components/Logo";
import { menus, menus2, MenusT } from "constants/menus";
import { useLayout } from "context/LayoutProvider";
import Menu from "./Menu";
import {
  AllMenus,
  Divider,
  MenusOne,
  SideMenuDiv,
  AvatarDiv,
  AvatarName,
} from "./style";
import { ImageDiv } from "containers/Campaign/2020Goal/style";
import cardImage from "assets/images/goal.png";
import CustomButton from "components/CustomButton";
import { theme, themeDark } from "constants/theme";
import Avatar from "components/Avatar";

const SideMenu = () => {
  const [stateMenus, setStateMenus] = useState<MenusT[]>(menus);

  const { isCollapsible, isMobile, isDark, breakpoint1340, collapseSideMenu } =
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
    <SideMenuDiv collapse={isCollapsible}>
      <AllMenus collapse={isCollapsible}>
        <Logo />
        <MenusOne collapse={isCollapsible}>
          <p className="menu">{true ? "Admin" : "Admin tools"}</p>
          {stateMenus.map((menu: MenusT) => (
            <Menu
              menu={menu}
              key={menu.id}
              handleActiveMenu={handleActiveMenu}
            />
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
      <div>
        <Card className="side_menu_card">
          <ImageDiv>
            <div className="image">
              <Image src={cardImage} width={250} height={250} />
            </div>
          </ImageDiv>
          <CustomButton
            label="Get Pro Now"
            background={!isDark ? themeDark.white : theme.white}
            color={!isDark ? themeDark.text : theme.text}
          />
        </Card>

        {!isMobile && (
          <AvatarDiv>
            <Avatar />
            <AvatarName>
              <h3>Tam Tran</h3>
              <p>Free account</p>
            </AvatarName>
          </AvatarDiv>
        )}
      </div>
    </SideMenuDiv>
  );
};

export default SideMenu;
