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

comment3 = Comment.create!(
    author_id: user1.id,
    list_id: list2.id,
    body: 'I have her!'
)

comment4 = Comment.create!(
    author_id: user3.id,
    list_id: list2.id,
    body: 'love a belbe deck'
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
    colors: 'Blue Green White ',
    types: 'Creature ',
    author_id: user2.id
)

file3 = URI.open("https://spelled-seeds.s3.amazonaws.com/tuvasa-the-sunlit.png")
list3.photo.attach(io: file3, filename: "tuvasa-the-sunlit.png")

comment5 = Comment.create!(
    author_id: demo.id,
    list_id: list3.id,
    body: 'shes a mean commander to play against'
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

comment6 = Comment.create!(
    author_id: user1.id,
    list_id: list7.id,
    body: 'love this for a red snow deck'
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

comment7 = Comment.create!(
    author_id: user3.id,
    list_id: list10.id,
    body: "eh i don't really like this card but to each their own"
)

list11 = Listing.create!(
    title: 'Black Lotus',
    body: "super rare!",
    price: 200,
    offer: 'true',
    sold: 'false',
    condition: 'New',
    rarity: 'Mythic Rare',
    mana: 0,
    colors: 'Colorless ',
    types: 'Artifact ',
    author_id: user3.id
)

file11 = URI.open("https://spelled-seeds.s3.amazonaws.com/black-lotus.png")
list11.photo.attach(io: file11, filename: "black-lotus.png")

comment8 = Comment.create!(
    author_id: user2.id,
    list_id: list11.id,
    body: "whoah! is this for real?"
)

comment9 = Comment.create!(
    author_id: user1.id,
    list_id: list11.id,
    body: "i've been looking for one of these for forever"
)

comment10 = Comment.create!(
    author_id: user2.id,
    list_id: list11.id,
    body: "right?! same here"
)

list12 = Listing.create!(
    title: 'Nekusar, the Mindrazer',
    body: "don't know if I really want to sell him, he's in great condition",
    price: 100,
    offer: 'false',
    sold: 'false',
    condition: 'New',
    rarity: 'Mythic Rare',
    mana: 5,
    colors: 'Red Blue Black ',
    types: 'Creature ',
    author_id: user2.id
)

file12 = URI.open("https://spelled-seeds.s3.amazonaws.com/c13-201-nekusar-the-mindrazer.png")
list12.photo.attach(io: file12, filename: "c13-201-nekusar-the-mindrazer.png")


list13 = Listing.create!(
    title: 'Rankle, Master of Pranks',
    body: "prettttyy mean card",
    price: 50,
    offer: 'false',
    sold: 'false',
    condition: 'New',
    rarity: 'Mythic Rare',
    mana: 4,
    colors: 'Black ',
    types: 'Creature ',
    author_id: user1.id
)

file13 = URI.open("https://spelled-seeds.s3.amazonaws.com/eld-101-rankle-master-of-pranks.png")
list13.photo.attach(io: file13, filename: "eld-101-rankle-master-of-pranks.png")

list14 = Listing.create!(
    title: 'Prismatic Vista',
    body: "for sure the best fetch land",
    price: 199,
    offer: 'false',
    sold: 'false',
    condition: 'Used',
    rarity: 'Rare',
    mana: 0,
    colors: 'Black ',
    types: 'Land ',
    author_id: user3.id
)

file14 = URI.open("https://spelled-seeds.s3.amazonaws.com/prsmatic-vista.png")
list14.photo.attach(io: file14, filename: "prsmatic-vista.png")

list15 = Listing.create!(
    title: 'Sol Ring',
    body: "needed card for any commander deck",
    price: 99,
    offer: 'false',
    sold: 'false',
    condition: 'Like New',
    rarity: 'Uncommon',
    mana: 1,
    colors: 'Colorless ',
    types: 'Artifact ',
    author_id: user2.id
)

comment11 = Comment.create!(
    author_id: demo.id,
    list_id: list15.id,
    body: "Solid card"
)

file15 = URI.open("https://spelled-seeds.s3.amazonaws.com/sol-ring.png")
list15.photo.attach(io: file15, filename: "sol-ring.png")

list16 = Listing.create!(
    title: 'Swamp',
    body: "eh have too many of these",
    price: 23,
    offer: 'true',
    sold: 'false',
    condition: 'Like New',
    rarity: 'Basic Land',
    mana: 0,
    colors: 'Black ',
    types: 'Land ',
    author_id: user2.id
)

file16 = URI.open("https://spelled-seeds.s3.amazonaws.com/swamp.png")
list16.photo.attach(io: file16, filename: "swamp.png")

list17 = Listing.create!(
    title: 'Arid Mesa',
    body: "sick fetch land",
    price: 122,
    offer: 'true',
    sold: 'false',
    condition: 'New',
    rarity: 'Rare',
    mana: 0,
    colors: 'Red White ',
    types: 'Land ',
    author_id: user1.id
)

comment12 = Comment.create!(
    author_id: user3.id,
    list_id: list17.id,
    body: "I would very much love to buy this card"
)

file17 = URI.open("https://spelled-seeds.s3.amazonaws.com/arid-mesa.png")
list17.photo.attach(io: file17, filename: "arid-mesa.png")

list18 = Listing.create!(
    title: 'Wheel of Fortune',
    body: "perfect in a wheel deck",
    price: 80,
    offer: 'true',
    sold: 'false',
    condition: 'New',
    rarity: 'Mythic Rare',
    mana: 3,
    colors: 'Red ',
    types: 'Sorcery ',
    author_id: user2.id
)

file18 = URI.open("https://spelled-seeds.s3.amazonaws.com/wheel-of-fortune.png")
list18.photo.attach(io: file18, filename: "wheel-of-fortune.png")

list19 = Listing.create!(
    title: 'Armadillo Cloak',
    body: "nice aura",
    price: 23,
    offer: 'true',
    sold: 'false',
    condition: 'New',
    rarity: 'Uncommon',
    mana: 3,
    colors: 'Green White ',
    types: 'Enchantment ',
    author_id: demo.id
)

file19 = URI.open("https://spelled-seeds.s3.amazonaws.com/cloak.png")
list19.photo.attach(io: file19, filename: "cloak.png")

list20 = Listing.create!(
    title: 'Broodmate Dragon',
    body: "pretty sweet don't know if I want to sell",
    price: 40,
    offer: 'true',
    sold: 'false',
    condition: 'New',
    rarity: 'Rare',
    mana: 6,
    colors: 'Red Green Black ',
    types: 'Creature ',
    author_id: user2.id
)

file20 = URI.open("https://spelled-seeds.s3.amazonaws.com/mm3-153-broodmate-dragon.png")
list20.photo.attach(io: file20, filename: "mm3-153-broodmate-dragon.png")

list21 = Listing.create!(
    title: 'Drana, Kalastria Bloodchief',
    body: "my all time favorite card for sure",
    price: 999,
    offer: 'true',
    sold: 'false',
    condition: 'New',
    rarity: 'Rare',
    mana: 5,
    colors: 'Black ',
    types: 'Creature ',
    author_id: user2.id
)

file21 = URI.open("https://spelled-seeds.s3.amazonaws.com/drana.png")
list21.photo.attach(io: file21, filename: "drana.png")

comment13 = Comment.create!(
    author_id: user1.id,
    list_id: list21.id,
    body: "*heart eyes emoji*"
)
