const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const UserSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    }
});

// adds on a username + password
UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', UserSchema);
