import { useState, useEffect } from 'react';
import Select from 'react-select';

const translateSize = size => {
  switch (size) {
    case 1:
      return '15-17';
    case 2:
      return '18-19';
    case 3:
      return '35-37';
    case 4:
      return '38-43';
    case 5:
      return '50-56';
    case 6:
      return '62-68';
    case 7:
      return '68-74';
    case 8:
      return '74-80';
    case 9:
      return '80-86';
    case 10:
      return '86-92';
    default:
    // code block
  }
};

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    color: state.isSelected ? '#ffffff' : '#e71b69',
    backgroundColor: state.isSelected ? '#e71b69' : '#fff',
    '&:hover': {
      backgroundColor: '#e71b69',
      color: '#fff',
    },
  }),
  placeholder: provided => ({
    ...provided,
    fontSize: '2rem',
  }),
  control: provided => ({
    ...provided,
    borderColor: '#e71b69',
    '&:hover': {
      borderColor: '#e71b69',
    },
  }),
  menu: provided => ({
    ...provided,
    overflow: 'hidden',
  }),
};

function Filter({ products, setFilteredProducts }) {
  const [sizes, setSizes] = useState([1, 2]);
  const [selectedSize, setSelectedSize] = useState('');

  useEffect(() => {
    const allProductSizes = [];
    products.forEach(product => {
      allProductSizes.push(product.data.size);
    });
    const removeDuplcates = numbers => {
      return [...new Set(numbers)];
    };
    setSizes(removeDuplcates(allProductSizes));
  }, []);

  const handleSizeChange = e => {
    setSelectedSize(+e.value);
    if (!e.value) {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(
        products.filter(product => product.data.size === +e.value)
      );
    }
  };
  const hardcodedOption = { value: '', label: 'Všechny velikosti' };
  const dynamicOptions = sizes.map(size => ({
    value: size,
    label: translateSize(size),
  }));

  const options = [hardcodedOption, ...dynamicOptions];
  return (
    sizes && (
      <div className="filter__container">
        <Select
          options={options}
          onChange={handleSizeChange}
          styles={customStyles}
          placeholder="Vybrat velikost"
          className="filter__select"
        ></Select>
      </div>
    )
  );
}

export default Filter;
