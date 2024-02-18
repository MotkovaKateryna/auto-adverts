import styled from 'styled-components';
import { baseTheme } from '../../constants/baseTheme';

export const CatalogWrap = styled.div`
  padding: 10px 0;
`;



export const Button = styled.button`
  color: ${baseTheme.colors.blue};
  font-size: 16px;
  font-weight: 500;
  line-height: calc(24 / 16);
  text-decoration-line: underline;
  background-color: transparent;
  border: none;
  margin: 100px auto 0;
  cursor: pointer;
  transition: color 250ms ${baseTheme.animation.cubicBezier};

  &:hover,
  &:focus {
    color: ${baseTheme.colors.darkblue};
  }
`;