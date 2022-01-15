import React, { useState } from "react";
import { Card } from "antd";
import { Title } from "./style";
import ProgressCard from "./commons/Progress";

import img1 from "../../../assets/images/img.png";
import img2 from "../../../assets/images/img2.png";
import { theme } from "../../../constants/theme";
import CustomButton from "../../../components/CustomButton";

export type ProgressT = {
  id: number;
  img: StaticImageData;
  h2: string;
  p: string;
  percent: number;
  color: string;
  amount?: string;
};

const IconProgress = () => {
  const [items] = useState<ProgressT[]>([
    {
      id: 1,
      img: img1,
      h2: "Unity Comps",
      p: "New 3D Kit",
      color: theme.purple,
      percent: 40,
    },
    {
      id: 2,
      img: img2,
      h2: "Folio Designer",
      p: "UI Design Kit",
      color: theme.green,
      percent: 62,
    },
    {
      id: 3,
      img: img1,
      h2: "Folio Agency",
      p: "UI Design Kit",
      color: theme.red,
      percent: 75,
    },
  ]);

  return (
    <Card className="icon_progress_card">
      <Title>Icon Progress</Title>
      {items.map((item: ProgressT) => (
        <ProgressCard item={item} key={item.id} isProgress={true} />
      ))}
      <div className="btn">
        <CustomButton label="Discover More" />
      </div>
    </Card>
  );
};

export default IconProgress;
