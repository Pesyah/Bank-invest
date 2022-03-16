const {Schema, model} = require("mongoose")


const User = new Schema({
    email: {type: String, required: true, unique: true},
    password: {type: String},
    username: {type: String},
    money: {type: Number, default: 0}
})

module.exports = model('User', User)
