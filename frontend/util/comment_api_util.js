export const fetchComments = (listId) =>
  $.ajax({
    method: "GET",
    url: `/api/listings/${listId}/comments`,
  });

export const fetchComment = (commentId, listId) =>
  $.ajax({
    method: "GET",
    url: `/api/listings/${listId}/comments/${commentId}`,
  });

export const createComment = (comment, listId) =>
  $.ajax({
    method: "POST",
    url: `/api/listings/${listId}/comments`,
    data: { comment },
  });
// change to commet maybe
export const deleteComment = (commentId, listId) =>
  $.ajax({
    method: "DELETE",
    url: `/api/listings/${listId}/comments/${commentId}`,
  });
