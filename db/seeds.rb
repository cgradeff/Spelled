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
    password: "ILoveMagic!"
)

color = Color.create!(
    color: 'blue'
)

types = Type.create!(
    name: 'ugh'
)

list1 = Listing.create!(
    title: 'sup',
    body: 'hey',
    price: 2,
    offer: 'false',
    sold: 'false',
    condition: 'bad',
    rarity: 'common',
    mana: 4,
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





