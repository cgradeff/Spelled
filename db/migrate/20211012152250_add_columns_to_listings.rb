class AddColumnsToListings < ActiveRecord::Migration[6.1]
  def change
    add_column :listings, :colors, :string
    add_column :listings, :types, :string
    add_index :listings, :colors
    add_index :listings, :types
  end
end
