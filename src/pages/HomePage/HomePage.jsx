import React from 'react';
import { Container, HomePageContainer, RedirectButton } from './HomePage.styled';
import Slider from 'modules/Slider/Slider';

const HomePage = () => {
  const onRedirect = () => {
    window.location.href = '/auto-adverts/catalog';
  };
  return (
    <Container>
      <HomePageContainer>
        <h1>Do you want to rent a car?</h1>

        <Slider/>
        {/* <ImageContainer>
      {carImages.map((image, index) => (
        <CarImage key={index} src={image} alt={`Car for rent ${index + 1}`} />
      ))}
    </ImageContainer> */}
    <RedirectButton onClick={onRedirect}>
      Catalog
    </RedirectButton>
      </HomePageContainer>
    </Container>
    
  )
}

export default HomePage

