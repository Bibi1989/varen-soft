import React from "react";
import { Typography } from "antd";
import IncomeBarChartSvg from "../../../components/Icons/IncomeBarChartSvg";
import { AffiliateDiv, Div } from "./style";
import NumberSvg from "../../../components/Icons/NumberSvg";

const { Title } = Typography;

const AffiliateImpressions = () => {
  return (
    <AffiliateDiv>
      <Title level={4} className="title">
        Affiliate Impressions
      </Title>

      <Div>
        <NumberSvg className="number" />
        <IncomeBarChartSvg width="250px" />
      </Div>
    </AffiliateDiv>
  );
};

export default AffiliateImpressions;
