import React from 'react'

class CommentIndexItem extends React.Component {
  constructor(props) {
      super(props)
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
      this.props.fetchComment(this.props.comment.id)
  }

  handleDelete(e) {
      e.preventDefault();
      this.props.deleteComment(this.props.comment.id, this.props.listId)
  }

  render() {
    if (!this.props.comment) return null

    return (
      <div className="comments-show">
        <div className='comment-top'>
          <h4>{this.props.comment.username}</h4>
          {this.props.comment.author_id === this.props.currentUserId ? 
            <button onClick={this.handleDelete}>Delete</button> : null}
        </div>
            <p className='comment-body'>{this.props.comment.body}</p>
      </div>
    )
  }
}

export default CommentIndexItem;