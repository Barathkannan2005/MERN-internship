const mdb = require('mongoos')
const signupSchema = mdb.Schema({
    firstName:String,
    lastName:String,
    username:String,
    email:String,
    password:String
});
const signup_Schema = mdb.model("signup",signupSchema)
exports.module = signup_Schema