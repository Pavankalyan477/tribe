const mongoose = require("mongoose");



const connect = () => {
    mongoose.connect("mongodb+srv://itribe:itribe_123@cluster0.kxkfi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");
}

module.exports = connect;