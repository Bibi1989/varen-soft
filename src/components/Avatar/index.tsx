import React from "react";

import Image from "next/image";
import avatar from "assets/images/avatar.png";

const Avatar = () => {
  return (
    <div>
      <Image src={avatar} width={35} height={35} />
    </div>
  );
};

export default Avatar;
