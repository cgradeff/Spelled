import React from 'react'
import CommentIndexItem from './comment_index_item'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class CommentIndex extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      body: '',
      author_id: this.props.currentUserId,
      list_id: this.props.listId,
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    this.props.fetchComments(this.props.listId)
  }

  handleSubmit(e) {
    e.preventDefault()
    if (this.props.currentUserId === null) {
      this.props.openModal('start-login')
    }
    this.props.createComment(this.state, this.props.listId)
    this.setState({ body: '' })
  }

  update(field) {
    return (e) => this.setState({ [field]: e.currentTarget.value })
  }

  render() {

    let listComments = this.props.comments
      .slice()
      .reverse()
      .map((comment, i) => {
        return (
          <CommentIndexItem
            key={i}
            comment={comment}
            deleteComment={this.props.deleteComment}
            fetchComment={this.props.fetchComment}
            listId={this.props.listId}
            currentUserId={this.props.currentUserId}
          />
        )
      })

    if (this.props.comments.length === 0) {
      listComments = null
    }

    return (
      <div className="comments">
        <div className="add-comment">
          <h3>Discussion</h3>

          <div className="comment-input-container">
            <FontAwesomeIcon icon={['fas', 'user-circle']} id="comment-icon" />
            <form>
              <p>Add a comment</p>
              <div>
                <input
                  type="text"
                  value={this.state.body}
                  onChange={this.update('body')}
                />
                <button onClick={this.handleSubmit}>COMMENT</button>
              </div>
            </form>
          </div>
        </div>

        <div className="comments-list">
          <div className="comments-list-container">{listComments}</div>
        </div>
      </div>
    )
  }
}

export default CommentIndex
