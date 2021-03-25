import './App.css';
import Footer from './Footer.js';
import Header from './Header.js';
import Main from './Main.js';
import React from 'react';
import data from './data.json'


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      beastData: data,
    }
  }

  render() {
    return (
      <div>
        <Header />
        <Main beasts={this.state.beastData} />
        <Footer />
      </div> 
    )
  }
}

export default App;
