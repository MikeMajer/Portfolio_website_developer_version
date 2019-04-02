import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './styles/App.css';
import Navigation from './pages/Navigation';
import Home from './pages/Home';
import About from './pages/About';
import Tools from './pages/Tools';
import Experience from './pages/Experience';
import Contact from './pages/Contact';
import Footer from './pages/Footer';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <nav>
            {<Navigation />}
          </nav>
          <section className="home">
            {<Home />}
          </section>
          <section className="about">
            {<About />}
          </section>
          <section className="tools">
            {<Tools />}
          </section>
          <section className="experience">
            {<Experience />}
          </section>
          <section className="contact">
            {<Contact />}
          </section>
          <footer>
            {<Footer />}
          </footer>
        </div>
      </Router>
    );
  }
}

export default App;
