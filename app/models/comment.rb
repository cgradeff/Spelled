class Comment < ApplicationRecord
  validates :list_id, :body, :author_id, presence: true

  belongs_to :author,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: :User

  belongs_to :listing,
    primary_key: :id,
    foreign_key: :list_id,
    class_name: :Listing
end