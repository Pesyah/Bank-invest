const {model, Schema} = require("mongoose")

const Lection = new Schema ({
    name: {type: String, required: true},
    lection: {type: String},
    test: {type: String}
})

module.exports = model('Lection', Lection)