import { Space } from "antd";
import React from "react";

import Layout from "../Layout";
import Goal from "./2020Goal";
import AffiliateImpressions from "./AffiliateImpressions";
import FourCards from "./FourCards";
import ColHeader from "./Header";
import SearchHeader from "./SearchHeader";
import { Container, Row, Col } from "./style";
import Users from "./Users";

const Campaign: React.FC = () => {
  return (
    <Layout>
      <Container>
        <Row>
          <Col>
            <ColHeader />
            <Users />
            <FourCards />
          </Col>
          <Col className="second_col">
            <SearchHeader />
            <Goal />
            <AffiliateImpressions />
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default Campaign;
