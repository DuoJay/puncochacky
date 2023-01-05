import { collectionGroup } from 'firebase/firestore';
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

function Filter({ products, handleSizeChange }) {
  const [sizes, setSizes] = useState(null);

  console.log(products);

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

  const onSubmit = e => {
    e.preventDefault();
  };

  return (
    sizes && (
      <>
        <div className="filter__container">
          <form className="filter__form" onSubmit={onSubmit}>
            <select name="size" id="size" onChange={handleSizeChange}>
              {sizes.map(size => {
                return (
                  <option value={size} key={size}>
                    {translateSize(size)}
                  </option>
                );
              })}
            </select>
          </form>
        </div>
      </>
    )
  );
}

export default Filter;
