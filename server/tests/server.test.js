const expect = require('expect');
const request = require('supertest');

const { app } = require('./../server');
const { Todo } = require('./../models/todo');

const sampleTodos = [{
  text: 'Drink beer'
}, {
  text: 'Eat meat'
}, {
  text: 'Play tennis'
}, {
  text: 'Buy groceries'
}, {
  text: 'Kick ass'
}];

beforeEach((done) => {
  // Wipe Todo collection before each request
  Todo.remove({}).then(() => {
    return Todo.insertMany(sampleTodos);
  }).then(() => done()); 
});

describe('POST /todos', () => {
  it('should create a new todo', (done) => {
    var text = 'Eat a cookie!';

    request(app)
      .post('/todos')
      .send({ text })
      .expect(200)
      .expect((res) => {
        expect(res.body.text).toBe(text);
      })
      .end((err, res) => {
        if (err) {
          return done(err);
        }

        Todo.find({text}).then((todos) => {
          expect(todos.length).toBe(1);
          expect(todos[0].text).toBe(text);
          done();
        }).catch((e) => done(e));
      });
  });

  it ('should not create todo with invalid body data', (done) => {
    request(app)
      .post('/todos')
      .send({})
      .expect(400)
      .end((err, res) => {
        if (err) {
          return done(err);
        }

        Todo.find().then((todos) => {
          expect(todos.length).toBe(5);
          done();
        }).catch((e) => done(e));
      });
  });
});

describe('GET /todos', () => {
  it('should get all todos', (done) => {
    request(app)
      .get('/todos')
      .expect(200)
      .expect((res) => {
        expect(res.body.todos.length).toBe(5);
      })
      .end(done);
  });
});