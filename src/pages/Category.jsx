import { Children, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  collection,
  getDocs,
  query,
  where,
  orderBy,
  limit,
  startAfter,
} from 'firebase/firestore';
import { db } from '../firebase.config';
import ProductItem from '../components/ProductItem';

function Category() {
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(true);

  const params = useParams();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Get referencte
        const productsRef = collection(db, 'products');

        //Create a query
        const q = query(
          productsRef,
          where('type', '==', params.categoryName),
          orderBy('size', 'desc'),
          limit(10)
        );

        // Execute query
        const querySnap = await getDocs(q);

        let fetchedProducts = [];

        querySnap.forEach(doc => {
          return fetchedProducts.push({
            id: doc.id,
            data: doc.data(),
          });
        });

        setProducts(fetchedProducts);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProducts();
  }, [params.categoryName]);

  return (
    products !== null && (
      <>
        <main className="category__container">
          <ul className="category__items">
            {products.map(product => (
              <ProductItem
                key={product.id}
                product={product.data}
              ></ProductItem>
            ))}
          </ul>
        </main>
      </>
    )
  );
}

export default Category;
