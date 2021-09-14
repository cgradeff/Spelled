class Listing < ApplicationRecord
  validates :title, :body, :price, :offer, :sold, :condition, :rarity, :mana, :author_id, presence: true
  # validates :offer, :sold, presence: true
  # inclusion: { in: [true, false] }

  belongs_to :author,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: :User
  
  # for types
  has_many :list_types
  has_many :types,
    through: :list_types 

  # for colors 
  has_many :list_colors 
  has_many :colors,
    through: :list_colors
    
# Active Storage Association
  # has_one_attached :photo

end