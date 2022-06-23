import React from "react";
import styled from "styled-components";
import Home from "../../pages/Home";
import Category from "./lower-main/Category";
import Explore from "./lower-main/Explore";

export const Main = () => {
  return (
    <div>
      <Home />
      <LowerHome>
        <Explore />
        <Category />
      </LowerHome>
    </div>
  );
};

const LowerHome = styled.div`
  max-width: 80%;
  margin: auto;
`;
