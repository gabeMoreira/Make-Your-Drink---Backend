import mongoose from 'mongoose'

const User = mongoose.Model({
    created_at: {type: Date, default: Date.now},
    updated_at: {type: Date, default: Date.now},
    deleted_at: {type: Date, default: null},
    name: String,
    email: String,
    password: String
})

module.exports = User