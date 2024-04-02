import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import './index.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './Pages/Home/app';
import LanguagePage from './Pages/LanguagePage/main';
import ErrorPage from './Pages/Error/error';
import ProductPage from './Pages/Product/app';
import 'bootstrap/dist/css/bootstrap.css';
import { shoes } from './Components/Product/Props/shoes';

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
//-------------------------PRODUCT LINKS-------------------------
{
  path: `/products/${shoes[0].productUrl}`,
  element: <ProductPage name={shoes[0].name} imgLink={shoes[0].imgLink} type={shoes[0].type} price={shoes[0].price} catchPhrase={shoes[0].catchPhrase} />
},
{
  path: `/products/${shoes[1].productUrl}`,
  element: <ProductPage name={shoes[1].name} imgLink={shoes[1].imgLink} type={shoes[1].type} price={shoes[1].price} catchPhrase={shoes[1].catchPhrase} />
},
{
  path: `/products/${shoes[2].productUrl}`,
  element: <ProductPage name={shoes[2].name} imgLink={shoes[2].imgLink} type={shoes[2].type} price={shoes[2].price} catchPhrase={shoes[2].catchPhrase} />
},
{
  path: `/products/${shoes[3].productUrl}`,
  element: <ProductPage name={shoes[3].name} imgLink={shoes[3].imgLink} type={shoes[3].type} price={shoes[3].price} catchPhrase={shoes[3].catchPhrase} />
},
{
  path: `/products/${shoes[4].productUrl}`,
  element: <ProductPage name={shoes[4].name} imgLink={shoes[4].imgLink} type={shoes[4].type} price={shoes[4].price} catchPhrase={shoes[4].catchPhrase} />
},
{
  path: `/products/${shoes[5].productUrl}`,
  element: <ProductPage name={shoes[5].name} imgLink={shoes[5].imgLink} type={shoes[5].type} price={shoes[5].price} catchPhrase={shoes[5].catchPhrase} />
},
{
  path: `/products/${shoes[6].productUrl}`,
  element: <ProductPage name={shoes[6].name} imgLink={shoes[6].imgLink} type={shoes[6].type} price={shoes[6].price} catchPhrase={shoes[6].catchPhrase} />
},
{
  path: `/products/${shoes[7].productUrl}`,
  element: <ProductPage name={shoes[7].name} imgLink={shoes[7].imgLink} type={shoes[7].type} price={shoes[7].price} catchPhrase={shoes[7].catchPhrase} />
},
{
  path: `/products/${shoes[8].productUrl}`,
  element: <ProductPage name={shoes[8].name} imgLink={shoes[8].imgLink} type={shoes[8].type} price={shoes[8].price} catchPhrase={shoes[8].catchPhrase} />
},
{
  path: `/products/${shoes[9].productUrl}`,
  element: <ProductPage name={shoes[9].name} imgLink={shoes[9].imgLink} type={shoes[9].type} price={shoes[9].price} catchPhrase={shoes[9].catchPhrase} />
},
])

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
