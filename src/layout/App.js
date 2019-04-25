import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navigation from './Navigation';
import Pages from './Pages';
import Footer from './Footer';
import '../styles/App.css';


class App extends Component {
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
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
