import styled from 'styled-components';
import { baseTheme } from '../../constants/baseTheme';


export const DropdownWrap = styled.form`
  display: flex;
  align-items: start;
  justify-content: left;
  flex-direction: column;
  column-gap: 18px;
  row-gap: 12px;
  padding-bottom: 24px;

  @media screen and (min-width: 768px) {
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    padding-bottom: 50px;
  }
`;


export const Dropdown = styled.select`
  width: 200px;
  height: 30px;
  background: white;
  color: gray;
  padding-left: 5px;
  font-size: 14px;
  border: none;
  margin-left: 10px;
`;

export const DropdownOption = styled.option`
  color: black;
  background: white;
  display: flex;
  white-space: pre;
  min-height: 20px;
  padding: 0px 2px 1px;
`;

export const SearchButton = styled.button`
  width: 136px;
  padding: 14px;
  margin-top: auto;
  margin-bottom: 0;
  color: ${baseTheme.colors.white};
  font-size: 14px;
  font-weight: 600;
  line-height: calc(20 / 14);
  border: transparent;
  border-radius: 12px;
  background-color: ${baseTheme.colors.blue};
  cursor: pointer;
  transition: background-color 250ms ${baseTheme.animation.cubicBezier};

  &:hover,
  &:focus {
    background-color: ${baseTheme.colors.darkblue};
  }
`;

export const SelectWrap = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: left; */
`;

export const Label = styled.label`
  display: block;
  color: ${baseTheme.colors.grey};
  font-size: 14px;
  font-weight: 500;
  line-height: calc(18 / 14);
  margin-bottom: 8px;
`;