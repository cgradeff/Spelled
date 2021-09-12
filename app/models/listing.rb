class Listing < ApplicationRecord
  validates :title, :body, :price, :offer, :sold, :condition, :rarity, :mana, presence: true
  # validates :offer, :sold, presence: true
  # inclusion: { in: [true, false] }

  belongs_to :author,
    class_name: :User
  
  # for types
  has_many :joins
  has_many :types,
    through: :joins 

  # for colors
  has_many :joins_c
  has_many :colors,
    through: :joins_c
    
# Active Storage Association
  has_one_attached :photo

end