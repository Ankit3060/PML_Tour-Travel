import { useState } from 'react'
import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Layout from './Layout/Layout'
import Packages from './Pages/Packages'
import Review from './Components/Review';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {path: '/packages', element: <Packages />},
        {path: '/packages/:id', element: <Review />}
      ]
    }
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
