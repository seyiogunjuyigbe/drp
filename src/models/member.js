const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const memberSchema = new Schema ({
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
        departments: [{
            type: Schema.Types.ObjectId,
            ref: 'Department'
        }],
        dateOfBirth: Date,
        dateJoinedChurch: Date,
        isConvert: Boolean,
        churchRole: String,
        isMarried: Boolean,
        spouse:{
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
        },
        spouseIsMember: Boolean,
        hasChildren: Boolean,
        children:[{
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
        }],
        prayerRequests: [{
                type: Schema.Types.ObjectId,
                ref: 'Prayer'
           
        }],
       testimonies:  [{
            type: Schema.Types.ObjectId,
            ref: 'Testimony'
       
    }],  
   
})
module.exports = mongoose.model('Member', memberSchema);