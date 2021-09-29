json.extract! @comment, :id, :body, :list_id, :author_id
json.extract! @comment.author, :username