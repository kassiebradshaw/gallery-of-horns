import HornedBeast from './HornedBeast.js';
import React from 'react';

class Main extends React.Component {
  render() {
    return (
      this.props.beasts.map((thisBeast, index) => {
        return (
          <div key={index}>
            <HornedBeast
              title={thisBeast.title}
              img_url={thisBeast.img_url}
              description={thisBeast.description}
             />
          </div>
        )
      })
    )
  }
}


export default Main;
