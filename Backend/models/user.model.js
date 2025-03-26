import mongooes from 'mongooes'

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
    },
    socketId: {
        type: String,
    },
})