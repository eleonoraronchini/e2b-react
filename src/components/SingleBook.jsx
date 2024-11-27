import {Card} from 'react-bootstrap'
import fantasy from "../data/fantasy.json"


const SingleBook = ({book}) => {
    return (
        <div>
             <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={book.coverImage} alt={`Cover of ${book.title}`} />
      <Card.Body>
        <Card.Title>{book.title}</Card.Title>
      </Card.Body>
    </Card>
        </div>
    )
}
export default SingleBook