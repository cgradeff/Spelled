class Type < ApplicationRecord 
    has_many :joins
    has_many :listings,
        through: :joins 
end