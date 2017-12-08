const jwt = require('jsonwebtoken');

var data = {
  id: 10
};

var token = jwt.sign(data, 'mojatajna');
console.log(token);

var decodedResult = jwt.verify(token, 'mojatajna');
console.log('decoded:', decodedResult);