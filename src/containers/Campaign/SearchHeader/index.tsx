import React from "react";

import NotificationComponent from "components/Notification";
import SearchInput from "components/SearchInput";
import { SearchHeaderDiv } from "./style";

const SearchHeader = () => {
  return (
    <SearchHeaderDiv className="search_div">
      <SearchInput />
      <NotificationComponent />
    </SearchHeaderDiv>
  );
};

export default SearchHeader;
