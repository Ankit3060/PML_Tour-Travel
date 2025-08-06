import { useState } from 'react'
import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Layout from './Layout/Layout'
import Packages from './Pages/Packages'
import ReviewPackages from './Review/ReviewPackages';
import Attraction from './Pages/Attraction';
import ReviewAttraction from './Review/ReviewAttraction';
import AttractionFilter from './Components/AttractionFilter';
import ScrollToTop from './Layout/ScrollToTop';
import LandCombo from "./Pages/LandCombo";
import AboutUs from './Pages/AboutUs';
import Privacy from './Pages/Privacy';
import Conditions from './Pages/Conditions';
import ContactUs from './Pages/ContactUs';
import ReviewLandCombo from './Review/ReviewLandCombo';
import {ToastContainer} from 'react-toastify';
import Home from "./Pages/Home";

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element:(<> <Layout /> <ScrollToTop /> </>),
      children: [
        {path: '/', element: <Home />},
        {path: '/packages', element: <Packages />},
        {path: '/packages/:id', element: <ReviewPackages />},
        {path: '/attractions', element: <Attraction />},
        {path: '/attraction/:id', element: <ReviewAttraction />},
        {path: '/attractions/:categoryId', element: <AttractionFilter />},
        {path: '/landcombos', element: <LandCombo />},
        {path: '/landcombos/:id', element: <ReviewLandCombo />},
        {path: '/aboutus', element: <AboutUs />}, 
        {path: '/privacy', element: <Privacy />},
        {path: '/condition', element: <Conditions />},
        {path: '/contactus', element: <ContactUs />},
      ]
    }
  ])

  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer
        position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={true}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored" />
    </>
  )
}

export default App
