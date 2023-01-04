import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getDoc, doc } from 'firebase/firestore';
import { db } from '../firebase.config';

import Slider from '../components/Slider';

function ProductDetail() {
  const [product, setProduct] = useState(null);

  const params = useParams();

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
      <main className="product-detail">
        <div className="product-detail__container">
          <h2 className="h2">{product.name}</h2>
          <Slider
            style={{ height: '30rem', width: '30rem' }}
            images={product.imgUrls}
          ></Slider>
        </div>
      </main>
    )
  );
}

export default ProductDetail;
