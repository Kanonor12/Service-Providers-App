import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema(
    {
     firstName: {
        tye: String,
     },
    lasttName:{
         type: String,
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    password:{
         type: String,
        required: true,
    },
    confirmPassword:{
         type: String,
        required: true,
    },  
    },
    {timestamps: true,} 
)

const User = mongoose.model("User", UserSchema)
export default User