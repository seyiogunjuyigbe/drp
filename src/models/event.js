const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const eventSchema = new Schema ({
    title: String,
    descrption: String,
    startDate: Date,
    startTime: String,
    endDate: Date,
    endTime: String,
    isFree: Boolean,
    venue: {
        streetAddress: String,
        city: String,
        province: String,
        country: String,
        longitude: String,
        latitude: String,
        zipCode: String
    },
    anchor: String,
    thumbnail: String,
    poster: String
});
module.exports = mongoose.model('Event', eventSchema);
