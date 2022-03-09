const mongo = require("mongoose");
const bcrypt = require('bcrypt');
const saltRounds = 10;

mongo.set('useCreateIndex', true);

const userScheme = new mongo.Schema({
    nombre: {type:String,},
    ciudad: {type:String},
    edad: {type:Number},
    sexo: {type:String},
    peso: {type:Number},
    altura:{type:Number},
    tel:{type:Number},
    email:{type:String},
    direccion:{type:String},
    cedula: {type:Number, unique: true},
    password:{type:String},
    type:{type:String}
});

userScheme.pre('save', function(next) {
    // Check if document is new or a new password has been set
    if (this.isNew || this.isModified('password')) {
      // Saving reference to this because of changing scopes
      const document = this;
      bcrypt.hash(document.password, saltRounds,
        function(err, hashedPassword) {
        if (err) {
          next(err);
        }
        else {
          document.password = hashedPassword;
          next();
        }
      });
    } else {
      next();
    }
  });

userScheme.methods.isCorrectPassword = function(password, callback){
    bcrypt.compare(password, this.password, function(err, same) {
      if (err) {
        callback(err);
      } else {
        callback(err, same);
      }
    });
  }

module.exports = mongo.model("User",userScheme);