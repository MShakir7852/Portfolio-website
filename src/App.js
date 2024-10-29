import React from 'react';
import Home from './Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './Media/Nav';
import About from './Media/About';
import Portfolio from './Media/Portfolio';
import Contact from './Media/Contact';
import Blog from './Media/Blog';

export default function App() {
  return (
    <>
    <Router>
      <div>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About/>} />
          <Route path="/portfolio" element={<Portfolio/>}/>
          <Route path="/contact" element={<Contact/>} />
          <Route path="/blog" element={<Blog/>} />
        </Routes>
      </div>
    </Router>
    </>
  );
}
