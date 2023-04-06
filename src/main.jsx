import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Componant/Home/Home';
import Shop from './Componant/Shop/Shop';
import Contact from './Componant/Contact/Contact';
import About from './Componant/About/About';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>,

      },
      {
        path: '/shop',
        element: <Shop></Shop>,

      },
      {
        path: '/contact',
        element: <Contact></Contact>
      },
      {
        path: 'about',
        element: <About></About>
      }

    ]
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
