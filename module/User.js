const UserSchema = new mongoose.UserSchema({
    name:{
        type:strings,
        required:true
    },
    email:{
        type:strings,
        required:true
    },
    password:{
        type:strings,
        required:true
    },
    date:{
        type:type,
        default:Date.now
    },
});
//eport
const User = mongoose.model('User',UserSchema);
module.exports = User;