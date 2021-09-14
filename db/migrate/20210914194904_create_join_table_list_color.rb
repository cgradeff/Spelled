class CreateJoinTableListColor < ActiveRecord::Migration[6.1]
  def change
    create_join_table :listings, :colors do |t|
      # t.index [:listing_id, :color_id]
      # t.index [:color_id, :listing_id]
    end
  end
end
