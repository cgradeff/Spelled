@comments.each do |comment|
      json.set! comment.id do 
            json.extract! comment, :id, :body, :list_id, :author_id
            json.extract! comment.author, :username
      end
end