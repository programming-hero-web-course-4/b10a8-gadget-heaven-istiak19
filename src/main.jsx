import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './Components/MainLayout/MainLayout';
import Home from './Components/Home/Home';
import Statistics from './Components/Statistics/Statistics';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import DashBoard from './Components/DashBoard/DashBoard';
import ProductCard from './Components/ProductCard/ProductCard';
import ProductDetails from './Components/ProductDetails/ProductDetails';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProOrder from './Components/ProOrder/ProOrder';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        loader: () => fetch('/products.json'),
        element: <Home></Home>,
        children: [
          {
            path: '/',
            loader: () => fetch('../products.json'),
            element: <ProductCard></ProductCard>
          },
          {
            path: '/category/:categoryName',
            loader: () => fetch('../products.json'),
            element: <ProductCard></ProductCard>
          }
        ],
      },
      {
        path: '/product/:id',
        loader: () => fetch('../products.json'),
        element: <ProductDetails></ProductDetails>
      },
      {
        path: '/statistics',
        loader: () => fetch('/products.json'),
        element: <Statistics></Statistics>
      },
      {
        path: '/dashboard',
        element: <DashBoard></DashBoard>
      },
      {
        path:'/pre-order',
        element:<ProOrder></ProOrder>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    <ToastContainer
      position="top-center"
      autoClose={1000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
      transition:Bounce
    ></ToastContainer>
  </StrictMode >,
)
