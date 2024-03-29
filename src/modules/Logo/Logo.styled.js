import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLogoLink = styled(Link)`
  display: flex;
  column-gap: 10px;
  align-items: center;
  text-decoration: none;

  &:hover {
    .logo-icon {
      transform: translateX(200px) ;
      transition-delay: 0.3s;
    }
  }

  .logo-icon {
    width: 126px;
    height: 76px;

    transition: 5s;
  }
  .logo-title {
    font-size: 30px;
    font-weight: 700;
    text-transform: uppercase;
    word-spacing: 2px;

    transition: 0.3s;
	 color: #fefacc;

    &:hover {
      color: #f8a91b;
    }
  }
`;