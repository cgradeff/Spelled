class CreateJoinTableListType < ActiveRecord::Migration[6.1]
  def change
    create_join_table :listings, :types do |t|
      # t.index [:listing_id, :type_id]
      # t.index [:type_id, :listing_id]
    end
  end
end
