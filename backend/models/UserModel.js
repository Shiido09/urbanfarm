const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    address: {
        type: String,
        required: true
    },
    phone_number: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['user', 'admin','farmer'],
        default: 'user'
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    defaultWallet: {
        type: Number,
        default: 0
    },
    gender:{
        type: String,
        enum: ['male', 'female', 'prefer not to say'],
        required: true
    },
    profilePicture: {
        type: String,
        required: false,
    },
    ewallets: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'EWallet',
        }
      ],

});