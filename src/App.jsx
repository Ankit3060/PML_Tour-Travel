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

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element:(<> <Layout /> <ScrollToTop /> </>),
      children: [
        {path: '/packages', element: <Packages />},
        {path: '/packages/:id', element: <ReviewPackages />},
        {path: '/attractions', element: <Attraction />},
        {path: '/attraction/:id', element: <ReviewAttraction />},
        {path: '/attractions/:categoryId', element: <AttractionFilter />},
        {path: '/landcombos', element: <LandCombo />},
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
    </>
  )
}

export default App
