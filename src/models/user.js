const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');
const userSchema = new Schema({
    firstName: {
        type: String,
        required: 'Please enter your first name',
        trim: true
    },
    lastName: {
        type: String,
        required: 'Please enter your last name',
        trim: true
    },
    phone: {
        type: String,
        trim: true
    },
    email: {
        type: String,
        required: 'You need to provide a valid email',
        unique: true,
        trim: true
    },
    username: {
        type: String,
        required: 'You need to provide a username',
        unique: true,
        trim: true
    },
    role: {
        type: String,
        enum: ['user', 'admin', 'superAdmin'],
        default: 'user'
    },
    prayerRequests: [{
        type: Schema.Types.ObjectId,
        ref: 'Prayer'

    }],
    assignedPrayers: [{
        type: Schema.Types.ObjectId,
        ref: 'Prayer'
    }],
    anchoredEvents: [{
        type: Schema.Types.ObjectId,
        ref: 'Event'
    }],
    sermons: [{
        type: Schema.Types.ObjectId,
        ref: 'Sermon'
    }],

})
userSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model('User', userSchema);