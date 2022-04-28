import React from 'react'
import Navbar from './Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from "./Home"
import Tourism from "./Tourism"
import Fitness from "./Fitness"
import Technology from './Technology'
import Bollywood from './Bollywood'
import Other from './Other'
import Detail from './Detail'
import { Context } from './Context'
import ScrollToTop from './ScrollToTop'


const App = () => {
  return (
     <Context>
    <Router>
     <ScrollToTop />
     <Navbar />
    <Routes>
       <Route path='' element = {<Home />}/>
       <Route path='/Home' element = {<Home />}/>
       <Route path='/Category/Tourism' element = {<Tourism />}/>
       <Route path='Category/Fitness' element = {<Fitness />}/>
       <Route path='/Category/Technology' element = {<Technology/>}/>
        <Route path='/Category/Bollywood' element = {<Bollywood/>}/>
       <Route path='/Category/Global' element = {<Other />}/>
       <Route path='/Category/:type/Article/:id' element = {<Detail />}/>
       
       
    </Routes>
    </Router>
    </Context>
  )
}

export default App