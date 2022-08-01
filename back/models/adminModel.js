const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')


// DB schema
const adminSchema = new mongoose.Schema({
  username: {
    type: String,
  },
  password: {
    type: String,
  },
});


adminSchema.pre('save', async function(next){
    if(!this.isModified('password')){
        next()
    }
    this.password = await bcrypt.hash(this.password, 10)
});

adminSchema.methods.comparePassword = async function(yourPassowrd){
    return await bcrypt.compare(yourPassowrd, this.password);
}

adminSchema.methods.jwtGenerateToken = function(){
    return jwt.sign({id: this.id}, `${process.env.JWT_SECRET}`, {
        expiresIn: 3600,
    });
};

const Admin = new mongoose.model("Admin", adminSchema);
module.exports = Admin;