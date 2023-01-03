import Slider from './Slider';

function ProductItem({ product }) {
  const translateSize = product => {
    switch (product.size) {
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

  return (
    <li className="product polaroid">
      {/* <img
        className="product__images"
        src={product.imgUrls[0]}
        alt="obrázek ponožek"
        width={'200px'}
      /> */}
      <Slider images={product.imgUrls}></Slider>
      <h3 className="product__name h3">{product.name}</h3>
      <span className="product__size">Velikost: {translateSize(product)}</span>
    </li>
  );
}

export default ProductItem;
