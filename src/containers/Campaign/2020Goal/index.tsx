import { Card, Progress } from "antd";
import Image from "next/image";
import React from "react";

import cardImage from "../../../assets/images/goal.png";
import {
  GoalDiv,
  BackgroundBlue,
  BackgroundWhite,
  ChartDiv,
  ImageDiv,
} from "./style";

const Goal = () => {
  return (
    <GoalDiv>
      <Card className="card">
        <p className="title">2020 Goal</p>
        <ImageDiv>
          <BackgroundWhite />
          <BackgroundBlue />
          <div className="image">
            <Image src={cardImage} width={190} height={190} />
          </div>
        </ImageDiv>
        <ChartDiv>
          <div className="progress_title">
            <p>Bento Illustration</p>
            <p>40%</p>
          </div>
          <Progress showInfo={false} className="bar1" percent={40} />
          <div className="progress_title">
            <p>Bento Illustration</p>
            <p>25%</p>
          </div>
          <Progress
            showInfo={false}
            className="bar2"
            percent={25}
            status="active"
          />
          <div className="progress_title">
            <p>Bento Illustration</p>
            <p>50%</p>
          </div>
          <Progress showInfo={false} className="bar3" percent={50} />
          <div className="progress_title">
            <p>Bento Illustration</p>
            <p>80%</p>
          </div>
          <Progress showInfo={false} className="bar4" percent={80} />
        </ChartDiv>
      </Card>
    </GoalDiv>
  );
};

export default Goal;
