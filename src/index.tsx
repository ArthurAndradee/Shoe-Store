import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import './index.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './Pages/Home/home';
import LanguagePage from './Pages/Language/language';
import ErrorPage from './Pages/Error/error';
import ProductPage from './Pages/Product/product';
import 'bootstrap/dist/css/bootstrap.css';
import { products } from './Database/products';
import Cart from './Pages/Cart/cart';
import CartProvider from './Providers/cart.provider';
import { Toaster } from 'react-hot-toast';
import CategoryPage from './Pages/Categories/category';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const productRoutes = products.map(product => ({
  path: `/products/${product.productUrl}`,
  element: <ProductPage
            id={product.id} 
            name={product.name} 
            imgLink={product.imgLink} 
            type={product.type} 
            price={product.price} 
            catchPhrase={product.catchPhrase}
            productUrl={product.productUrl} 
            productSize={product.productSize}
          />
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
  path: '/cart',
  element: <Cart/>, 
  errorElement: <ErrorPage />
},
//-------------------------CATEGORY LINKS-------------------------
{
  path: '/femininos',
  element: <CategoryPage 
  primaryType={'F'} 
  secondaryType={'U'} 
  category={'Feminino'}/>, 
},
{
  path: '/masculinos',
  element: <CategoryPage 
  primaryType={'M'} 
  secondaryType={'U'} 
  category={'Masculino'}/>, 
},
{
  path: '/infantil',
  element: <CategoryPage 
  primaryType={'I'} 
  secondaryType={'I'} 
  category={'Infantil'}/>, 
},
{
  path: '/edicao-limitada',
  element: <CategoryPage 
  primaryType={'LaterToAdd'} 
  secondaryType={'LaterToAdd'} 
  category={'Edição Limitada'}/>, 
},
{
  path: '/promocoes',
  element: <CategoryPage 
  primaryType={'LaterToAdd'} 
  secondaryType={'LaterToAdd'} 
  category={'Promoções'}/>, 
},
//-------------------------PRODUCT LINKS-------------------------
...productRoutes
])

root.render(
  <React.StrictMode>
    <Toaster toastOptions={{duration: 3000,style:{background: '#FFFFFF',color: '#000000'},success: {iconTheme: {primary: '#000000',secondary: '#FFFFFF'}}}}/>
    <CartProvider>
        <RouterProvider router={router} />
    </CartProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
