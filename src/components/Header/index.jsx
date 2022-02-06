import React from "react";
import { Link } from 'react-router-dom'
import styled from "styled-components";
import logo from '../../assets/logo.png'
//import './style.css'
//import '../../utils/style/style.css'

const HeaderWrapper = styled.div`
    background-color: black;
    display: flex;
    top: 0px;
    position: fixed-top;
    flex-direction:row; 
    position: relative;
    width: 100%;
`
const NavLink = styled(Link)`
  padding: 10px 20px;
//   color: #8186a0;
//   color: darkblue;
    color: white;
  text-decoration: none;
  font-size: 20px;
  text-align: center;
  @media (max-width: 480px) {
    display: none;
}
`
const RightNav = styled.div`
    position: absolute;
    top: 10px;
    right: 20px;
`

const Logo = styled.img`
    margin-left: 2vw;
    width: 50px;
    height: 50px;
    border-radius: 10px;
`
const SingleLogo = styled.img`
    padding: 10px 15px;
    margin-left: 2vw;
    width: 50px;
    height: 50px;
    border-radius: 10px;
`

function Header() {

    const logout = (e) => {
        e.preventDefault()
        sessionStorage.setItem('token', '')
        window.location.href = '/'
    }

    return !sessionStorage.getItem('token') ? (
        <HeaderWrapper>
            <NavLink to='/'><Logo src={logo} alt="logo" /></NavLink>
            <header style={{fontSize: "20px", textAlign: "center", color: "white", margin: "20px 10px"}}>SOUTRA GROUP</header>
            <RightNav>
                {/* <NavLink to='/'>Accueil</NavLink> */}
                <NavLink to='/login'>Login</NavLink>
                <NavLink to='/signup'>Signup</NavLink>
            </RightNav> 
        </HeaderWrapper>
    ) : (
        <HeaderWrapper>
            <SingleLogo src={logo} alt="logo" />
            <header style={{fontSize: "20px", textAlign: "center", color: "white", margin: "20px 0px"}}>SOUTRA GROUP</header>
            <RightNav>
                <NavLink to='/' onClick={(e) => logout(e)}>Déconnexion</NavLink>
            </RightNav>
        </HeaderWrapper>
    )
}

export default Header