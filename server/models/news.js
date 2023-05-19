const mongoose = require('mongoose')
const mongooseSchema = mongoose.Schema


const newsSchema = new mongooseSchema({
    image: { type: String },
    header: { type: String },
    auth: { type: String },
    desc: { type: String },
    date: {
        type: String,
        default: Date.now(),
        trim: true
    },
    category: {
        type: String,
        enum: ['trending', 'national', 'internation', 'crypto', 'tech', 'sports', 'latest'],
        required: true
    }
})

const moviesSchema = new mongooseSchema({
    title: { type: String },
    image: { type: String },
    video: { type: String },
    desc: { type: String },
    yearReleased: { type: String },
    genre: { type: String },
    date: { type: Date, default: Date.now(), trim: true },
    category: {
        type: String,
        enum: ['korean', 'american', 'anime', 'cartoon'],
        required: true
    },
    episodes: { type: String }
})

const News = mongoose.model('News', newsSchema);
const Movies = mongoose.model('Movies', moviesSchema);

module.exports = { News, Movies }