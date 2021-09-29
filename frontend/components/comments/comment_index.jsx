import React from 'react'
import CommentIndexItem from './comment_index_item'

class CommentIndex extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      body: '',
      author_id: this.props.currentUserId,
      list_id: this.props.listId,
    }
    // this.comments = this.props.fetchComments(this.props.listId);
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
    if (!this.props.comments) return null

    const listComments = this.props.comments
      .slice()
      .reverse()
      .map((comment, i) => {
        //   if (comment.author_id === this.props.currentUserId) {
        //     return (
        //       <div className="my-comment" key={i}>
        //         <p>{comment.username}</p>
        //         <p>{comment.body}</p>
        //         <button onClick={() => this.props.deleteComment(comment.id, this.props.listId)}>DELETE</button>
        //       </div>
        //     )
        //   }
        //   return (
        //     <div key={i}>
        //       <p>{comment.username}</p>
        //       <p>{comment.body}</p>
        //     </div>
        //   )
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

    return (
      <div className="comments">
        <h3>Discussion</h3>
        <form>
          <p>Add a comment</p>
          <input
            type="text"
            value={this.state.body}
            onChange={this.update('body')}
          />
          <button onClick={this.handleSubmit}>COMMENT</button>
        </form>
        <div className="comments-list">{listComments}</div>
      </div>
    )
  }
}

export default CommentIndex
