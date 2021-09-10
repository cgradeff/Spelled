class RemoveColsFromListings < ActiveRecord::Migration[6.1]
  def change
    remove_column :listings, :types 
    remove_column :listings, :color
  end
end
