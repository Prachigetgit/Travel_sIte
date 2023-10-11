import React from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer'
import Main from './components/Main/Main';

const App = () => {
  return (
   <>
    <Navbar/>
    <Home/>
     <Main/>
    <Footer/>
   </>
  )
}

export default App