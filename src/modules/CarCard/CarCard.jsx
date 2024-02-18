import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getAllAdverts } from '../../redux/adverts/advert-selectors';
import {
  Description,
  FavoriteButton,
  FavoriteEmptyIcon,
  FavoriteIcon,
  InfoWrap,
  StyledCardWrap,
  StyledImageThumb,
  StyledImg,
  Title,
  Button,
} from './CarCard.styled';
import Modal from 'shared/Modal/Modal';
import { ModalCard } from 'shared/ModalCard/ModalCard';

const CarCard = () => {
  const [selectedCar, setSelectedCar] = useState(null);
  
  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = localStorage.getItem('favorites');
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });
  const [modalOpen, setModalOpen] = useState(false);
  const adverts = useSelector(getAllAdverts);
  const toggleFavorite = id => {
    setFavorites(prev =>
      prev.includes(id) ? prev.filter(favId => favId !== id) : [...prev, id]
    );
  };

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const openModal = (car) => {
    console.log(car);
    setSelectedCar(car);
    console.log(selectedCar);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      {adverts.map(
        (car) => {
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
        }
      )}
      {modalOpen && selectedCar && (
        <Modal close={closeModal}>
          <ModalCard car={selectedCar}/>
          <Button type="button" onClick={() => {}}>
              Rental car
            </Button>
        </Modal>
      )}
    </>
  );
};

export default CarCard;



