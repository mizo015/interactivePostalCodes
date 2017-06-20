import React from 'react'
import logo from '../assets/logo.svg'
import styled, { keyframes } from 'styled-components'

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const TopBar = styled.div`
  background-color: #222;
  height: 150px;
  padding: 20px;
  color: #fff;

  .redux-logo {
    animation: ${rotate360} infinite 20s linear;
    height: 80px;
  }
`

const Header = () => {
  return (
    <TopBar className="row">
      <div className="col-xs-12">
        <h2>Welcome to Create Redux App</h2><br />
        <img src={logo} className="redux-logo" alt="logo" />
      </div>
      <div className="col-xs-12">
        <a href="/" className="btn btn-sm btn-link">Home</a>
        <a href="/geoMap" className="btn btn-sm btn-link">Geo Map</a>
      </div>
    </TopBar>
  )
}

export default Header
