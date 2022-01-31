import React from "react";
import { Link } from 'react-router-dom'
import styled from "styled-components";
//import './style.css'
//import '../../utils/style/style.css'

const HeaderWrapper = styled.div`
    background-color: black;
    display: flex;
    top: 0;
    position: fixed-top;
    flex-direction:row; 
    position: relative;
    width: 100%;
`
const NavLink = styled(Link)`
  padding: 10px 15px;
//   color: #8186a0;
//   color: darkblue;
    color: white;
  text-decoration: none;
  font-size: 20px;
  text-align: center;
`
const RightNav = styled.div`
    position: absolute;
    top: 10px;
    right: 20px;
`

function Header() {

    return (
        <HeaderWrapper>
            <NavLink to='/'>Logo</NavLink>
            <RightNav>
                <NavLink to='/'>Accueil</NavLink>
                <NavLink to='/login'>Connexion</NavLink>
                <NavLink to='/signup'>Inscription</NavLink>
            </RightNav>
        </HeaderWrapper>
    )
}

export default Header