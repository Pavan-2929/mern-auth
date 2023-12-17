import mongoose from "mongoose";

const userSchmea = mongoose.Schema({
    name:String,
    email:{
        type:String,
        unique: true
    },
    password: String,
    repassword: String
})

const User = mongoose.model("User", userSchmea)

export default User