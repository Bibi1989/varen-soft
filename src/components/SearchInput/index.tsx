import React from "react";
import styled from "styled-components";
import { SearchOutlined } from "@ant-design/icons";

type Props = {
  hideInput?: boolean;
};

const SearchInput: React.FC<Props> = ({ hideInput = false }) => {
  return (
    <SearchDiv>
      <SearchOutlined className="search_icon" />
      {hideInput && <Input placeholder="Search" />}
    </SearchDiv>
  );
};

export const SearchDiv = styled.div`
  display: flex;
  align-items: center;

  .search_icon {
    font-size: 20px;
    color: ${({ theme }) => theme.text};
  }
`;

export const Input = styled.input`
  background-color: transparent;
  border: none;
  outline: none;
  margin-left: 10px;

  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  color: #808191;
`;

export default SearchInput;
