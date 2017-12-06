var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

var Todo = mongoose.model('Todo', {
  text: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  }, 
  completed: {
    type: Boolean,
    default: false
  },
  completedAt: {
    type: Number,
    default: null
  }
});

// var newTodo = new Todo({
//   text: 'Wash dishes',
//   completed: true,
//   completedAt: 1512593893
// });

// newTodo.save().then((doc) => {
//   console.log('Saved Todo', JSON.stringify(doc, undefined, 2));
// }, (error) => {
//   console.log('Unable to save Todo', error);s
// });

var User = mongoose.model('User', {
  email: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  }
});

var newUser = new User({
  email: 'kuze@gmail.com'
});

newUser.save().then(doc => {
  console.log('Saved user', doc);
}, error => {
  console.log('Unable to save user', error);
});