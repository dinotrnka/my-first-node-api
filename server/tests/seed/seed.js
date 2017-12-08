const { ObjectID } = require('mongodb');
const { Todo } = require('./../../models/todo');

const sampleTodos = [{
  _id: new ObjectID(),
  text: 'Drink beer'
}, {
  _id: new ObjectID(),
  text: 'Eat meat',
  completed: true,
  completedAt: 1512674270207
}];

const populateTodos = (done) => {
  // Seed Todo collection with sampleTodos before each test
  Todo.remove({}).then(() => {
    return Todo.insertMany(sampleTodos);
  }).then(() => done()); 
};

module.exports = { sampleTodos, populateTodos };