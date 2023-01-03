import { Link } from 'react-router-dom';
import socksPink from '../assets/images/socks-pink.jpg';
import stockingsBlue from '../assets/images/stockings-blue.jpg';
import adults from '../assets/images/adults.jpg';

function Products() {
  return (
    <div className="products-category-container">
      <Link className="product-category" to={'/products/socks'}>
        <div className="product-category__image-socks"></div>
        <span className="product-category__name">ponožky</span>
      </Link>
      <Link className="product-category" to={'/products/stockings'}>
        <div className="product-category__image-stockings"></div>
        <span className="product-category__name">punčošky</span>
      </Link>
      <Link
        className="product-category"
        to={'/products/adults'}
        id="products-adults"
      >
        <div className="product-category__image-adults"></div>
        <span className="product-category__name">pro dospělé</span>
      </Link>
    </div>
  );
}

export default Products;
