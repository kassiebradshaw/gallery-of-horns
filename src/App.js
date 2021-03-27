import './App.css';
import Footer from './Footer.js';
import Header from './Header.js';
import Main from './Main.js';
import React from 'react';
import SelectedBeast from './SelectedBeast'

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

import data from './data.json';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      displayModal: false,
      beastData: data,
      selectedBeast: {}
    }
  }

  showModal = (name) => {

    const selectedBeast = data.find(beast => beast.title === name);
    console.log(selectedBeast);

    this.setState({selectedBeast, displayModal:true});
  }

  hideModal = () => {
    this.setState({displayModal: false});
  }

  render() {
    return (
      <div>
        <Header />
        <Main 
          showModal={this.showModal}
          beasts={this.state.beastData} 
        />
         
        <SelectedBeast 
          displayModal={this.state.displayModal}
          hideModal={this.hideModal}
          selectedBeast={this.state.selectedBeast}
        />
        <Footer />
      </div> 
    )
  }
}

export default App;
