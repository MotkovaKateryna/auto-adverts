import React from 'react';
import { StyledListWrap } from './CarsList.styled';
import CarCard from 'modules/CarCard/CarCard';

const CarsList = () => {

  return (
    <StyledListWrap>
      <CarCard/>
    </StyledListWrap>
  );
};

export default CarsList;



