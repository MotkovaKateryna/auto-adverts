import styled from 'styled-components';
import { baseTheme } from '../../constants/baseTheme';

import { FaRegHeart } from 'react-icons/fa';
import { FaHeart } from 'react-icons/fa6';

export const StyledCardWrap = styled.li`
  /* width: 274px; */
`;
export const StyledImg = styled.img`
    width: 100%;
  height: 268px;
  object-fit: cover;

  border-radius: 14px;
`


export const StyledImageThumb = styled.div`
position: relative;



`;

export const FavoriteButton = styled.button`
  position: absolute;
  top: 14px;
  right: 14px;

  background-color: transparent;
  border: none;

  cursor: pointer;
`;

export const FavoriteEmptyIcon = styled(FaRegHeart)`
  height: 18px;
  width: 18px;

  color: white;
`;

export const FavoriteIcon = styled(FaHeart)`
  height: 18px;
  width: 18px;
  color: #3470ff;
`;

export const InfoWrap = styled.div`
  padding: 14px 0 28px 0;
`;

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

export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;

  & p {
    color: ${baseTheme.colors.black};
    font-size: 16px;
    font-weight: 500;
    line-height: calc(24 / 16);
  }

  & span {
    color: ${baseTheme.colors.blue};
  }
`;


export const Description = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  row-gap: 4px;
  height: 40px;
  overflow: hidden;

  & p {
    color: rgba(18, 20, 23, 0.5);
    font-size: 12px;
    line-height: calc(18 / 12);
  }

  & p:not(:last-child) {
    padding-right: 6px;
    border-right: 1px solid rgba(18, 20, 23, 0.1);
  }

  & p:not(:first-child) {
    padding-left: 6px;
  }
`;