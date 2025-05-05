import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css'; // Tailwind directives should be in this file
import {createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/home/home';
import Login from './pages/authentication/login';
import Signup from './pages/authentication/signup';
import { store } from './store/store.js';
import { Provider } from "react-redux"


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/signup',
    element: <Signup />
  }
]);

const root = createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <App />
  <RouterProvider router={router}/>
  </ Provider>
);
