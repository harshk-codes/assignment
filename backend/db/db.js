const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://admin:S0mura1i@100xdevscluster.j0aea.mongodb.net/Intern");

const UserSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    address: {type: String, required: true},
    password: {type: String, required: true},
    bio: {type: String},
    profileUrl: {type: String}
});

const User = mongoose.model('User', UserSchema);
module.exports = User;