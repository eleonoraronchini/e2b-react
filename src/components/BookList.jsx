import { Component } from 'react';
import SingleBook from './SingleBook';
import { Col, Form, Row } from 'react-bootstrap';
import CommentArea from './CommentArea';  // Importiamo CommentArea

class BookList extends Component {
  state = {
    searchQuery: '',
    selectedAsin: '',  // Memorizziamo l'asin del libro selezionato
  };

  changeSelectedAsin = (newAsin) => {
    this.setState({ selectedAsin: newAsin });
  };

  render() {
    return (
      <Row>
        {/* Colonna sinistra: Griglia dei libri */}
        <Col md={8}>
          <Row className="justify-content-center mt-5">
            <Col xs={12} md={4} className="text-center">
              <Form.Group>
                <Form.Control
                  type="search"
                  placeholder="Cerca un libro"
                  value={this.state.searchQuery}
                  onChange={(e) => this.setState({ searchQuery: e.target.value })}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className="g-2 mt-3">
            {this.props.books
              .filter((b) =>
                b.title.toLowerCase().includes(this.state.searchQuery)
              )
              .map((b) => (
                <Col xs={12} md={4} key={b.asin}>
                  <SingleBook
                    book={b}
                    changeSelectedAsin={this.changeSelectedAsin}
                  />
                </Col>
              ))}
          </Row>
        </Col>

        {/* Colonna destra: CommentArea */}
        <Col md={4}>
          {this.state.selectedAsin ? (
            <CommentArea asin={this.state.selectedAsin} />
          ) : (
            <p>Seleziona un libro per vedere i commenti.</p>  // Mostra un messaggio se nessun libro è selezionato
          )}
        </Col>
      </Row>
    );
  }
}

export default BookList;