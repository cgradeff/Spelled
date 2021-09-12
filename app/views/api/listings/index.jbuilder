@listings.each do |listing|
  json.set! listing.id do
    json.extract! listing, :id, :title, :body, :price, :offer, :sold, :condition, :rarity, :mana
  end
end