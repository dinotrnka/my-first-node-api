const { ObjectID } = require('mongodb');
const jwt = require('jsonwebtoken');

const { Todo } = require('./../../models/todo');
const { User } = require('./../../models/user');

const userOneId = new ObjectID();
const userTwoId = new ObjectID();
const users = [{
  _id: userOneId,
  email: 'dinaga@gmail.com',
  password: 'userOnePass',
  tokens: [{
    access: 'auth',
    token: jwt
      .sign({ _id: userOneId, access: 'auth' }, 'mojaslatkatajna')
      .toString()
  }]
}, {
  _id: userTwoId,
  email: 'badguy@gmail.com',
  password: 'userTwoPass',
  tokens: [{
    access: 'auth',
    token: jwt
      .sign({ _id: userTwoId, access: 'auth' }, 'mojaslatkatajna')
      .toString()
  }]
}];

const todos = [{
  _id: new ObjectID(),
  text: 'Drink beer',
  _creator: userOneId
}, {
  _id: new ObjectID(),
  text: 'Eat meat',
  completed: true,
  completedAt: 1512674270207,
  _creator: userTwoId
}];

const populateTodos = (done) => {
  Todo.remove({}).then(() => {
    return Todo.insertMany(todos);
  }).then(() => done()); 
};

const populateUsers = (done) => {
  User.remove({}).then(() => {
    var userOne = new User(users[0]).save();
    var userTwo = new User(users[1]).save();

    return Promise.all([userOne, userTwo]);
  }).then(() => done()); 
};

module.exports = { todos, populateTodos, users, populateUsers };