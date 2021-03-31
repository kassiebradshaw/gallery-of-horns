import './App.css';
import Footer from './Footer.js';
import Header from './Header.js';
import Main from './Main.js';
import React from 'react';
import SelectedBeast from './SelectedBeast'
import data from './data.json';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      displayModal: false,
      data: data,
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

  filterHorns = (horns) => {
    if(horns === "Any") {
      this.setState({beastData: data})
    } else {
      const array = this.state.data.filter( element => element.horns === horns)

      this.setState({beastData: array})
    }
  }

  render() {
    return (
      <div>
        <Header />
        <Main 
          showModal={this.showModal}
          beasts={this.state.beastData}
          filterHorns={this.filterHorns} 
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
