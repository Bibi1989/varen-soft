import React from "react";

import { HamMenu } from "./style";

type Props = {
  onClick: () => void;
};

const HamburgerMenu: React.FC<Props> = ({ onClick }) => {
  return (
    <HamMenu className="ham_menu" onClick={onClick}>
      <div className="bar"></div>
      <div className="bar"></div>
    </HamMenu>
  );
};

export default HamburgerMenu;
