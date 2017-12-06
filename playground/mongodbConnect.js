// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApi', (error, client) => {
  if (error) {
    return console.log('Unable to connect to Mongo DB server');
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');

  db.collection('Todos').insertOne({
    text: 'Clean up living room',
    completed: false
  }, (error, result) => {
    if (error) {
      return console.log('Unable to insert todo', error);
    }

    console.log(JSON.stringify(result.ops, undefined, 2));
  });

  db.collection('Users').insertOne({
    name: 'Kiryu',
    age: 37,
    location: 'Tokyo'
  }, (error, result) => {
    if (error) {
      return console.log('Unable to insert user', error);
    }

    console.log(result.ops[0]._id.getTimestamp());
  });
});