import React from "react";
import BarChartSvg from "../../../../components/Icons/BarChartSvg";
import { UserCard, UserContent } from "./style";

const NewUser = () => {
  return (
    <UserCard>
      <UserContent>
        <p className="user_title">New Users</p>
        <p className="total_users">57m</p>
        <p className="users_percentage">21.77%</p>
      </UserContent>
      <div>
        <BarChartSvg />
      </div>
    </UserCard>
  );
};

export default NewUser;
