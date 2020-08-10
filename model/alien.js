const mongoose = require('mongoose');

const alienSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    tech: {
        type: String,
    },
    sub:{
        type: String,
        required: true,
        default: false

    }
});
module.exports = mongoose.model('Alien', alienSchema)