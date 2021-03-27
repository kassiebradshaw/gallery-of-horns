import HornedBeast from './HornedBeast.js';
import React from 'react';
import CardDeck from 'react-bootstrap/CardDeck'


class Main extends React.Component {
  render() {
    return (
      <>
        <CardDeck>
          {this.props.beasts.map((thisBeast, index) => {
            return (
              <div key={index}>
                <HornedBeast
                  showModal={this.props.showModal}
                  title={thisBeast.title}
                  img={thisBeast.image_url}
                  description={thisBeast.description}
                 />
              </div>
            )
          })}
        </CardDeck>
      </>
    )
  }
}


export default Main;
