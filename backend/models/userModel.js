const mongoose = require('mongoose')

const Userschema = mongoose.Schema({
    name:{
        type:String,
        required: [true,'Please add a name']
    },
    email:{
        type:String,
        required: [true,'Please add an email'],
        unique:true
    },
    password:{
        type:String,
        required: [true,'Please add a password']
    },
    role:{
        type:String,
        enuum:["user","admin"],
        default:"user"
    }
},
{
    timestamp: true
})

Userschema.pre("save", async function (next) {
   // const salt = await bcrypt.genSalt();
   // this.password = await bcrypt.hash(this.password, salt);
    if (this.email == 'admin123@gmail.com')
    
    {
        this.role = "admin"
    }
    next();
})

module.exports = mongoose.model('User',Userschema)