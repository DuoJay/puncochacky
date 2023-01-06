import { useState, useEffect } from 'react';
import useAdminAuth from '../hooks/useAdminAuth';
import {
  collection,
  getDocs,
  query,
  orderBy,
  deleteDoc,
} from 'firebase/firestore';
import { db } from '../firebase.config';
import { doc } from 'firebase/firestore';
import ProductItem from '../components/ProductItem';
import { toast } from 'react-toastify';

function Admin() {
  const isAdmin = useAdminAuth();
  const [products, setProducts] = useState(null);
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Get referencte
        const productsRef = collection(db, 'products');

        //Create a query
        const q = query(productsRef, orderBy('size', 'desc'));

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
      } catch (error) {
        console.log(error);
      }
    };

    fetchProducts();
  }, []);

  const onChange = e => {
    setFilteredProducts(
      products.filter(product =>
        product.data.name.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
  };

  const onDelete = async productId => {
    const docRef = doc(db, 'products', productId);
    try {
      await deleteDoc(docRef);
      toast.success('Product vymazám');
    } catch (error) {
      toast.error('Problém:', error);
      console.log(error);
    }
  };

  if (isAdmin) {
    return (
      <main className="admin__container">
        <input
          className="admin__input"
          type="text"
          placeholder="hledat dle jména"
          // value={value}
          onChange={onChange}
        />

        <ul className="admin__items">
          {filteredProducts?.map(product => (
            <div key={product.id}>
              <ProductItem product={product.data}>
                <button
                  className="admin__delete"
                  onClick={() => onDelete(product.id)}
                >
                  X
                </button>
                <span className="admin__color">
                  Barva: {product.data.color}
                </span>
              </ProductItem>
            </div>
          ))}
        </ul>
      </main>
    );
  } else {
    return;
  }
}

export default Admin;
