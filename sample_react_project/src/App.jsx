import React from 'react'
import Home from './Component/functional_comp/Home'
import About from "./Component/functional_comp/About"
import Contact from "./Component/functional_comp/Contact"
import Gallery from "./Component/functional_comp/gallery"
import ClassComponent from "./Component/class_comp/ClassCompEG"
import Navbar from "./Component/functional_comp/navbar"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Signup from './Component/functional_comp/Signup'
import UseState from './Component/functional_comp/Hooks/UseState'
import UseEffectTextArea from './Component/functional_comp/Hooks/UseEffect'
import UseEffectAPI from './Component/functional_comp/Hooks/UseEffectAPI'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes> 
        <Route path='/' element={<Home/>}></Route> 
        <Route path='/about' element={<About/>}></Route>
        <Route path='/gallery' element={<Gallery page="Gallery" img="SECE logo"/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/classcomponent' element={<ClassComponent/>}></Route>
        <Route path='/Signup' element={<Signup/>}></Route>
        <Route path='/UseState' elementt={<UseState/>}></Route>
        <Route path="/UseEffect" element={<UseEffectTextArea/>}></Route>
        <Route path="/useeffectapi" element={<UseEffectAPI />}></Route>
      </Routes>
    </BrowserRouter> 
  );
}

export default App;