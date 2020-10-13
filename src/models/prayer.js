const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const prayerSchema = new Schema ({
    requestor: {
        firstName: String,
        lastName: String,
        phone: String,
        email: String,
        location: {
            streetAddress: String,
            city: String,
            province: String,
            country: String,
            longitude: String,
            latitude: String,
            zipCode: String
        },
        requests: [{
            title: String,
            description: String,
            assignees: [{
                type: Schema.Types.ObjectId,
                ref: 'User'
            }],
            testimonies: [{
                type: Schema.Types.ObjectId,
                ref: 'Testimony'
            }],
            isStillOpen: Boolean
        }]
    }
})
module.exports = mongoose.model('Prayer', prayerSchema);