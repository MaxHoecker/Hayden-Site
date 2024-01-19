import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Me from './AboutMe.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'

/**
 * Note: Changing this locally requires restarting vite
 */
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <h1>404 not found</h1>,
  },
  {
    path: "/aboutme",
    element: <Me/>,
    errorElement: <h1>404 not found</h1>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
