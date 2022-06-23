import React from "react";
import styled from "styled-components";
import london from "./../../../assets/london.webp";

const ExploreItem = () => {
  return (
    <SytedExploreItem>
      <div>
        <img src={london} alt="" />
      </div>
      <div className="details">
        <p className="place">London</p>
        <p className="time">45-minute drive</p>
      </div>
    </SytedExploreItem>
  );
};

export default ExploreItem;
const SytedExploreItem = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  margin: 20px 20px;
  height: 4rem;
  min-width: 15rem;
  flex-grow: 1;
  /* padding-right: 3rem; */

  /* transition: 0.1s ease-in ; */

  /* border: 1px solid yellow; */
  /* height: 100px; */
  /* object-fit: cover; */
  

  &:hover {
    background-color: #e5e7eb;
    cursor: pointer;
    transform: scale(1.1,1.1);
    transition: .1s;
  }
 

  img {
    border-radius: 10px;
    width: 4rem;
    height: 4rem;
  }

  .details {
    /* border:1px solid red; */
    margin-left: 15px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    /* justify-content: center; */
  }

  .place {
    font-weight: 350;
    margin: 0px;
    font-size: 0.9rem;
  }
  .time {
    color: rgb(131, 130, 130);
    margin: 0px;
    font-size: 0.8rem;
  }
`;
