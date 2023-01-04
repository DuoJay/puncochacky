import { Link } from 'react-router-dom';

function Products() {
  return (
    <div className="category-container">
      <Link className="category" to={'/category/socks'}>
        <div className="category__image-socks"></div>
        <span className="category__name">ponožky</span>
      </Link>
      <Link className="category" to={'/category/stockings'}>
        <div className="category__image-stockings"></div>
        <span className="category__name">punčošky</span>
      </Link>
      <Link className="category" to={'/category/adults'} id="category-adults">
        <div className="category__image-adults"></div>
        <span className="category__name">pro dospělé</span>
      </Link>
    </div>
  );
}

export default Products;
