// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApi', (error, client) => {
  if (error) {
    return console.log('Unable to connect to Mongo DB server');
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');

  db.collection('Todos')
    .deleteMany({ text: 'Eat ice cream'})
    .then((result) => {
      console.log(result);
    });

  db.collection('Todos')
    .deleteOne({text: 'Drive Porshe'})
    .then((result) => {
      console.log(result);
    });

  db.collection('Todos')
    .findOneAndDelete({ 
      _id: new ObjectID('5a282b55d5724a1d3161d7cc') 
    })
    .then((result) => {
      console.log(result);
    });
});