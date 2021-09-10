class CreateColors < ActiveRecord::Migration[6.1]
  def change
    create_table :colors do |t|
      t.string :color
      t.timestamps
    end
    add_index :colors, :color
  end
end
