class CreateJoins < ActiveRecord::Migration[6.1]
  def change
    create_table :joins do |t|
      t.references :listings, null: false, foreign_key: true
      t.references :types, null: false, foreign_key: true

      t.timestamps
    end
  end
end
