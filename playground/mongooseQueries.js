const { ObjectID } = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');

var id = '5a2943bc7ba9c88ad4af184c';

if (!ObjectID.isValid(id)) {
  console.log('ID not valid');
}

// Returns an array
Todo.find({
  _id: id
}).then((todos) => {
  console.log('Todos', todos);
});

// Returns first result
Todo.findOne({
  _id: id
}).then((todo) => {
  console.log('Todo', todo);
});

// Returns first result (can only query by ID)
Todo.findById(id).then((todo) => {
  if (!todo) {
    return console.log('Todo ID not found');
  }
  console.log('Todo by ID', todo);
}).catch((e) => console.log(e));

User.findById('5a286144746af07349bb3bf4').then((user) => {
  if (!user) {
    return console.log('User ID not found');
  }

  console.log('User by ID', user);
}).catch((e) => console.log(e));