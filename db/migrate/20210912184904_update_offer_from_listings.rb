class UpdateOfferFromListings < ActiveRecord::Migration[6.1]
  def change
    change_column_null :listings, :offer, true
    change_column_null :listings, :sold, true
  end
end
