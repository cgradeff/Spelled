class Color < ApplicationRecord 
    has_many :list_colors 
    has_many :listings,
        through: :list_colors
end