# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# require 'open-uri'

User.destroy_all
Listing.destroy_all
Color.destroy_all
Type.destroy_all
# ColorsListing.destroy_all
# ListingsType.destroy_all

user = User.create!(
    email: "Demo@gmail.com",
    password: "ILoveMagic!",
    username: "demo",
    bio: "this is a demo user profile"
)

user1 = User.create!(
    email: "moominismean@gmail.com",
    password: "Iammean123",
    username: "mooshi",
    bio: "Magic lover, fav decks are green/black"
)

user2 = User.create!(
    email: "landfalcon@gmail.com",
    password: "Iamthecoolest",
    username: "thea",
    bio: "I have the coolest cards"
)

color = Color.create!(
    color: 'black'
)

type = Type.create!(
    name: 'creature'
)

list1 = Listing.create!(
    title: 'Archon of Cruelty',
    body: 'one of my favorite cards in a belbe deck, also has an old boarder',
    price: 50,
    offer: 'true',
    sold: 'false',
    condition: 'used',
    rarity: 'mythic rare',
    mana: 8,
    author_id: user.id
)

list2 = Listing.create!(
    title: 'Belbe, Corrupted Observer',
    body: 'super sick commander',
    price: 5,
    offer: 'true',
    sold: 'false',
    condition: 'new',
    rarity: 'rare',
    mana: 2,
    author_id: user.id
)

list3 = Listing.create!(
    title: 'Tuvasa the Sunlit',
    body: 'she lovessss enchantments',
    price: 100,
    offer: 'false',
    sold: 'false',
    condition: 'new',
    rarity: 'mythic rare',
    mana: 3,
    author_id: user2.id
)

list_color = ColorsListing.create!(
    listing_id: list1.id,
    color_id: color.id
)

list_type = ListingsType.create!(
    listing_id: list1.id,
    type_id: type.id
)



