
import React from 'react';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Gallery from './components/Gallery';
import GetInTouch from './components/GetInTouch';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


function App() {
  return (
    <div className="bg-backgroundLight dark:bg-backgroundDark text-textMainLight dark:text-textMainDark">
      <Navbar />
      <main className="pt-20">
        <section id="home"><Home /></section>
        <section id="about"><About /></section>
        <section id="skills"><Skills /></section>
        <section id="projects"><Projects /></section>
        <section id="gallery"><Gallery /></section>
        <section id="contact"><GetInTouch /></section>
        <section id="footer"><Footer /></section>
      </main>
    </div>
  );
}

export default App;
