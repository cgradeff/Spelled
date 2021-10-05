json.extract! user, :id, :email, :bio, :username

json.listings do 
    json.array! user.listings, :id, :title, :body, :price, :offer, :sold, :condition, :rarity, :mana, :author_id
end
