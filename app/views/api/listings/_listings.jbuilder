json.extract! listing, :id, :title, :body, :price, :offer, :sold, :condition, :color_ids, :rarity, :type_ids, :mana
json.picture_url listing.picture_url || url_for(listing.photo)