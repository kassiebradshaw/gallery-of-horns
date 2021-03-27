import React from 'react';
import Card from 'react-bootstrap/Card';

class HornedBeast extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      favClicks: 0,
    }
  }

  buttonClicked = () => {
    this.setState({ favClicks: this.state.favClicks + 1 });
    this.props.showModal(this.props.title);
  }

  render() {
    return (
      <div>
        <Card style={{ width: '18rem' }}
          onClick={this.buttonClicked}>
          <Card.Img variant="top" src={this.props.img} />
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>{this.props.description}
            </Card.Text>
            <Card.Text>
              👍 = {this.state.favClicks}
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    )
  }
}

export default HornedBeast;
