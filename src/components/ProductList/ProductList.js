import './productList.css';

import Brownie from '../../products/Magical Brownie.webp';
import Cookie from '../../products/Enchanted Cookie.webp';
import ProductItem from '../ProductItem/ProductItem'; // Import the ProductItem component
import React from 'react';

const ProductList = ({ onAddToBasket }) => {

    //const [products, setProducts] = useState([]);
    //const [loading, setLoading] = useState(true);
   // useEffect(() => {
        // Simulate fetching product data from a backend service
      //  const fetchData = async () => {
           // try {
                // Replace the URL with your actual backend endpoint
            //    const response = await fetch('https://your-backend-api/products');
            //    const data = await response.json();
          //      setProducts(data);
         //   } catch (error) {
         //       console.error('Error fetching product data:', error);
         //   } finally {
         //       setLoading(false);
        //    }
       // };

     //   fetchData();
   // }, []); // Empty dependency array ensures the effect runs once on mount

    // Mocked product data
    const products = [
            { id: 1, name: 'Magical Brownie', price: 4.99, description: 'A delightful treat with a special touch.', image: Brownie },
        { id: 2, name: 'Enchanted Cookie', price: 3.99, description: 'Crispy, sweet, and surprisingly uplifting.', image: Cookie }
    ];

    return (
        <div className="productList">
            {products.map(product => (
                <ProductItem 
                    key={product.id} 
                    product={product} 
                    onAddToBasket={() => onAddToBasket(product)}
                />
            ))}


            {/* <div className="productList">
            {loading ? (
                // Display loading indicator or placeholder while data is being fetched
                <p>Loading...</p>
            ) : (
                // Map over the fetched products and render ProductItem components
                products.map(product => (
                    <ProductItem
                        key={product.id}
                        product={product}
                        onAddToBasket={() => onAddToBasket(product)}
                    />
                ))
            )}
        </div>*/}
        </div>
    );
};

export default ProductList;
