import React from "react";

import {
  OverviewSvg,
  ProductSvg,
  CampaignSvg,
  PayoutSvg,
  SettingSvg,
  ScheduleSvg,
  StatementSvg,
} from "../../../components/Icons";
import { MenusT } from "../../../constants/menus";
import { useLayout } from "../../../context/LayoutProvider";
import { MenuBox, Icon, Label } from "./style";

type Props = {
  menu: MenusT;
  handleActiveMenu?: (id: number) => void;
};

const Menu: React.FC<Props> = ({
  menu: { icon, label, active, id },
  handleActiveMenu,
}) => {
  const { isCollapsible, isDark } = useLayout();

  const getIcons = (isActive: boolean) => {
    switch (icon) {
      case "overview":
        return <OverviewSvg active={isActive || !isDark} />;
      case "products":
        return <ProductSvg active={isActive || !isDark} />;
      case "campaigns":
        return <CampaignSvg active={isActive || !isDark} />;
      case "payouts":
        return <PayoutSvg active={isActive || !isDark} />;
      case "schedules":
        return <ScheduleSvg active={isActive || !isDark} />;
      case "statement":
        return <StatementSvg active={isActive || !isDark} />;
      case "settings":
        return <SettingSvg active={isActive || !isDark} />;
      default:
        return null;
    }
  };

  return (
    <MenuBox
      active={active}
      collapse={isCollapsible}
      onClick={() => {
        if (handleActiveMenu) {
          handleActiveMenu(id);
        }
      }}
    >
      <Icon>{getIcons(active)}</Icon>
      {!isCollapsible && <Label>{label}</Label>}
    </MenuBox>
  );
};

export default Menu;
