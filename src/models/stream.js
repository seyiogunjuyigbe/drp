const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const streamSchema = new Schema({
    title: String,
    startedAt: Date,
    endedAt: Date,
    url: String,
    isLive: Boolean
})
module.exports = mongoose.model("Stream", streamSchema)