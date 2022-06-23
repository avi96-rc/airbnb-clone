import React from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
// FaSearch

const SearchBar = () => {
  return (
    <SearchBarStyed>
      <div>
        <input type="text" placeholder="search here ... "/>
        <div className="search">
          <FaSearch />
        </div>
      </div>
    </SearchBarStyed>
  );
};

export default SearchBar;
//  rgb(229, 231, 235);
const SearchBarStyed = styled.form`
box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.1);
  border: 2px solid rgb(229, 231, 235);
  border-radius: 50px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 7px 10px;
  box-sizing: border-box;

  div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  input{
    padding:5px;
    border: none;
    font-size: 1rem;
    color: rgb(113, 113, 113);
    outline: none;
    width: 100%;
    box-sizing: border-box;
  }

  .search {
    height: 15px;
    width: 15px;
    padding: 10px;
    background-color: rgb(248, 113, 113);
    border-radius: 50%;
    justify-content: center;
    display: flex;
    align-items: center;
  }

  svg {
    /* transform: translate(100%, -50%); */
    color: white;
  }

`;

