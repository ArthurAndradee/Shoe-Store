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
  element: <ProductPage name={shoes[0].name} imgLink={shoes[0].imgLink} />
},
{
  path: `/products/${shoes[1].productUrl}`,
  element: <ProductPage name={shoes[1].name} imgLink={shoes[1].imgLink} />
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
