import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Hero from './components/hero';
import Header2 from './components/Header2';
import Aboutus from './components/aboutus'; 
import Popular from './components/popularperfumes';
import Categories from './components/categories';
import Products from './components/products';
import Reviews from './components/reviews';
import Specialperfume from './components/specialperfume';
import Offers from './components/offers';
import Sponsor from './components/sponsor';
import Footer from './components/footer';
import './App.css'

function App() {
  return (
    <>
    <div>
      
      <Header2/>
      <Hero/>
      <Aboutus/>
      <Popular/>
      <Categories/>
      <Products/>
      <Reviews/>
      <Specialperfume/>
      <Offers/>
      <Sponsor/>
      <Footer/>
    
    </div>
    </>
  )
}

export default App
