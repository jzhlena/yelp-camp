const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const UserSchema = new Schema({
    email: {
        type: String,
        required: true
    }
});

// adds on a username + password
UserSchema.plugin(passport-local-mongoose);

module.exports = mongoose.model('User', UserSchema);
