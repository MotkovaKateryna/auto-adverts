import React from 'react';

import { StyledMenu, StyledNavLink } from './Navigation.styled';

const Navigation = () => {
  return (
    <header>
      
  <StyledMenu>
    <StyledNavLink to ="/">Home</StyledNavLink>
    <StyledNavLink to ="/catalog">Catalog</StyledNavLink>
    <StyledNavLink to ="/favorites">Favorite Cars</StyledNavLink> 
  </StyledMenu>
</header>
  )
}

export default Navigation;