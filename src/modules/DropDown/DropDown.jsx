import React, { useState } from 'react';
// import Select from 'react-select';

import { Dropdown, DropdownOption } from './DropDown.styled';
import makes from "./makes";
// const { v4: uuidv4 } = require('uuid');


const DropdownComponent = () => {
  const [selectedMakesOption, setSelectedMakesOption] = useState('');
  const [selectedPriceOption, setSelectedPriceOption] = useState('');

  const handleChange = (e, dropdown) => {
    const value = e.target.value;
  
    if (dropdown === 'makes') {
      setSelectedMakesOption(value);
    } else if (dropdown === 'price') {
      setSelectedPriceOption(value);
    }
  };
console.log(selectedMakesOption,selectedPriceOption);

  const makesAll = makes.map((item, index) => (
    <DropdownOption key={index} value={item}>{item}</DropdownOption>
  ))

  const options = ['', '20', '30', '40', '50', '60', '70', '80', '90', '100', '110','120','130','140','150','160','170','180','190','200','210']; 

  return (

    <><Dropdown onChange={(value) => handleChange(value, 'makes')} value={selectedMakesOption}>
      <DropdownOption value="">Enter the text</DropdownOption>
      {makesAll}
    </Dropdown>
    <Dropdown onChange={(value) => handleChange(value, 'price')} value={selectedPriceOption}>
      {options.map((option, index) => (
        <DropdownOption key={index} value={option}>
          {option ? `$${option}` : 'To $'}
        </DropdownOption>
      ))}
    </Dropdown>

    
    </>
    
  );
};

export default DropdownComponent;
