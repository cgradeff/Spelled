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

user = User.create!(
    email: "Demo@gmail.com",
    password: "ILoveMagic!",
    username: "demo",
    bio: "this is a demo user profile"
)

color = Color.create!(
    color: 'black'
)

types = Type.create!(
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
    title: 'sup1',
    body: 'hey',
    price: 2,
    offer: 'false',
    sold: 'false',
    condition: 'bad',
    rarity: 'common',
    mana: 4,
    author_id: user.id
)





