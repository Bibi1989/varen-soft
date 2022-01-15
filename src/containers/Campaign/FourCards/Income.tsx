import React from "react";
import { Card, Row, Col } from "antd";

import { Title, IncomeInnerCardDiv } from "./style";
import { theme } from "../../../constants/theme";
import IncomeBarChartSvg from "../../../components/Icons/IncomeBarChartSvg";
import CustomButton from "../../../components/CustomButton";
import NumberSvg from "../../../components/Icons/NumberSvg";

const Income = () => {
  return (
    <Card className="income_card">
      <Title color={theme.white}>Income</Title>
      <Card className="income_inner_card">
        <Row>
          <Col span={3}>
            <NumberSvg />
          </Col>
          <Col span={21}>
            <IncomeBarChartSvg />
          </Col>
        </Row>
        <div className="btn">
          <CustomButton label="Withdraw Earning" />
        </div>
      </Card>
    </Card>
  );
};

export default Income;
