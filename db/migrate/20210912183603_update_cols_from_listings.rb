class UpdateColsFromListings < ActiveRecord::Migration[6.1]
  def change
    remove_column :listings, :offer
    remove_column :listings, :sold
    add_column :listings, :offer, :boolean, :default => false
    add_column :listings, :sold, :boolean, :default => false
  end
end
