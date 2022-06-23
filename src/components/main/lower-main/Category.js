import React from "react";
import styled from "styled-components";

const Category = () => {
  return (
        <div>
        <h1> Live Anywhere </h1>
        <StyledCategory>
        {/* { exploreList.map(()=> <ExploreItem/>)} */}
   </StyledCategory>
    </div>
  )
};

export default Category;

const StyledCategory = styled.div`
  width: 100%;
  height: 500px;
  border: 1px solid green;
  box-sizing: border-box;
`;
