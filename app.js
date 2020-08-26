const mongoose=require('mongoose')
const personType= require('./model/person_model')
require('dotenv').config({path: __dirname + '/.env'})
mongoose.connect(process.env.MONGO_URL,{ useNewUrlParser: true,useUnifiedTopology: true  } ,()=>console.log('connected to db'))
// Créez une personne ayant ce prototype: 
/* let msg = new personType({
  name: 'kevin',
   age:20,
   favoriteFoods: ['pate']
}) */

//Créer et enregistrer un enregistrement d'un modèle:

// msg.save()
//    .then(doc => console.log(doc)
//    )
//    .catch(err => console.error(err)
//    )


/* const array = [
  {name: "Jelly", age:20, favoriteFoods:['coscous']},
  {name: "John", age:18, favoriteFoods:['vegetarien']}
  ];
  
  personType.insertMany(array)
  .then(function (docs) {
  console.log(docs);
  })
  .catch(function (err) {
  console.log(err);
  }); */



  // personType.find({ name: 'kamel', age:18 ,favoriteFoods:['vegetarien']}). then( function( docs) {console.log(docs)})
  // .catch (function(err) {console.log(err);
  // });



  // personType.findOne({ name: 'Jelly' }).then (function ( docs) {console.log(docs)}).catch(function(err) {console.log(err);
  // });
  //personType.findById('5f464328214f9520fc380e12', function (err, personType) {});
  
/*  personType.findOneAndUpdate(
    {
      name: 'Jelly'  // search query
    }, 
    {
      favoriteFoods:['humbourguel']  // field:values to update
    },
    {
      new: true,                       // return updated doc
      runValidators: true              // validate before update
    })
  .then(doc => {
    console.log(doc)
  })
  .catch(err => {
    console.error(err)
  }) */


//  personType .findOneAndRemove({
//     name: 'John'
//   })
//   .then(response => {
//     console.log(response)
//   })
//   .catch(err => {
//     console.error(err)

//   })


//personType.remove('Jelly');



personType.find('kevin')                   // find all users
         .skip(1)                // skip the first 100 items
         .limit(10)                // limit to 10 items
         // sort ascending by firstName
         .select({name: true}) // select firstName only
         .exec()                   // execute the query
         .then(docs => {
            console.log(docs)
          })
         .catch(err => {
            console.error(err)
          });