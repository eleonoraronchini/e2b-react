import { Component } from 'react';
import { Card } from 'react-bootstrap';

class SingleBook extends Component {
  state = {
    selected: false,
  };

  handleClick = () => {
    const { book, changeSelectedAsin } = this.props;
    const newSelectedState = !this.state.selected;
    this.setState({ selected: newSelectedState });

    if (newSelectedState) {
      // Passa l'asin del libro selezionato al componente genitore
      changeSelectedAsin(book.asin);
    } else {
      // Deseleziona il libro
      changeSelectedAsin("");
    }
  };

  render() {
    const { book } = this.props;
    return (
      <Card
        onClick={this.handleClick}
        style={{ border: this.state.selected ? '3px solid red' : 'none' }}
      >
        <Card.Img variant="top" src={book.img} />
        <Card.Body>
          <Card.Title style={{ color: 'black' }}>{book.title}</Card.Title>
        </Card.Body>
      </Card>
    );
  }
}

export default SingleBook;