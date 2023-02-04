import { useState, useEffect, useContext } from 'react';

import FilterContext from '../context/FilterContext';

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
    case 11:
      return '122-128';
    case 12:
      return '134-146';
    case 13:
      return '14-15';
    default:
    // code block
  }
};

function Filter({ products, setFilteredProducts }) {
  const [sizes, setSizes] = useState('');

  const { filteredSize, setFilteredSize } = useContext(FilterContext);

  useEffect(() => {
    const allProductSizes = products.map(product => product.data.size);

    const removeDuplcates = numbers => {
      console.log();
      return [
        ...new Set(
          numbers.sort(function (a, b) {
            return a - b;
          })
        ),
      ];
    };
    setSizes(removeDuplcates(allProductSizes));
  }, [products]);

  useEffect(() => {
    if (filteredSize === 0) {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(
        products.filter(product => product.data.size === filteredSize)
      );
    }
  }, [filteredSize]);

  const handleSizeChange = e => {
    setFilteredSize(+e.target.value);
  };

  return (
    sizes && (
      <>
        <div className="filter__container">
          <select
            className="filter__select"
            name="size"
            id="size"
            onChange={handleSizeChange}
            defaultValue={filteredSize}
          >
            <option className="filter__option" value={0} key="allSizes">
              Všechny velikosti
            </option>
            {sizes.map(size => {
              return (
                <option className="filter__option" value={size} key={size}>
                  {translateSize(size)}
                </option>
              );
            })}
          </select>
        </div>
      </>
    )
  );
}

export default Filter;
