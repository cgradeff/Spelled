class Type < ApplicationRecord 
    has_many :list_types
    has_many :listings,
        through: :list_types 
end