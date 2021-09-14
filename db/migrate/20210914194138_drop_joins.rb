class DropJoins < ActiveRecord::Migration[6.1]
  def change
    drop_table :joins
    drop_table :joins_cs
  end
end
