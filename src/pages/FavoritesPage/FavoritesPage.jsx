import React, { useEffect, useState } from 'react';
import { Container } from 'pages/HomePage/HomePage.styled';
import { useSelector } from 'react-redux';
import { getAllAdverts } from '../../redux/adverts/advert-selectors';
import { Button, ButtonRent, Description, FavoriteButton, FavoriteEmptyIcon, FavoriteIcon, InfoWrap, StyledCardWrap, StyledImageThumb, StyledImg, Title } from 'modules/CarCard/CarCard.styled';
import { StyledListWrap } from 'modules/CarsList/CarsList.styled';
import Modal from 'shared/Modal/Modal';
import { ModalCard } from 'shared/ModalCard/ModalCard';
// import { CatalogWrap } from './CatalogPage.styled';

const FavoritesPage = () => {
  const [selectedCar, setSelectedCar] = useState(null);
  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = localStorage.getItem('favorites');
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });
  const adverts = useSelector(getAllAdverts);
  const [modalOpen, setModalOpen] = useState(false);

  const toggleFavorite = id => {
    setFavorites(prevFavorites => {
      const isFavorite = prevFavorites.includes(id);
      if (isFavorite) {
        return prevFavorites.filter(favId => favId !== id);
      } else {
        return [...prevFavorites, id];
      }
    });
  };
  
  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);
  const openModal = (car) => {
    setSelectedCar(car);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  
  const favoriteCars = adverts.filter(advert => favorites.includes(advert.id));

  return (
    <Container>
      {/* <CatalogWrap> */}
      <h1>Favorite Cars</h1>
      <StyledListWrap>
        
      {favoriteCars.length > 0 ? (
        favoriteCars.map((car) => {
          const [city, country] = car.address.split(',').slice(-2);
          return (
            <StyledCardWrap key={car.id}>
            <StyledImageThumb>
                        <StyledImg src={car.img} alt={`${car.make} ${car.model}`} />
                      <FavoriteButton
                          type="button"
                          onClick={() => toggleFavorite(car.id)}
                        >
                        {favorites.includes(car.id) ? (
                            <FavoriteIcon />
                          ) : (
                            <FavoriteEmptyIcon />
                          )}
                        </FavoriteButton>
                       </StyledImageThumb>
                      <InfoWrap>
                      <Title>
                         <p>
                          {`${car.make} `}
                           <span>{`${car.model}, `}</span>
                           {car.year}
                        </p>
                        <p>{car.rentalPrice}</p>
                      </Title>
                      <Description>
                        <p>{city}</p>
                        <p>{country}</p>
                     <p>{car.rentalCompany}</p>
                         <p>{car.type}</p>
                         <p>{car.model}</p>
                      <p>{car.mileage}</p>
                        <p>{car.functionalities[0]}</p>
                       </Description>
                    </InfoWrap>
                    <Button type="button" onClick={() => openModal(car)}>
                     Learn more
                     </Button>
                       </StyledCardWrap>
          );
        })
      ) : (
        <p>No cars in the favorites list yet.</p>
      )}
     {modalOpen && selectedCar && (
        <Modal close={closeModal}>
          <ModalCard car={selectedCar}/>
          <ButtonRent  href="tel:+380730000000" >Rental car
            </ButtonRent>
        </Modal>
      )}
     </StyledListWrap>
        
      {/* </CatalogWrap> */}
    </Container>
  );
};

export default FavoritesPage;



// return (
//   <Container>
//     {/* <CatalogWrap> */}
//     <h1>Favorite Cars</h1>
//     <StyledListWrap>
      
//     {favoriteCars.map(
//       (car) => {
//         const [city, country] = car.address.split(',').slice(-2);
//         return (
//           <StyledCardWrap key={car.id}>
//           <StyledImageThumb>
//             <StyledImg src={car.img} alt={`${car.make} ${car.model}`} />
//             <FavoriteButton
//               type="button"
//               onClick={() => toggleFavorite(car.id)}
//             >
//               {favorites.includes(car.id) ? (
//                 <FavoriteIcon />
//               ) : (
//                 <FavoriteEmptyIcon />
//               )}
//             </FavoriteButton>
//           </StyledImageThumb>
//           <InfoWrap>
//           <Title>
//             <p>
//               {`${car.make} `}
//               <span>{`${car.model}, `}</span>
//               {car.year}
//             </p>
//             <p>{car.rentalPrice}</p>
//           </Title>
//           <Description>
//             <p>{city}</p>
//             <p>{country}</p>
//             <p>{car.rentalCompany}</p>
//             <p>{car.type}</p>
//             <p>{car.model}</p>
//             <p>{car.mileage}</p>
//             <p>{car.functionalities[0]}</p>
//           </Description>
//         </InfoWrap>
//         <Button type="button" onClick={() => openModal(car)}>
//           Learn more
//         </Button>
//           </StyledCardWrap>
//         )
//       }
//     )}
//    {modalOpen && selectedCar && (
//       <Modal close={closeModal}>
//         <ModalCard car={selectedCar}/>
//         <ButtonRent  href="tel:+380730000000" class="btn">Rental car
//           </ButtonRent>
//       </Modal>
//     )}
//    </StyledListWrap>
      
//     {/* </CatalogWrap> */}
//   </Container>
// );
// };