import { connect } from "react-redux";
import { fetchComments, createComment, deleteComment, fetchComment } from "../../actions/comment_actions";
import {openModal} from '../../actions/modal_actions';
import CommentIndex from "./comment_index";
import { withRouter } from "react-router";

const mSTP = (state) => ({
  comments: Object.values(state.entities.comments),
  currentUserId: state.session.id,
});

const mDTP = (dispatch) => ({
  fetchComments: (listId) => dispatch(fetchComments(listId)),
  fetchComment: (commentId) => dispatch(fetchComment(commentId)),
  createComment: (comment, listId) =>
    dispatch(createComment(comment, listId)),
  deleteComment: (commentId, listId) =>
    dispatch(deleteComment(commentId, listId)),
    openModal: modal => dispatch(openModal(modal)),
});

export default withRouter(connect(mSTP, mDTP)(CommentIndex));