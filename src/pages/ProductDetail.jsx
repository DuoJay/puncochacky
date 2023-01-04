import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getDoc, doc } from 'firebase/firestore';
import { db } from '../firebase.config';

import Slider from '../components/Slider';

function ProductDetail() {
  const [product, setProduct] = useState(null);

  product !== null && console.log(product.group);

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
      <main className="productDetail">
        <div className="productDetail__container">
          <h2 className="productDetail__heading h2">{product.name}</h2>
          <div className="productDetail__images">
            <Slider images={product.imgUrls}></Slider>
          </div>
        </div>
      </main>
    )
  );
}

export default ProductDetail;
