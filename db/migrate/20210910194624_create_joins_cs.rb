class CreateJoinsCs < ActiveRecord::Migration[6.1]
  def change
    create_table :joins_cs do |t|
      t.references :listings, null: false, foreign_key: true
      t.references :colors, null: false, foreign_key: true

      t.timestamps
    end
  end
end
