import styled from 'styled-components';

import { NavLink } from 'react-router-dom';
export const StyledLogo = styled.div`
 `;


export const StyledMenu = styled.nav`
  list-style: none;
  display: flex;
  /* justify-content: space-around; */
  margin-left: auto;
  align-items: center;
  margin-bottom: 16px;
  border-bottom: 1px solid rgb(198, 19, 19);
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  display: inline-block;
  padding: 12px;
  font-weight: 700;
  color: green;

  &:global(.active) {
    color: red;
  }
`;
