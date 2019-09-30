const mongoose = require('mongoose')

mongoose
    //    .connect('mongodb://127.0.0.1:27017/testdb', { useNewUrlParser: true })
    .connect('mongodb+srv://noorama:12345Wq@mongodb-y57t7.gcp.mongodb.net/testdb?retryWrites=true&w=majority', { useNewUrlParser: true })
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection

module.exports = db