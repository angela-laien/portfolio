import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

function Menu() {
    return (
      <Nav>
          <Navigation>
            <NavLink className='navText' to='/About' style={{ textDecoration: 'none', margin: '5% 0%'}}>
              <A>About</A>
            </NavLink>
            <NavLink className='navText' to='/Work' style={{ textDecoration: 'none', margin: '5% 0%'}}>
              <A>Work</A>
            </NavLink>
            <NavLink className='navText' to='/Skills' style={{ textDecoration: 'none', margin: '5% 0%'}}>
              <A>Skills</A>
            </NavLink>
            <NavLink className='navText' to='/Contact' style={{ textDecoration: 'none', margin: '5% 0%'}}>
              <A>Contact</A>
            </NavLink>
          </Navigation>
      </Nav>
    );
}

const Nav = styled.div`
    width: 100%;
`;

const Navigation = styled.nav`
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const A = styled.a`
    color: white;
    &:hover {
      color: orange;
    }
    font-weight: bold;
`;

export default Menu;