var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    email: {
        type:String
        // validate:{
        //    isEmail: true, 
        // },
        // unique: {
        //     args: true,
        //     msg: 'Email address already in use!'
        // }
    },
    password: {
        type:String
        // allowNull: false,
        // validate: {
        //     len: [6, 20]
        // }
    },
    token: {
        type:String,
        allowNull: false
    }
});


var User = mongoose.model('User', UserSchema);
module.exports = User;
