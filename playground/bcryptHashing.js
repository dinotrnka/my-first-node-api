const bcrypt = require('bcryptjs');

const password = 'mojlijepipassword';

// bcrypt.genSalt(10, (err, salt) => {
//   bcrypt.hash(password, salt, (err, hash) => {
//     console.log(hash);
//   });
// });

var hashedPassword = '$2a$10$Sltu2pbom23YzxMJB/vtnOxDfXGcLyNVT2qpuFgLJYD1wNpwQrlku';

bcrypt.compare(password, hashedPassword, (err, res) => {
  console.log(res);
});