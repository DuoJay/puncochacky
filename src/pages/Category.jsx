import { Link } from 'react-router-dom';

function Category() {
  return (
    <div className="category-container">
      <Link className="category" to={'/category/socks'}>
        <div className="category__image-socks"></div>
        <span className="category__name">ponožky</span>
        <span className="category__price">25,- za pár</span>
      </Link>
      <Link className="category" to={'/category/stockings'}>
        <div className="category__image-stockings"></div>
        <span className="category__name">punčošky</span>
        <span className="category__price">65,- za kus</span>
      </Link>
      <Link className="category" to={'/category/adults'}>
        <div className="category__image-adults"></div>
        <span className="category__name" id="category-adults">
          pro dospělé
        </span>
        <span className="category__price">75,- za pár</span>
      </Link>
    </div>
  );
}

export default Category;
