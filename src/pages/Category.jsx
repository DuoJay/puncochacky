import { useContext, useEffect } from 'react';

import { Link } from 'react-router-dom';

import FilterContext from '../context/FilterContext';
import ShowModal from '../context/ShowModal';

function Category() {
  const { filteredSize, setFilteredSize } = useContext(FilterContext);
  const { closedModal, setClosedModal } = useContext(ShowModal);

  useEffect(() => {
    setFilteredSize(0);
  }, []);

  const closeMessage = () => {
    setClosedModal(setClosedModal(false));
  };

  return (
    <div className="category-container">
      {closedModal && (
        <div className="category__modal">
          <div className="category__message">
            <p>Pro velkoodběratele možnost nákupu za VOC ceny.</p>
            <button onClick={closeMessage}>zavřít</button>
          </div>
        </div>
      )}
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
