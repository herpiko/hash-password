var bcrypt = require ("nan-bcrypt"); 
bcrypt.genSalt(10, function (err, salt) {
  bcrypt.hash(process.argv[2], salt, function (err, hash) {
    console.log(hash);
  })
})
