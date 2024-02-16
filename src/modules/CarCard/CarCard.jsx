import { useState } from 'react';
import { useSelector } from 'react-redux';
import { getAllAdverts } from '../../redux/adverts/advert-selectors';
import {
  FavoriteButton,
  FavoriteEmptyIcon,
  FavoriteIcon,
  StyledCardWrap,
  StyledImageThumb,
  StyledImg,
} from './CarCard.styled';
import Modal from 'shared/Modal/Modal';

const CarCard = () => {
  const [favorites, setFavorites] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);

  const adverts = useSelector(getAllAdverts);

  const toggleFavorite = id => {
    setFavorites(prev =>
      prev.includes(id) ? prev.filter(favId => favId !== id) : [...prev, id]
    );
  };

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      {adverts.map(
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
              <FavoriteButton type="button" onClick={() => toggleFavorite(id)}>
                {favorites.includes(id) ? (
                  <FavoriteIcon />
                ) : (
                  <FavoriteEmptyIcon />
                )}
              </FavoriteButton>
            </StyledImageThumb>

            {/* <img src={img} alt={make} />
            <FavoriteButton  onClick={() => toggleFavorite(id)}>
            <FavoriteIcon isFavorite={favorites.includes(id)} />
            </FavoriteButton > */}
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
            <button onClick={openModal}>Learn More</button>
          </StyledCardWrap>
        )
      )}
      {modalOpen && (
        <Modal close={closeModal}>
          <div>
            <h2>Modal Content</h2>
            <button onClick={closeModal}>Close</button>
          </div>
        </Modal>
      )}
    </>
  );
};

export default CarCard;
