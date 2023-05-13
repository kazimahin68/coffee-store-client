import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddCoffee from './pages/AddCoffee.jsx';
import UpdateCoffee from './pages/UpdateCoffee.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    children: [
      {
        path: '/add-coffee',
        element: <AddCoffee></AddCoffee>
      },
      {
        path: '/update-coffee',
        element: <UpdateCoffee></UpdateCoffee>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
