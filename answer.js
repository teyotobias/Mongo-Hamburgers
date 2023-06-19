// create 5 burgers (at least 3 should be beef)
// db.burger.insertMany([
//     ... {
//     ... meat: 'chicken',
//     ... cheese: true,
//     ... toppings: ['bacon', 'ranch', 'pickles']
//     ... }
//     ... ,
//     ... {
//     ... meat: 'beef',
//     ... cheese: 'true',
//     ... toppings: ['lettuce', 'pickles']
//     ... },
//     ... {
//     ... meat: 'pork',
//     ... cheese: 'false',
//     ... toppings: ['bacon']
//     ... },
//     ... {
//     ... meat: 'beef',
//     ... cheese: false,
//     ... toppings: ['onions', 'tomatoes']
//     ... },
//     ... {
//     ... meat: 'beef',
//     ... cheese: 'false',
//     ... toppings: ['bacon', 'lettuce', 'pickles', 'onions']
//     ... }
//     ... ]
//     ... )


// find all the burgers
//db.burger.find()

// show just the meat of each burger
//db.burger.find({}, {meat: 1})

// show just the toppings of each burger
// db.burger.find({}, {toppings: 1})

// show everything but the cheese
//db.burger.find({}, {cheese: 0})

// find all the burgers with beef
//db.burger.find({meat: 'beef'})

// find all the burgers that are not beef
// db.burger.find({meat: {$ne: 'beef'}})

// find the first burger with cheese
//db.burger.findOne({cheese: true})

// find one and update the first burger with cheese to have a property of 'double cheese'
// db.burger.findOneAndUpdate({cheese: true}, {$set: {"doubleCheese": true}});

// find the burger you updated to have double cheese
// db.burger.findOne({"doubleCheese": true})

// find and update all the beef burgers to be 'veggie'
// db.burger.updateMany({"meat": "beef"}, {$set: {"meat": "veggie"}})

// delete one of your veggie burgers
// BEWARE: db.burger.remove({meat: 'veggie'}) DELETES ALL!!!  DO NOT USE!
// db.burger.findOneAndDelete({"meat": "veggie"})

// drop the collection
//Expected Output
//true
// db.burger.drop()
// drop the database
//Expected Output
// {
//   "dropped": "burgers",
//   "ok": 1
// }
// db.dropDatabase()

//
// Bonus
//recreate your burgers database and your burger collection
//copy paste your insert burgers from above to reseed your database
// db.burger.insertMany([
//     ... {
//     ... meat: 'chicken',
//     ... cheese: true,
//     ... toppings: ['bacon', 'ranch', 'pickles']
//     ... },
//     ... {
//     ... meat: 'beef',
//     ... cheese: true,
//     ... toppings: ['lettuce', 'pickles']
//     ... },
//     ... {
//     ... meat: 'pork',
//     ... cheese: 'false',
//     ... toppings: ['bacon']
//     ... }
//     ... ]
//     ... )

// Change the name of the key cheese to 'pumpkinSpice'
// db.burger.updateMany({}, {$rename: {"cheese": "pumpkinSpice"}})

// find all the burgers with ketchup (or another topping you used at least once)
// db.burger.find({"toppings": "ketchup"})

// find all the burgers with pickles (or a topping you used more than once) and remove the pickles
// db.burger.updateMany({"toppings": "pickles"}, {$pull: {"toppings" : "pickles"}})

// add a topping of 'eggs' to all the beef burgers
//note since this db is 'reset' there should be no veggie burgers, all beef burgers should still be intact
// db.burger.updateMany({"meat": "beef"}, {$push: {"toppings": "eggs"}})
//Add a price to each burger, start with $5.00 for each burger 
// db.burger.updateMany({}, {$set: {"price": 5.00}})