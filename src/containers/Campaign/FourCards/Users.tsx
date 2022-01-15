import { Card, Divider } from "antd";
import React from "react";

import NewUser from "./commons/NewUser";
import { Title, GoSettings } from "./style";

const Users = () => {
  return (
    <Card className="user_card">
      <Title>Users</Title>
      <NewUser />
      <Divider />
      <NewUser />
      <Divider />
      <GoSettings>Go to setting</GoSettings>
    </Card>
  );
};

export default Users;
