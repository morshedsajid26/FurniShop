import React from 'react'
import Navbar from './Component/Navbar'
import Banner from './Component/Banner'
import Service from './Component/Service'
import ExperienceFrame from './Component/ExperienceFrame'
import NewStore from './Component/NewStore'
import Choice from './Component/Choice'
import Products from './Component/Products'
import Review from './Component/Review'
import { RouterProvider } from 'react-router-dom'
import Order from './Component/Order'
import Footer from './Component/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <Service/>
      <NewStore/>
      <Choice/>
      <Products/>
      <Review/>
      <Order/>
      <Footer/>


      

    </div>
  )
}

export default App