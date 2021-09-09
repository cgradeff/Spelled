class ChangeUsernameInTable < ActiveRecord::Migration[6.1]
  def change
    remove_column :users, :username
    add_column :users, :username, :string
  end
end
