import '../App.css';

import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import ProductList from '../components/ProductList/ProductList';
import React from 'react';
import { addToBasket } from '../redux/basketSlice'; // Assuming the correct path
import { useDispatch } from 'react-redux';

const HomePage = () => {
    const dispatch = useDispatch();

    const handleAddToBasket = (product) => {
        // Dispatch addToBasket action to update Redux store
        dispatch(addToBasket(product));
    };

    return (
        <div className="homePage">
            <Header />
            <ProductList onAddToBasket={handleAddToBasket} />
        <Footer/>
        </div>
    );
};

export default HomePage;
