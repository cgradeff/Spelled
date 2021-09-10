class CreateListings < ActiveRecord::Migration[6.1]
  def change
    create_table :listings do |t|
      t.integer :author_id, null: false
      t.string :title, null: false
      t.string :body, null: false
      t.integer :price, null: false
      t.boolean :offer, null: false
      t.boolean :sold, null: false 
      t.string :condition, null: false
      t.string :color, null: false
      t.string :rarity, null: false
      t.string :types, null: false 
      t.integer :mana, null: false 

      t.timestamps
    end

    add_index :listings, :title
    add_index :listings, :price
    add_index :listings, :sold
    add_index :listings, :condition
    add_index :listings, :color
    add_index :listings, :rarity
    add_index :listings, :types
    add_index :listings, :mana
  end
end
