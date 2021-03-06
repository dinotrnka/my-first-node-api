// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApi', (error, client) => {
  if (error) {
    return console.log('Unable to connect to Mongo DB server');
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');

  db.collection('Todos')
    .find({ 
      _id: new ObjectID('5a280eab6ca7a0617eb5cfd7') 
    })
    .toArray().then((docs) => {
      console.log('Todos');
      console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
      console.log('Unable to fetch todos', err);
    });

  db.collection('Todos').find()
    .count()
    .then((count) => {
      console.log(`Todos count: ${count}`);
    }, (err) => {
      console.log('Unable to fetch todos', err);
    });

  db.collection('Users')
    .find({
      name: 'Dino'
    })
    .toArray()
    .then(docs => {
      console.log(JSON.stringify(docs, undefined, 2));
    });
});