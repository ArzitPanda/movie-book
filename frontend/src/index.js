import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Checkout from './components/Checkout';
import { Provider } from 'react-redux';
import { store } from './Store/store';
import Login from './components/Login';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
    <App/>
    ),
  },
  {
    path: "checkout",
    element: <Checkout/>,
  },
  {
    path:"login",
    element:<Login/>
  }
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
    <RouterProvider  router={router} />
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

