import HornedBeast from './HornedBeast.js';
import React from 'react';
import CardDeck from 'react-bootstrap/CardDeck';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';


class Main extends React.Component {
  
  handleFilter = (event) => {
    if (event.target.value === "Any") {
      this.props.filterHorns(event.target.value);
    } else {
      this.props.filterHorns(+event.target.value);
    }
  }
  
  render() {
    return (
      <>
        <Container>
          <Form>
            <Form.Group controlId="hornsSelected">
              <Form.Label>How many horns do you want on your beast?</Form.Label>
              <Form.Control onChange={this.handleFilter} as="select">
                <option>Any</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>100</option>
              </Form.Control>
            </Form.Group>
          </Form>
        </Container>
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
