import React from "react";
import styled from "styled-components";
import home from "./../assets/home.webp";

const Home = () => {
  return (
    <StyledHome>
      {/* show galary here */}
      <img src={home} alt="home" />
      <div className="center">
        <p>Not sure where to go? Perfect.</p>
        <button>I'm flexible.</button>
      </div>
    </StyledHome>
  );
};

export default Home;

const StyledHome = styled.div`
  position: relative;
  width: 100%;
  /* min-height:50vh; */
  height: 100vh;
  overflow: hidden;

  @media only screen and (max-width: 1000px) {
    height: 80vh;
  }
  @media only screen and (max-width: 700px) {
    height: 60vh;
  }
  @media only screen and (max-width: 500px) {
    height: 50vh;
  }

  .center {
    position: absolute;
    z-index: 10;
    /* border: 2px solid red; */
    left: 50%;
    top: 50%;
    transform: translate(-50%, 0%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .center button {
    background-color: white;
    padding: 20px 40px;
    border-radius: 50px;
    color: rgb(168, 85, 247);
    font-weight: bold;
    border: none;
    box-shadow: 2px 4px 10px 2px rgba(0, 0, 0, 0.3);
  }

  img {
    position: absolute;
    width: 100%;
    display: block;
    height: 100%;

    object-fit: cover;
  }

  p {
    text-align: center;
    /* position: absolute; */

    /* text-align: center; */
  }
`;
