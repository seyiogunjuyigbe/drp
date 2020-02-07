const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const sermonSchema = new Schema ({
    title: String,
    description: String,
    tags: [{
        type: String,
        trim: true
    }],
    preachedBy: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    preachedAt: {
        type: Schema.Types.ObjectId,
        ref: 'Event'
    },
    preachedOn: Date,
    createdAt: String,
    transcript: String,
    mediaLink: String,
    thumbnail: String,
    Poster: String,
    biblePassages: [{
        book: String,
        chapter: Number,
        verse: Number,
        bibleVersion: String
    }]
})

module.exports = mongoose.model('Sermon', sermonSchema)