import { Logo } from "modules/Logo/Logo";
import { StyledHeader } from "./Header.styled";
import Navigation from "modules/Navigation/Navigation";


export const Header = () => {
    return (
      <StyledHeader>
        <div className='warraper-nav'>
          <Logo />
          <Navigation />
        </div>
      </StyledHeader>
    );
  };