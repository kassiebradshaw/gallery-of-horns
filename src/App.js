import './App.css';
import Footer from './Footer.js';
import Header from './Header.js';
import HornedBeast from './HornedBeast.js';
import Main from './Main.js';
import React from 'react';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
        <Footer />
      </div> 
    )
  }
}


export default App;
