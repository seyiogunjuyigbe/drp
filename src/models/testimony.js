const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const testimonySchema = new Schema ({
        testifier: {
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
        linkedRequest: [{
                type: Schema.Types.ObjectId,
                ref: 'Prayer'
            }],
        testimonies: [{
                title: String,
                description: String
            }]
        
    }
})
module.exports = mongoose.model('Testimony', testimonySchema);