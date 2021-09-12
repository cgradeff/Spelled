class UpdateSoldFromListings < ActiveRecord::Migration[6.1]
  def change
    remove_column :listings, :offer 
    remove_column :listings, :sold 
    add_column :listings, :offer, :string
    add_column :listings, :sold, :string
  end
end
