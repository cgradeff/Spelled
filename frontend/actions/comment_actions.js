import * as CommentApiUtil from "../util/comment_api_util";

export const RECEIVE_ALL_COMMENTS = "RECEIVE_ALL_COMMENTS";
export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
export const REMOVE_COMMENT = "REMOVE_COMMENT";

export const receiveAllComments = (comments) => ({
  type: RECEIVE_ALL_COMMENTS,
  comments,
});

export const receiveComment = (comment) => ({
  type: RECEIVE_COMMENT,
  comment,
});

const removeComment = (comment) => ({
  type: REMOVE_COMMENT,
  comment,
});

export const fetchComments = (listId) => (dispatch) => {
  return CommentApiUtil.fetchComments(listId).then((comments) =>
    dispatch(receiveAllComments(comments))
  );
};

export const fetchComment = (commentId) => (dispatch) => {
  return CommentApiUtil.fetchComment(commentId).then((comment) =>
    dispatch(receiveComment(comment))
  );
};

export const createComment = (comment, listId) => (dispatch) => {
  return CommentApiUtil.createComment(comment, listId).then((comment) =>
    dispatch(receiveComment(comment))
  );
};

export const deleteComment = (commentId, listId) => (dispatch) => {
  return CommentApiUtil.deleteComment(commentId, listId).then((comment) =>
    dispatch(removeComment(comment))
  );
};