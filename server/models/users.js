const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required:true,
    },
    password:{
        type: String,
        required:true,
    },
})

const users = mongoose.model("user_accounts",userSchema)

module.exports = users
