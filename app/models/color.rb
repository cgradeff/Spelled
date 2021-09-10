class Color < ApplicationRecord 
    has_many :joins_c
    has_many :listings,
        through: :joins_c 
end