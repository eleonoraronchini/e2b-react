import { Component } from 'react'
import CommentList from './CommentList'
import AddComment from './AddComment'
import Loading from './Loading'
import Error from './Error'

class CommentArea extends Component {
  state = {
    comments: [],
    isLoading: true,
    isError: false,
  }

  // Funzione per caricare i commenti
  loadComments = async () => {
    this.setState({ isLoading: true, isError: false })
    try {
      let response = await fetch(
        'https://striveschool-api.herokuapp.com/api/comments/' + this.props.asin,
        {
          headers: {
            "Authorization": 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzM3MTBjNjhhZDEyOTAwMTU4NzZiZDMiLCJpYXQiOjE3MzMxNTk4ODUsImV4cCI6MTczNDM2OTQ4NX0.9yDiqB0fPVinV1l0vhD-Pl6ZP7Y3M2Pl8AjLE9TVVCQ', // Usa la tua API key qui
          },
        }
      )

      if (response.ok) {
        let comments = await response.json()
        this.setState({ comments: comments, isLoading: false, isError: false })
      } else {
        this.setState({ isLoading: false, isError: true })
      }
    } catch (error) {
      console.log(error)
      this.setState({ isLoading: false, isError: true })
    }
  }

  // Quando il componente viene montato, carichiamo i commenti
  componentDidMount() {
    this.loadComments()
  }

  // Quando l'asin cambia, carichiamo i nuovi commenti
  componentDidUpdate(prevProps) {
    if (prevProps.asin !== this.props.asin) {
      this.loadComments()
    }
  }

  render() {
    return (
      <div className="text-center">
        {this.state.isLoading && <Loading />}
        {this.state.isError && <Error />}
        <AddComment asin={this.props.asin} />
        <CommentList commentsToShow={this.state.comments} />
      </div>
    )
  }
}

export default CommentArea