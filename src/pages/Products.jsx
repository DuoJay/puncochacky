import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  collection,
  getDocs,
  query,
  where,
  orderBy,
  limit,
} from 'firebase/firestore';
import { db } from '../firebase.config';
import ProductItem from '../components/ProductItem';
import Filter from '../components/Filter';
import SyncLoader from 'react-spinners/SyncLoader';

function Products() {
  const [products, setProducts] = useState(null);
  const [filteredProducts, setFilteredProducts] = useState(null);
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
          orderBy('color', 'asc'),
          limit(150)
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
        setFilteredProducts(fetchedProducts);
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
        {loading && (
          <main className="products__container">
            <SyncLoader
              className="products__loader"
              color="#e71b69"
              margin={5}
              size={30}
              speedMultiplier={1}
            />
          </main>
        )}
        {!loading && (
          <main className="products__container">
            <Filter
              products={products}
              setFilteredProducts={setFilteredProducts}
            ></Filter>
            <ul className="products__items">
              {filteredProducts.map(product => (
                <Link
                  key={product.id}
                  to={`/category/${params.categoryName}/${product.id}`}
                >
                  <ProductItem product={product.data}></ProductItem>
                </Link>
              ))}
            </ul>
          </main>
        )}
      </>
    )
  );
}

export default Products;
