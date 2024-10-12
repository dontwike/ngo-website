import React from 'react'
import Home from './page/home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
    <Navbar/>
      <Home />
      <Footer />
    </>
  )
}

export default App