import React, { useState } from 'react';
import './App.css';
import Header from "./components/Header/header"
import Project from "./pages/projects"
import Footer from "./components/Footer/footer"
import About from "./pages/about"
import Contact from "./pages/contact"
import Navigation from "./pages/navigation"

function App() {
  const [categories] = useState([
    { name: "About Me" },
    { name: "Portfolio" },
    { name: "Contact" },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div id="app">
      <div id="header">
        <Header></Header>
        <Navigation
          categories={categories}
          setCurrentCategory={setCurrentCategory}
          currentCategory={currentCategory}
        ></Navigation>
      </div>
      <div id="main">
        {currentCategory === categories[0] && <About></About>}
        {currentCategory === categories[1] && <Project></Project>}
        {currentCategory === categories[2] && <Contact></Contact>}
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;