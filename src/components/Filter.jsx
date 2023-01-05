import { useState, useEffect } from 'react';

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

function Filter({ products, setFilteredProducts }) {
  const [sizes, setSizes] = useState('');
  const [selectedSize, setSelectedSize] = useState('');

  useEffect(() => {
    const allProductSizes = products.map(product => product.data.size);

    const removeDuplcates = numbers => {
      return [...new Set(numbers)];
    };
    setSizes(removeDuplcates(allProductSizes));
  }, []);

  const handleSizeChange = e => {
    setSelectedSize(+e.target.value);
    if (!e.target.value) {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(
        products.filter(product => product.data.size === +e.target.value)
      );
    }
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
          >
            <option className="filter__option" value="" key="allSizes">
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
