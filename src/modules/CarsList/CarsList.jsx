import React, { useState } from 'react';
import { StyledListWrap } from './CarsList.styled';
import CarCard from 'modules/CarCard/CarCard';

const CarsList = () => {
  const [favorites, setFavorites] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);

  

  const toggleFavorite = (id) => {
    setFavorites(prev => prev.includes(id) ? prev.filter(favId => favId !== id) : [...prev, id]);
  };

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <StyledListWrap>
      <CarCard/>
      {modalOpen && (
        <div>
          <h2>Modal Content</h2>
          <button onClick={closeModal}>Close</button>
        </div>
      )}
    </StyledListWrap>
  );
};

export default CarsList;



