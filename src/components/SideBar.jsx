import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';



const Sidebar = styled.div`
  display: flex;
  min-width: 150px;
  background: #222;
  padding: 20px;
`;
const StyledNavLink = styled(Link)`
  color: #fff;
  display: block;
  padding: 10px;
  text-decoration: none;
`;
const ActiveStyledNavLink = styled(StyledNavLink)`
  border: 1px solid #fff;
  border-radius: 8px;
`;

export const SideBar = () => {

  const location = useLocation();

  const HomeLink = location.pathname === '/' ? ActiveStyledNavLink : StyledNavLink;
  const CartLink = location.pathname === '/cart' ? ActiveStyledNavLink : StyledNavLink;

  return (
    <Sidebar>
      <nav>
        <HomeLink to="/">Product list</HomeLink>
        <CartLink to="/cart">Cart</CartLink>
      </nav>
    </Sidebar>);
};

export default SideBar;