import { Col, Row, Progress } from "antd";
import Image from "next/image";
import React from "react";
import { ProgressT } from "../IconProgress";

import { ProgressContainer } from "./style";

const ProgressCard: React.FC<{
  item: ProgressT;
  isProgress?: boolean;
}> = ({ item: { img, h2, p, percent, color, amount }, isProgress }) => {
  return (
    <ProgressContainer>
      <Row>
        <Col span={6}>
          <Image src={img} width={48} height={48} />
        </Col>
        <Col span={12}>
          <h2>{h2}</h2>
          <p>{p}</p>
        </Col>
        <Col span={6}>
          {isProgress ? (
            <Progress
              type="circle"
              percent={percent}
              width={50}
              strokeColor={color}
              strokeWidth={10}
            />
          ) : (
            <p className="sales_amount">{amount}</p>
          )}
        </Col>
      </Row>
    </ProgressContainer>
  );
};

export default ProgressCard;
