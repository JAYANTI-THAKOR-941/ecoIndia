import React from 'react'
import Header from './components/Header'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import StateDetail from './pages/StateDetail'
import States from './pages/States'
import Projects from './pages/Projects'
import Blog from './pages/Blog'
import Footer from './components/Footer'
import About from './pages/About'
import Contact from './pages/Contact'

const App = () => {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/states" element={<States/>} />
        <Route path="/state/:stateName" element={<StateDetail/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App