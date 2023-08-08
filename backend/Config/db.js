const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://app-gm:app-gm@app-gm.0c6hzoe.mongodb.net/app-gm?retryWrites=true&w=majority')
        console.log('DB Connected')
    } catch (err) {
        console.log(err)
    }
}

module.exports = connectDB

