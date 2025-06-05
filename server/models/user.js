const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
    },
    socketId: {
        type: String,
        default: null,
    },
    isOnline: {
        type: Boolean,
        default: false,
    },
    avatar: {
        type: String, // optional profile image
        default: '',
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
