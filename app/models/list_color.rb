class ListColor < ApplicationRecord 
    belongs_to :listing, class_name: "Listing"
    belongs_to :color, class_name: "Color"
end