import CarsList from 'modules/CarsList/CarsList';
import { Container } from 'pages/HomePage/HomePage.styled';
import React from 'react';
import { Button, CatalogWrap } from './CatalogPage.styled';
import SearchBar from 'modules/SearchBar/SearchBar';

const CatalogPage = () => {
  return (
    <Container>
      <CatalogWrap>
        <SearchBar/>
        <CarsList />
        {/* <Button type="button" disabled={isLoading} onClick={onClick}> */}
        <Button type="button">
      Load more
    </Button>
      </CatalogWrap>
    </Container>
  );
};

export default CatalogPage;
