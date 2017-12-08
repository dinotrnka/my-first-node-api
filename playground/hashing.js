const { SHA256 } = require('crypto-js');

// var message = 'I am the best';
// var hash = SHA256(message).toString();
// console.log(hash);

var data = {
  id: 4
};

var token = {
  data,
  hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
}

// Hacking attempt (modifies data but doesn't know secret)
token.data.id = 5; 
token.hash = SHA256(JSON.stringify(token.data)).toString();

// Security check
var resultHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString()

if (resultHash === token.hash) {
  console.log('Data was not changed. All good!');
} else {
  console.log('Data was changed. Do not trust!');
}