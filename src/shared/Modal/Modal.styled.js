import styled from 'styled-components';
import { baseTheme } from '../../constants/baseTheme';

import { HiX } from 'react-icons/hi';


export const StyledOverlay = styled.div`
  position: fixed;
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
  z-index: 1200;
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
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 40px;
  border-radius: 24px; 
  max-width: calc(100% - 48px);
  max-height: calc(100% - 24px);

  border: 1px solid #3f51b5;
  overflow: scroll;
  background-color: ${baseTheme.colors.white};
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
  border: 1px solid #3f51b5;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(242, 239, 245);
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