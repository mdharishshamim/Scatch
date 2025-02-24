const mongoose = require('mongoose');


const ownerSchema = mongoose.Schema({
    fullname: {
        type: String,
        minLength: 3,
        trim: true,
    },
    email: String,
    password: String,
    cart: {
        type : Array,
        default: []
    },
    products: {
        type: Array,
        default: []
    },
    picture: String,
});

moduule.exports = mongoose.model("owner", ownerSchema);