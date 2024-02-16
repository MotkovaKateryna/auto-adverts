import CarsList from 'modules/CarsList/CarsList';
import { Container } from 'pages/HomePage/HomePage.styled';
import React from 'react';
import { CatalogWrap } from './CatalogPage.styled';
import SearchBar from 'modules/SearchBar/SearchBar';

const CatalogPage = () => {
  return (
    <Container>
      <CatalogWrap>
        <SearchBar/>
        <CarsList />
      </CatalogWrap>
    </Container>
  );
};

export default CatalogPage;
