import { useContext, useEffect } from 'react';

import { Link } from 'react-router-dom';

import FilterContext from '../context/FilterContext';

function Category() {
  const { setFilteredSize } = useContext(FilterContext);

  useEffect(() => {
    setFilteredSize(0);
  }, []);

  return (
    <div className="category-container">
      <Link className="category" to={'/category/socks'}>
        <div
          className="category__image-socks"
          role="img"
          aria-label="kategorie ponožky"
          title="kategorie ponožky"
        ></div>
        <span className="category__name">ponožky</span>
        <span className="category__price">25,- za pár</span>
      </Link>
      <Link className="category" to={'/category/stockings'}>
        <div
          className="category__image-stockings"
          role="img"
          aria-label="kategorie punčošky"
          title="kategorie punčošky"
        ></div>
        <span className="category__name">punčošky</span>
        <span className="category__price">od 65,- za kus</span>
      </Link>
      <Link className="category" to={'/category/adults'}>
        <div
          className="category__image-adults"
          role="img"
          aria-label="kategorie pro dospělé"
          title="kategorie pro dospělé"
        ></div>
        <span className="category__name" id="category-adults">
          pro dospělé
        </span>
        <span className="category__price">75,- za pár</span>
      </Link>
    </div>
  );
}

export default Category;
