class Listing < ApplicationRecord
  validates :title, :body, :price, :offer, :sold, :condition, :rarity, :mana, :author_id, presence: true
  # validates :offer, :sold, presence: true
  # inclusion: { in: [true, false] }

  belongs_to :author,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: :User
  
  # for types
  has_many :list_types,
    primary_key: :id,
    foreign_key: :listing_id,
    class_name: :ListingsType

  has_many :types,
    through: :list_types 
  
  # for comments
  has_many :comments,
    primary_key: :id,
    foreign_key: :list_id,
    class_name: :Comment

  # for colors 
  has_many :list_colors, 
    primary_key: :id,
    foreign_key: :listing_id,
    class_name: :ColorsListing

  has_many :colors,
    through: :list_colors
    
# Active Storage Association
  has_one_attached :photo

end