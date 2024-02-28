import React, { useState } from 'react';
import Select from 'react-select';

import {
  // Dropdown,
  // DropdownOption,
  DropdownWrap,
  // Label,
  SearchButton,
  // SelectWrap,
} from './DropDown.styled';
import makes from './makes';
import { useDispatch } from 'react-redux';
import { setMakeFilter, setPriceFilter} from '../../redux/filter/filter-slice';

const priceOption = Array.from({ length: 20 }).map((_, index) => ({
  value: 30 + 10 * index,
  label: `$${30 + 10 * index}`,
}));

const makeOption = makes.map(car => ({
  value: car.value,
  label: car.label,
}));

const DropdownComponent = () => {
  const [selectedMakesOption, setSelectedMakesOption] = useState('');
  const [selectedPriceOption, setSelectedPriceOption] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(setMakeFilter(selectedMakesOption?.value ?? ''));
    dispatch(setPriceFilter(selectedPriceOption?.value ?? ''));
  };

  return (
    <DropdownWrap onSubmit={handleSubmit}>
      {/*       
      <SelectWrap>
  
    </SelectWrap> */}
      <Select
        defaultValue={selectedMakesOption}
        value={selectedMakesOption}
        onChange={setSelectedMakesOption}
        options={makeOption}
        placeholder="Enter text"
      />
      <Select
        defaultValue={selectedPriceOption}
        value={selectedPriceOption}
        onChange={setSelectedPriceOption}
        options={priceOption}
        placeholder="To $"
      />
      <SearchButton type="submit">Search</SearchButton>
    </DropdownWrap>
  );
};

export default DropdownComponent;
