import React from 'react'
import logo from './../../assets/airbnb.webp'
import SearchBar from './SearchBar'
import styled from 'styled-components'
import {RiGlobalLine} from 'react-icons/ri'
import {FaUserCircle} from 'react-icons/fa'
import {GiHamburgerMenu} from 'react-icons/gi';

const Header = () => {
  return (
    <SytledHeader>
        <div className="logo equal">
            <img src={logo} alt="logo" />
        </div>
        <div className="search-bar equal">
          <SearchBar/>
        </div>
        <div className="options equal">
          <span>
            <p>
            Become a host
            </p>
            </span>
          <span><RiGlobalLine/></span>
          <span>
            <div>
              <GiHamburgerMenu/>
              <FaUserCircle/>
            </div>
          </span>
        </div>
    </SytledHeader>
  )
}
export default Header

const SytledHeader = styled.header`
position:sticky;
left: 0;
top: 0;
z-index: 20;
background-color: white;


  height: 90px;
  width: 100%;
  box-shadow: 0px 4px 10px 20px rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;

  .equal{
    width: 33.33%;
  }

  .search-bar{
    display: flex;
    justify-content: center;
    border: none;
    
  }
  .options{
    display: flex;
    justify-content: flex-end;
  
    align-items: center;
    padding-right: 10px;
  }

  img{
    width: 120px;
    padding: 0px 3rem;
  }
  span{
    margin-right: 10px;
  }
  span p{
    color:rgb(107 114 128);
    font-weight: 400;
    font-size: 1.3rem;
    /* line-height: 2rem; */
  }

  span div{
   border: 2px solid rgb(229, 231, 235);
    border-radius: 50px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 10px;
  box-sizing: border-box;

  }
  
 
  span   svg {
    color: rgb(107 114 128);
   /* padding: 10px; */
   margin-right:5px;
   width: 20px;
   height: 20px;
    
  } 
  

  



`;
