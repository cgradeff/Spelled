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
            <p>{this.props.comment.username}</p>
            <p>{this.props.comment.body}</p>
            {this.props.comment.author_id === this.props.currentUserId ? 
            <button onClick={this.handleDelete}>DELETE</button> : null}
      </div>
    )
  }
}

export default CommentIndexItem;