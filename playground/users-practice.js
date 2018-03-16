//connect to the mongodb
//create a users collection
//connect to todo app
//explore all operations
  //users: should have a String name, a string context, an age which is a number
  //String grade-level
  const {MongoClient, ObjectId} = require('mongodb');

  const url = 'mongodb://localhost:27017';
  const dbName = `TodoApp`;
  MongoClient.connect(url,(err,client)=>{
    if(err){
      console.log(err);
      return err;
    }
    const db = client.db(dbName);

    // db.collection(`Users`).insertMany([
    //   {
    //     name:"Jeremy",
    //     quote:"Aqui todos estamos bajo el mismo sol",
    //     age:16,
    //     grade_level:"Sophmore"
    //   },
    //   {
    //     name:"Jim",
    //     quote:"bla bla bla",
    //     age:17,
    //     grade_level:"Junior"
    //   },
    //   {
    //     name:"David",
    //     quote:"No one can eat two apples with an empty stomach",
    //     age:17,
    //     grade_level:"Junior"
    //   },
    //   {
    //   name:"Hunter",
    //   quote:"APCS is pretty easy",
    //   age:18,
    //   grade_level:"Senior"
    // },
    // {name:"Nic",
      // quote:"I'm the coolest person in the world",
      // age:16,
      // grade_level:"Junior"
  // }
    // {
    //   name:"Jack",
    //   quote:"Play Dota",
    //   age:17,
    //   grade_level:"Junior"
    // }
    // ]) .then(response=>{
    //    console.log(JSON.stringify(response.ops,undefined,2));
    //    // console.log(response);
    //  })
    //  .catch(err=>{
    //    console.log(`unable to write to Mongodb`,err);
    //  })
     db.collection(`Users`).find({
       _id: new ObjectId("5aa98abbe379630798ac017c")
     }).toArray()

     .then(response=>{
         console.log(JSON.stringify(response,undefined,2));
     })
     .catch(err=>{
       console.log(`unable to fetch from mongodb`);
     })
     db.collection(`Users`).find({
       quote:"bla bla bla"
     }).toArray()

     .then(response=>{
         console.log(JSON.stringify(response,undefined,2));
     })
     .catch(err=>{
       console.log(`unable to fetch from mongodb`);
     })
     db.collection(`Users`).updateOne({
       age:18
     },

     {$set:{quote:"APCS is pretty hard"}
   },

   )
   .then(response=>
     {console.log(JSON.stringify(response,undefined,2));
     })
     .catch(err=>{
       console.log(`hi`);
     })

     db.collection(`Todos`).findOneAndDelete({
       name("nic")
     }).then(response=>{
       console.log(JSON.stringify(response,undefined,2));
     }).catch(err=>{
       console.log(`unable to delete document`);
     })

    client.close();
  })
