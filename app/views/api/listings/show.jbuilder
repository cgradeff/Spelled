json.extract! @listing, :id, :title, :body, :price, :offer, :sold, :condition, :rarity, :mana
# json.picture_url listing.picture_url || url_for(listing.photo)