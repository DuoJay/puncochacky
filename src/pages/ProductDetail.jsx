import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getDoc, doc } from 'firebase/firestore';
import { db } from '../firebase.config';
import materialGroups from '../assets/data/materialGroups';
import { ReactComponent as BackHand } from '../assets/svg/backhand.svg';

import Slider from '../components/Slider';

function ProductDetail() {
  const [product, setProduct] = useState(null);

  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      const docRef = doc(db, 'products', params.productId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setProduct(docSnap.data());
      }
    };

    fetchProduct();
  }, [params.productId]);

  return (
    product !== null && (
      <main className="productDetail">
        <div className="productDetail__container">
          <div className="productDetail__left">
            <h2 className="productDetail__heading smallscreen h2">
              {product.name}
            </h2>
            <div className="productDetail__images">
              <Slider images={product.imgUrls}></Slider>
            </div>
          </div>
          <div className="productDetail__right">
            <h2 className="productDetail__heading largescreen h2">
              {product.name}
            </h2>
            <h4 className="productDetail__description">
              {materialGroups[product.group].description}
            </h4>
            <p className="productDetail__materials">
              {materialGroups[product.group].materials}
            </p>
          </div>
        </div>
        <button className="return-back-icon" onClick={() => navigate(-1)}>
          <BackHand className="return-back-icon__img"></BackHand>
          <span className="return-back-icon__span">Zpět</span>
        </button>
      </main>
    )
  );
}

export default ProductDetail;
