import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import '../styles/App.css';
import Navigation from './Navigation';
import Pages from './Pages';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <Router basename={ProcessingInstruction.env.PUBLIC_URL}>
        <div className="app">
          <nav>
            {<Navigation />}
          </nav>
          <main className="pages">
            {<Pages />}
          </main>
          <footer>
            {<Footer />}
          </footer>
        </div>
      </Router>
    );
  }
}

export default App;
