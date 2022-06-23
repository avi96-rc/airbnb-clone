import React from 'react'
import styled from 'styled-components';
import ExploreItem from './ExploreItem';

const Explore = () => {
    const exploreList = new Array(8).fill(1)
    
    
  return (
    <div>
        <h1> Explore Nearbuy</h1>
        <StyledExplore>
        
        { exploreList.map(()=> <ExploreItem/>)}
   </StyledExplore>
    </div>
   
  )
}

export default Explore

const StyledExplore = styled.div`
  width: 100%;
  /* height: 500px; */
  /* border: 1px solid blue; */
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
  justify-content: flex-start;
  /* background-color: red; */
`;