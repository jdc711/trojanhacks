const mongoose = require('mongoose');

// TODO: Define the Tip model
//define the tip model
const tipSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    created: {
        type: Date,
        default: Date.now
    }
});


module.exports = mongoose.model('Tip', tipSchema);