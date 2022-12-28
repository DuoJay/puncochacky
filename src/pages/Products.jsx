import { Link } from 'react-router-dom';
import classes from './Products.module.css';
import socksPink from '../assets/images/socks-pink.jpg';
import stockingsBlue from '../assets/images/stockings-blue.jpg';

function Products() {
  return (
    <div className={classes.categoriesContainer}>
      <Link className={classes.category} to={'/'}>
        <img className={classes.categoryImage} src={socksPink} alt="ponožky" />
        <span className={classes.categoryName}>Ponožky</span>
      </Link>
      <Link className={classes.category} to={'/'}>
        <img
          className={classes.categoryImage}
          src={stockingsBlue}
          alt="punčošky"
        />
        <span className={classes.categoryName}>Punčošky</span>
      </Link>
    </div>
  );
}

export default Products;
