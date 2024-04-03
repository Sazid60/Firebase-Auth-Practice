import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import MainLayout from './Layout/MainLayout';
import Home from './Components/Home';
import Login from './Components/Login';
import Register from './Components/Register';
import Profile from './Components/Profile';
import About from './Components/About';
import AuthProvider from './AuthProvider/AuthProvider';
import PrivateRoutes from './Components/PrivateRoutes/PrivateRoutes';
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <PrivateRoutes><Home /></PrivateRoutes>,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/profile",
        element: <PrivateRoutes><Profile /></PrivateRoutes>,
      },
      {
        path: "/about",
        element: <PrivateRoutes><About /></PrivateRoutes>,
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
