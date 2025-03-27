import mongooes from 'mongooes'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const userSchema = new mongooes.Schema({
    fullname:{
        firstname:{
            type:String,
            required: true,
            minlength: [3, "First name must be at least 3charater long"],
        },
        lastname: {
            type:String,
            minlength: [3, "Last name must be at least 3charater long"],
        }
    },
    email: {
        type: String,
        required: true, 
        unique: true,
        minlength: [5, 'Email must be at least 5 charater long']
    },
    password: {
        type: String,
        required: true,
        //min length ki jarurt nhi padegi bec we are using JWT token 
        select: false
    },
    socketId: {
        type: String,
    },
})
userSchema.methods.generateAuthToken = function(){
    const token = jwt.sing({_id: this._id}, process.env.JWT_SECRET);
    return token
}
userSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
}
userSchema.statics.hashPassword = async function (password) {
    return await bcrypt.hash(password, 10);
}



export const User = mongooes.model('User', userSchema);