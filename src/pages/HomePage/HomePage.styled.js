import styled from 'styled-components';
import { baseTheme } from '../../constants/baseTheme';

export const Container = styled.div`
  width: 320px;
  margin: 0 auto;
  padding: 0 16px;
  
  @media screen and (min-width: 768px) {
      width: 768px;
      padding: 0 20px;
    }
    
    @media screen and (min-width: 1440px) {
        width: 1440px;
        padding: 0 30px;
    }
    `;

    
    export const HomeWrap = styled.div`
      padding: 10px 0;
    `;


export const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CarImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
`;

export const ImageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
`;

export const RedirectButton = styled.button`
  margin-top: 40px;
  color: ${baseTheme.colors.white};
  font-size: 14px;
  font-weight: 600;
  line-height: calc(20 / 16);
  padding: 12px 50px;
  border: none;
  border-radius: 12px;
  background-color: ${baseTheme.colors.blue};
  transition: background-color 250ms ${baseTheme.animation.cubicBezier};
  cursor: pointer;

  &:hover,
  &:focus {
    background-color: ${baseTheme.colors.darkblue};
  }
`;
