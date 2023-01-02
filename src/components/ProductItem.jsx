import React from 'react';

function ProductItem({ product }) {
  console.log(product.size);

  const translateSize = product => {
    switch (product.size) {
      case 1:
        return '15-17';
      case 2:
        return '18-19';
      default:
      // code block
    }
  };

  return (
    <li className="product polaroid">
      <h3 className="product__name h3">{product.name}</h3>
      <span className="product__size">Velikost: {translateSize(product)}</span>
      <img
        className="product__images"
        src={product.imgUrls[0]}
        alt="obrázek ponožek"
        width={'200px'}
      />
    </li>
  );
}

export default ProductItem;
