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

json.comments do 
    json.array! @listing.comments, :body
end

# json.types do
#     @listing.types.each do |type|
#         json.set! type.id do
#             json.extract! type, :id, :name
#         end
#     end
# end

# json.list_types do
#     @listing.list_types.each do |list_type|
#         json.set! list_type.id do
#             json.extract! list_type, :id, :listing_id, :type_id
#         end
#     end
# end

# json.picture_url listing.picture_url || url_for(listing.photo)
json.photoUrl url_for(@listing.photo) if @listing.photo.attached?
