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

  if (product) {
    return (
      <main className="product-detail__container">
        <h2 className="h2">{product.name}</h2>
        <Slider images={product.imgUrls}></Slider>
      </main>
    );
  }
}

export default ProductDetail;
