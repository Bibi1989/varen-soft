import Image from "next/image";
import React from "react";
import { Card, Divider, Space } from "antd";

import {
  Container,
  Title,
  Content,
  Chart,
  Col,
  Row,
  Div,
  Grid,
  GridChild,
} from "./style";
import chartImg from "../../../assets/images/chart.png";
import PageIconSvg from "../../../components/Icons/PageIconSvg";
import LineSvg from "../../../components/Icons/LineSvg";
import BlueArrowDow from "../../../components/Icons/BlueArrowDown";

const gridStyle: any = {
  width: "25%",
  textAlign: "center",
};

const borderRadiusLeft: any = {
  borderTopLeftRadius: 16,
  borderBottomLeftRadius: 16,
};

const borderRadiusRight: any = {
  borderTopRightRadius: 16,
  borderBottomRightRadius: 16,
};

const Users = () => {
  return (
    <Card className="card">
      <Container>
        <Title>Active Users right now 💡</Title>
        <Row>
          <Col>
            <Content>
              <h1>478</h1>

              <Div>
                <div>
                  <PageIconSvg />
                </div>
                <p className="blue">Page views per minute</p>
              </Div>
              <Divider />
              <Div>
                <div>
                  <LineSvg />
                </div>
                <Space />
                <Space />
                <div>
                  <BlueArrowDow />
                </div>
                <p className="blue">6%</p>
              </Div>
              <Div>
                <p className="dark">Update your payout method in Settings</p>
              </Div>
            </Content>
          </Col>
          <Col>
            <Chart>
              <Image src={chartImg} layout="responsive" />
            </Chart>
          </Col>
        </Row>
        <Divider />
        <Grid>
          <GridChild>
            <p>Users</p>
            <h1>36K</h1>
          </GridChild>
          <GridChild>
            <p>Clicks</p>
            <h1>1m</h1>
          </GridChild>
          <GridChild>
            <p>Sales</p>
            <h1>327$</h1>
          </GridChild>
          <GridChild>
            <p>Items</p>
            <h1>68</h1>
          </GridChild>
        </Grid>
      </Container>
    </Card>
  );
};

export default Users;
