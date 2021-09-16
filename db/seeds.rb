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
Color.destroy_all
Type.destroy_all
# ColorsListing.destroy_all
# ListingsType.destroy_all

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

black = Color.create!(
    color: 'Black'
)

white = Color.create!(
    color: 'White'
)

blue = Color.create!(
    color: 'Blue'
)

red = Color.create!(
    color: 'Red'
)

green = Color.create!(
    color: 'Green'
)

colorless = Color.create!(
    color: 'Colorless'
)

creature = Type.create!(
    name: 'Creature'
)

artifact = Type.create!(
    name: 'Artifact'
)

land = Type.create!(
    name: 'Land'
)

enchantment = Type.create!(
    name: 'Enchantment'
)

sorcery = Type.create!(
    name: 'Sorcery'
)

instant = Type.create!(
    name: 'Instant'
)

planeswalker = Type.create!(
    name: 'Planeswalker'
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
    author_id: user1.id
)
file1 = URI.open("https://spelled-seeds.s3.amazonaws.com/archon-of-cruelty.png")
list1.photo.attach(io: file1, filename: "archon-of-cruelty.png")

list1_color = ColorsListing.create!(
    listing_id: list1.id,
    color_id: black.id
)

list1_type = ListingsType.create!(
    listing_id: list1.id,
    type_id: creature.id
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
    author_id: user1.id
)

file2 = URI.open("https://spelled-seeds.s3.amazonaws.com/belbe.png")
list2.photo.attach(io: file2, filename: "belbe.png")

list2_color1 = ColorsListing.create!(
    listing_id: list2.id,
    color_id: black.id
)

list2_color2 = ColorsListing.create!(
    listing_id: list2.id,
    color_id: green.id
)

list2_type = ListingsType.create!(
    listing_id: list2.id,
    type_id: creature.id
)

list3 = Listing.create!(
    title: 'Tuvasa the Sunlit',
    body: 'she lovessss enchantments',
    price: 100,
    offer: 'false',
    sold: 'false',
    condition: 'Like-New',
    rarity: 'Mythic Rare',
    mana: 3,
    author_id: user2.id
)

file3 = URI.open("https://spelled-seeds.s3.amazonaws.com/tuvasa-the-sunlit.png")
list3.photo.attach(io: file3, filename: "tuvasa-the-sunlit.png")

list3_color1 = ColorsListing.create!(
    listing_id: list3.id,
    color_id: green.id
)

list3_color2 = ColorsListing.create!(
    listing_id: list3.id,
    color_id: white.id
)

list3_color3 = ColorsListing.create!(
    listing_id: list3.id,
    color_id: blue.id
)

list3_type = ListingsType.create!(
    listing_id: list3.id,
    type_id: creature.id
)

list4 = Listing.create!(
    title: 'Snow-Covered Plains',
    body: 'have too many of these',
    price: 2,
    offer: 'true',
    sold: 'false',
    condition: 'Like-New',
    rarity: 'Basic Land',
    mana: 0,
    author_id: user2.id
)

file4 = URI.open("https://spelled-seeds.s3.amazonaws.com/snow-covered-plains.png")
list4.photo.attach(io: file4, filename: "snow-covered-plains.png")

list4_color = ColorsListing.create!(
    listing_id: list4.id,
    color_id: white.id
)

list4_type = ListingsType.create!(
    listing_id: list4.id,
    type_id: land.id
)

list5 = Listing.create!(
    title: 'Gideon Blackblade',
    body: 'hes pretty cool',
    price: 10,
    offer: 'true',
    sold: 'false',
    condition: 'Used',
    rarity: 'Mythic Rare',
    mana: 3,
    author_id: user2.id
)

file5 = URI.open("https://spelled-seeds.s3.amazonaws.com/gideon-blackblade.png")
list5.photo.attach(io: file5, filename: "gideon-blackblade.png")

list5_color = ColorsListing.create!(
    listing_id: list5.id,
    color_id: white.id
)

list5_type = ListingsType.create!(
    listing_id: list5.id,
    type_id: planeswalker.id
)

list6 = Listing.create!(
    title: 'Silver Raven',
    body: "don't really like him anymore",
    price: 15,
    offer: 'true',
    sold: 'false',
    condition: 'Used',
    rarity: 'Common',
    mana: 1,
    author_id: demo.id
)

file6 = URI.open("https://spelled-seeds.s3.amazonaws.com/silver-raven.png")
list6.photo.attach(io: file6, filename: "silver-raven.png")

list6_color = ColorsListing.create!(
    listing_id: list6.id,
    color_id: blue.id
)

list6_type1 = ListingsType.create!(
    listing_id: list6.id,
    type_id: artifact.id
)

list6_type2 = ListingsType.create!(
    listing_id: list6.id,
    type_id: creature.id
)

list7 = Listing.create!(
    title: 'Frost Bite',
    body: "I have way too many of these",
    price: 10,
    offer: 'true',
    sold: 'false',
    condition: 'Used',
    rarity: 'Common',
    mana: 1,
    author_id: user3.id
)

file7 = URI.open("https://spelled-seeds.s3.amazonaws.com/frost-bite.png")
list7.photo.attach(io: file7, filename: "frost-bite.png")

list7_color = ColorsListing.create!(
    listing_id: list7.id,
    color_id: red.id
)

list7_type = ListingsType.create!(
    listing_id: list7.id,
    type_id: instant.id
)

list8 = Listing.create!(
    title: 'Rise from the Grave',
    body: "pretty cool card for zombie decks",
    price: 30,
    offer: 'true',
    sold: 'false',
    condition: 'Like-New',
    rarity: 'Uncommon',
    mana: 5,
    author_id: user1.id
)

file8 = URI.open("https://spelled-seeds.s3.amazonaws.com/rise-from-the-grave.png")
list8.photo.attach(io: file8, filename: "rise-from-the-grave.png")

list8_color = ColorsListing.create!(
    listing_id: list8.id,
    color_id: black.id
)

list8_type = ListingsType.create!(
    listing_id: list8.id,
    type_id: sorcery.id
)

list9 = Listing.create!(
    title: 'Capture Sphere',
    body: "nice enchantment",
    price: 20,
    offer: 'true',
    sold: 'false',
    condition: 'Like-New',
    rarity: 'Common',
    mana: 4,
    author_id: demo.id
)

file9 = URI.open("https://spelled-seeds.s3.amazonaws.com/capture-sphere.png")
list9.photo.attach(io: file9, filename: "capture-sphere.png")

list9_color = ColorsListing.create!(
    listing_id: list9.id,
    color_id: blue.id
)

list9_type = ListingsType.create!(
    listing_id: list9.id,
    type_id: enchantment.id
)

list10 = Listing.create!(
    title: 'Crackling Drake',
    body: "hes alright",
    price: 20,
    offer: 'true',
    sold: 'false',
    condition: 'New',
    rarity: 'Uncommon',
    mana: 4,
    author_id: demo.id
)

file10 = URI.open("https://spelled-seeds.s3.amazonaws.com/crackling-drake.png")
list10.photo.attach(io: file10, filename: "crackling-drake.png")

list10_color1 = ColorsListing.create!(
    listing_id: list10.id,
    color_id: blue.id
)

list10_color2 = ColorsListing.create!(
    listing_id: list10.id,
    color_id: red.id
)

list10_type = ListingsType.create!(
    listing_id: list10.id,
    type_id: creature.id
)




