class ListingsType < ApplicationRecord 
    belongs_to :listing, class_name: "Listing"
    belongs_to :type, class_name: "Type"
end