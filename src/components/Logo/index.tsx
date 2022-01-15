import Image from "next/image";
import React from "react";

import logo from "assets/images/logo.png";
import { useLayout } from "context/LayoutProvider";
import { LogoDiv } from "./style";

const Logo = () => {
  const { isCollapsible } = useLayout();
  return (
    <LogoDiv collapse={isCollapsible}>
      <Image src={logo} width={40} height={40} />
      {!isCollapsible && <h1>Unity.</h1>}
    </LogoDiv>
  );
};

export default Logo;
