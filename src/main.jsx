import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import AboutMe from './pages/AboutMe.jsx'
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
    path: "/aboutme",
    element: <AboutMe/>,
    errorElement: <h1>404 not found</h1>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
