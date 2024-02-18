import styled from 'styled-components';
import { baseTheme } from '../../constants/baseTheme';

import { HiX } from 'react-icons/hi';


export const StyledOverlay = styled.div`
  position: fixed;
    top: 0px;
    left: 0px;
    padding-top: 20px;
    padding-bottom: 20px;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    overflow-y: auto;
    z-index: 1;
    background-color: ${baseTheme.colors.overlayBcg};
  
  /* position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-color: ${baseTheme.colors.overlayBcg};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 1200; */
`;
// export const StyledOverlay = styled.div`
// position: fixed;
//   top: 0;
//   left: 0;
//   right: 0;
//   bottom: 0;
//   width: 100ww;
//   height: 100wh;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   background-color: rgba(0, 0, 0, 0.8);
//   z-index: 1200;
// `

export const StyledModal = styled.div`
    width: 541px;
    padding: 40px;
    position: relative;
    overflow-y: auto;
    border-radius: 24px;
    background-color: white;
    
`;

// export const StyledModal = styled.div`
// position: fixed;
//   max-width: 541px;
//   max-height: calc(100% - 24px);
//   border-radius: 5px;
//   border: 1px solid #3f51b5;
//   background-color: ${baseTheme.colors.white};
//   overflow: hidden;
//   z-index:1200;
// `
export const StyledCloseBtn = styled.div`
position: absolute;
  top: 15px;
  right: 15px;
  cursor: pointer;
  color: #3f51b5;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const Button = styled.button`
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

export const CloseModalIcon = styled(HiX)`
  position: absolute;
  top: 16px;
  right: 16px;
  width: 24px;
  height: 24px;
  stroke: #121417;
  cursor: pointer;
`;