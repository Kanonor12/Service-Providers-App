import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema(
    {
     firstName: {
        type: String,
     },
    lastName:{
         type: String,
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    image: {
        type: String,
    },
    district: {
        type: String,
    },
    town: {
        type: String,
    },
    password:{
         type: String,
        required: true,
    },
    isAdmin: {
        type: String,
        default: false,
    },
    isServiceProvider: {
        type: String,
        default: false,
    },
    },
    {timestamps: true,} 
)

export default mongoose.model("User", UserSchema)