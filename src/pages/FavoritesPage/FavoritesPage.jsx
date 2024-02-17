import React, { useEffect, useState } from 'react';
import { Container } from 'pages/HomePage/HomePage.styled';
import { useSelector } from 'react-redux';
import { getAllAdverts } from '../../redux/adverts/advert-selectors';
import { FavoriteButton, FavoriteEmptyIcon, FavoriteIcon, StyledCardWrap, StyledImageThumb, StyledImg } from 'modules/CarCard/CarCard.styled';
import { StyledListWrap } from 'modules/CarsList/CarsList.styled';
// import { CatalogWrap } from './CatalogPage.styled';

const FavoritesPage = () => {
 const [favorites, setFavorites] = useState([]);
 const adverts = useSelector(getAllAdverts);
const toggleFavorite = id => {
    setFavorites(prev =>
      prev.includes(id) ? prev.filter(favId => favId !== id) : [...prev, id]
    );
  };
  
  useEffect(() => {
    const storedFavorites = localStorage.getItem('favorites');
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);

  
  const favoriteCars = adverts.filter(advert => favorites.includes(advert.id));


  console.log(favoriteCars);

  return (
    <Container>
      {/* <CatalogWrap> */}
      <h1>Favorite Cars</h1>
      <StyledListWrap>
      {favoriteCars.map(
        ({
          id,
          year,
          make,
          model,
          type,
          img,
          description,
          fuelConsumption,
          engineSize,
          accessories,
          functionalities,
          rentalPrice,
          rentalCompany,
          address,
          rentalConditions,
          mileage,
        }) => (
          <StyledCardWrap key={id}>
            <StyledImageThumb>
              <StyledImg src={img} alt={`${make} ${model}`} />
              <FavoriteButton type="button" onClick={() => toggleFavorite(id)} >
                {favorites.includes(id) ? (
                  <FavoriteIcon />
                ) : (
                  <FavoriteEmptyIcon />
                )}
              </FavoriteButton>
            </StyledImageThumb>
            <div>
              <h2>
                {make} {model},{year}
              </h2>
              <p>{rentalPrice}</p>
            </div>
            <div>
              <p>Adress, {rentalCompany}</p>
              <p>
                {type}| {make}| {mileage}
              </p>
            </div>
            <button >Learn More</button>
          </StyledCardWrap>
        )
      )}
     
     </StyledListWrap>
        
      {/* </CatalogWrap> */}
    </Container>
  );
};

export default FavoritesPage;



