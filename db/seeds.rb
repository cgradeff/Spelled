# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# all images sourced from https://scryfall.com/

require 'open-uri'

User.destroy_all
Listing.destroy_all
Comment.destroy_all

demo = User.create!(
    email: "Demo@gmail.com",
    password: "ILoveMagic!",
    username: "demoUser",
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

user3 = User.create!(
    email: "fugi@gmail.com",
    password: "handsomeboy",
    username: "fugi",
    bio: "I play to win"
)


list1 = Listing.create!(
    title: 'Archon of Cruelty',
    body: 'one of my favorite cards in a belbe deck, also has an old boarder',
    price: 50,
    offer: 'true',
    sold: 'false',
    condition: 'Used',
    rarity: 'Mythic Rare',
    mana: 8,
    colors: 'Black ',
    types: 'Creature ',
    author_id: user1.id
)
file1 = URI.open("https://spelled-seeds.s3.amazonaws.com/archon-of-cruelty.png")
list1.photo.attach(io: file1, filename: "archon-of-cruelty.png")



comment1 = Comment.create!(
    author_id: user2.id,
    list_id: list1.id,
    body: 'love this card!!'
)

comment2 = Comment.create!(
    author_id: user3.id,
    list_id: list1.id,
    body: 'sickkkkkk'
)

list2 = Listing.create!(
    title: 'Belbe, Corrupted Observer',
    body: 'super sick commander',
    price: 5,
    offer: 'true',
    sold: 'false',
    condition: 'New',
    rarity: 'Rare',
    mana: 2,
    colors: 'Green Black ',
    types: 'Creature ',
    author_id: user1.id
)

file2 = URI.open("https://spelled-seeds.s3.amazonaws.com/belbe.png")
list2.photo.attach(io: file2, filename: "belbe.png")



list3 = Listing.create!(
    title: 'Tuvasa the Sunlit',
    body: 'she lovessss enchantments',
    price: 100,
    offer: 'false',
    sold: 'false',
    condition: 'Like-New',
    rarity: 'Mythic Rare',
    mana: 3,
    colors: 'Blue Green White ',
    types: 'Creature ',
    author_id: user2.id
)

file3 = URI.open("https://spelled-seeds.s3.amazonaws.com/tuvasa-the-sunlit.png")
list3.photo.attach(io: file3, filename: "tuvasa-the-sunlit.png")



list4 = Listing.create!(
    title: 'Snow-Covered Plains',
    body: 'have too many of these',
    price: 2,
    offer: 'true',
    sold: 'false',
    condition: 'Like-New',
    rarity: 'Basic Land',
    mana: 0,
    colors: 'White ',
    types: 'Land ',
    author_id: user2.id
)

file4 = URI.open("https://spelled-seeds.s3.amazonaws.com/snow-covered-plains.png")
list4.photo.attach(io: file4, filename: "snow-covered-plains.png")


list5 = Listing.create!(
    title: 'Gideon Blackblade',
    body: 'hes pretty cool',
    price: 10,
    offer: 'true',
    sold: 'false',
    condition: 'Used',
    rarity: 'Mythic Rare',
    mana: 3,
    colors: 'White ',
    types: 'Planeswalker ',
    author_id: user2.id
)

file5 = URI.open("https://spelled-seeds.s3.amazonaws.com/gideon-blackblade.png")
list5.photo.attach(io: file5, filename: "gideon-blackblade.png")



list6 = Listing.create!(
    title: 'Silver Raven',
    body: "don't really like him anymore",
    price: 15,
    offer: 'true',
    sold: 'false',
    condition: 'Used',
    rarity: 'Common',
    mana: 1,
    colors: 'Blue ',
    types: 'Artifact Creature ',
    author_id: demo.id
)

file6 = URI.open("https://spelled-seeds.s3.amazonaws.com/silver-raven.png")
list6.photo.attach(io: file6, filename: "silver-raven.png")


list7 = Listing.create!(
    title: 'Frost Bite',
    body: "I have way too many of these",
    price: 10,
    offer: 'true',
    sold: 'false',
    condition: 'Used',
    rarity: 'Common',
    mana: 1,
    colors: 'Red ',
    types: 'Instant ',
    author_id: user3.id
)

file7 = URI.open("https://spelled-seeds.s3.amazonaws.com/frost-bite.png")
list7.photo.attach(io: file7, filename: "frost-bite.png")



list8 = Listing.create!(
    title: 'Rise from the Grave',
    body: "pretty cool card for zombie decks",
    price: 30,
    offer: 'true',
    sold: 'false',
    condition: 'Like-New',
    rarity: 'Uncommon',
    mana: 5,
    colors: 'Black ',
    types: 'Sorcery ',
    author_id: user1.id
)

file8 = URI.open("https://spelled-seeds.s3.amazonaws.com/rise-from-the-grave.png")
list8.photo.attach(io: file8, filename: "rise-from-the-grave.png")


list9 = Listing.create!(
    title: 'Capture Sphere',
    body: "nice enchantment",
    price: 20,
    offer: 'true',
    sold: 'false',
    condition: 'Like-New',
    rarity: 'Common',
    mana: 4,
    colors: 'Blue ',
    types: 'Enchantment ',
    author_id: demo.id
)

file9 = URI.open("https://spelled-seeds.s3.amazonaws.com/capture-sphere.png")
list9.photo.attach(io: file9, filename: "capture-sphere.png")


list10 = Listing.create!(
    title: 'Crackling Drake',
    body: "hes alright",
    price: 20,
    offer: 'true',
    sold: 'false',
    condition: 'New',
    rarity: 'Uncommon',
    mana: 4,
    colors: 'Red Blue ',
    types: 'Creature ',
    author_id: demo.id
)

file10 = URI.open("https://spelled-seeds.s3.amazonaws.com/crackling-drake.png")
list10.photo.attach(io: file10, filename: "crackling-drake.png")






