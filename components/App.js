import React from 'react';
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import About from "./components/about";
import Intro from "./components/intro";
       function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <About />
      <Project />
      <Contact />
      <Footer/>
    </div>
  );
};
export default App;