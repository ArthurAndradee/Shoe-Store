import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { GoogleOAuthProvider } from '@react-oauth/google';
import './index.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './Pages/Home/home';
import LanguagePage from './Pages/Language/language';
import ErrorPage from './Pages/Error/error';
import ProductPage from './Pages/Product/product';
import 'bootstrap/dist/css/bootstrap.css';
import { products } from './Database/products';
import Cart from './Pages/Cart/cart';
import { Toaster } from 'react-hot-toast';
import CategoryPage from './Pages/Categories/category';
import Wishlist from './Pages/Wishlist/wishlist';
import { ContextProvider } from './Context/context';
import SearchResult from './Pages/Search/search.result';
import Checkout from './Pages/Checkout/checkout';
import { destinations } from './Database/destinations';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const productRoutes = products.map(product => ({
  path: `/products/${product.productUrl}`,
  element: <ProductPage
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
          />, 
})); 

const shippingDestinations = destinations.map(destination => ({
  path: `/delivery`,
  element: <Checkout
            id={destination.id}
            name={destination.name}
            surName={destination.surName} 
            phoneNumber={destination.phoneNumber} 
            cpf={destination.cpf} 
            cep={destination.cep} 
            address={destination.address} 
            addressNumber={destination.addressNumber}
            complement={destination.complement} 
            neighbourhood={destination.neighbourhood} 
            city={destination.city} 
            uf={destination.uf}
          />, 
})); 

const router = createBrowserRouter([{
  path: '/',
  element: <LanguagePage />,
  errorElement: <ErrorPage />
},
{
  path: '/home',
  element: <HomePage />,
  errorElement: <ErrorPage />
},
{
  path: '/search',
  element: <SearchResult/>,
  errorElement: <ErrorPage />
},
{
  path:'/wishlist',
  element: <Wishlist />,
  errorElement: <ErrorPage />
},
{
  path: '/cart',
  element: <Cart/>, 
  errorElement: <ErrorPage />
},
//-------------------------CATEGORY LINKS-------------------------
{
  path: '/femininos',
  element: <CategoryPage 
  type={['F', 'U']} 
  
            category={'Feminino'}/>, 
},
{ 
  path: '/masculinos',
  element: <CategoryPage
  type={['M', 'U']} 
  
            category={'Masculino'}/>, 
},
{
  path: '/edicao-limitada',
  element: <CategoryPage 
  type={['L']} 
  
            category={'Edição Limitada'}/>, 
},
{
  path: '/promocoes',
  element: <CategoryPage 
  type={['M', 'F', 'U', 'L']} 
  
            category={'Promoções'}/>, 
},
//-------------------------PRODUCT LINKS-------------------------
...productRoutes,
...shippingDestinations
])

root.render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="225610013643-h4vjojhkbfol6ht7rnlprjbdmjpfp1tp.apps.googleusercontent.com">
      <Toaster toastOptions={{duration: 3000,style:{background: '#FFFFFF',color: '#000000'},success: {iconTheme: {primary: '#000000',secondary: '#FFFFFF'}}}}/>
      <ContextProvider>
          <RouterProvider router={router} />
      </ContextProvider>
    </GoogleOAuthProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
