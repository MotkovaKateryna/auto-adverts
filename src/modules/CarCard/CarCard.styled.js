import styled from 'styled-components';

import { FaRegHeart } from 'react-icons/fa';
import { FaHeart } from 'react-icons/fa6';

export const StyledCardWrap = styled.li`
  
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
