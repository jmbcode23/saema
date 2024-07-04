const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    name: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    }
}, { timestamps: true })

module.exports = mongoose.model('workout', workoutSchema) //the name of the model is workout. It will be automatically plurialized to represent a collection
