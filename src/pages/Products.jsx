import { Link } from 'react-router-dom';
import socksPink from '../assets/images/socks-pink.jpg';
import stockingsBlue from '../assets/images/stockings-blue.jpg';

function Products() {
  return (
    <div className="categories-container">
      <Link className="category" to={'/products/socks'}>
        <img className="category__image" src={socksPink} alt="ponožky" />
        <span className="category__name">Ponožky</span>
      </Link>
      <Link className="category" to={'/products/stockings'}>
        <img className="category__image" src={stockingsBlue} alt="punčošky" />
        <span className="category__name">Punčošky</span>
      </Link>
    </div>
  );
}

export default Products;
