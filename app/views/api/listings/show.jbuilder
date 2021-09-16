json.extract! @listing, :id, :title, :body, :price, :offer, :sold, :condition, :rarity, :mana, :author_id 
# @listing.types.each do |type|
#     json.extract! type, :name
# end
json.names do 
    json.array! @listing.types, :name
end

json.colors do 
    json.array! @listing.colors, :color
end

# json.picture_url listing.picture_url || url_for(listing.photo)
json.photoUrl url_for(@listing.photo) if @listing.photo.attached?
