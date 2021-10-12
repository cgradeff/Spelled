@listings.each do |listing|
  json.set! listing.id do
    json.extract! listing, :id, :title, :body, :price, :offer, :sold, :condition, :rarity, :mana, :colors, :types, :author_id
    json.photoUrl url_for(listing.photo) if listing.photo.attached?
  end
end