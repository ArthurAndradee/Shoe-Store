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
import { products } from './Components/Product/Props/shoes';
import Cart from './Pages/Cart/cart';
import CartProvider from './Providers/cart.provider';
import { Toaster } from 'react-hot-toast';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

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
  element: <Cart />, 
  errorElement: <ErrorPage />
},
//-------------------------PRODUCT LINKS-------------------------
{
  path: `/products/${products[0].productUrl}`,
  element: <ProductPage
            id={products[0].id} 
            name={products[0].name}  
            imgLink={products[0].imgLink}  
            type={products[0].type}  
            price={products[0].price}  
            catchPhrase={products[0].catchPhrase} 
          />
},
{
  path: `/products/${products[1].productUrl}`,
  element: <ProductPage
            id={products[1].id} 
            name={products[1].name} 
            imgLink={products[1].imgLink} 
            type={products[1].type} 
            price={products[1].price} 
            catchPhrase={products[1].catchPhrase} 
          />
},
{
  path: `/products/${products[2].productUrl}`,
  element: <ProductPage
            id={products[2].id} 
            name={products[2].name} 
            imgLink={products[2].imgLink} 
            type={products[2].type} 
            price={products[2].price} 
            catchPhrase={products[2].catchPhrase} 
          />
},
{
  path: `/products/${products[3].productUrl}`,
  element: <ProductPage
            id={products[3].id} 
            name={products[3].name} 
            imgLink={products[3].imgLink} 
            type={products[3].type} 
            price={products[3].price} 
            catchPhrase={products[3].catchPhrase} 
          />
},
{
  path: `/products/${products[4].productUrl}`,
  element: <ProductPage
            id={products[4].id} 
            name={products[4].name} 
            imgLink={products[4].imgLink} 
            type={products[4].type} 
            price={products[4].price} 
            catchPhrase={products[4].catchPhrase} 
          />
},
{
  path: `/products/${products[5].productUrl}`,
  element: <ProductPage
            id={products[5].id} 
            name={products[5].name} 
            imgLink={products[5].imgLink} 
            type={products[5].type} 
            price={products[5].price} 
            catchPhrase={products[5].catchPhrase} 
          />
},
{
  path: `/products/${products[6].productUrl}`,
  element: <ProductPage
            id={products[6].id} 
            name={products[6].name} 
            imgLink={products[6].imgLink} 
            type={products[6].type} 
            price={products[6].price} 
            catchPhrase={products[6].catchPhrase} 
          />
},
{
  path: `/products/${products[7].productUrl}`,
  element: <ProductPage
            id={products[7].id} 
            name={products[7].name} 
            imgLink={products[7].imgLink} 
            type={products[7].type} 
            price={products[7].price} 
            catchPhrase={products[7].catchPhrase} 
          />
},
{
  path: `/products/${products[8].productUrl}`,
  element: <ProductPage
            id={products[8].id} 
            name={products[8].name} 
            imgLink={products[8].imgLink} 
            type={products[8].type} 
            price={products[8].price} 
            catchPhrase={products[8].catchPhrase} 
          />
},
{
  path: `/products/${products[9].productUrl}`,
  element: <ProductPage
            id={products[9].id} 
            name={products[9].name} 
            imgLink={products[9].imgLink} 
            type={products[9].type} 
            price={products[9].price} 
            catchPhrase={products[9].catchPhrase} 
          />
},
])

root.render(
  <React.StrictMode>
    <Toaster toastOptions={{
      duration: 3000,
      style:{
        background: '#FFFFFF',
        color: '#000000'
      },
      success: {
        iconTheme: {
          primary: '#000000',
          secondary: '#FFFFFF'
        }
      }
    }}/>
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
