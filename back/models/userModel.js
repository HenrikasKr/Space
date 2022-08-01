const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')


// DB schema
const userSchema = new mongoose.Schema({
  username: {
    type: String,
  },
  password: {
    type: String,
  },
});


userSchema.pre('save', async function(next){
    if(!this.isModified('password')){
        next()
    }
    this.password = await bcrypt.hash(this.password, 10)
});

userSchema.methods.comparePassword = async function(yourPassowrd){
    return await bcrypt.compare(yourPassowrd, this.password);
}

userSchema.methods.jwtGenerateToken = function(){
    return jwt.sign({id: this.id}, `${process.env.JWT_SECRET}`, {
        expiresIn: 3600,
    });
};

const User = new mongoose.model("User", userSchema);
module.exports = User;