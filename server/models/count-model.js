const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Count = new Schema(
    {
        IpInfo: { type: String, required: true },
    },
    { timestamps: true },
)

module.exports = mongoose.model('counts', Count)