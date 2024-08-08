import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { ContextProvider } from './Context/context';
import axios from 'axios';

import { destinations } from './Database/destinations';

import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

import LanguagePage from './Pages/Language/language';
import HomePage from './Pages/Home/home';
import ErrorPage from './Pages/Error/error';
import CategoryPage from './Pages/Categories/category';
import SearchResult from './Pages/Search/search.result';
import ProductPage from './Pages/Product/product';
import Wishlist from './Pages/Wishlist/wishlist';
import Cart from './Pages/Cart/cart';
import Checkout from './Pages/Checkout/checkout';
import OrderCompletion from './Components/Checkout/OrderCompletion/order.completion';
import Summary from './Components/Checkout/Summary/summary';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

export interface Product {
  availableQuantity: number;
  catchPhrase: string;
  category: any;
  discountedPrice: number;
  id: string;
  imgAlt: string;
  imgLink: string;
  price: number;
  productUrl: string;
  productSize: string;
  name: string;
  quantity: number;
  type: string;
  variations: any;
}

export interface ProductProps {
  products: Product[];
}

const App = () => {
  const [products, setProducts] = useState<Product[]>([]);
  
  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    try {
      const response = await axios.get('https://shoe-store-backend-wa8m.onrender.com/getProducts');
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products', error);
    }
  };

  const productRoutes = products.map((product) => ({
    path: `/products/${product.productUrl}`,
    element: (
      <ProductPage
        id={product.id}
        name={product.name}
        imgLink={product.imgLink}
        imgAlt={product.imgAlt}
        type={product.type}
        price={product.price}
        discountedPrice={product.discountedPrice}
        catchPhrase={product.catchPhrase}
        productUrl={product.productUrl}
        productSize={product.productSize}
        variations={product.variations}
        quantity={product.quantity}
        availableQuantity={product.availableQuantity} 
        category={product.category}      
      />
    ),
  }));

  const shippingDestinations = destinations.map((destination) => ({
    path: `/checkout`,
    element: (
      <Checkout
        destinationId={destination.id}
        name={destination.name}
        surName={destination.surName}
        phoneNumber={destination.phoneNumber}
        cpf={destination.cpf}
        cep={destination.cep}
        address={destination.address}
        addressNumber={destination.addressNumber}
        addressInfo={destination.addressInfo}
        neighbourhood={destination.neighbourhood}
        city={destination.city}
        uf={destination.uf}
      />
    ),
  }));

  const router = createBrowserRouter([
    {
      path: '/',
      element: <LanguagePage />,
      errorElement: <ErrorPage />,
    },
    {
      path: '/home',
      element: <HomePage products={products} />,
      errorElement: <ErrorPage />,
    },
    {
      path: '/categories/:category',
      element: <CategoryPage products={products} />,
      errorElement: <ErrorPage />,
    },
    {
      path: '/search',
      element: <SearchResult products={products} />,
      errorElement: <ErrorPage />,
    },
    {
      path: '/wishlist',
      element: <Wishlist />,
      errorElement: <ErrorPage />,
    },
    {
      path: '/cart',
      element: <Cart />,
      errorElement: <ErrorPage />,
    },
    {
      path: '/order-review',
      element: <Summary />,
      errorElement: <ErrorPage />, 
    },
    {
      path: '/order-completion',
      element: <OrderCompletion />,
      errorElement: <ErrorPage />,
    },
    ...productRoutes,
    ...shippingDestinations,
  ]);

  return (
    <React.StrictMode>
      <GoogleOAuthProvider clientId="678565006881-n3hmhb4212mslbcigmdrhbhj7iu8mst6.apps.googleusercontent.com">
        <Toaster
          toastOptions={{
            duration: 3000,
            style: { background: '#FFFFFF', color: '#000000' },
            success: { iconTheme: { primary: '#000000', secondary: '#FFFFFF' } },
          }}
        />
        <ContextProvider>
          <RouterProvider router={router} />
        </ContextProvider>
      </GoogleOAuthProvider>
    </React.StrictMode>
  );
};

root.render(<App />);
reportWebVitals();