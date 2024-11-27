import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import MyNav from './components/MyNav'
import MyFooter from './components/MyFooter'
import Welcome from './components/Welcome'
import { Container } from 'react-bootstrap'
import fantasy from './data/fantasy.json';
import BookList from './components/BookList'
function App() {
  return (
    <>
      <MyNav />
      <Container>
        <Welcome />
        <Booklist books ={fantasy} />
      </Container>
      <MyFooter />
    </>
  )
}

export default App