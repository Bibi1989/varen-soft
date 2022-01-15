import { Card } from "antd";
import React, { useState } from "react";

import ProgressCard from "./commons/Progress";
import { ProgressT } from "./IconProgress";
import { Title } from "./style";
import img1 from "../../../assets/images/img.png";
import img2 from "../../../assets/images/img2.png";
import { theme } from "../../../constants/theme";
import CustomButton from "../../../components/CustomButton";

const LatestSales = () => {
  const [items] = useState<ProgressT[]>([
    {
      id: 1,
      img: img1,
      h2: "Unity Comps",
      p: "New 3D Kit",
      color: theme.purple,
      percent: 40,
      amount: "+$35",
    },
    {
      id: 2,
      img: img2,
      h2: "Folio Designer",
      p: "UI Design Kit",
      color: theme.green,
      percent: 62,
      amount: "+$35",
    },
    {
      id: 3,
      img: img1,
      h2: "Folio Agency",
      p: "UI Design Kit",
      color: theme.red,
      percent: 75,
      amount: "+$35",
    },
  ]);

  return (
    <Card className="icon_progress_card">
      <Title>Icon Progress</Title>
      {items.map((item: ProgressT) => (
        <ProgressCard item={item} key={item.id} isProgress={false} />
      ))}
      <div className="btn">
        <CustomButton label="Show all report" background={theme.purple} />
      </div>
    </Card>
  );
};

export default LatestSales;
