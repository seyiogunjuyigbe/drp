const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const departmentSchema = new Schema ({
            title: String,
            descriptiion: String,
            members: [{
                type: Schema.Types.ObjectId,
                ref: 'Member'
            }],
            dateCreated: Date,
            headOfDepartment: {
                type: Schema.Types.ObjectId,
                ref: 'Member'
            }
   
})
module.exports = mongoose.model('Department', departmentSchema);