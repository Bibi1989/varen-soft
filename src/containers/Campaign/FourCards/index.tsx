import React from "react";

import Users from "./Users";
import { Container } from "./style";
import Income from "./Income";
import IconProgress from "./IconProgress";
import LatestSales from "./LatestSales";
import { useLayout } from "../../../context/LayoutProvider";

const FourCards = () => {
  const { isMobile } = useLayout();
  return (
    <Container mobile={isMobile}>
      <Users />
      <Income />
      <IconProgress />
      <LatestSales />
    </Container>
  );
};

export default FourCards;
