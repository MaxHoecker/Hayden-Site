import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import About from './pages/About.jsx'
import Works from './pages/Works.jsx'
import Chair from './pages/Chair.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import LandingPage from './pages/LandingPage.jsx';

/**
 * Note: Changing this locally requires restarting vite
 */
const router = createBrowserRouter([
  {
    path: "",
    element: <LandingPage/>,
    errorElement: <h1>404 not found</h1>,
  },
  {
    path: "/about",
    element: <About/>,
    errorElement: <h1>404 not found</h1>,
  },
  {
    path: "/works",
    element: <Works/>,
    errorElement: <h1>404 not found</h1>,
  },
  {
    path: "/chair",
    element: <Chair/>,
    errorElement: <h1>404 not found</h1>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
